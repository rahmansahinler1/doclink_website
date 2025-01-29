import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { query } from "@/app/lib/db";
import { initializeUserInApp } from "@/app/lib/api";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log('Sign in callback started:', { 
        userEmail: user.email,
        provider: account?.provider,
        providerAccountId: account?.providerAccountId 
      });

      if (account?.provider === "google") {
        try {
          // Check if user exists
          console.log('Checking for existing user with Google ID:', account.providerAccountId);
          const { rows } = await query(
            'SELECT * FROM user_info WHERE google_id = $1',
            [account.providerAccountId]
          );

          console.log('Database query result:', { rowCount: rows.length });

          let userId: string;
          let isNewUser = false;

          if (rows.length === 0) {
            // Create new user
            console.log('Creating new user with data:', {
              email: user.email,
              name: user.name,
              googleId: account.providerAccountId
            });
          
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
            
            console.log('New user created with result:', result.rows[0]);
            userId = result.rows[0].user_id;
            isNewUser = true;
          } else {
            console.log('Existing user found:', rows[0]);
            userId = rows[0].user_id;
          }

          // Notify FastAPI about the user
          try {
            console.log('Notifying FastAPI about user:', { userId, isNewUser });
            await initializeUserInApp(
              userId, 
              account.access_token || '',
              isNewUser
            );
            console.log('FastAPI notification successful');
          } catch (error) {
            console.error('Failed to initialize user in FastAPI:', error);
          }

          return true;
        } catch (error) {
          console.error('Database error during sign in:', error);
          console.error('Full error details:', error);
          return false;
        }
      }
      return true;
    },
    
    async session({ session, token }) {
      console.log('Session callback started:', { tokenSub: token.sub });
      try {
        if (token.sub) {
          const { rows } = await query(
            'SELECT user_id, user_name, user_surname FROM user_info WHERE google_id = $1',
            [token.sub]
          );

          if (rows.length > 0) {
            session.user.id = rows[0].user_id;
            session.user.name = `${rows[0].user_name} ${rows[0].user_surname}`.trim();
            console.log('Session updated with user data:', session.user);
          }
        }
      } catch (error) {
        console.error('Error in session callback:', error);
      }
      return session;
    },

    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      console.log('JWT callback completed:', { tokenSub: token.sub });
      return token;
    }
  },
  
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };