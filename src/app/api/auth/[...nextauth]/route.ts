import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const { rows } = await pool.query(
            'SELECT * FROM user_info WHERE google_id = $1',
            [account.providerAccountId]
          );

          if (rows.length === 0) {
            // Create new user
            await pool.query(
              `INSERT INTO user_info 
               (user_id, google_id, user_name, user_surname, user_email, picture_url)
               VALUES (gen_random_uuid(), $1, $2, $3, $4, $5)`,
              [
                account.providerAccountId,
                user.name?.split(' ')[0] || '',
                user.name?.split(' ')[1] || '',
                user.email,
                user.image
              ]
            );
          }
        } catch (error) {
          console.error('Database error:', error);
          return false;
        }
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };