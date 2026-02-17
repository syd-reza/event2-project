import React from "react";
import Link from "next/link";

export default function Appfetchur() {
  return (
    <div className="flex gap-4 mt-6">
      <div className="w-full px-0.5 -rotate-4 bg-[#BACFF7] rounded-2xl">
          <Link href="/masir">
        <div className="flex flex-col gap-2 items-center justify-center rotate-4 bg-white py-4 text-center text-xs px-4 rounded-2xl shadow-[0px_0px_3.1px_0px_rgba(0,0,0,0.20)]">
          <img src="/svg/map.svg" alt="icon" className="w-[40px] h-[40px]" />
          <p className="leading-[140%] font-bold text-[#4B5675]">
            اسکان های نزدیک من
          </p>
        </div>
          </Link>
      </div>
      <div className="w-full px-0.5 -rotate-4 bg-[#BACFF7] rounded-2xl">
          <Link href="/skanha">
        <div className="flex flex-col gap-2 items-center justify-center rotate-4 bg-white py-4 text-center text-xs px-4 rounded-2xl shadow-[0px_0px_3.1px_0px_rgba(0,0,0,0.20)]">
          <img src="/svg/skanicon3.svg" alt="icon" className="w-[40px] h-[40px]" />
          <p className="leading-[140%] font-bold text-[#4B5675]">
          بهترین اسکان ها
          </p>
        </div>
          </Link>
      </div>
    </div>
  );
}
