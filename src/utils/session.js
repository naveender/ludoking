import { cookies } from 'next/headers';

export function setSession(userId) {
  cookies().set('session_user', userId, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  });
}

export function getSession() {
  return cookies().get('session_user')?.value || null;
}

export function clearSession() {
  cookies().delete('session_user');
}
