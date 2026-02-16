import React from "react";

export default function Imortantpoint() {
  return (
    <div className="-rotate-3 bg-[#FFC436] rounded-2xl mt-7 mb-24">
      <div className="bg-gradient-to-b from-[#116EDB] to-[#093B75] text-white rotate-3 rounded-2xl p-4">
        <div className="flex flex-col gap-3.5">
          <p className="flex items-center gap-2 text-xl font-bold text-[#FFC436] text-xs leading-[180%]">
            نکته حقوقی امروز
            <span className="text-white text-base font-bold">پارک = پنچری</span>
          </p>
          <p className="text-sm line-clamp-4 text-justify leading-[180%]">
            تمام مردم با عکسی که چنین محتویات را نمایش میدهد در ورودی درب
            پارکینگ بعضی از ساختمان ها و خانه ها برخورد داشته اند و یک مورد
            حقوقی بسیار با اهمیت که باید از آن اطلاع داشته باشید این میباشد که
            از منظر حقوقی نوشته هایی مانند این بر اساس ماده ۶۶۹ قانون مجازات
            اسلامی تهدید قلمداد میشود و جزای آن، تا ۷۴ ضربه شلاق یا دو ماه تا دو
            سال حبس میباشد.
          </p>
          <span className="text-sm flex items-center gap-1">
            مطالعه بیشتر
            <img src="/svg/arrow-left.svg" alt="icon" />
          </span>
        </div>
      </div>
    </div>
  );
}
