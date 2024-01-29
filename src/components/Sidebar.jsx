import React from "react";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-start gap-4 px-4 sm:px-8 py-4 relative">
      <div className="text-[#277933] text-sm md:text-base font-light tracking-[0] leading-[normal]">
        Home &gt; All products
      </div>
      <div className="text-[#277933] text-base font-light tracking-[0] leading-[normal] border-b-[#277933]">
        Browse by
      </div>

      <div className="text-[#277933] text-base font-light tracking-[0] leading-[normal] underline">
        All products
      </div>
      <div className="text-[#277933] text-base font-light tracking-[0] leading-[normal]">
        Filter by
      </div>
      <img className="w-full h-1 object-cover" alt="Line" src="line-2.svg" />
      <div className="w-full h-[69px] relative">
        <div className="absolute w-full h-[24px] top-0 left-0">
          <img
            className="absolute w-10 h-1 top-[14px] left-[187px]"
            alt="Line"
            src="line-3.svg"
          />
          <div className="absolute top-0 left-0 text-[#277933] text-sm md:text-base font-light tracking-[0] leading-[normal]">
            Price
          </div>
        </div>
        <div className="absolute w-full h-[32px] top-[37px] left-0">
          <div className="absolute left-0 top-[15px] text-[#277933] text-xs md:text-sm tracking-[0] leading-[normal]">
            ₹ 7.50
          </div>
          <div className="absolute left-[158px] top-[15px] text-[#277933] text-xs md:text-sm tracking-[0] leading-[normal]">
            ₹ 130.00
          </div>
          <div className="absolute w-full h-2 top-0 left-0">
            <div className="absolute w-full h-2 top-[4px] left-0 bg-[#277933] rounded-[5px]" />
          </div>
        </div>
      </div>
      <img className="w-full h-1 object-cover" alt="Line" src="line-6.svg" />
      <div className="w-full h-[24px] relative">
        <div className="absolute w-10 h-10 top-10 left-[187px]">
          <div className="relative h-10">
            <img
              className="absolute w-10 h-1 top-[4px] left-0"
              alt="Line"
              src="line-7.svg"
            />
            <img
              className="absolute w-1 h-10 top-0 left-5"
              alt="Line"
              src="line-11.svg"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 text-[#277933] text-sm md:text-base font-light tracking-[0] leading-[normal]">
          Color
        </div>
      </div>
      <img className="w-full h-1 object-cover" alt="Line" src="line-8.svg" />
      <div className="w-full h-[24px] relative">
        <div className="absolute w-10 h-10 top-10 left-[187px]">
          <div className="relative h-10">
            <img
              className="absolute w-10 h-1 top-[4px] left-0"
              alt="Line"
              src="line-9.svg"
            />
            <img
              className="absolute w-1 h-10 top-0 left-5"
              alt="Line"
              src="line-12.svg"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 text-[#277933] text-sm md:text-base font-light tracking-[0] leading-[normal]">
          Size
        </div>
      </div>
      <img className="w-full h-1 object-cover" alt="Line" src="line-10.svg" />
    </div>
  );
}
