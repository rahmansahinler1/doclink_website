// src/app/api/auth/signout/route.ts
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../[...nextauth]/options";

export async function GET(request: Request) {
    console.log("Starting signout process");
    const baseUrl = process.env.NEXTAUTH_URL;
    const isProduction = process.env.NODE_ENV === 'production';
    
    try {
        // Get the current session
        const session = await getServerSession(authOptions);
        console.log("Current session:", !!session);

        // Create the response with redirect
        const response = NextResponse.redirect(baseUrl);
        
        // Clear session cookies
        const cookieOptions = {
            expires: new Date(0),
            path: '/',
            secure: isProduction,
            httpOnly: true,
            sameSite: 'lax' as const
        };

        // Clear cookies with various domain combinations
        const domains = isProduction ? 
            [undefined, 'doclink.io', '.doclink.io', 'www.doclink.io'] : 
            [undefined];

        const cookieNames = [
            'next-auth.session-token',
            '__Secure-next-auth.session-token',
            'next-auth.callback-url',
            'next-auth.csrf-token',
            '__Secure-next-auth.callback-url',
            '__Host-next-auth.csrf-token',
            'session_id'
        ];

        // Clear each cookie with each domain combination
        domains.forEach(domain => {
            cookieNames.forEach(name => {
                console.log(`Clearing cookie: ${name} for domain: ${domain || 'default'}`);
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

        console.log("Signout process completed");
        return response;
    } catch (error) {
        console.error('Signout error:', error);
        return NextResponse.redirect(baseUrl);
    }
}