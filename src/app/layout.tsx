import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#eae1d5] ${inter.className}`}>
        <div className="relative z-50">
          <div className='absolute top-6 left-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            <img className='h-20 w-15' src="/images/sowilo_rune_2.png" />
          </div>
          <div className='absolute top-4 right-2'>
            <Navbar />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
