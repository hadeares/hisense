import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import Popup from "@/components/Popup";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({ src: '../public/hisense.woff2' })

export const metadata: Metadata = {
  title: "Hisense - Eletrodomésticos e eletrônicos",
  description: "Como fabricante global de eletrônicos e eletrodomésticos, a Hisense está comprometida em fornecer soluções de ponta que priorizam as pessoas e que melhoram sua qualidade de vida. Acreditamos que todos deveriam ter acesso às inovações que criam as conveniências modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`text-sm md:text-md xl:text-lg text-dark`}>
        <Navbar />
        {children}
        <ToTop />
        <Popup />
        <Footer />
      </body>
    </html>
  );
}
