"use client";

import Image from "next/image";
import Carousel_recriação from "./components/carousel_recriação/page";

const HomePage = () => {

  const slogan = [
    { frase: "Sabe aquela magia que só uma festa bem feita pode proporcionar?", },
    { marca: "AgBallons" },
    { frase: "Desde aniversários infantis até celebrações adultas, oferecemos decorações temáticas e personalizadas que vão além das expectativas." }]


  const convF1 = "/images/input/Convites/convite fechado.jpg"
  const convA1 = "/images/input/Convites/convite aberto.jpg"

  const decor1 = "/images/input/Decoração/avião.png"
  const decor2 = "/images/input/Decoração/pokemon.png"
  const decor3 = "/images/input/Decoração/stitch.png"
  const decor4 = "/images/input/Decoração/decor baby.png"
  const decor5 = "/images/input/Decoração/idade.png"
  const decor6 = "/images/input/Decoração/verão.png"

  // <Image src="/images/backgroundConfete.webp" alt="image" width={2000} height={1000} className="bg-blend-darken absolute object-cover inset-0 bg-repeat bg-contain -z-10" />
  // <main className="m-4 mt-0 p-16 pt-0">

  return (
    <>
      <head>
        <title>Home | Kdev</title>
      </head>
      <body className="flex flex-col justify-center text-center max-w-screen-2xl bg-gradient-to-b from-tertiary to-secundary relative">
        <main className="m-4 mt-0 p-16 pt-0">
          <div className="relative w-full">
            <div className="absolute  w-full h-full -z-10 -top-32 -m-16">
              <Image src="/images/backgroundConfete.webp" alt="papel de parede" width={1000} height={1000} className="bg-repeat-y bg-cover"/>
            </div>



            <Carousel_recriação />
            <div className="text-center m-2 mt-8 p-1">
              {slogan.map(auladogu => (
                <><div>{auladogu.frase}</div><div>
                  <div className="text-blue-600">{auladogu.marca}</div>
                </div></>
              ))}
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
          </div>
        </main >
      </body >
    </>
  );
}

export default HomePage;