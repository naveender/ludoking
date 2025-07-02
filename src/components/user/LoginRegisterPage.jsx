"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../footer/footer";
import LeftSideLayout from "../common/LeftSideLayout";
import RightSideLayout from "../common/RightSideLayout";
import { generateOTP, verifyOTP } from "@/services/userServices";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SuccessCode, SuccessCreationCode } from "@/constants/apiStatus";
import MobileInput from "../common/MobileInput";
import Input from "../common/Input";
import useUserStore from "@/store/userStore";

const mobileSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),
});

const otpSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),
  otp: Yup.string()
    .length(6, "OTP must be 6 digits")
    .required("OTP is required"),
});

const LoginRegisterPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleGoBack = () => {
    router.push("/");
  };

  const handleSendOTP = async (values, { setSubmitting, setFieldError }) => {
    setLoading(true);
    try {
      let response = await generateOTP({ phoneNumber: values.mobile });
      if (response.status === SuccessCreationCode) {
        setStep(2);
        // notify.success("OTP Sent", `OTP sent to ${values.mobile}`);
      } else {
        setFieldError("mobile", "Unable to send OTP. Try again.");
      }
    } catch {
      setFieldError("mobile", "Unable to send OTP. Try again.");
    }
    setLoading(false);
    setSubmitting(false);
  };

  const handleVerifyOTP = async (values, { setSubmitting, setFieldError }) => {
    setLoading(true);
    const requestBody = {
      ...values,
      phoneNumber: values.mobile,
    };
    let response = await verifyOTP(requestBody);
    if (response.status == SuccessCode) {
      useUserStore.getState().setUser(response.token);
      router.push("/");
      // notify.success("OTP Verified", OTPVerified);
    }
    setLoading(false);
    setSubmitting(false);
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
          <Formik
            initialValues={{ mobile: "", otp: "" }}
            validationSchema={step === 1 ? mobileSchema : otpSchema}
            onSubmit={step === 1 ? handleSendOTP : handleVerifyOTP}
          >
            {({ isSubmitting, values }) => (
              <Form className="space-y-6">
                <MobileInput
                  name="mobile"
                  disabled={step === 2}
                  placeholder="Mobile Number"
                />
                {step === 2 && (
                  <Input name="otp" placeholder="Enter OTP" autoFocus />
                )}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded"
                  disabled={
                    loading ||
                    isSubmitting ||
                    (step === 1 && !values.mobile) ||
                    (step === 2 && (!values.mobile || !values.otp))
                  }
                >
                  {loading || isSubmitting
                    ? step === 1
                      ? "Sending OTP..."
                      : "Verifying..."
                    : step === 1
                    ? "Send OTP"
                    : "Verify OTP"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <Footer />
      </LeftSideLayout>
      <RightSideLayout></RightSideLayout>
    </>
  );
};

export default LoginRegisterPage;
