// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Only apply to auth-related routes
    if (request.nextUrl.pathname.startsWith('/api/auth')) {
        const response = NextResponse.next();
        
        // Ensure no caching for auth routes
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');
        
        return response;
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/api/auth/:path*'],
};