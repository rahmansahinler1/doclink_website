// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow all API routes, dashboard routes, and site routes to pass through
  if (
    pathname.startsWith('/api') || 
    pathname.startsWith('/dashboard') || 
    pathname.startsWith('/site')
  ) {
    return NextResponse.next();
  }
  
  // Redirect root to /site
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/site', request.url));
  }
  
  // Redirect /auth to /site/auth
  if (pathname.startsWith('/auth')) {
    const newPath = pathname.replace('/auth', '/site/auth');
    return NextResponse.redirect(new URL(newPath, request.url));
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