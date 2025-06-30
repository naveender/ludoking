"use client";
import { useRouter } from "next/navigation";
import LeftSideLayout from "../common/LeftSideLayout";
import RightSideLayout from "../common/RightSideLayout";

const MyWallet = () => {
  const router = useRouter();
  return (
    <>
      <LeftSideLayout>
        {/* Order History Button */}
        <button className="flex items-center space-x-3 text-gray-600 text-sm font-normal border border-gray-200 rounded-md m-4 px-4 py-3 hover:bg-gray-50">
          <i className="far fa-clock text-lg"></i>
          <span>Order History</span>
        </button>
        {/* Deposit Cash Card */}
        <div
          className="m-4 rounded-lg bg-[#3b7de1] p-5 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #3b7de1 0%, #4a8ff7 100%)",
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 font-bold text-lg">
              <img
                alt="Green cash icon"
                className="w-5 h-4"
                height="15"
                src="https://storage.googleapis.com/a1aa/image/cc062ba3-deee-4092-928d-b21f563feaf6.jpg"
                width="20"
              />
              <span>₹10</span>
            </div>
            <button
              className="border border-white text-white text-xs font-bold px-4 py-1 rounded hover:bg-white hover:text-[#3b7de1] transition"
              onClick={() => router.push("/add-cash")}
            >
              ADD CASH
            </button>
          </div>
          <div className="uppercase font-bold text-sm mb-3">DEPOSIT CASH</div>
          <p className="text-blue-200 text-sm leading-relaxed max-w-[280px]">
            Can be used to play Tournaments &amp; Battles.
            <br />
            Cannot be withdrawn to Paytm or Bank.
          </p>
          <img
            alt="Decorative blue circle overlay"
            className="absolute bottom-0 right-0 opacity-20 pointer-events-none select-none"
            height="120"
            src="https://storage.googleapis.com/a1aa/image/bcefda77-1645-4687-897b-d5344a830842.jpg"
            style={{ borderRadius: "50%" }}
            width="120"
          />
        </div>
        {/* Winnings Cash Card */}
        <div
          className="m-4 rounded-lg bg-[#7a9aff] p-5 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #7a9aff 0%, #8aa7ff 100%)",
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 font-bold text-lg">
              <img
                alt="Green cash icon"
                className="w-5 h-4"
                height="15"
                src="https://storage.googleapis.com/a1aa/image/cc062ba3-deee-4092-928d-b21f563feaf6.jpg"
                width="20"
              />
              <span>₹0</span>
            </div>
            <button className="border border-white text-white text-xs font-bold px-4 py-1 rounded hover:bg-white hover:text-[#7a9aff] transition">
              WITHDRAW
            </button>
          </div>
          <div className="uppercase font-bold text-sm mb-3">WINNINGS CASH</div>
          <p className="text-blue-200 text-sm leading-relaxed max-w-[280px]">
            Can be withdrawn to Paytm or Bank. Can be used to play Tournaments
            &amp; Battles.
          </p>
          <img
            alt="Decorative lighter blue circle overlay"
            className="absolute bottom-0 right-0 opacity-20 pointer-events-none select-none"
            height="120"
            src="https://storage.googleapis.com/a1aa/image/dbe91e48-4a6d-4291-296a-12cdaac4b3f4.jpg"
            style={{ borderRadius: "50%" }}
            width="120"
          />
        </div>
      </LeftSideLayout>
      <RightSideLayout
        imgSrc={
          "https://storage.googleapis.com/a1aa/image/b6287ca0-f08e-45c4-5b89-18f7cd5a9f4b.jpg"
        }
        title={
          <>
            Sample App
            <strong>WIN REAL CASH!</strong>
          </>
        }
      >
        <svg
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full pointer-events-none select-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#f9f9f9"></stop>
              <stop offset="100%" stopColor="#eaeaea"></stop>
            </linearGradient>
          </defs>
          <rect fill="url(#grad)" height="100" width="100"></rect>
        </svg>
      </RightSideLayout>
    </>
  );
};

export default MyWallet;
