"use client";
import React, { useState } from "react";
import LeftSideLayout from "../common/LeftSideLayout";
import RightSideLayout from "../common/RightSideLayout";

const Battles = () => {
  const [battleAmount, setBattleAmount] = useState(50);

  const handleAmountChange = (e) => {
    setBattleAmount(e.target.value);
  };

  const handleCreateBattle = (e) => {
    e.preventDefault();
    // TODO: Add your create battle logic here
    alert(`Battle created for amount: ${battleAmount}`);
  };

  return (
    <>
      <LeftSideLayout>
        <div className="flex-1 overflow-y-auto">
          {/* Create Battle */}
          <div className="border-b border-gray-200 py-4 px-6">
            <p className="text-xs font-semibold text-white text-center uppercase mb-2 select-none">
              Create a battle!
            </p>
            <div className="flex space-x-3 max-w-xs mx-auto">
              <form
                className="flex max-w-[320px] mx-auto gap-3"
                onSubmit={handleCreateBattle}
              >
                <input
                  aria-label="Battle amount"
                  className="flex-grow border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                  type="number"
                  value={battleAmount}
                  onChange={handleAmountChange}
                  min={1}
                />
                <button
                  className="bg-green-600 text-white font-bold text-sm px-5 rounded-md hover:bg-green-700 transition"
                  type="submit"
                >
                  SET
                </button>
              </form>
            </div>
          </div>
          {/* Open Battles */}
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-white text-lg flex items-center space-x-2">
                <i className="fas fa-times-circle text-red-600"></i>
                <span>Open Battles</span>
              </h2>
              <div className="flex items-center space-x-1 text-gray-400 text-xs font-semibold uppercase select-none">
                <span>Rules</span>
                <i className="fas fa-info-circle"></i>
              </div>
            </div>
            <div className="bg-[#fef7ff] border border-[#f3e6ff] rounded-md p-3 space-y-3 text-[11px] mb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="text-[10px] font-semibold text-gray-700 uppercase select-none">
                  Playing for
                  <span className="inline-flex items-center text-green-600 font-bold ml-1">
                    <img
                      alt="Green cash icon"
                      className="w-3 h-3 mr-1"
                      height="14"
                      src="https://storage.googleapis.com/a1aa/image/11bd091d-838b-4b6c-5713-5e2eef3e3729.jpg"
                      width="14"
                    />
                    50
                  </span>
                </div>
                <button className="bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-md hover:bg-red-700 transition">
                  DELETE
                </button>
              </div>
              <div className="flex justify-between items-center text-[10px] text-gray-700 font-semibold">
                <div className="flex flex-col items-center gap-1">
                  <img
                    alt="Avatar of user Han-Solo_215309, female character with brown hair"
                    className="w-8 h-8 rounded-full"
                    height="30"
                    src="https://storage.googleapis.com/a1aa/image/635818d9-0498-4127-7071-3c33e09de1ee.jpg"
                    width="30"
                  />
                  <span className="text-[9px] font-normal">
                    Han-Solo_215309
                  </span>
                </div>
                <div className="text-[14px] font-extrabold text-gray-900 select-none">
                  <span className="text-yellow-400">VS</span>
                  <span className="inline-block border-l border-r border-gray-300 px-2"></span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <i
                    aria-hidden="true"
                    className="fas fa-question-circle text-blue-600 text-2xl select-none"
                  ></i>
                  <span className="text-[9px] font-normal">
                    Finding Player!
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#faf5ff] border border-[#f3e8ff] rounded-md p-3 space-y-3 text-xs text-[#a78bfa] font-semibold select-none">
              <div>
                <span>
                  Challenge from{" "}
                  <span className="text-red-700">OGCrackpot</span>
                </span>
              </div>
              <div className="bg-[#faf5ff] border border-[#f3e8ff] rounded-md p-3 grid grid-cols-3 items-center text-xs text-[#a78bfa] font-semibold">
                <div>
                  <div className="uppercase text-[10px] mb-0.5">Entry Fee</div>
                  <div className="flex items-center space-x-1 text-black font-bold text-sm">
                    <i className="fas fa-money-bill-wave"></i>
                    <span>250</span>
                  </div>
                </div>
                <div>
                  <div className="uppercase text-[10px] mb-0.5">Prize</div>
                  <div className="flex items-center space-x-1 text-black font-bold text-sm">
                    <i className="fas fa-money-bill-wave"></i>
                    <span>450</span>
                  </div>
                </div>
                <button
                  className="bg-gray-600 text-white font-bold text-sm rounded px-4 py-2 hover:bg-gray-700 transition"
                  type="button"
                >
                  Play
                </button>
              </div>
              <div>
                <span>Challenge from</span>
                <span className="text-red-700">Mas-Amedda_703925</span>
              </div>
              <div className="bg-[#faf5ff] border border-[#f3e8ff] rounded-md p-3 grid grid-cols-3 items-center text-xs text-[#a78bfa] font-semibold">
                <div>
                  <div className="uppercase text-[10px] mb-0.5">Entry Fee</div>
                  <div className="flex items-center space-x-1 text-black font-bold text-sm">
                    <i className="fas fa-money-bill-wave"></i>
                    <span>200</span>
                  </div>
                </div>
                <div>
                  <div className="uppercase text-[10px] mb-0.5">Prize</div>
                  <div className="flex items-center space-x-1 text-black font-bold text-sm">
                    <i className="fas fa-money-bill-wave"></i>
                    <span>360</span>
                  </div>
                </div>
                <button
                  className="bg-gray-600 text-white font-bold text-sm rounded px-4 py-2 hover:bg-gray-700 transition"
                  type="button"
                >
                  Play
                </button>
              </div>
            </div>
          </div>
          {/* Running Battles */}
          <div className="px-6 py-4 flex-grow">
            <h2 className="font-semibold text-white text-lg flex items-center space-x-2 mb-3">
              <i className="fas fa-times-circle text-red-600"></i>
              <span>Running Battles</span>
            </h2>
            <div className="space-y-3 text-xs text-[#a78bfa] font-semibold select-none">
              <div className="bg-[#faf5ff] border border-[#f3e8ff] rounded-md p-3 grid grid-cols-3 items-center">
                <div>
                  <div className="uppercase text-[10px] mb-0.5 flex items-center space-x-1">
                    <span>Playing for</span>
                    <i className="fas fa-money-bill-wave"></i>
                    <span className="text-black font-bold text-sm">400</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] text-black font-normal mt-1">
                    <img
                      alt="User avatar with a bird emoji"
                      className="rounded-full"
                      height="20"
                      src="https://storage.googleapis.com/a1aa/image/6c63e87a-23d3-4f41-d7e5-80332fac3191.jpg"
                      width="20"
                    />
                    <span>Siyaram ji ki j</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    alt="VS lightning icon"
                    className="mx-auto"
                    height="40"
                    src="https://storage.googleapis.com/a1aa/image/6053b8a3-1530-44d6-62e8-1ea871611648.jpg"
                    width="30"
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-2 text-[11px] text-black font-normal mt-1">
                    <span>________r@0</span>
                    <img
                      alt="User avatar with a woman emoji"
                      className="rounded-full"
                      height="20"
                      src="https://storage.googleapis.com/a1aa/image/8cfa1387-d4a6-4c81-18ac-9f0c83f3506f.jpg"
                      width="20"
                    />
                  </div>
                  <div className="uppercase text-[10px] mb-0.5 flex items-center justify-end space-x-1">
                    <span>Prize</span>
                    <i className="fas fa-money-bill-wave"></i>
                    <span className="text-black font-bold text-sm">720</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#faf5ff] border border-[#f3e8ff] rounded-md p-3 grid grid-cols-3 items-center">
                <div>
                  <div className="uppercase text-[10px] mb-0.5 flex items-center space-x-1">
                    <span>Playing for</span>
                    <i className="fas fa-money-bill-wave"></i>
                    <span className="text-black font-bold text-sm">100</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] text-black font-normal mt-1">
                    <img
                      alt="User avatar with a boy emoji"
                      className="rounded-full"
                      height="20"
                      src="https://storage.googleapis.com/a1aa/image/9d3dfa6e-506c-4f13-8b85-0dd7bb49cdc6.jpg"
                      width="20"
                    />
                    <span>19 ❤️ 🖤 💪🏻</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    alt="VS lightning icon"
                    className="mx-auto"
                    height="40"
                    src="https://storage.googleapis.com/a1aa/image/6053b8a3-1530-44d6-62e8-1ea871611648.jpg"
                    width="30"
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-2 text-[11px] text-black font-normal mt-1">
                    <img
                      alt="User avatar with a woman emoji"
                      className="rounded-full"
                      height="20"
                      src="https://storage.googleapis.com/a1aa/image/8cfa1387-d4a6-4c81-18ac-9f0c83f3506f.jpg"
                      width="20"
                    />
                    <span>Arvel-Crynyd_297860</span>
                  </div>
                  <div className="uppercase text-[10px] mb-0.5 flex items-center justify-end space-x-1">
                    <span>Prize</span>
                    <i className="fas fa-money-bill-wave"></i>
                    <span className="text-black font-bold text-sm">180</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#faf5ff] border border-[#f3e8ff] rounded-md p-3 grid grid-cols-3 items-center">
                <div>
                  <div className="uppercase text-[10px] mb-0.5 flex items-center space-x-1">
                    <span>Playing for</span>
                    <i className="fas fa-money-bill-wave"></i>
                    <span className="text-black font-bold text-sm">250</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] text-black font-normal mt-1">
                    <img
                      alt="User avatar with a mountain emoji"
                      className="rounded-full"
                      height="20"
                      src="https://storage.googleapis.com/a1aa/image/23bdd1c4-5bc6-4891-888b-ec813a581949.jpg"
                      width="20"
                    />
                    <span>Yarael-Poof_276117</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    alt="VS lightning icon"
                    className="mx-auto"
                    height="40"
                    src="https://storage.googleapis.com/a1aa/image/6053b8a3-1530-44d6-62e8-1ea871611648.jpg"
                    width="30"
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-2 text-[11px] text-black font-normal mt-1">
                    <img
                      alt="User avatar with a boy emoji"
                      className="rounded-full"
                      height="20"
                      src="https://storage.googleapis.com/a1aa/image/9d3dfa6e-506c-4f13-8b85-0dd7bb49cdc6.jpg"
                      width="20"
                    />
                    <span>Margaye</span>
                  </div>
                  <div className="uppercase text-[10px] mb-0.5 flex items-center justify-end space-x-1">
                    <span>Prize</span>
                    <i className="fas fa-money-bill-wave"></i>
                    <span className="text-black font-bold text-sm">450</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#faf5ff] border border-[#f3e8ff] rounded-md p-3 grid grid-cols-3 items-center">
                <div>
                  <div className="uppercase text-[10px] mb-0.5 flex items-center space-x-1">
                    <span>Playing for</span>
                    <i className="fas fa-money-bill-wave"></i>
                    <span className="text-black font-bold text-sm">50</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] text-black font-normal mt-1">
                    <img
                      alt="User avatar with a boy emoji"
                      className="rounded-full"
                      height="20"
                      src="https://storage.googleapis.com/a1aa/image/9d3dfa6e-506c-4f13-8b85-0dd7bb49cdc6.jpg"
                      width="20"
                    />
                    <span>Yarael-Poof_276117</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    alt="VS lightning icon"
                    className="mx-auto"
                    height="40"
                    src="https://storage.googleapis.com/a1aa/image/6053b8a3-1530-44d6-62e8-1ea871611648.jpg"
                    width="30"
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-2 text-[11px] text-black font-normal mt-1">
                    <img
                      alt="User avatar with a boy emoji"
                      className="rounded-full"
                      height="20"
                      src="https://storage.googleapis.com/a1aa/image/9d3dfa6e-506c-4f13-8b85-0dd7bb49cdc6.jpg"
                      width="20"
                    />
                    <span>Margaye</span>
                  </div>
                  <div className="uppercase text-[10px] mb-0.5 flex items-center justify-end space-x-1">
                    <span>Prize</span>
                    <i className="fas fa-money-bill-wave"></i>
                    <span className="text-black font-bold text-sm">90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LeftSideLayout>
      {/* Right Content */}
      <RightSideLayout></RightSideLayout>
    </>
  );
};

export default Battles;
