import React from "react";
import LeftSideLayout from "../common/LeftSideLayout";
import RightSideLayout from "../common/RightSideLayout";

const HomePage = () => {
  return (
    <>
      <LeftSideLayout>
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-2 text-gray-600 font-semibold text-xs mb-1 select-none">
            <i className="fab fa-youtube text-red-600 text-[10px]"></i>
            <span>VIDEO HELP</span>
          </div>
          <div className="flex items-center justify-between bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-sm font-semibold">
            <span>How to win money?</span>
            <button
              aria-label="Close video help"
              className="text-gray-400 hover:text-gray-600"
              type="button"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="px-6 pt-6 pb-2">
          <h3 className="font-semibold text-gray-800 text-sm mb-2">
            Our Games
          </h3>
          <p className="text-xs text-gray-500 leading-tight">
            <span className="inline-flex items-center mr-1">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="red"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="red"
                  strokeWidth="2"
                ></circle>
                <line
                  stroke="red"
                  strokeLinecap="round"
                  strokeWidth="2"
                  x1="15"
                  x2="9"
                  y1="9"
                  y2="15"
                ></line>
                <line
                  stroke="red"
                  strokeLinecap="round"
                  strokeWidth="2"
                  x1="9"
                  x2="15"
                  y1="9"
                  y2="15"
                ></line>
              </svg>
              is for Battles and
            </span>
            <span className="inline-flex items-center mr-1">
              <svg
                className="w-4 h-4 mr-1 text-blue-600"
                fill="currentColor"
                stroke="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C10.343 2 9 3.343 9 5c0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zM7 9v2h10V9H7zm-2 4v2h14v-2H5zm-2 4v2h18v-2H3z"></path>
              </svg>
              is for Tournaments.
            </span>
            <strong className="text-gray-700">Know more here.</strong>
          </p>
        </div>

        <div
          className="flex flex-wrap gap-4 px-6 pt-2 pb-6 overflow-y-auto scrollbar-thin"
          style={{ maxHeight: "calc(100vh - 220px)" }}
        >
          <div className="w-[140px] border border-gray-200 rounded-md overflow-hidden relative">
            <img
              alt="Ludo game board with dice and colorful tokens on a purple background"
              className="w-full h-[140px] object-contain bg-white"
              height="140"
              src="https://storage.googleapis.com/a1aa/image/071d8bc0-d938-4a4a-3d25-1f00fdef66fb.jpg"
              width="140"
            />
            <div className="absolute top-2 right-2 text-[10px] text-red-600 font-semibold select-none">
              ● LIVE
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white border border-red-600 rounded-full w-6 h-6 flex items-center justify-center text-red-600">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  x1="15"
                  x2="9"
                  y1="9"
                  y2="15"
                ></line>
                <line
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  x1="9"
                  x2="15"
                  y1="9"
                  y2="15"
                ></line>
              </svg>
            </div>
            <div className="text-center text-xs font-semibold text-gray-800 py-2 select-none">
              Sample App Game
            </div>
          </div>
        </div>
      </LeftSideLayout>

      <RightSideLayout
        imgSrc={
          "https://storage.googleapis.com/a1aa/image/766221ee-1504-4d81-6c23-360587cb2b1f.jpg"
        }
        title={
          <>
            Sample App -
            <strong className="font-extrabold">WIN REAL CASH!</strong>
          </>
        }
      >
        <p className="text-base text-gray-900 max-w-md text-center">
          For best experience, open
          <strong>SamplApp</strong>
          on
          <img
            alt="Google Chrome browser icon"
            className="inline-block w-5 h-5 mx-1 align-text-bottom"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Google_Chrome_icon_%282011%29.svg/20px-Google_Chrome_icon_%282011%29.svg.png"
          />
          chrome mobile
        </p>
      </RightSideLayout>
    </>
  );
};

export default HomePage;
