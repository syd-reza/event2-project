"use client";

import { useEffect, useState } from "react";

export default function OfflineNotice({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
        <h1 className="text-2xl font-bold mb-2">
          اتصال اینترنت شما قطع شده است
        </h1>
        <p className="text-lg">لطفاً اتصال خود را به اینترنت بررسی کنید.</p>
      </div>
    );
  }

  return <>{children}</>;
}
