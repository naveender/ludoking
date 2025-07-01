import { NextResponse } from 'next/server';

export function middleware(request) {
  const session = request.cookies.get('session_user')?.value;

  const authRequiredPaths = ['/battles', '/profile', '/my-wallet','/add-cash','/games-history','/room','/dashboard'];

  if (authRequiredPaths.some(path => request.nextUrl.pathname.startsWith(path)) && !session) {
    return NextResponse.redirect(new URL('/login-register', request.url));
  }

  return NextResponse.next();
}
