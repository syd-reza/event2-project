import Link from "next/link";
import Pagetitel from "@/conponents/Pagetitel/Pagetitel";
import Navbar from "@/conponents/Navbar/Navbar";

export default function page() {
  const skanha = [
    {
      id: "ali-test-1",
      image: "/skan1.jpg",
      des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
      title: "علی علوی",
    },
    {
      id: "ali-test-2",
      image: "/skan2.jpg",
      des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
      title: "رضا صادقی",
    },
    {
      id: "ali-test-3",
      image: "/skan3.jpg",
      des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
      title: "علی علوی",
    },
    {
      id: "ali-test-4",
      image: "/skan4.jpg",
      des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
      title: "رضا صادقی",
    },
    {
      id: "ali-test-5",
      image: "/skan1.jpg",
      des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
      title: "رضا صادقی",
    },
    {
      id: "ali-test-6",
      image: "/skan2.jpg",
      des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
      title: "رضا صادقی",
    },
    {
      id: "ali-test-7",
      image: "/skan3.jpg",
      des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
      title: "رضا صادقی",
    },

    {
      id: "ali-test-8",
      image: "/skan4.jpg",
      des: "آقای احسان پناهیان متولد ۱۳۶۷ دارای ۸ سال سابقه وکالت پایه یک دادگستری در موضوعات مختلف خصوصا جرایم راهنمایی و رانندگی، سرقت، ثبت اسناد و ... می باشد.",
      title: "رضا صادقی",
    },
  ];

  return (
    <div className="container mt-4">
      <Pagetitel />

      <div className="flex justify-between items-center bg-[#F9F9F9] p-2 my-6 rounded-lg gap-2">
        <input
          type="text"
          placeholder="جستجو"
          className="bg-[#F9F9F9] w-full focus:outline-none"
        />
        <img src="/svg/Magnifer.svg" alt="icon" />
      </div>

      <div className="flex flex-col gap-3 divide-y divide-gray-300 mb-24">
        {skanha.map((item) => (
          <Link key={item.id} href={`/skanha/${item.id}`} className="flex gap-2 items-end pb-3">
            <div className="text-center">
              <div className="px-1 -rotate-5 bg-[#BACFF7] rounded-2xl">
                <div className="rotate-5 bg-white text-center rounded-2xl">
                  <img src={item.image} alt="slide" className="rounded-2xl w-[716px] h-[83px]" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="inline-flex gap-1 justify-center items-center px-1 rounded-[4px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] bg-white -translate-y-2.5">
                  <span>۴.۴</span>
                  <img src="/svg/Edit Square.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3>{item.title}</h3>
              <p className="text-[#ADADAD] line-clamp-2 text-justify">
                {item.des}
              </p>
              <span className="flex items-center justify-end gap-1 text-[#116EDB]">
                مشاهده همه
                <img src="/svg/arrow-left2.svg" alt="icon" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Navbar />
    </div>
  );
}
