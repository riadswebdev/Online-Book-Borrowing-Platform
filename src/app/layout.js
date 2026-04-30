import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import TopBooksMarque from "@/components/marque/TopBooksMarque";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter ({
  subsets: ['latin']
})

export const metadata = {
  title: "Book Borrowing Platform",
  description: "Online Book Borrowing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-linear-to-r from-gray-900 to-gray-950">
        <Navbar />
        <TopBooksMarque/>
        <main className="w-full max-w-350 mx-auto ">{children}</main>
      </body>
    </html>
  );
}


