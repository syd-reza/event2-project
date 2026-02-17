"use client";

import { useEffect, useState } from "react";

export default function OfflineNotice({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // بررسی وضعیت اولیه
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // اضافه کردن listener برای تغییر لحظه‌ای اینترنت
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {!isOnline ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 p-4 text-center">
          <h1 className="text-2xl font-bold mb-2">اتصال اینترنت شما قطع شد!</h1>
          <p className="text-lg">لطفاً اتصال خود را بررسی کنید.</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
