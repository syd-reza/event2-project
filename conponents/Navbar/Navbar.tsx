import React from "react";

export default function Navbar() {
  const Navbars = [
    { image: "/svg/frame.svg", title: "حساب کاربری" },
    { image: "/svg/messages-AI.svg", title: "دادچت" },
    { image: "/svg/home-2.svg", title: "خانه" },
    { image: "/svg/profile-2user.svg", title: "لیست وکلا" },
    { image: "/svg/document-text.svg", title: "مجله" },
  ];

  return (
    <div className="container left-0 right-0 fixed w-full bottom-4 z-50">
    <div className="flex items-center justify-between py-3 px-4 gap-2 bg-white rounded-2xl shadow-[0px_0px_22.9px_0px_rgba(0,0,0,0.15)]">
      {Navbars.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center gap-1">
          <img src={item.image} alt="navbar" />
          <p className="text-xs text-[#116EDB]">{item.title}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
