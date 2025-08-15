import React from "react";
import arrowDown from "../../public/arrow-down-77.svg";
import Image from "next/image";

const TransactionSnapshot = () => {
  return (
    <div className="bg-white w-[50%] shadow-lg">
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
    </div>
  );
};

export default TransactionSnapshot;
