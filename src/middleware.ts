// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });
  
  // Public paths that anyone can access
  const publicPaths = [
    '/', 
    '/about', 
    '/blog', 
    '/contact', 
    '/faq', 
    '/pricing', 
    '/privacy', 
    '/terms', 
    '/terms-of-use'
  ];
  const isPublicPath = publicPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  );
  
  // Always allow API routes, auth routes, static assets and public paths
  if (
    pathname.startsWith('/api') || 
    pathname.startsWith('/auth') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js)$/) ||
    isPublicPath
  ) {
    return NextResponse.next();
  }
  
  // Protected routes require authentication
  if (pathname.startsWith('/chat')) {
    // If user is not logged in, redirect to login page
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    // Otherwise, allow access to chat
    return NextResponse.next();
  }
  
  // Default to allowing the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};