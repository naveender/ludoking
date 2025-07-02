import Image from "next/image";
import React from "react";

const RightSideLayout = ({ children, title, imgSrc }) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-[#f9f9f9] relative overflow-hidden">
      {imgSrc && (
        <Image
          alt="Game logo with black hair, white gaming goggles with red controls, and black mask"
          className="w-48 h-48"
          height="200"
          src={imgSrc}
          width="200"
        />
      )}
      {title && (
        <h1 className="mt-6 text-2xl font-normal text-gray-900">{title}</h1>
      )}
      {children}
    </div>
  );
};

export default RightSideLayout;
