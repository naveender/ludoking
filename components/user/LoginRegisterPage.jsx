"use client";
import { useRouter } from "next/navigation";
import Footer from "../footer/footer";
import LeftSideLayout from "../common/LeftSideLayout";
import RightSideLayout from "../common/RightSideLayout";

const LoginRegisterPage = () => {
  const router = useRouter();

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
          <form className="space-y-6">
            <div className="flex border border-gray-300 rounded overflow-hidden bg-white">
              <span className="bg-gray-200 text-gray-600 px-4 flex items-center select-none">
                +91
              </span>
              <input
                aria-label="Mobile number"
                className="flex-grow px-4 py-2 outline-none text-black"
                placeholder="Mobile number"
                type="tel"
              />
            </div>
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded"
              type="submit"
            >
              CONTINUE
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
