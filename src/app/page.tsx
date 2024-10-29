import React from "react";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="container max-w-fit w-[1440px] h-[1132px] -top-[590px] -left-[720px]  bg-[#252B42]">
      <>
        <Navbar />
      </>
      {/* Main Div */}
      <div className="flex flex-col justify-evenly mx-auto container w-[1046px] h-[1028px] top-[104px] left-[197px] pt-80px pb-80px gap-[80px]  border-white">
        {/* Child Div 01*/}
        <div className="flex flex-col justify-evenly mx-auto container w-[701px] h-[496px] pt-40px pb-40px  border-[#692b2b]">
          <div className="">
            {/* WELCOME */}
            <h5 className="w-[77px] h-[24px] mx-auto montserrat text-[16px] font-bold text-center leading-6 tracking-[0.1px] text-[#23A6F0] border-[#4e2525]">
              Welcome
            </h5>
          </div>

          {/* Selling on the internet */}
          <div className=" w-[542px] h-[160px] mx-auto">
            <h1 className="montserrat text-[57px] indent-0 font-bold text-center leading-[80px] tracking-[0.2px]  text-white  border-[#512d2d]">
              Selling on the internet like a pro
            </h1>
          </div>

          <div>
            <h1 className="w-[536px] h-[60px] mx-auto montserrat text-[20px] font-normal text-center leading-[30px] tracking-[0.2px]  text-white">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h1>
          </div>

          {/* Button */}
          <div className="flex mx-auto w-[365px] h-[52px] gap-[10px]  border-black">
            <div className="flex justify-center items-center w-[193px] h-[52px] pt-[15px] pb-[15px] pr-[40px] pl-[40px] rounded-[5px] bg-[#23A6F0]">
              <button className="w-[113px] h-[22px] text-white montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-nowrap  border-BLACK">
                Get Quote Now
              </button>
            </div>

            <div className="flex justify-center items-center w-[162px] h-[52px] pt-[15px] pb-[15px] pr-[40px] pl-[40px] rounded-[5px] border-2  border-[#23A6F0]">
              <button className="w-[82px] h-[22px]  text-[#23A6F0] montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-nowrap  border-black ">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Child Div 2*/}
        {/* training course */}
        <div className="flex mx-auto container w-[1046px] h-[292px] gap-[30px]  border-[#22541e]">
          <div className="flex flex-col w-[328px] h-[292px] max-h-fit pt-[35px] pb-[35px] pr-[40px] pl-[40px] gap-[20px] bg-white">
            <div className="w-[70px] h-[76px] pt-[22px] pb-[22px] pr-[19px] pl-[19px] gap-[10px] rounded-[10px] bg-[#FFDCD1]"></div>
            <div className="w-[135px] h-[24px] montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] text-nowrap">
              <h5>training Courses</h5>
            </div>

            <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
            <div className="w-[222px] h-[60px] montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              <p>
                The gradual accumulation of information about atomic and small-scale behaviour...
              </p>
            </div>
          </div>

          {/* online Course */}
          <div className="flex flex-col w-[328px] h-[292px]  pt-[35px] pb-[35px] pr-[40px] pl-[40px] gap-[20px] bg-white">
            <div className="w-[70px] h-[76px] pt-[22px] pb-[22px] pr-[19px] pl-[19px] gap-[10px] rounded-[10px] bg-[#B9EAA8]"></div>
            <div className="w-[135px] h-[24px] montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] text-nowrap">
              <h5>2,769 online courses</h5>
            </div>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
            <div className="w-[222px] h-[60px] montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              <p>
                The gradual accumulation of information about atomic and small-scale behaviour...
              </p>
            </div>
          </div>

          {/* training Courses */}
          <div className="flex flex-col w-[328px] h-[292px] max-h-fit pt-[35px] pb-[35px] pr-[40px] pl-[40px] gap-[20px] bg-[#23A6F0]">
            <div className="w-[70px] h-[76px] pt-[22px] pb-[22px] pr-[19px] pl-[19px] gap-[10px] rounded-[10px] bg-white"></div>
            <div className="w-[135px] h-[24px] montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white text-nowrap">
              <h5>training Courses</h5>
            </div>
            <div className="w-[50px] h-[2px] bg-white"></div>
            <div className="w-[222px] h-[60px] montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-white">
              <p>
                The gradual accumulation of information about atomic and small-scale behaviour...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
