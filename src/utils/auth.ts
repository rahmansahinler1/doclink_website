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

export const handleLogout = async () => {
  try {
    // Get the current session first
    const session = await getSession();
    
    // First call our custom signout API to clear cookies and Redis
    // Pass the sessionId and userId in the URL so the API doesn't need to retrieve the session
    const signoutUrl = session?.user?.id && session?.sessionId 
      ? `/api/auth/signout?userId=${session.user.id}&sessionId=${session.sessionId}`
      : '/api/auth/signout';
      
    console.log("Logout: Calling signout API with session info:", 
      session?.user?.id ? `userId: ${session.user.id}` : "No user ID", 
      session?.sessionId ? `sessionId: ${session.sessionId}` : "No session ID");
    
    const signoutResponse = await fetch(signoutUrl, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store',
      },
      // Required to include credentials (cookies) with the request
      credentials: 'include'
    });

    if (!signoutResponse.ok) {
      console.error('Error calling signout API:', signoutResponse.status);
      return false;
    }

    // We've successfully cleared the session on the server
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    return false;
  }
};