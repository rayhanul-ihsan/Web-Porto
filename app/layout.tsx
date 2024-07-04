import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Portofolio",
  description: "This is my website portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>

        <Navbar />
        </header>
        <main>

        {children}
        </main>
        <Navigation/>
      </body>
    </html>
  );
}
