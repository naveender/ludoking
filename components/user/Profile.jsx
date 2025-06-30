"use client";

import LeftSideLayout from "../common/LeftSideLayout";
import RightSideLayout from "../common/RightSideLayout";

const Profile = () => {
  return (
    <>
      <LeftSideLayout>
        <div className="p-4 flex flex-col items-center space-y-4">
          <img
            alt="Profile avatar with black hair and white gaming glasses"
            className="w-24 h-24 rounded-full"
            src="https://storage.googleapis.com/a1aa/image/b6287ca0-f08e-45c4-5b89-18f7cd5a9f4b.jpg"
          />

          <h1 className="text-xl font-semibold text-gray-900">Your Name</h1>
          <p className="text-gray-600">Your bio or description goes here.</p>
        </div>
      </LeftSideLayout>
      <RightSideLayout></RightSideLayout>
    </>
  );
};

export default Profile;
