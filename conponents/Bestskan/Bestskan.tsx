"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

export default function Bestskan() {
  const slides = [
    { image: "/skan1.jpg", title: "مدرسه رجایی" },
    { image: "/skan2.jpg", title: "مسجد جمکران" },
    { image: "/skan3.jpg", title: "حرم مطهر" },
    { image: "/skan4.jpg", title: "بوستان علوی" },
  ];

  return (
    <div className="w-full mx-auto mt-6">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <img src="/svg/Vector.svg" alt="icon" />
          <h4>بهترین اسکان ها </h4>
        </div>
        <Link href="/skanha">
        <span className="flex items-center gap-1 text-[#116EDB]">
          مشاهده همه
          <img src="/svg/arrow-left2.svg" alt="icon" />
        </span>
        </Link>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={12}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-[93px] h-[62px] text-center">
            <div className="px-1 -rotate-5 bg-[#BACFF7] rounded-2xl">
              <div className="rotate-5 bg-white text-center rounded-2xl">
                <img src={slide.image} alt="slide" className="rounded-2xl w-full h-[62px]" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="inline-flex gap-1 justify-center items-center px-1 rounded-[4px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] bg-white -translate-y-2.5">
                <span>۴.۴</span>
                <img src="/svg/Edit Square.svg" alt="icon2" />
              </div>
            </div>
            <p className="text-sm leading-[180%]">{slide.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
