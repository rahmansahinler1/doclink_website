// src/app/api/auth/signout/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../[...nextauth]/options';

export async function GET(request: Request) {
    try {
        // Get the current session
        const session = await getServerSession(authOptions);
        
        if (session) {
            // Create response with redirect
            const response = NextResponse.redirect(new URL('/', request.url));

            // Clear all auth-related cookies
            const cookies = [
                'next-auth.session-token',
                '__Secure-next-auth.session-token',
                'next-auth.callback-url',
                'next-auth.csrf-token',
                '__Secure-next-auth.callback-url',
                'session_id'
            ];

            cookies.forEach(cookie => {
                response.cookies.set(cookie, '', {
                    expires: new Date(0),
                    path: '/',
                    secure: process.env.NODE_ENV === 'production',
                    httpOnly: true,
                    sameSite: 'lax'
                });
            });

            return response;
        }

        // If no session, just redirect to home
        return NextResponse.redirect(new URL('/', request.url));

    } catch (error) {
        console.error('Signout error:', error);
        // In case of error, redirect to home
        return NextResponse.redirect(new URL('/', request.url));
    }
}