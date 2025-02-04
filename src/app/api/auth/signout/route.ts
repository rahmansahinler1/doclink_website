// src/app/api/auth/signout/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../[...nextauth]/options';

export async function GET(request: Request) {
    const baseUrl = process.env.NEXTAUTH_URL;
    
    try {
        const session = await getServerSession(authOptions); 
        
        if (session) {
            // Create response with redirect using the proper base URL
            const response = NextResponse.redirect(baseUrl);

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
                    secure: true,
                    httpOnly: true,
                    sameSite: 'lax',
                    domain: process.env.NODE_ENV === 'production' ? 'doclink.io' : undefined
                });
            });

            return response;
        }

        // If no session, redirect to home using proper base URL
        return NextResponse.redirect(baseUrl);

    } catch (error) {
        console.error('Signout error:', error);
        // In case of error, redirect using proper base URL
        return NextResponse.redirect(baseUrl);
    }
}