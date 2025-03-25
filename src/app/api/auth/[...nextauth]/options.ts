import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { query } from "@/app/lib/db";
import { v4 as uuidv4 } from 'uuid';
import { setSession, removeSession, findExistingSession } from '@/app/lib/redis';

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
    signOut: '/',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "google") {
        return false;
      }

      try {
        const { rows } = await query(
          'SELECT * FROM user_info WHERE google_id = $1',
          [account.providerAccountId]
        );

        const isNewUser = rows.length === 0;

        if (isNewUser) {
          const result = await query(
            `INSERT INTO user_info 
             (user_id, google_id, user_name, user_surname, user_email, user_type, picture_url)
             VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6)
             RETURNING user_id`,
            [
              account.providerAccountId,
              user.name?.split(' ')[0] || '',
              user.name?.split(' ')[1] || '',
              user.email,
              'free',
              user.image
            ]
          );
          user.id = result.rows[0].user_id;
        } else {
          user.id = rows[0].user_id;
        }

        return true;
      } catch (error) {
        console.error('Authentication error:', error);
        return false;
      }
    },

    async jwt({ token, user, account }) {
      if (account && user) {
        try {
          if (!token.sessionId) {
            const existingSessionId = await findExistingSession(user.id);
            
            if (existingSessionId) {
              console.log(`Reusing existing session for user: ${user.id}`);
              token.sessionId = existingSessionId;
            } else {
              const sessionId = uuidv4();
              await setSession(user.id, sessionId);
              token.sessionId = sessionId;
            }
          } else {
            await setSession(user.id, token.sessionId);
          }
          
          token.userId = user.id;
          token.accessToken = account.access_token;
          
          const { rows } = await query(
            'SELECT * FROM user_info WHERE user_id = $1 AND user_created_at > NOW() - INTERVAL \'5 minutes\'',
            [user.id]
          );
          token.isNewUser = rows.length > 0;
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
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return baseUrl;
    },
  },
  
  events: {
    async signIn(message) {
      console.log(`User signed in: ${message.user.email}`);
    },

    async signOut({ token }) {
      try {
        await removeSession(token.userId, token.sessionId);
        console.log(`User signed out: ${token.email}`);
      } catch (error) {
        console.error('Session removal error:', error);
      }
    }
  }
};