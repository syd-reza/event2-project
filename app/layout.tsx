import type { Metadata } from "next";
import "./globals.css";


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
      </body>
    </html>
  );
}
