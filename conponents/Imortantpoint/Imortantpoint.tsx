import React from "react";

export default function Imortantpoint() {
  return (
    <div className="-rotate-3 bg-[#FFC436] rounded-2xl mt-7 mb-28">
      <div className="bg-gradient-to-b from-[#116EDB] to-[#093B75] text-white rotate-3 rounded-2xl p-4">
        <div className="flex flex-col gap-3.5">
          <p className="flex items-center gap-2 text-xl font-bold text-[#FFC436] text-xs leading-[180%]">
            نکات مهم در مورد در مورد اسکان در
            <span className="text-white text-base font-bold">شهر قم</span>
          </p>
          <p className="text-sm line-clamp-4 text-justify leading-[180%]">
            برای اقامتی راحت در قم، به موقعیت مکانی اقامتگاه و دسترسی آن به حرم،
            حمل‌ونقل عمومی و خدمات شهری توجه کنید. در ایام شلوغ، رزرو زودهنگام
            باعث صرفه‌جویی در زمان و هزینه می‌شود. پیش از انتخاب، امکانات، ظرفیت
            و شرایط بهداشتی محل اسکان را بررسی کرده و به قوانین و فرهنگ محلی
            احترام بگذارید.
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
