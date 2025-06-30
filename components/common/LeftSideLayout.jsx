import React from "react";
import WithLoggedInHeader from "../header/withLoggedIn";

const LeftSideLayout = ({ children,className }) => {
  return (
    <div className={`w-full md:w-1/3 min-h-screen border-r border-gray-200 flex flex-col ${className}`}>
      <WithLoggedInHeader />
      {children}
    </div>
  );
};

export default LeftSideLayout;
