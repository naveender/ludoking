import { generateOTP } from '@/utils/otp';
import pool from '@/lib/db';

export async function POST(req) {
  const { mobile } = await req.json();

  const otp = generateOTP();

  // Save OTP to DB
  await pool.query(
    'INSERT INTO otps (mobile, otp, created_at) VALUES (?, ?, NOW())',
    [mobile, otp]
  );

  console.log(`OTP for ${mobile}: ${otp}`); // log for dev

  return Response.json({ success: true });
}
