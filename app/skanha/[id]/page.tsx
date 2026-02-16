"use client";

import { useParams } from "next/navigation";
import Navbar from "@/conponents/Navbar/Navbar";
import Image from "next/image";

const skanha = [
  {
    id: "ali-test-1",
    image: "/Frame 1418.png",
    des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
    title: "علی علوی",
  },
  {
    id: "ali-test-2",
    image: "/Frame 1418.png",
    des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
    title: "رضا صادقی",
  },
  {
    id: "ali-test-3",
    image: "/Frame 1418.png",
    des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
    title: "علی علوی",
  },
  {
    id: "ali-test-4",
    image: "/Frame 1418.png",
    des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
    title: "رضا صادقی",
  },
  {
    id: "ali-test-5",
    image: "/Frame 1418.png",
    des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
    title: "رضا صادقی",
  },
  {
    id: "ali-test-6",
    image: "/Frame 1418.png",
    des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
    title: "رضا صادقی",
  },
  {
    id: "ali-test-7",
    image: "/Frame 1418.png",
    des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
    title: "رضا صادقی",
  },

  {
    id: "ali-test-8",
    image: "/Frame 1418.png",
    des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
    title: "رضا صادقی",
  },
];

export default function SkanhaDetailPage() {
  const params = useParams();
  const person = skanha.find((item) => item.id === params?.id);

  if (!person) return <div>چیزی پیدا نشد</div>;

  return (
    <div className="container mt-8">
      <div className="flex gap-2 pb-3 items-start">
        <div className="text-center w-[98px]">
          <div className="px-1 -rotate-5 bg-[#BACFF7] rounded-2xl">
            <div className="rotate-5 bg-white text-center rounded-2xl">
              <img src={person.image} alt="slide" className="rounded-2xl" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex gap-1 justify-center items-center px-1 rounded-[4px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] bg-white -translate-y-2.5">
              <span>۴.۴</span>
              <img src="/svg/Edit Square.svg" alt="icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#353535] font-bold leading-[180%]">
            {person.title}
          </h3>
          <p className="text-sm text-[#757575]">۸ سال سابقه</p>
          <span className="text-sm flex items-center justify-strat gap-1 text-[#116EDB]">
            <img src="/svg/call.svg" alt="icon" />
            تماس
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="leading-[180%] text-[#353535] font-bold text-center">
          توضیحات
        </h3>
        <p className="text-[#4B5675] leading-[180%] text-justify">
          {person.des}
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h3 className="leading-[180%] text-[#353535] font-bold text-center">
          اطلاعات تماس
        </h3>
        <span className="text-sm flex items-center justify-strat gap-1 text-[#116EDB]">
          <img src="/svg/call.svg" alt="icon" />
          ۰۹۱۲۳۴۵۶۷۸۹
        </span>
        <span className="text-sm flex items-center justify-strat gap-1 text-[#116EDB]">
          <img src="/svg/location.svg" alt="icon" />
          قم، روبری تالار نخلستان
        </span>
      </div>

      <div className="flex gap-4 mt-6">
        <div className="w-full px-0.5 -rotate-4 bg-[#BACFF7] rounded-2xl">
          <div className="flex flex-col gap-2 items-center h-full justify-center rotate-4 bg-white p-2 py-6 text-center text-xs rounded-2xl shadow-[0px_0px_3.1px_0px_rgba(0,0,0,0.20)]">
            <span className="text-sm font-bold">امکانات</span>
            <p className="leading-[140%] text-xs font-bold text-[#4B5675]">
              آب شرب، سرویس بهداشتی
            </p>
          </div>
        </div>
        <div className="w-full px-0.5 -rotate-4 bg-[#BACFF7] rounded-2xl">
          <div className="flex flex-col gap-2 items-center h-full justify-center rotate-4 bg-white p-2 py-6 text-center text-xs rounded-2xl shadow-[0px_0px_3.1px_0px_rgba(0,0,0,0.20)]">
            <span className="text-sm font-bold">پارکینگ</span>
            <p className="leading-[140%] text-xs font-bold text-[#4B5675]">
              دارد
            </p>
          </div>
        </div>
      </div>

      <div className="my-6 rounded-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.623456789012!2d50.875!3d34.639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f968f8c12345678%3A0xabcdef1234567890!2sQom%2C%20Iran!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
          allowFullScreen
          className="rounded-2xl border-none h-[333px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex gap-4 mb-28">
        <div className="w-full px-0.5 -rotate-4 bg-[#BACFF7] rounded-2xl">
          <div className="flex flex-col gap-2 items-center h-full justify-center rotate-4 bg-white p-2 py-6 text-center text-xs rounded-2xl shadow-[0px_0px_3.1px_0px_rgba(0,0,0,0.20)]">
            <span className="text-sm font-bold">ظرفیت محل</span>
            <p className="leading-[140%] text-xs font-bold text-[#4B5675]">
            350 نفر
            </p>
          </div>
        </div>
        <div className="w-full px-0.5 -rotate-4 bg-[#BACFF7] rounded-2xl">
          <div className="flex flex-col gap-2 items-center h-full justify-center rotate-4 bg-white p-2 py-6 text-center text-xs rounded-2xl shadow-[0px_0px_3.1px_0px_rgba(0,0,0,0.20)]">
            <span className="text-sm font-bold">وضعیت فعلی </span>
            <p className="leading-[140%] text-xs font-bold text-[#4B5675]">
            124 نفر ظرفیت دارد
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
