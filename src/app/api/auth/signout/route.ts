// src/app/api/auth/signout/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSession } from '@/utils/auth';
import { removeSession } from '@/app/lib/redis';

// Mark this route as dynamic
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    console.log('Signout process started');

    try {
        // Get session info from URL or try to get from the session
        const url = new URL(request.url);
        const userId = url.searchParams.get('userId');
        const sessionId = url.searchParams.get('sessionId');
        
        console.log('Signout received URL params:', { userId, sessionId });

        // If URL params are missing, try to get from session
        let sessionFromAuth = null;
        if (!userId || !sessionId) {
            console.log('No session info in URL, trying to get from auth session');
            sessionFromAuth = await getSession();
            console.log('Current session during logout:', sessionFromAuth ? 'exists' : 'not found');
        }

        // Clear redis session if exists
        const finalUserId = userId || sessionFromAuth?.user?.id;
        const finalSessionId = sessionId || sessionFromAuth?.sessionId;
        
        if (finalUserId && finalSessionId) {
            try {
                console.log(`Attempting to remove Redis session for user: ${finalUserId}, session: ${finalSessionId}`);
                await removeSession(finalUserId, finalSessionId);
                console.log(`Redis session successfully deleted`);
            } catch (redisError) {
                console.error('Error clearing Redis session:', redisError);
                // Continue with cookie clearing even if Redis fails
            }
        } else {
            console.log('No valid session info found, cannot clear Redis session');
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

        console.log('Signout successful, client will handle redirection');
        
        // Return simple success response - client will handle redirection
        return NextResponse.json({ success: true, message: 'Logout successful' }, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
    } catch (error) {
        console.error('Error during signout process:', error);
        return NextResponse.json({ success: false, message: 'Logout failed' }, { status: 500 });
    }
}