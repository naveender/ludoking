 
"use client";
import React from "react";
import WithLoggedInHeader from "../../../components/header/withLoggedIn";
const ProfilePage = () => {
    return (
        <div className="flex min-h-screen">
            {/* Left Sidebar */}
            <div className="w-full md:w-1/3 min-h-screen border-r border-gray-200 flex flex-col">
                <WithLoggedInHeader />
                {/* Profile Content */}
                <div className="p-4 flex flex-col items-center space-y-4">
                    <img
                        alt="Profile avatar with black hair and white gaming glasses"
                        className="w-24 h-24 rounded-full"
                        src="https://storage.googleapis.com/a1aa/image/b6287ca0-f08e-45c4-5b89-18f7cd5a9f4b.jpg"
                    />
                    
                    <h1 className="text-xl font-semibold text-gray-900">Your Name</h1>
                    <p className="text-gray-600">Your bio or description goes here.</p>
                </div>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex flex-col justify-center items-center bg-[#f9f9f9] relative overflow-hidden">
                {/* Additional profile content can go here */}
            </div>
        </div>
    );
}

export default ProfilePage;