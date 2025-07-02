"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";

const WithLoggedInHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await useUserStore.getState().logout();
    router.push("/login-register"); // Redirect to login
  };
  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white sticky top-0 z-20">
        <button
          aria-label="Menu"
          className="text-gray-600 text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <img
          alt="Sample logo with a stylized head wearing gaming glasses and a mask"
          className="h-10 w-10"
          height="40"
          src="https://storage.googleapis.com/a1aa/image/f452dcb6-0e8a-4372-253f-928ec73d8237.jpg"
          width="40"
        />
        <button
          className="flex items-center bg-gray-100 rounded border border-gray-300 px-2 py-1 space-x-2 select-none"
          style={{
            outline: "none",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => router.push("/my-wallet")}
          aria-label="Go to My Wallet"
          type="button"
        >
          <span className="text-xs text-gray-400 font-semibold uppercase">
            Cash
          </span>
          <div className="flex items-center bg-green-600 rounded px-2 py-0.5 text-white font-semibold text-sm">
            <i className="fas fa-money-bill-wave mr-1"></i>
            10
          </div>
          <span
            aria-label="Add cash"
            className="text-gray-400 hover:text-gray-600 text-lg font-bold"
          >
            +
          </span>
        </button>
      </div>
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!sidebarOpen}
      >
        <div
          className="absolute inset-0 bg-black opacity-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <span className="font-bold text-lg">Menu</span>
            <button
              aria-label="Close"
              className="text-gray-600 text-2xl"
              onClick={() => setSidebarOpen(false)}
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            <Link
              href="/battles"
              className="mb-2 font-semibold text-gray-700 block"
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="mb-2 font-semibold text-gray-700 block"
              onClick={() => setSidebarOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/my-wallet"
              className="mb-2 font-semibold text-gray-700 block"
              onClick={() => setSidebarOpen(false)}
            >
              My Wallet
            </Link>
            <Link
              href="/games-history"
              className="mb-2 font-semibold text-gray-700 block"
              onClick={() => setSidebarOpen(false)}
            >
              Games History
            </Link>
            <button
              className="mb-2 font-semibold text-gray-700 block text-left w-full"
              onClick={async () => {
                setSidebarOpen(false);
                await handleLogout();
              }}
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithLoggedInHeader;
