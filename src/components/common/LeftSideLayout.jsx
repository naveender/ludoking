"use client";
import WithLoggedInHeader from "../header/withLoggedIn";
import WithoutLoggedInHeader from "../header/withoutLoggedIn";
import useUserStore from "@/store/userStore";

const LeftSideLayout = ({ children, className, session }) => {
  const user = useUserStore((state) => state.user);

  return (
    <div
      className={`w-full md:w-1/3 min-h-screen border-r border-gray-200 flex flex-col ${className}`}
    >
      {user ? <WithLoggedInHeader /> : <WithoutLoggedInHeader />}
      {children}
    </div>
  );
};

export default LeftSideLayout;
