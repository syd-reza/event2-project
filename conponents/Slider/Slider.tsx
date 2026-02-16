"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 

import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="w-full mx-auto mt-6">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="customSwiperTwo rounded-[20px] h-[190px]"
      >
        <SwiperSlide>
          <img src="/slider1.jpg" alt="sliderimg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider2.jpg" alt="sliderimg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider3.jpg" alt="sliderimg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
