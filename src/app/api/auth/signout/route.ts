// src/app/api/auth/signout/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../[...nextauth]/options';

export async function GET(request: Request) {
  console.log('Signout attempt');
  const baseUrl = process.env.NEXTAUTH_URL;
  const isProduction = process.env.NODE_ENV === 'production';
  
  try {
      const session = await getServerSession(authOptions);
      console.log('Session found:', !!session);
      
      if (session) {
          const response = NextResponse.redirect(baseUrl);
          
          // Set of domains to clear cookies from
          const domains = isProduction ? [
              'doclink.io',
              '.doclink.io',
              'www.doclink.io'
          ] : [undefined];

          // List of cookies to clear
          const cookiesToClear = [
              'next-auth.session-token',
              '__Secure-next-auth.session-token',
              'next-auth.callback-url',
              'next-auth.csrf-token',
              '__Secure-next-auth.callback-url',
              '__Host-next-auth.csrf-token',
              'session_id'
          ];

          // Clear cookies for each domain
          domains.forEach(domain => {
              cookiesToClear.forEach(cookieName => {
                  // Log cookie clearing attempt
                  console.log(`Attempting to clear cookie: ${cookieName} for domain: ${domain}`);
                  
                  response.cookies.set(cookieName, '', {
                      expires: new Date(0),
                      path: '/',
                      secure: isProduction,
                      httpOnly: true,
                      sameSite: 'lax',
                      domain: domain
                  });

                  // For __Host- prefixed cookies, we must clear without domain
                  if (cookieName.startsWith('__Host-')) {
                      response.cookies.set(cookieName, '', {
                          expires: new Date(0),
                          path: '/',
                          secure: isProduction,
                          httpOnly: true,
                          sameSite: 'lax'
                      });
                  }
              });
          });

          // Add debug headers to see what's happening
          response.headers.set('X-Debug-Cookies-Cleared', 'true');
          
          console.log('Reached return successfully');
          return response;
      }

      return NextResponse.redirect(baseUrl);
  } catch (error) {
      console.error('Signout error:', error);
      return NextResponse.redirect(baseUrl);
  }
}