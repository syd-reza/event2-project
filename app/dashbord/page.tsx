"use client"
import React from "react";
import { useState } from "react";
import Pagetitel from "@/conponents/Pagetitel/Pagetitel";
import Navbar from "@/conponents/Navbar/Navbar";
import Poupuplogout from "@/conponents/Poupuplogout/Poupuplogout";

export default function page() {
  const dashbordItem = [
    {
      titel: "تغییر رمز عبور",
      icon: "/svg/Lock Password.svg",
    },
    {
      titel: "پشتیبانی",
      icon: "/svg/headphone.svg",
    },
    {
      titel: "درباره ما",
      icon: "/svg/document-text3.svg",
    },
    {
      titel: "خروج از حساب کاربری",
      icon: "/svg/logout.svg",
    },
  ];

  const [logout, setlogout] = useState(false)

  return (
    <div className="container mt-4">
      <Pagetitel />
      <div className="flex gap-2 pb-3 items-start mt-7">
        <div className="text-center w-[98px]">
          <div className="px-1 -rotate-5 bg-[#BACFF7] rounded-2xl">
            <div className="rotate-5 bg-white text-center rounded-2xl">
              <img
                src="/photo24234576117.jpg"
                alt="slide"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex gap-1 justify-center items-center px-1 rounded-[4px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] bg-white -translate-y-2.5">
              <span className="text-xs">کاربر عادی</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#353535] font-bold leading-[180%]">
            محمد رضا حسینی
          </h3>
          <p className="text-sm font-bold text-[#757575]">۰۹۱۲۳۴۵۶۷۸۹</p>
          <span className="text-sm flex items-center justify-strat gap-1 text-[#116EDB]">
            <img src="/svg/edit-2.svg" alt="icon" />
            ویرایش اطلاعات
          </span>
        </div>
      </div>

      {dashbordItem.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            if (item.titel === "خروج از حساب کاربری") {
              setlogout(true);
            }
          }}
          className="px-1 -rotate-1 bg-[#BACFF7] rounded-2xl mt-5"
        >
          <h2 className="flex gap-4 px-4 py-2 rotate-1 bg-white py-3.5 text-center leading-[140%] font-bold text-[#78829d] rounded-2xl shadow-[0px_0px_22.9px_0px_rgba(0,0,0,0.15)]">
            <img src={item.icon} alt="icon" />
            {item.titel}
          </h2>
        </div>
      ))}
      
      {logout && <Poupuplogout onClose={() => setlogout(false)} />}


      <Navbar />
    </div>
  );
}
