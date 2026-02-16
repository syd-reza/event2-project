"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Skanchat() {
  const router = useRouter();

  const [slides, setSlides] = useState([
    {
      id: 1,
      titel: "برای اسکان موقت زائران در قم چه مراکزی وجود دارد؟",
      answer:
        "زائران می‌توانند از هتل‌ها، مهمانپذیرها، زائرسراها و منازل استیجاری مجاز استفاده کنند. همچنین در ایام خاص، برخی مدارس و سالن‌های ورزشی توسط نهادهای شهری برای اسکان موقت تجهیز می‌شوند.",
    },
    {
      id: 2,
      titel: "چگونه از مجاز بودن یک اقامتگاه در قم مطمئن شویم؟",
      answer:
        "اقامتگاه‌های مجاز دارای مجوز رسمی از اداره میراث فرهنگی و گردشگری هستند.",
    },
    {
      id: 3,
      titel: "در صورت مشاهده منازل غیرمجاز برای اسکان زائران چه باید کرد؟",
      answer:
        "موضوع را از طریق سامانه ۱۳۷ شهرداری قم یا پلیس اماکن گزارش دهید.",
    },
  ]);

  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);

  const [inputValue, setInputValue] = useState("");

  const typeAnswer = (fullText: string) => {
    let index = 0;
    let currentText = "";

    setMessages((prev) => [...prev, { role: "bot", text: "" }]);

    const interval = setInterval(() => {
      currentText += fullText[index];
      index++;

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].text = currentText;
        return updated;
      });

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 25);
  };

  const handleClick = async (item: any) => {
    // اضافه کردن سوال کاربر
    setMessages((prev) => [...prev, { role: "user", text: item.titel }]);

    // حذف سوال از لیست
    setSlides((prev) => prev.filter((slide) => slide.id !== item.id));

    // اگر FAQ جواب دارد، مستقیم تایپ کن
    if (item.answer) {
      setTimeout(() => typeAnswer(item.answer), 300);
      return;
    }

    // در غیر این صورت، سوال را به OpenRouter بفرست
    await askOpenRouter(item.titel);
  };

  const handleSendInput = async () => {
    if (!inputValue.trim()) return;

    // اضافه کردن سوال کاربر
    setMessages((prev) => [...prev, { role: "user", text: inputValue }]);
    const question = inputValue;
    setInputValue("");

    // بررسی FAQ
    const foundFAQ = slides.find((slide) => slide.titel === question);
    if (foundFAQ) {
      typeAnswer(foundFAQ.answer);
      setSlides((prev) => prev.filter((s) => s.id !== foundFAQ.id));
      return;
    }

    // ارسال به API
    await askOpenRouter(question);
  };

  const askOpenRouter = async (question: string) => {
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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",
          },
          body: JSON.stringify({
            model: "openai/gpt-4o-mini",
            messages: [
              {
                role: "system",
                content:
                  "تو یک چت‌بات فارسی هستی و فقط درباره شهر قم، اسکان زائران و گردشگری پاسخ می‌دهی.",
              },
              ...messages.map((m) => ({
                role: m.role === "user" ? "user" : "assistant",
                content: m.text,
              })),
              { role: "user", content: question },
            ],
          }),
        }
      );

      const data = await response.json();
      const aiReply = data.choices?.[0]?.message?.content || "بدون پاسخ";
      typeAnswer(aiReply);
    } catch (err) {
      console.error(err);
      typeAnswer("❌ خطا در اتصال به سرور");
    }
  };

  return (
    <div className="pb-32">
      <div className="container text-white backgrandai pt-10 pb-3 flex justify-between items-center rounded-br-2xl rounded-bl-2xl">
        <img
          onClick={() => router.back()}
          src="/svg/Edit Square2.svg"
          alt="icon"
        />
        <h2 className="font-bold text-xl">اسکان چت</h2>
        <div></div>
      </div>

      <div className="container mt-4">
        {/* پیام‌ها */}
        <div className="space-y-4 mb-8">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] p-3 rounded-2xl text-sm leading-[170%] ${
                msg.role === "user"
                  ? "bg-[#116EDB] text-white ml-auto"
                  : "bg-[#F1F1F2] text-[#353535] mr-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* سوالات پیشنهادی */}
        {slides.length > 0 && (
          <div className="mt-8">
            <h4 className="text-center text-[#116EDB] text-sm font-bold mb-4">
              موضوعات پیشنهادی
            </h4>

            {slides.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item)}
                className="mb-4 px-1 -rotate-1 bg-[#BACFF7] rounded-2xl cursor-pointer"
              >
                <h2 className="px-2 rotate-1 bg-white py-3.5 text-center text-[#353535] rounded-2xl shadow-[0px_0px_22.9px_0px_rgba(0,0,0,0.15)]">
                  {item.titel}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* اینپوت پایین */}
      <div className="container fixed inset-x-0 bottom-4 w-full z-50">
        <div className="flex gap-2 items-center rounded-2xl p-2 shadow-[0px_0px_22.9px_0px_rgba(0,0,0,0.15)] bg-white">
          <button
            className="bg-[#116EDB] p-2 rounded-lg"
            onClick={handleSendInput}
          >
            <img src="/svg/send.svg" alt="icon" />
          </button>
          <input
            type="text"
            placeholder="شرح مسئله"
            className="bg-[#F9F9F9] p-2 rounded-lg w-full focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendInput()}
          />
        </div>
      </div>
    </div>
  );
}
