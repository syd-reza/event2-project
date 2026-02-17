"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/conponents/Navbar/Navbar";

const QomRoutingMap = dynamic(
  () => import("../../conponents/QomRoutingMapClient/QomRoutingMapClient"),
  { ssr: false }
);

export default function MasirPage() {
  const router = useRouter();
  return (
    <div>
      <div className="container text-white backgrandai pt-10 pb-3 flex justify-between items-center rounded-br-2xl rounded-bl-2xl">
        <img
          onClick={() => router.back()}
          src="/svg/Edit Square2.svg"
          alt="icon"
        />
        <h2 className="font-bold text-xl">اسکان چت</h2>
        <div></div>
      </div>
      <div className="mb-[100px]">
        <QomRoutingMap />
      </div>
      <Navbar />
    </div>
  );
}
