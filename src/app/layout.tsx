import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SubscribeProvider } from "@/lib/SubscribeContext";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legion Of Wholeness",
  description: "Helping others to find their strength through remembering their true self.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`bg-[#eae1d5] ${inter.className}`}>
        <SubscribeProvider>{children}</SubscribeProvider>
        <Analytics />
      </body>
    </html>
  );
}
