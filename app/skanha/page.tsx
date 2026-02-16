import React from "react";
import Pagetitel from "@/conponents/Pagetitel/Pagetitel";

export default function page() {
  return (
    <div className="container mt-4">
      <Pagetitel />

      <div className="flex justify-between items-center bg-[#F9F9F9] p-2 mt-6 rounded-lg gap-2">
        <input type="text" placeholder="جستجو" className="bg-[#F9F9F9] w-full focus:outline-none" />
        <img src="/svg/Magnifer.svg" alt="icon" />
      </div>
    </div>
  );
}
