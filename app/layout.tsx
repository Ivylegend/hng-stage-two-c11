import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileNavbar } from "@/components/MobileNavbar";
import { MobileFooter } from "@/components/MobileFooter";

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
        <div className="overflow-hidden bg-black w-full h-12 flex items-center">
          <div className="announcement whitespace-nowrap text-white flex gap-20">
           <p>Sales Now!!! Save up to 50%</p> 
           <p>Sales Now!!! Save up to 50%</p> 
           <p>Sales Now!!! Save up to 50%</p> 
          </div>
        </div>
        <Navbar />
        <MobileNavbar />
        {children}
        <Footer />
        <MobileFooter />
      </body>
    </html>
  );
}
