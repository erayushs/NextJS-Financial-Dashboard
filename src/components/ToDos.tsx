import React from "react";
import Image from "next/image";
import rightArrow from "../../public/blueRightArrow.svg";

const ToDos = () => {
  return (
    <div className="bg-white w-[50%] shadow-lg">
      {/* Heading */}
      <div className="h-[50px] flex bg-slate-100 p-4 items-center justify-between shadow">
        <h3 className="text-[#092e64] font-bold flex gap-2 justify-center items-center">
          To-Do's{" "}
          <span className="w-[30px] h-[30px] border rounded-full px-[5px] py-1 bg-red-600 text-white text-[12px]">
            24
          </span>
        </h3>

        <h2 className="text-[#092e64] font-bold text-[12px] flex justify-center items-center">
          View All{" "}
          <Image src={rightArrow} width={24} height={24} alt="right arrow" />
        </h2>
      </div>
      {/* Columns */}
      {/* Birthday Alerts */}
      <div className="mx-4 mt-4 flex gap-4 justify-between items-center flex-col">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[#092e64] font-bold">Birthday Alerts</h1>
          <button className="border text-[#092e64] px-4  rounded font-semibold">
            Wish All
          </button>
        </div>

        {/* Underline */}
        <div className="border border-t w-full border-gray-200">
          <span className="text-[#092e64] font-semibold"></span>
        </div>
        <div className="self-start w-full flex justify-between items-center flex-col">
          <div className="flex justify-between items-center w-full pb-2">
            <p className="text-gray-600 text-[14px]">
              Ramesh Shankar's birthday is tomorrow 23/11/2016, Don't Forget to
              Wish Him!
            </p>
            <button className=" text-[#092e64] text-[14px] rounded font-semibold">
              Wish Now
            </button>
          </div>
          {/* Underline */}
          <div className="border border-t w-full border-gray-200">
            <span className="text-[#092e64] font-semibold"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDos;
