// src/app/api/auth/signout/route.ts
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import { NextResponse } from "next/server";
import { authOptions } from "../[...nextauth]/options";

export async function GET(request: Request) {
    const baseUrl = process.env.NEXTAUTH_URL;
    const isProduction = process.env.NODE_ENV === 'production';
    
    try {
        // First, destroy the NextAuth session
        const session = await getServerSession(authOptions);
        if (session) {
            // Explicitly call NextAuth's session destruction
            await signOut({ redirect: false });
        }

        const response = NextResponse.redirect(baseUrl);
        
        // Clear all possible session cookies
        const cookieOptions = {
            expires: new Date(0),
            path: '/',
            secure: isProduction,
            httpOnly: true,
            sameSite: 'lax' as const
        };

        // Clear cookies with various domain combinations
        const domains = [undefined, 'doclink.io', '.doclink.io', 'www.doclink.io'];
        const cookieNames = [
            'next-auth.session-token',
            '__Secure-next-auth.session-token',
            'next-auth.callback-url',
            'next-auth.csrf-token',
            '__Secure-next-auth.callback-url',
            '__Host-next-auth.csrf-token',
            'session_id'
        ];

        domains.forEach(domain => {
            cookieNames.forEach(name => {
                response.cookies.set(name, '', {
                    ...cookieOptions,
                    domain: domain
                });
            });
        });

        // Add cache control headers
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');

        return response;
    } catch (error) {
        console.error('Signout error:', error);
        return NextResponse.redirect(baseUrl);
    }
}