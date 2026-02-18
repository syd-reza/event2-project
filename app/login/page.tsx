"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showForm, setShowForm] = useState(false);
  const [isRegister, setIsRegister] = useState(false); 
  const [formData, setFormData] = useState({ fullname: "", phone: "", password: "", email: "" });
  const router = useRouter();

  const handleBackgroundClick = () => {
    if (showForm) {
      setShowForm(false);
      setIsRegister(false);  
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 11);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (isRegister) {
      if (!formData.fullname || !formData.phone || !formData.password || !formData.email) {
        alert("لطفا تمام فیلدها را پر کنید!");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("لطفا یک ایمیل معتبر وارد کنید!");
        return;
      }
    } else {
      if (!formData.phone || !formData.password) {
        alert("لطفا تمام فیلدها را پر کنید!");
        return;
      }
    }
    router.push("/homepage"); 
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
        <div className="flex items-center gap-2">
          <img src="/Frame 1441.png" alt="mainpageimg" className="w-[60px]" />
          <h3 className="text-white font-bold text-3xl">قم اسکان</h3>
        </div>
        <div>
          <img src="/mainimgvector.png" alt="mainpageimg" className="w-full" />
        </div>

        <p className="text-white text-justify leading-[180%] max-w-md">
          سفر وقتی لذت‌بخشه که محل اسکان، امن و مطمئن باشه. اپلیکیشن ما به شما
          کمک می‌کنه سریع و ساده، بهترین مکان‌های اسکان مسافران در شهر رو پیدا
          کنید و با اطلاعات شفاف، موقعیت دقیق و انتخاب آگاهانه، سفرتون رو با
          آرامش شروع کنید.
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
          <div className="px-6 overflow-y-hidden max-h-[75vh]">
            {isRegister ? (
              <>
                <h2 className="text-[#4B5675] font-medium mb-6 text-center">
                  ثبت نام
                </h2>

                <label className="block text-right mb-2 font-medium text-[#252F4A]">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-right focus:outline-none focus:ring-2 focus:ring-[#116EDB]"
                />

                <label className="block text-right mb-2 font-medium text-[#252F4A]">
                  شماره همراه
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={11}
                  pattern="\d{10,11}"
                  placeholder="مثال: 09123456789"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-right focus:outline-none focus:ring-2 focus:ring-[#116EDB]"
                />

                <label className="block text-right mb-2 font-medium text-[#252F4A]">
                  ایمیل
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-right focus:outline-none focus:ring-2 focus:ring-[#116EDB]"
                />

                <label className="block text-right mb-2 font-medium text-[#252F4A]">
                  رمز عبور
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 text-right focus:outline-none focus:ring-2 focus:ring-[#116EDB]"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#116EDB] text-white py-3 rounded-xl active:scale-[0.98] transition"
                >
                  ثبت نام
                </button>

                <p
                  onClick={() => setIsRegister(false)}
                  className="mt-4 text-center text-[#3E97FF] cursor-pointer"
                >
                  قبلا حساب دارم، ورود
                </p>
              </>
            ) : (
              <>
                <h2 className="text-[#4B5675] font-medium mb-6 text-center">
                  ورود به حساب کاربری
                </h2>

                <label className="block text-right mb-2 font-medium text-[#252F4A]">
                  شماره همراه
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={11}
                  pattern="\d{10,11}"
                  placeholder="مثال: 09123456789"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-right focus:outline-none focus:ring-2 focus:ring-[#116EDB]"
                />

                <label className="block text-right mb-2 font-medium text-[#252F4A]">
                  رمز عبور
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 text-right focus:outline-none focus:ring-2 focus:ring-[#116EDB]"
                />

                <button
                  onClick={() => setIsRegister(true)}
                  className="text-[#3E97FF] font-medium mb-3 block w-full"
                >
                  ثبت نام
                </button>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#116EDB] text-white py-3 rounded-xl active:scale-[0.98] transition"
                >
                  ورود
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
