import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./layout/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Reown | The onchain UX platform — Reown",
  description:
    "Reown gives developers the tools to build user experiences that make digital ownership effortless, intuitive, and secure. Explore now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-[1580px] mx-auto px-2 pt-14 pb-4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
