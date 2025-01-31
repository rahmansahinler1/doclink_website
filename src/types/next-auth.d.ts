// src/types/next-auth.d.ts
import type { DefaultSession, DefaultUser } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } & DefaultSession["user"];
    sessionId: string;
    accessToken: string;
    isNewUser: boolean;
  }

  interface User extends DefaultUser {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
    sessionId: string;
    accessToken?: string;
    isNewUser?: boolean;
  }
}