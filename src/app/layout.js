import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Borrowing Platform",
  description: "Online Book Borrowing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-linear-to-r from-[#0d0d1a] to-[#0d1a2e]">
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}

// #0d0d1a, #1a0d2e, #0d1a2e
