import Navbar from "@/components/Navbar";
import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <div className="absolute bg-[#C0C0C0] w-[100%] h-[100%] z-0"></div>
      <div className="absolute w-[50%] h-[350px] bg-[#4CBB17] z-10"></div>
      <div className="absolute w-[50%] h-[350px] bg-[#CD7F32] bottom-0 right-0 z-10"></div>

      <div className="absolute top-2 left-[12px] right-[12px] bottom-2 bg-white z-20 flex flex-col">
        <Navbar />
        <div className="h-full flex">
          <Sidebar />
          <div className="w-[96%] bg-gray-200 ">
            <Section1 />
            <Section2 />
          </div>
        </div>
      </div>
    </div>
  );
}
