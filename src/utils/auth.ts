// src/utils/auth.ts
import { getSession as getNextAuthSession } from "next-auth/react";

export const getSession = async () => {
  const session = await getNextAuthSession();
  return session;
};