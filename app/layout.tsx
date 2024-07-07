import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "JANORE",
  description: "Shop your favorite fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black w-full h-12 text-center text-white flex items-center justify-center">
          Sales Now!!! Save up to 50%
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
