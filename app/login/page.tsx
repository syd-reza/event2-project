"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showForm, setShowForm] = useState(false);

  const handleBackgroundClick = () => {
    if (showForm) setShowForm(false);
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="relative min-h-dvh w-full bg-gradient-to-b from-[#116EDB] to-[#093B75] flex flex-col"
    >
      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col justify-center items-center text-center px-6 pt-8 pb-[120px] select-none ${
          showForm ? "overflow-hidden" : "overflow-y-auto"
        }`}
      >
        <img src="/Frame 1394.png" alt="logo" />
        <img
          src="/Frame.png"
          alt="mainpageimg"
          className="mb-5 mt-[38px] w-[200px]"
        />

        <p className="text-white text-justify leading-[180%] max-w-md">
          «دادرس» یک همراه هوشمند و مشاور حقوقی قابل‌اعتماد برای همه است. با این
          اپلیکیشن، شما می‌توانید در هر زمان و مکان سوالات حقوقی خود را از طریق
          صفحه چت مطرح کنید و پاسخ‌هایی نسبتا دقیق و مستند به قوانین دریافت
          کنید. با دادرس، قانون در دستان شماست!
        </p>
      </div>

      {/* Bottom Sheet */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-all duration-500 ${
          showForm
            ? "translate-y-0 max-h-[85vh] py-6"
            : "translate-y-[calc(100%-80px)] h-[80px] py-5"
        }`}
      >
        {!showForm ? (
          <div
            onClick={() => setShowForm(true)}
            className="cursor-pointer text-center"
          >
            <h3 className="text-[#4B5675] font-medium">ورود به حساب کاربری</h3>
          </div>
        ) : (
          <div className="px-6 overflow-y-auto max-h-[75vh]">
            <h2 className="text-[#4B5675] font-medium mb-6 text-center">
              ورود به حساب کاربری
            </h2>

            <label className="block text-right mb-2 font-medium text-[#252F4A]">
              نام کاربری
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-right focus:outline-none focus:ring-2 focus:ring-[#116EDB]"
            />

            <label className="block text-right mb-2 font-medium text-[#252F4A]">
              رمز عبور
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 text-right focus:outline-none focus:ring-2 focus:ring-[#116EDB]"
            />

            <button className="text-[#3E97FF] font-medium mb-3 block w-full">
              ثبت نام
            </button>

            <button className="w-full bg-[#116EDB] text-white py-3 rounded-xl active:scale-[0.98] transition">
              <Link href="/homepage">ورود</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
