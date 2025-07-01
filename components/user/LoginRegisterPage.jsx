"use client";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Footer from "../footer/footer";
import LeftSideLayout from "../common/LeftSideLayout";
import RightSideLayout from "../common/RightSideLayout";

const LoginRegisterPage = () => {
  const router = useRouter();

  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const sendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ mobile }),
    });
    setLoading(false);
    if (res.ok) setStep(2);
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ mobile, otp }),
    });
    setLoading(false);
    if (res.ok) router.push('/battles');
  };

  const handleGoBack = () => {
    router.push("/");
  };


  return (
    <>
      <LeftSideLayout className="bg-black">
        <div className="relative z-10 p-6 pt-20 ">
          <button
            aria-label="Go back"
            className="mb-10 border border-white rounded px-3 py-2 text-white hover:bg-white hover:text-black transition flex items-center"
            onClick={handleGoBack}
          >
            {/* SVG Arrow for better visibility */}
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <h2 className="text-white font-bold text-lg mb-8">
            Sign in or Sign up
          </h2>
          <form className="space-y-6" onSubmit={step === 1 ? sendOTP : verifyOTP}>
            <div className="flex border border-gray-300 rounded overflow-hidden bg-white">
              <span className="bg-gray-200 text-gray-600 px-4 flex items-center select-none">
                +91
              </span>
              <input
                aria-label="Mobile number"
                className="flex-grow px-4 py-2 outline-none text-black"
                placeholder="Mobile number"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                disabled={step === 2}
              />
            </div>
            {step === 2 && (
              <input
                className="border p-2 block w-full"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                autoFocus
              />
            )}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded"
              disabled={loading || (step === 1 && !mobile) || (step === 2 && (!mobile || !otp))}
            >
              {loading
                ? (step === 1 ? 'Sending OTP...' : 'Verifying...')
                : (step === 1 ? 'Send OTP' : 'Verify OTP')}
            </button>
          </form>
        </div>
        <Footer />
      </LeftSideLayout>
      <RightSideLayout></RightSideLayout>
    </>
  );
};

export default LoginRegisterPage;
