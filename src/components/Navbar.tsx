import React from "react";
import addImageLogo from "../../public/add-photo.svg";
import searchSvg from "../../public/searchSvgWhite.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[70px] bg-[#092e64] flex items-center">
      <div className="flex items-center gap-4 h-full px-4">
        <div className="w-[100px] h-[50px] border rounded-xl"></div>
        <div className="text-white flex gap-2 items-center border p-2 rounded border-dashed">
          <Image
            src={addImageLogo}
            alt="Distributor Logo"
            className="bg-white rounded w-[30px] h-[25px]"
          />{" "}
          Distributor Logo
        </div>
      </div>

      <div className="rounded flex items-center justify-center border ml-7">
        <input
          type="text"
          placeholder="Search Investors, Schemes, Transactions, etc"
          className="p-2 rounded text-white w-[350px] focus:outline-none placeholder:opacity-20 bg-transparent placeholder:text-white"
        />

        <button className="p-2 rounded ml-2 cursor-pointer  hover:bg-amber-600 transition-colors">
          <Image src={searchSvg} alt="Search" className="w-[20px] h-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
