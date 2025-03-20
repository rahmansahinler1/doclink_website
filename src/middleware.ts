// src/middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateSession } from '@/app/lib/redis';

export async function middleware(request: NextRequest) {
  // Only apply to /chat routes
  if (!request.nextUrl.pathname.startsWith('/chat')) {
    return NextResponse.next();
  }

  const token = await getToken({ req: request });
  
  if (!token?.sessionId || !token?.userId) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Validate session in Redis
  try {
    const isValid = await validateSession(token.userId, token.sessionId);
    if (!isValid) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } catch (error) {
    console.error('Session validation error:', error);
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/chat/:path*'
}