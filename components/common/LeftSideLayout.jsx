
import React from "react";
import WithLoggedInHeader from "../header/withLoggedIn";
import WithoutLoggedInHeader from "../header/withoutLoggedIn";

const LeftSideLayout = ({ children, className, session }) => {
 
  return (
    <div className={`w-full md:w-1/3 min-h-screen border-r border-gray-200 flex flex-col ${className}`}>
      <WithLoggedInHeader />
      {children}
    </div>
  );
};


export default LeftSideLayout;
