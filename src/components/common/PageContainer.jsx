import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">{children}</div>
  );
};

export default PageContainer;
