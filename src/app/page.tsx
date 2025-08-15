import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-400 h-[100vh]">
      <div className="bg-orange-600 w-[50%] h-[400px] p-[1px] absolute bottom-0 z-[-1]"></div>
      <div className="bg-[#00aa00] w-[50%] h-[400px] p-[1px] z-10">
        <div className="bg-[#f0f0f0] h-[100vh] m-2 w-[100vw] ml-4">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
