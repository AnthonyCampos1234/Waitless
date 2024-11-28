import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /admin)
  const path = request.nextUrl.pathname;

  // If it's the admin path and no session exists, redirect to login
  if (path.startsWith('/admin')) {
    const session = request.cookies.get('session');
    
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If it's the login path and session exists, redirect to admin
  if (path === '/login') {
    const session = request.cookies.get('session');
    
    if (session) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login']
}; 