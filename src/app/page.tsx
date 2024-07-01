"use client";

import Link from "next/link";
import Image from "next/image";
import Carousel_recriação from "./components/carousel_recriação/page";


const HomePage = () => {

  const slogan1 = "Sabe aquela magia que só uma festa bem feita pode proporcionar?"
  const slogan2 = "Nós transformamos momentos especiais em memórias inesquecíveis com nossa recriação e decoração de festas dos sonhos!"
  const slogan3 = "A Ag Balloons nasceu da paixão por criar ambientes mágicos que transportam você para um mundo de fantasia, repleto de cores, alegria e sofisticação."
  const slogan4 = "Desde aniversários infantis até celebrações adultas, oferecemos decorações temáticas e personalizadas que vão além das expectativas."
  const slogan5 = "Quer uma festa de princesa, um safári emocionante ou uma elegante noite de gala? Nós realizamos!"
  const slogan6 = "Além das decorações encantadoras, temos uma equipe dedicada e criativa que garante que cada detalhe seja perfeito, fazendo com que a sua festa seja única e especial."
  const slogan7 = "Venha vivenciar a experiência única de uma festa criada por nós!"
  const slogan8 = "Transformamos qualquer evento em uma celebração mágica que vai encantar a todos, de crianças a adultos!"

  const convF1 = "/images/input/Convites/convite fechado.jpg"
  const convA1 = "/images/input/Convites/convite aberto.jpg"

  const decor1 = "/images/input/Decoração/avião.png";
  const decor2 = "/images/input/Decoração/pokemon.png";
  const decor3 = "/images/input/Decoração/stitch.png";
  const decor4 = "/images/input/Decoração/decor baby.png";
  const decor5 = "/images/input/Decoração/idade.png";
  const decor6 = "/images/input/Decoração/verão.png";

  return (
    <>
      <head>
        <title>Home | Kdev</title>
      </head>
      <body className="flex flex-col justify-center text-center w-1320 bg-gradient-to-b from-tertiary to-secundary">
        <main className="m-4 mt-0 p-16 pt-0">
          <Carousel_recriação />
          <div className="text-center m-2 p-1">
            <div>{slogan1}</div>
            <div>{slogan2}</div>
            <div>{slogan3}</div>
            <div>{slogan4}</div>
            <div>{slogan5}</div>
            <div>{slogan6}</div>
            <div>{slogan7}</div>
            <div>{slogan8}</div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
              <div className="w-52 h-96 p-1 m-4 bg-orange-600 hover:bg-pink-600 group">
                <div id="container" className="relative w-full h-full">
                  <Image src={convF1} alt="convite" layout="fill" objectFit="cover" className="transition-opacity duration-500 group-hover:opacity-0"></Image>
                  <Image src={convA1} alt="convite" layout="fill" objectFit="cover" className="transition-opacity duration-500 opacity-0 group-hover:opacity-100"></Image>
                </div>
              </div>
              <div className="w-52 h-96 p-1 m-4 bg-orange-600 hover:bg-pink-600 group">
                <div id="container" className="relative w-full h-full">
                  <Image src={convF1} alt="convite" layout="fill" objectFit="cover" className="transition-opacity duration-500 group-hover:opacity-0"></Image>
                  <Image src={convA1} alt="convite" layout="fill" objectFit="cover" className="transition-opacity duration-500 opacity-0 group-hover:opacity-100"></Image>
                </div>
              </div>
              <div className="w-52 h-96 p-1 m-4 bg-orange-600 hover:bg-pink-600 group">
                <div id="container" className="relative w-full h-full">
                  <Image src={convF1} alt="convite" layout="fill" objectFit="cover" className="transition-opacity duration-500 group-hover:opacity-0"></Image>
                  <Image src={convA1} alt="convite" layout="fill" objectFit="cover" className="transition-opacity duration-500 opacity-0 group-hover:opacity-100"></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around m-4 p-4">
            <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <li className="p-1 m-2 border-16 border-b-80 border-white -rotate-6"><Image src={decor1} layout="fill" alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white -rotate-2"><Image src={decor2} layout="fill" alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white rotate-12"><Image src={decor3} width={262} height={257} alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white rotate-12"><Image src={decor4} layout="fill" alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white -rotate-2"><Image src={decor5} layout="fill" alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white "><Image src={decor6} width={262} height={257} alt="foto"></Image></li>
            </ul>
          </div>
          <Carousel_recriação />
          <div className="flex justify-center m-1 p-2">
            <div className="grid grid-cols-3 gap-10">
              <div className="m-1 p-1 w-52 h-60 bg-lime-500 rounded-md">metade foto, metade descrição</div>
              <div className="m-1 p-1 w-52 h-60 bg-lime-500 rounded-md">metade foto, metade descrição</div>
              <div className="m-1 p-1 w-52 h-60 bg-lime-500 rounded-md">metade foto, metade descrição</div>
              <div className="m-1 p-1 w-52 h-60 bg-lime-500 rounded-md">metade foto, metade descrição</div>
              <div className="m-1 p-1 w-52 h-60 bg-lime-500 rounded-md">metade foto, metade descrição</div>
              <div className="m-1 p-1 w-52 h-60 bg-lime-500 rounded-md">metade foto, metade descrição</div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default HomePage;