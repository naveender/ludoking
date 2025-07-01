import pool from '@/lib/db';
import { setSession } from '@/utils/session';

export async function POST(req) {
  const { mobile, otp } = await req.json();

  const [rows] = await pool.query(
    'SELECT * FROM otps WHERE mobile = ? ORDER BY created_at DESC LIMIT 1',
    [mobile]
  );

  if (rows.length === 0 || rows[0].otp !== otp) {
    return Response.json({ success: false, message: 'Invalid OTP' }, { status: 401 });
  }

  let [userRows] = await pool.query('SELECT * FROM users WHERE mobile = ?', [mobile]);

  if (userRows.length === 0) {
    await pool.query('INSERT INTO users (mobile) VALUES (?)', [mobile]);
    [userRows] = await pool.query('SELECT * FROM users WHERE mobile = ?', [mobile]);
  }

  setSession(userRows[0].id);

  return Response.json({ success: true });
}
