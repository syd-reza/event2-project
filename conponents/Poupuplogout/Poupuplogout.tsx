"use client";
import Link from "next/link";
import React from "react";

interface PoupuplogoutProps {
  onClose: () => void;
}

export default function Poupuplogout({ onClose }: PoupuplogoutProps) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[90%] max-w-sm rounded-2xl p-6 shadow-xl"
      >
        <h3 className="text-center font-bold text-lg mb-4">آیا مطمئن هستید؟</h3>

        <div className="flex gap-3 z-20 relative">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl bg-gray-200"
          >
            انصراف
          </button>

          <button className="flex-1 py-2 rounded-xl bg-red-500 text-white">
            <Link href="/login">خروج</Link>
          </button>
        </div>
      </div>

      <div className="absolute inset-0" onClick={onClose}></div>
    </div>
  );
}
