import type { Metadata } from "next";
import "./globals.css";
import OfflineNotice from "@/conponents/OfflineNotice/OfflineNotice";


export const metadata: Metadata = {
  title: "Event Project App",
  description: "Create By 404 Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <link rel="icon" href="logo-site.png" type="image/png"></link>
      <body>
        {children}
        <OfflineNotice/>
      </body>
    </html>
  );
}
