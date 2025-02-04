// src/utils/auth.ts
import { getSession as getNextAuthSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export const getSession = async () => {
  const session = await getNextAuthSession();
  return session;
};

export const handleGoogleSignIn = () => {
  return signIn('google', {
    redirect: false
  });
};