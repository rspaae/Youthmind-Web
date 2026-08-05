import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Fredoka } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/story/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YouthMind Company | Young minds. Meaningful conversations.",
  description: "YouthMind adalah perusahaan siswa (student company) dari SMKN 11 Bandung yang menghadirkan 2 board game edukasi kesehatan mental dan pembelajaran interaktif.",
  keywords: [
    "YouthMind",
    "SMKN 11 Bandung",
    "Board Game Kesehatan Mental",
    "Game-Based Learning",
    "Youth Entrepreneurship",
  ],
  authors: [{ name: "YouthMind Company" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable} ${fredoka.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col justify-between bg-slate-950 text-white selection:bg-teal-500 selection:text-slate-950">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
