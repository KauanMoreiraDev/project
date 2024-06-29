import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
// import Header from "/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "create by Kdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const imagePath = "/images/logo.png";
  const TelefoneImage = "/images/chamada-telefonica.png";
  const WhatsappImage = "/images/whatsapp_logo.png";
  const InstagramImage = "/images/instagram.png";
  const EmailImage = "/images/envelope.png";

  const Contato = "Entre em Contato Conosco"
  const SloganFooter = "A Diversão para Festa, Está Aqui!"
  const Telefone = "tel:+55 (19)998707515"
  const Whatsapp = "https://api.whatsapp.com/send/?phone=5519998707515&text&type=phone_number&app_absent=0"
  const Instagram = "https://www.instagram.com/ag.balloons/"
  const Email = "https://mail.google.com/mail/?view=cm&fs=1&to=aline.3godoy@hotmail.com"
  const Kdev = "https://github.com/KauanMoreiraDev"

  return (
    <html lang="pt-br">
      <body>
        {/* {Header/}    */}
        {children}
        <footer className="bg-slate-100 w-full h-1/4 flex flex-col justify-center text-center">
          <h1>{Contato}</h1>
          <span className="flex flex-row justify-center">
            <Link href={Telefone} target="_blank"><Image className="p-1 m-1" src={TelefoneImage} alt="Telefone" width={40} height={40}></Image> </Link>
            <Link href={Whatsapp} target="_blank"><Image className="p-1 m-1" src={WhatsappImage} alt="Whatsapp" width={40} height={40}></Image> </Link>
            <Link href={Instagram} target="_blank"><Image className="p-1 m-1" src={InstagramImage} alt="instagram" width={40} height={40}></Image> </Link>
            <Link href={Email} target="_blank"><Image className="p-1 m-1" src={EmailImage} alt="Email" width={40} height={40}></Image> </Link>
          </span>
          <p>{SloganFooter}</p>
          <div className="flex justify-center items-center m-2 p-2">
            <Link className="w-56 h-8 text-secundary rounded-full hover:bg-secundary hover:text-white hover:underline transition duration-500" href={Kdev} target="_blank">Desenvolvido por Kdev</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
