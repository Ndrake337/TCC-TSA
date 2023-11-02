import { Menu } from "@/components/Menu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracker Solar",
  description: "none",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-row bg-white h-screen">
        <Menu />
        <div className="w-full text-black p-12 h-full">{children}</div>
      </body>
    </html>
  );
}
