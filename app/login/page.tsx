"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  fullname: string;
  phone: string;
  password: string;
  email: string;
}

export default function LoginPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    phone: "",
    password: "",
    email: "",
  });

  // ✅ جلوگیری از فلش خوردن هنگام ریدایرکت
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn === "true") {
      router.replace("/homepage");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  // ✅ قفل کردن اسکرول وقتی فرم باز است
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  const resetForm = () => {
    setFormData({
      fullname: "",
      phone: "",
      password: "",
      email: "",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 11);
      setFormData((prev) => ({ ...prev, phone: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = (): boolean => {
    if (isRegister) {
      if (!formData.fullname || !formData.phone || !formData.password || !formData.email) {
        alert("لطفا تمام فیلدها را پر کنید!");
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("لطفا یک ایمیل معتبر وارد کنید!");
        return false;
      }
    } else {
      if (!formData.phone || !formData.password) {
        alert("لطفا تمام فیلدها را پر کنید!");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    localStorage.setItem("isLoggedIn", "true");
    router.replace("/homepage");
  };

  // ✅ تا وقتی auth چک نشده، هیچ UI نمایش نده
  if (checkingAuth) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gradient-to-b from-[#116EDB] to-[#093B75]">
        <span className="text-white text-lg">در حال بررسی...</span>
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        if (showForm) {
          setShowForm(false);
          setIsRegister(false);
          resetForm();
        }
      }}
      className="relative min-h-dvh w-full bg-gradient-to-b from-[#116EDB] to-[#093B75] flex flex-col"
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 pt-8 pb-[120px] select-none overflow-y-auto">
        <div className="flex items-center gap-2">
          <img src="/Frame 1441.png" alt="logo" className="w-[60px]" />
          <h3 className="text-white font-bold text-3xl">قم اسکان</h3>
        </div>

        <img src="/mainimgvector.png" alt="main" className="w-full" />

        <p className="text-white text-justify leading-[180%] max-w-md">
          سفر وقتی لذت‌بخشه که محل اسکان، امن و مطمئن باشه...
        </p>
      </div>

      {/* Bottom Sheet */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-all duration-500 ${
          showForm
            ? "translate-y-0 h-[85vh] py-6"
            : "translate-y-[calc(100%-80px)] h-[80px] py-5"
        }`}
      >
        {!showForm ? (
          <div
            onClick={() => setShowForm(true)}
            className="cursor-pointer text-center"
          >
            <h3 className="text-[#4B5675] font-medium">
              ورود به حساب کاربری
            </h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6">
            <h2 className="text-[#4B5675] font-medium mb-6 text-center">
              {isRegister ? "ثبت نام" : "ورود به حساب کاربری"}
            </h2>

            {isRegister && (
              <>
                <label className="block text-right mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 mb-4 text-right"
                />

                <label className="block text-right mb-2">ایمیل</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 mb-4 text-right"
                />
              </>
            )}

            <label className="block text-right mb-2">شماره همراه</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 mb-4 text-right"
            />

            <label className="block text-right mb-2">رمز عبور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 mb-5 text-right"
            />

            {isRegister ? (
              <button type="submit" className="w-full bg-[#116EDB] text-white py-3 rounded-xl">
                ثبت نام
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setIsRegister(true);
                    resetForm();
                  }}
                  className="text-[#3E97FF] font-medium mb-3 block w-full"
                >
                  ثبت نام
                </button>

                <button type="submit" className="w-full bg-[#116EDB] text-white py-3 rounded-xl">
                  ورود
                </button>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
