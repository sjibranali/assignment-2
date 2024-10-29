import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" flex w-[1322px] h-[91px] ml-[59px]   border-white">
      <div className=" w-[187px] h-[58px] mt-[17px] mx-[136px] flex items-center  border-red-700">
        <h3 className="montserrat font-bold text-white text-2xl tracking-[0.10000000149011612]">
          BrandName
        </h3>
      </div>

      <div className=" w-[815px] h-[58px] mt-[16px] mr-[136px]  border-red-500 flex justify-between items-center ">
        {/* HOME   PRODUCT   PRICING   CONTACT */}
        <div className="w-[275px] h-[24px] max-w-fit max-h-fit my-[17px] gap-[21px] relative flex  border-blue-500 justify-end ">
          <li className="w-[43px] h-[24px] flex items-center  border-red-500 ">
            <Link
              href="/"
              className=" montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.20000000298023224px] text-white"
            >
              Home
            </Link>
          </li>

          <li className="w-[59px] h-[24px] flex items-center  border-red-700 ">
            <Link
              href="/product"
              className="montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.20000000298023224px] text-white"
            >
              Product
            </Link>
          </li>

          <li className="w-[52px] h-[24px] flex items-center  border-red-700 ">
            <Link
              href="/pricing"
              className="montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.20000000298023224px] text-white"
            >
              Pricing
            </Link>
          </li>

          <li className="w-[58px] h-[24px] flex items-center  border-red-700 ">
            <Link
              href="/contact"
              className="montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.20000000298023224px] text-white"
            >
              Contact
            </Link>
          </li>
        </div>

        {/* LOGIN AND JOIN US */}
        <div className="w-[189px] h-[52px] top-[3px] left-[626px] gap-45 min-h-fit flex items-center justify-between  border-orange-600">
          {/* login */}
          <div className="w-[41px] h-[22px] gap-0   border-black">
            <button className="w-[41px] h-[22px] montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-right text-white">
              Login
            </button>
          </div>

          {/* JOIN US */}
          <div className="w-[110px] h-[52px] gap-[15px] max-w-fit max-h-fit pt-[15px] pb-[15px] pr-[25px] pl-[25px] rounded-l-[5px] bg-[#23A6F0]">
            <button className="w-[60px] h-[22px] max-w-fit max-h-fit text-white montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-nowrap ">
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </div>  
  );
}
