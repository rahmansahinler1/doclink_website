// src/app/api/auth/signout/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/options";

// Mark this route as dynamic
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    console.log("Starting signout process");
    const baseUrl = process.env.NEXTAUTH_URL;
    const isProduction = process.env.NODE_ENV === 'production';
    
    try {
        const session = await getServerSession(authOptions);
        console.log("Current session:", !!session);

        const response = NextResponse.redirect(baseUrl);
        
        const cookieOptions = {
            expires: new Date(0),
            path: '/',
            secure: isProduction,
            httpOnly: true,
            sameSite: 'lax' as const
        };

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
            'sessionId',
            'session_token',
            '_ga_HYM6103YPL',
            '_ga'
        ];

        domains.forEach(domain => {
            cookieNames.forEach(name => {
                console.log(`Clearing cookie: ${name} for domain: ${domain || 'default'}`);
                response.cookies.set(name, '', {
                    ...cookieOptions,
                    domain: domain
                });
            });
        });

        // No caching headers
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');

        return response;
    } catch (error) {
        console.error('Signout error:', error);
        return NextResponse.redirect(baseUrl);
    }
}