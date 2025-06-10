"use client";
import React, { useState } from "react";
import WithLoggedInHeader from "../../../components/header/withLoggedIn";

const RoomPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return;
        setUploading(true);
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            // Optionally handle response
        } catch (err) {
            // Optionally handle error
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Sidebar */}
            <div className="w-full md:w-1/3 min-h-screen border-r border-gray-200 flex flex-col">
                <WithLoggedInHeader />
                {/* Room Content */}
                <div className="p-4 flex flex-col space-y-4">
                <section className="bg-gray-100 rounded-md p-4 border border-gray-200 mt-2">
                    <div className="flex justify-center items-center space-x-6 mb-2 text-xs text-gray-600 font-semibold">
                        <div className="flex flex-col items-center">
                            <span>
                                Han-Solo_215309
                            </span>
                            <img alt="Avatar of Han-Solo_215309 with black hair and white game controller glasses with red buttons" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/d714707d-dbb0-4d88-ee2d-af53018ff613.jpg" width="32" />
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fas fa-bolt text-gray-700"></i>
                            <i className="fas fa-bolt text-gray-700"></i>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>
                                Dormé_805104
                            </span>
                            <img alt="Avatar of Dormé_805104 with brown hair and teal shirt" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/d444fd44-eaf4-4b18-b372-f8f84eb87c62.jpg" width="32" />
                        </div>
                    </div>
                    <p className="text-center text-xs text-gray-700 font-semibold">
                        Playing for
                        <i className="fas fa-money-bill-wave text-green-600"></i>
                        <span className="font-bold">
                            50
                        </span>
                    </p>
                </section>
                <section className="text-center text-[9px] font-bold text-gray-700 bg-gray-300 rounded-md p-2 m-2">
                    Note: Please enter room code created on
                    <span className="underline">
                        SAMPLE LUDO {""}
                    </span>
                    App Only. (Third party apps room code not supported)
                </section>
                <section className="bg-gray-200 rounded-md p-6 mb-2">
                    <h3 className="text-center text-black font-semibold mb-2">
                        Set Room Code
                    </h3>
                    <div className="flex justify-center">
                        <input className="text-center text-white-500 text-sm border border-gray-300 rounded-l-md px-3 py-2 w-32 focus:outline-none bg-black" type="text" />
                        <span className="flex items-center justify-center border border-l-0 border-gray-300 rounded-r-md bg-gray-100 px-3 text-gray-400">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>
                    <div className="flex justify-center mt-3">
                        <button className="bg-green-500 text-white text-xs font-semibold px-5 py-2 rounded hover:bg-green-600 transition" type="button">
                            SET ROOM CODE
                        </button>
                    </div>
                </section>
                <section className="border border-gray-300 rounded-md p-4 mb-2">
                    <h4 className="text-center font-semibold text-xs underline mb-2">
                        Game Rules
                    </h4>
                    <div className="text-[12px] text-white-700 border border-gray-300 rounded-md p-2 space-y-2">
                        <p className="border-b border-gray-300 pb-1">
                            Record every game while playing.
                        </p>
                        <p className="border-b border-gray-300 pb-1">
                            For cancellation of game, video proof is necessary.
                        </p>
                        <p className="border-b border-gray-300 pb-1 flex items-center space-x-1">
                            <i className="fas fa-money-bill-wave text-green-600 text-xs"></i>
                            <span>
                                50 Penalty will be charged for updating wrong result.
                            </span>
                        </p>
                        <p className="flex items-center space-x-1">
                            <i className="fas fa-money-bill-wave text-green-600 text-xs"></i>
                            <span>
                                25 Penalty will be charged for not updating result.
                            </span>
                        </p>
                    </div>
                </section>
                <section className="bg-gray-200 text-[10px] text-gray-700 font-semibold px-2 py-1 rounded border border-gray-300">
                    Match Status
                </section>
                <section className="text-[10px] text-gray-600 m-1 text-white">
                    After completion of your game, select the status of the game and post your screenshot below.
                </section>
                <section className="space-y-2">
                    <button className="w-full bg-green-600 text-white text-[9px] font-bold rounded-full py-2 flex justify-center items-center space-x-2 hover:bg-green-700 transition" type="button">
                        <span>
                            I WON THE GAME
                        </span>
                        <i className="fas fa-check-square text-xs"></i>
                    </button>
                    <button className="w-full bg-red-600 text-white text-[9px] font-bold rounded-full py-2 hover:bg-red-700 transition" type="button">
                        I LOST THE GAME
                    </button>
                    <button className="w-full bg-gray-600 text-white text-[9px] font-bold rounded-full py-2 hover:bg-gray-700 transition" type="button">
                        CANCEL THE GAME
                    </button>
                </section>
                <section className="flex border border-gray-300 rounded text-[9px] overflow-hidden">
                    <input
                        aria-label="Browse your screenshot"
                        className="flex-grow px-2 py-1 text-gray-700 text-xs"
                        type="file"
                        onChange={handleFileChange}
                    />
                </section>
                <button
                    className="w-full bg-blue-600 text-white text-xs font-semibold rounded-full py-2 hover:bg-blue-700 transition"
                    type="button"
                    onClick={handleUpload}
                    disabled={uploading || !selectedFile}
                >
                    {uploading ? "UPLOADING..." : "POST RESULT"}
                </button>
                </div>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex flex-col justify-center items-center bg-[#f9f9f9] relative overflow-hidden">
                <img alt="Game logo with black hair, white gaming goggles with red controls, and black mask" className="w-48 h-48" height="200" src="https://storage.googleapis.com/a1aa/image/b6287ca0-f08e-45c4-5b89-18f7cd5a9f4b.jpg" width="200" />
                <h1 className="mt-6 text-2xl font-normal text-gray-900">
                    SAMPLE APP
                </h1>
            </div>
        </div>
    );
}

export default RoomPage;