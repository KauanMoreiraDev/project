"use client";

import Image from "next/image";
import Carousel_recriação from "./components/carousel_recriação/page";

const HomePage = () => {

  const slogan = [
    { frase: "Sabe aquela magia que só uma festa bem feita pode proporcionar?", },
    { marca: "AgBallons" },
    { frase: "Desde aniversários infantis até celebrações adultas, oferecemos decorações temáticas e personalizadas que vão além das expectativas." }]


  const convites = [{
    nome: "nome alt convite",
    fechado: "/images/input/Convites/convite fechado.jpg",
    aberto: "/images/input/Convites/convite aberto.jpg",
  },
  {
    nome: "nome alt convite",
    fechado: "/images/input/Convites/convite fechado.jpg",
    aberto: "/images/input/Convites/convite aberto.jpg",
  },
  {
    nome: "nome alt convite",
    fechado: "/images/input/Convites/convite fechado.jpg",
    aberto: "/images/input/Convites/convite aberto.jpg",
  }]

  const decor = [{
    nome: "nome alt convite",
    imagem: "/images/input/Decoração/avião.png",
  },
  {
    nome: "nome alt convite",
    imagem: "/images/input/Decoração/pokemon.png",
  },
  {
    nome: "nome alt convite",
    imagem: "/images/input/Decoração/stitch.png",
  },
  {
    nome: "nome alt convite",
    imagem: "/images/input/Decoração/decor baby.png",
  },
  {
    nome: "nome alt convite",
    imagem: "/images/input/Decoração/idade.png",
  },
  {
    nome: "nome alt convite",
    imagem: "/images/input/Decoração/verão.png",
  }]

  return (
    <>
      <head>
        <title>Home | Kdev</title>
      </head>
      <body className="flex flex-col justify-center text-center max-w-screen-2xl bg-gradient-to-b from-tertiary to-secundary relative">
        <main className="bg-[url('/images/backgroundConfete.webp')] bg-repeat">
          <div className="m-4 mt-0 p-16 pt-0">
            <Carousel_recriação />
            <div className="text-center m-2 mt-8 p-1">
              {slogan.map(auladogu => (
                <><div>{auladogu.frase}</div><div>
                  <div className="text-blue-600">{auladogu.marca}</div>
                </div></>
              ))}
            </div>
            <div className="flex flex-row justify-center">
              <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                <div className="w-52 h-96 p-1 m-4 bg-orange-600 hover:bg-pink-600 group">
                  {convites.map((cvtfn, index) => (
                    <div key={index} className="relative w-full h-full">
                      <Image src={cvtfn.fechado} alt={cvtfn.nome} layout="fill" objectFit="cover" className="transition-opacity duration-500 group-hover:opacity-0"></Image>
                      <Image src={cvtfn.aberto} alt={cvtfn.nome} layout="fill" objectFit="cover" className="transition-opacity duration-500 opacity-0 group-hover:opacity-100"></Image>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-around m-4 p-4">
              <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {decor.map((dccfn, index) => (
                  <li className="p-1 m-2 border-16 border-b-80 border-white -rotate-6"><Image key={index} src={dccfn.imagem} layout="fill" alt={dccfn.nome}></Image></li>
                ))}
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