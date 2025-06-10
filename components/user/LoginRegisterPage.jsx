import React from "react";
import { useRouter } from "next/navigation";
import Footer from "../footer/footer";

const LoginRegisterPage = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.push('/');
    };

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <div className="w-full md:w-1/3 min-h-screen relative flex flex-col justify-between bg-black">
                <div className="relative z-10 p-6 pt-20">
                    <button
                        aria-label="Go back"
                        className="mb-10 border border-white rounded px-3 py-2 text-white hover:bg-white hover:text-black transition flex items-center"
                        onClick={handleGoBack}
                    >
                        {/* SVG Arrow for better visibility */}
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
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
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded" type="submit">
                            CONTINUE
                        </button>
                    </form>
                </div>
               <Footer/>
            </div>
            <div className="hidden md:flex w-2/3 min-h-screen flex-col justify-center items-center bg-gradient-to-br from-white via-gray-50 to-white px-10 text-center">
                <img
                    alt="Logo of a stylized head with black hair, white gaming glasses with red controls, and a black mask with red outline"
                    className="mb-8 max-w-[200px]"
                    height="200"
                    src="https://storage.googleapis.com/a1aa/image/536700d6-474f-4af1-9987-d696c4009edd.jpg"
                    width="200"
                />
                <h1 className="text-2xl text-black font-normal mb-20">
                    Sample App
                    <strong className="text-black font-extrabold"> WIN REAL CASH! </strong>
                </h1>
                <p className="text-lg text-black max-w-md">
                    For best experience, open
                    <strong> Sample App </strong>
                    on
                    <img
                        alt="Google Chrome browser icon"
                        className="inline-block w-5 h-5 mx-1 align-text-bottom"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Google_Chrome_icon_%282011%29.svg/120px-Google_Chrome_icon_%282011%29.svg.png"
                    />
                    chrome mobile
                </p>
            </div>
        </div>
    );
}

export default LoginRegisterPage;