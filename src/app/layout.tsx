import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "create by Kdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const imagePath = "/images/favicon.png";
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <nav className="bg-slate-500 flex flex-row justify-around items-center">
          <Image
            src={imagePath}
            alt="Logo da Kdev"
            width={50}
            height={50}
          ></Image>
          <Link href="/">Home </Link>
          <Link href="/sobre">Sobre </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
