// src/middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Only apply to /chat routes
  if (!request.nextUrl.pathname.startsWith('/chat')) {
    return NextResponse.next();
  }

  console.log("Middleware running for path:", request.nextUrl.pathname);

  // Parse the URL path segments
  const pathSegments = request.nextUrl.pathname.split('/').filter(Boolean);
  
  // Check if this is just /chat (without a session ID)
  // In this case, we let the request pass through - Hero component will handle the redirection
  if (pathSegments.length === 1 && pathSegments[0] === 'chat') {
    console.log("Base chat path detected, passing through");
    return NextResponse.next();
  }

  try {
    // For /chat/{sessionId} routes, we perform authentication check
    const token = await getToken({ req: request });
    console.log("Token retrieved:", token ? "Yes" : "No");
    
    // If no authentication token exists, redirect to landing page
    if (!token || !token.userId) {
      console.log("No token or userId found, redirecting to home");
      return NextResponse.redirect(new URL('/', request.url));
    }
    
    // Allow the request to proceed - the page component will handle all other checks
    return NextResponse.next();
    
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/chat/:path*']
}