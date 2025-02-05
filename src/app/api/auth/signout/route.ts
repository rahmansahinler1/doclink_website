// src/app/api/auth/signout/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../[...nextauth]/options';

export async function GET(request: Request) {
    console.log('Signout route hit');
    const baseUrl = process.env.NEXTAUTH_URL;
    const isProduction = process.env.NODE_ENV === 'production';
    
    try {
        const session = await getServerSession(authOptions);
        
        if (session) {
            const response = NextResponse.redirect(baseUrl);
            
            // Cookie clearing configuration
            const cookieOptions = {
                expires: new Date(0),
                path: '/',
                secure: isProduction,
                httpOnly: true,
                sameSite: 'lax' as const,
                domain: isProduction ? '.doclink.io' : undefined // Note the leading dot
            };

            // List of cookies to clear
            const cookies = [
                'next-auth.session-token',
                '__Secure-next-auth.session-token',
                'next-auth.callback-url',
                'next-auth.csrf-token',
                '__Secure-next-auth.callback-url',
                '__Host-next-auth.csrf-token',
                'session_id'
            ];

            // Clear cookies for both www subdomain and root domain
            cookies.forEach(cookie => {
                response.cookies.set(cookie, '', cookieOptions);
                
                // Also try clearing without the domain for __Host- prefixed cookies
                if (cookie.startsWith('__Host-')) {
                    response.cookies.set(cookie, '', {
                        ...cookieOptions,
                        domain: undefined
                    });
                }
            });

            return response;
        }

        return NextResponse.redirect(baseUrl);
    } catch (error) {
        console.error('Signout error:', error);
        return NextResponse.redirect(baseUrl);
    }
}