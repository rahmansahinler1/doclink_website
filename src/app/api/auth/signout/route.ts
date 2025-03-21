// src/app/api/auth/signout/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSession } from '@/utils/auth';
import { getRedisClient, removeSession } from '@/app/lib/redis';

// Mark this route as dynamic
export const dynamic = 'force-dynamic';

export async function GET() {
    console.log('Signout process started');

    try {
        // Get current session to extract session ID
        const session = await getSession();
        console.log('Current session during logout:', session ? 'exists' : 'not found');

        // Clear redis session if exists
        if (session?.user?.id && session?.sessionId) {
            try {
                console.log(`Attempting to remove Redis session for user: ${session.user.id}, session: ${session.sessionId}`);
                await removeSession(session.user.id, session.sessionId);
                console.log(`Redis session successfully deleted`);
            } catch (redisError) {
                console.error('Error clearing Redis session:', redisError);
                // Continue with cookie clearing even if Redis fails
            }
        }

        // Set cookie options
        const cookieStore = cookies();
        const secure = process.env.NODE_ENV === 'production';
        const cookieOptions = {
            secure,
            expires: new Date(0), // Set expiration to past date
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
        };

        // List of cookies to clear
        const cookiesToClear = [
            'next-auth.session-token',
            'next-auth.csrf-token',
            'next-auth.callback-url',
            '__Secure-next-auth.session-token',
            '__Secure-next-auth.csrf-token',
            '__Secure-next-auth.callback-url',
            'session_id',
        ];

        // Clear all auth-related cookies
        for (const cookieName of cookiesToClear) {
            if (cookieStore.has(cookieName)) {
                cookieStore.delete(cookieName);
                console.log(`Cookie deleted: ${cookieName}`);
            }
        }

        console.log('Signout successful, redirecting to home page');
        
        // Create response with no-cache headers
        const response = NextResponse.redirect(new URL('/', process.env.NEXTAUTH_URL || 'http://localhost:3000'));
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');
        
        return response;
    } catch (error) {
        console.error('Error during signout process:', error);
        // Fallback to simple redirect in case of error
        return NextResponse.redirect(new URL('/', process.env.NEXTAUTH_URL || 'http://localhost:3000'));
    }
}