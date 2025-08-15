import React from "react";
import arrowDown from "../../public/arrow-down-77.svg";
import blueArrow from "../../public/blueArrow.png";
import Image from "next/image";

const TransactionSnapshot = () => {
  return (
    <div className="bg-white w-[50%] shadow-lg">
      {/* Heading */}
      <div className="h-[50px] flex bg-slate-100 p-4 items-center justify-between shadow">
        <h3 className="text-[#092e64] font-bold">Transaction Snapshot</h3>

        <div className="flex gap-4 pr-2">
          <div className="flex border border-gray-400 rounded">
            <div className="border-r-1  font-bold border-gray-400 shadow-lg text-[12px] text-black p-[4px] cursor-pointer bg-gray-300 rounded">
              Online
            </div>
            <div className="text-[12px] text-black p-[4px] cursor-pointer">
              Offline
            </div>
          </div>

          <div className="border text-[12px] font-bold text-black p-[4px] border-gray-400 rounded flex cursor-pointer">
            Today{" "}
            <Image src={arrowDown} alt="Arrow down" width={14} height={14} />
          </div>
        </div>
      </div>

      {/* Inflow Outflow */}

      <div className="mt-4 h-[70px] mx-4 flex gap-4">
        <div className="h-full w-[50%] bg-blue-100 flex justify-around p-2 items-center border border-slate-400">
          <Image
            src={blueArrow}
            alt="Arrow down"
            width={14}
            height={14}
            className="rotate-180"
          />
          <div className="h-[50px] ">
            <p>Inflow</p>
            <p className="text-2xl text-semibold">5.20 crore</p>
          </div>
          <div className="h-[50px] flex items-end">
            <p className="text-[12px] italic text-gray-600">60 transactions</p>
          </div>
        </div>
        <div className="h-full w-[50%] bg-blue-100 flex justify-around p-2 items-center border border-slate-400">
          <Image src={blueArrow} alt="Arrow down" width={14} height={14} />
          <div className="h-[50px] ">
            <p>Outflow</p>
            <p className="text-2xl text-semibold">3.20 crore</p>
          </div>
          <div className="h-[50px] flex items-end">
            <p className="text-[12px] italic text-gray-600">24 transactions</p>
          </div>
        </div>
      </div>

      {/* Status */}

      <div className="flex items-center justify-center mt-10 font-bold text-sm">
        <span className="mr-4 border border-t w-[100px] border-gray-200"></span>
        STATUS
        <span className="ml-4 border border-t w-[100px] border-gray-200"></span>
      </div>

      {/* Pending Expired Reversed */}

      <div className="mt-[1.4rem] h-[50px] flex gap-10 items-center justify-center">
        <div className="w-[130px] h-[40px] border-2 flex justify-center items-center text-teal-400 rounded">
          150 PENDING
        </div>
        <div className="w-[130px] h-[40px] border-2 flex justify-center items-center text-gray-400 rounded">
          36 EXPIRED
        </div>
        <div className="w-[130px] h-[40px] border-2 flex justify-center items-center text-red-400 rounded">
          15 REVERSED
        </div>
      </div>
    </div>
  );
};

export default TransactionSnapshot;
