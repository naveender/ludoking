"use client";
import React, { useState } from "react";
import WithLoggedInHeader from "../../../components/header/withLoggedIn";

const GameHistoryPage = () => {
    return (
        <div className="flex min-h-screen">
            {/* Left Sidebar */}
            <div className="w-full md:w-1/3 min-h-screen border-r border-gray-200 flex flex-col">
                <WithLoggedInHeader />
                {/* Add Cash Content */}
                <main className="flex-1 overflow-y-auto divide-y divide-gray-200">
                    <article className="flex items-start px-4 py-3 space-x-3">
                        <div className="text-right text-white-600 text-xs font-normal w-16 flex-shrink-0">
                            <div>
                                7 Jun
                            </div>
                            <div className="mt-1">
                                4:58 PM
                            </div>
                        </div>
                        <img alt="Game icon for Won against Dormé_805104" className="w-10 h-10 rounded" height="40" src="https://storage.googleapis.com/a1aa/image/5da35242-669b-4a38-8ba9-911b31f06e7c.jpg" width="40" />
                        <div className="flex-1 text-xs text-white-700">
                            <div className="font-semibold text-white-900 leading-tight">
                                Won against Dormé_805104.
                            </div>
                            <div className="text-[10px] text-white-400 font-bold leading-tight mt-0.5">
                                Battle ID: MBM4YHJJ
                            </div>
                        </div>
                        <div className="flex flex-col items-end text-xs text-green-700 font-semibold w-16 flex-shrink-0">
                            <div className="flex items-center space-x-1">
                                <span>
                                    (+)
                                </span>
                                <span>
                                    40
                                </span>
                            </div>
                            <div className="text-white-400 font-normal text-[10px] mt-1">
                                Closing Balance: 90
                            </div>
                        </div>
                    </article>
                    <article className="flex items-start px-4 py-3 space-x-3">
                        <div className="text-right text-white-600 text-xs font-normal w-16 flex-shrink-0">
                            <div>
                                13 May
                            </div>
                            <div className="mt-1">
                                10:14 PM
                            </div>
                        </div>
                        <img alt="Bonus icon for Signup Bonus!" className="w-10 h-10 rounded" height="40" src="https://storage.googleapis.com/a1aa/image/7dcf6b5c-f332-458d-5dc3-9779a9132dee.jpg" width="40" />
                        <div className="flex-1 text-xs text-white-700">
                            <div className="font-semibold text-white-900 leading-tight flex items-center space-x-1">
                                <span>
                                    Signup Bonus!
                                </span>
                                <img alt="Heart eyes emoji" className="inline-block" height="12" src="https://storage.googleapis.com/a1aa/image/c862b823-265d-42f1-6579-fe033f07c3b8.jpg" width="12" />
                            </div>
                            <div className="text-[10px] text-white-400 font-normal leading-tight mt-0.5">
                                Play and enjoy
                                <img alt="Smiling emoji" className="inline-block" height="8" src="https://storage.googleapis.com/a1aa/image/140dd880-ce65-429b-e1eb-225d678ddaa4.jpg" width="8" />
                                .
                            </div>
                        </div>
                        <div className="flex flex-col items-end text-xs text-green-700 font-semibold w-16 flex-shrink-0">
                            <div className="flex items-center space-x-1">
                                <img alt="Cash icon" className="w-4 h-4" height="16" src="https://storage.googleapis.com/a1aa/image/90674bd8-eefe-4d65-279c-9a96ddc3eafe.jpg" width="16" />
                                <span>
                                    10
                                </span>
                            </div>
                            <div className="text-white-400 font-normal text-[10px] mt-1">
                                Closing Balance: 10
                            </div>
                        </div>
                    </article>
                </main>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex flex-col justify-center items-center bg-[#f9f9f9] relative overflow-hidden">
                {/* Additional content can go here */}
            </div>
        </div>
    );
}
export default GameHistoryPage;