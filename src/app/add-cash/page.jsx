"use client";
import React, { useState } from "react";
import WithLoggedInHeader from "../../../components/header/withLoggedIn";

const AddCashPage = () => {
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const handleAmountChange = (e) => {
        const value = e.target.value;
        // Allow empty string for controlled input
        if (value === "") {
            setAmount("");
            setError("");
            return;
        }
        const num = Number(value);
        if (num < 10) {
            setAmount(value);
            setError("Minimum amount is 10");
        } else if (num > 20000) {
            setAmount(value);
            setError("Maximum amount is 20000");
        } else {
            setAmount(value);
            setError("");
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Sidebar */}
            <div className="w-full md:w-1/3 min-h-screen border-r border-gray-200 flex flex-col">
                <WithLoggedInHeader />
                {/* Add Cash Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <h2 className="font-semibold text-white-900 mb-4 text-sm">
                        Choose amount to add
                    </h2>
                    <form>
                        <label className="block mb-1 text-xs text-white-500" htmlFor="amount">
                            Enter Amount
                        </label>
                        <div className="relative">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 pl-1 text-white-600 text-sm ">
                                ₹
                            </span>
                            <input
                                className="w-full border-b border-black/80 pl-5 p-2 text-sm focus:outline-white text-white-500"
                                id="amount"
                                max="20000"
                                min="10"
                                name="amount"
                                placeholder=""
                                type="number"
                                value={amount}
                                onChange={handleAmountChange}
                            />
                        </div>
                        {error && (
                            <p className="text-xs text-red-500 mt-1 mb-1">{error}</p>
                        )}
                        <p className="text-xs text-white-500 mt-1 mb-4">
                            Min: 10, Max: 20000
                        </p>
                        <button className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md px-4 py-3 text-blue-900 font-semibold text-sm mb-6" type="button">
                            <span>
                                Add to Current Balance
                            </span>
                            <span className="font-bold">
                                ₹0.00
                            </span>
                            <i className="fas fa-chevron-down text-sm">
                            </i>
                        </button>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-gray-100 rounded-md py-6 font-semibold text-gray-700 text-lg flex items-center justify-center space-x-1" type="button">
                                <span>
                                    ₹
                                </span>
                                <span className="font-bold text-xl">
                                    100
                                </span>
                            </button>
                            <button className="bg-gray-100 rounded-md py-6 font-semibold text-gray-700 text-lg flex items-center justify-center space-x-1" type="button">
                                <span>
                                    ₹
                                </span>
                                <span className="font-bold text-xl">
                                    250
                                </span>
                            </button>
                            <button className="bg-gray-100 rounded-md py-6 font-semibold text-gray-700 text-lg flex items-center justify-center space-x-1" type="button">
                                <span>
                                    ₹
                                </span>
                                <span className="font-bold text-xl">
                                    500
                                </span>
                            </button>
                            <button className="bg-gray-100 rounded-md py-6 font-semibold text-gray-700 text-lg flex items-center justify-center space-x-1" type="button">
                                <span>
                                    ₹
                                </span>
                                <span className="font-bold text-xl">
                                    1000
                                </span>
                            </button>
                        </div>
                        {/* Next Button */}
                        <button
                            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
                            type="button"
                        >
                            Next
                        </button>
                    </form>
                </main>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex flex-col justify-center items-center bg-[#f9f9f9] relative overflow-hidden">
                {/* Additional content can go here */}
            </div>
        </div>
    );
}
export default AddCashPage;