// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth/next";
import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { query } from "@/app/lib/db";
import { v4 as uuidv4 } from 'uuid';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    error: '/auth/error',
    signIn: '/',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "google") {
        return false;
      }

      try {
        // Check if user exists
        const { rows } = await query(
          'SELECT * FROM user_info WHERE google_id = $1',
          [account.providerAccountId]
        );

        let userId: string;
        const isNewUser = rows.length === 0;

        if (isNewUser) {
          // Create new user
          const result = await query(
            `INSERT INTO user_info 
             (user_id, google_id, user_name, user_surname, user_email, picture_url)
             VALUES (gen_random_uuid(), $1, $2, $3, $4, $5)
             RETURNING user_id`,
            [
              account.providerAccountId,
              user.name?.split(' ')[0] || '',
              user.name?.split(' ')[1] || '',
              user.email,
              user.image
            ]
          );
          userId = result.rows[0].user_id;
        } else {
          userId = rows[0].user_id;
        }

        user.id = userId;
        return true;
      } catch (error) {
        console.error('Authentication error:', error);
        return false;
      }
    },

    async jwt({ token, user, account }) {
      if (account && user) {
        try {
          const sessionId = uuidv4();
          token.sessionId = sessionId;
          token.userId = user.id;
          token.isNewUser = !!(await query(
            'SELECT * FROM user_info WHERE user_id = $1 AND user_created_at > NOW() - INTERVAL \'5 minutes\'',
            [user.id]
          )).rows.length;
          token.accessToken = account.access_token;
        } catch (error) {
          console.error('Error in jwt callback:', error);
          throw error;
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.userId as string;
        session.sessionId = token.sessionId;
        session.accessToken = token.accessToken;
        session.isNewUser = token.isNewUser;
      }
      return session;
    }
  },
  
  events: {
    async signIn(message) {
      console.log(`User signed in: ${message.user.email}`);
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };