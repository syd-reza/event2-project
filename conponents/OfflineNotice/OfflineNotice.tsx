"use client";
import { useState, useEffect } from "react";

export default function OfflineNotice() {
  const [isOffline, setIsOffline] = useState(false);

  const checkConnection = () => setIsOffline(!navigator.onLine);

  useEffect(() => {
    checkConnection();

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-primary z-[99999] flex items-center justify-center text-white transition-opacity ${
        isOffline ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center px-6 max-w-sm">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
          📡
        </div>

        <h2 className="text-lg font-medium mb-2">اتصال اینترنت برقرار نیست</h2>

        <p className="text-sm text-white/70 mb-6">
          لطفاً اتصال خود را بررسی کرده و دوباره تلاش کنید.
        </p>

        <button
          onClick={checkConnection}
          className="bg-white text-primary px-6 py-2 rounded-xl text-sm"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}
