import {
  ExceptionCode,
  SuccessCode,
  SuccessCreationCode,
  ValidationCode,
} from "@/constants/apiStatus";
import {
  OTPRequired,
  PhoneNumberRequired,
} from "@/constants/validationMessage";
import { verifyOtp } from "@/controllers/otpController";
import { createUser } from "@/controllers/userController";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const body = await req.json();
  const { phoneNumber, otp } = body;

  if (!phoneNumber) {
    return NextResponse.json(
      { message: PhoneNumberRequired },
      { status: ValidationCode }
    );
  } else if (!otp) {
    return NextResponse.json(
      { message: OTPRequired },
      { status: ValidationCode }
    );
  }

  // Handle the phone number (e.g., save to database, send OTP, etc.)
  // For now, just return it in the response
  const response = await verifyOtp(body);
  if (response.data.status == SuccessCode) {
    const user = await createUser(body);
    if (user.data.status == SuccessCreationCode) {
      const token = jwt.sign(
        { userId: user.data.user.id, phoneNumber: user.data.user.phoneNumber },
        process.env.NEXT_JWT_SECRET,
        { expiresIn: process.env.NEXT_JWT_EXPIRES_IN }
      );
      return NextResponse.json({ status: SuccessCode, token });
    }
  }
  return NextResponse.json({
    status: response.data.status,
    message: response.data.message,
  });
}
