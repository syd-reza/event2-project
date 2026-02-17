import React from "react";
import Link from "next/link";

export default function Answeraisection() {
  return (
    <div className="-rotate-3 bg-[#FFC436] rounded-2xl mt-7">
      <div className="flex items-center justify-between bg-gradient-to-b from-[#116EDB] to-[#093B75] text-white rotate-3 rounded-2xl p-3">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-xl font-bold text-[18px]">
            پاسخ آنی به سوالات گردشگری
          </h3>
          <p className="text-sm ">هوش مصنوعی به دادت می‌رسه!</p>
          <Link href="/skanchat">
            <span className="flex items-center gap-1">
              شروع گفتگو
              <img src="/svg/arrow-left.svg" alt="icon" />
            </span>
          </Link>
        </div>
        <img src="/Vector (1).png" alt="AIicon" />
      </div>
    </div>
  );
}
