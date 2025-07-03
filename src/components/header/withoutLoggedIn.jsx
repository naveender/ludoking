"use client"
import React from "react";
import { useRouter } from "next/navigation";

const WithOutLoggedInHeader = () => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <img alt="Sample logo with a stylized face wearing gaming goggles and a mask, black hair with red outline" className="w-10 h-10" height="40" src="https://storage.googleapis.com/a1aa/image/b1817815-fe95-426c-0f9f-0415ba5d57db.jpg" width="40" />
            <div className="flex space-x-3">
                <button className="text-green-600 font-semibold border border-green-600 rounded px-4 py-1 text-sm hover:bg-green-50" type="button" onClick={() => router.push("/login-register")}>
                    SIGNUP
                </button>
                <button
                    className="text-blue-600 font-semibold border border-blue-600 rounded px-4 py-1 text-sm hover:bg-blue-50"
                    type="button"
                    onClick={() => router.push("/login-register")}
                >
                    LOGIN
                </button>
            </div>
        </div>
    );
}
export default WithOutLoggedInHeader;