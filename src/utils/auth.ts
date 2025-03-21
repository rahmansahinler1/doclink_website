// src/utils/auth.ts
import { getSession as getNextAuthSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export const getSession = async () => {
  const session = await getNextAuthSession();
  return session;
};

export const handleGoogleSignIn = () => {
  return signIn('google', {
    redirect: false
  });
};

export const handleLogout = async () => {
  try {
    // First call our custom signout API to clear cookies and Redis
    const signoutResponse = await fetch('/api/auth/signout', {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store',
      },
    });

    if (!signoutResponse.ok) {
      console.error('Error calling signout API:', signoutResponse.status);
    }

    // Use NextAuth's signOut with no redirect from the client side
    // The server-side signout API will handle the redirect
    await signOut({ 
      redirect: false
    });

    // The signout API has already redirected us, but we'll handle any edge cases
    // by manually redirecting to home page
    window.location.href = '/';

    return true;
  } catch (error) {
    console.error('Logout error:', error);
    return false;
  }
};