import Link from "next/link";
import Image from "next/image";

const HomePage = () => {

  const slogan = "Sabe aquela magia que só uma festa bem feita pode proporcionar? Nós transformamos momentos especiais em memórias inesquecíveis com nossa recriação e decoração de festas dos sonhos! A Ag Balloons nasceu da paixão por criar ambientes mágicos que transportam você para um mundo de fantasia, repleto de cores, alegria e sofisticação.Desde aniversários infantis até celebrações adultas, oferecemos decorações temáticas e personalizadas que vão além das expectativas. Quer uma festa de princesa, um safári emocionante ou uma elegante noite de gala? Nós realizamos! Além das decorações encantadoras, temos uma equipe dedicada e criativa que garante que cada detalhe seja perfeito, fazendo com que a sua festa seja única e especial.  Venha vivenciar a experiência única de uma festa criada pela Festa Encantada! Transformamos qualquer evento em uma celebração mágica que vai encantar a todos, de crianças a adultos!"

  const convF1 = "/images/input/convite fechado.jpg"
  const convA1 = "/images/input/convite aberto.jpg"

  const decor1 = "/images/input/avião.png";
  const decor2 = "/images/input/pokemon.png";
  const decor3 = "/images/input/stitch.png";
  const decor4 = "/images/input/decor baby.png";
  const decor5 = "/images/input/idade.png";
  const decor6 = "/images/input/verão.png";

  return (
    <>
      <head>
        <title>Home | Kdev</title>
      </head>
      <body className="flex flex-col justify-center text-center w-1320 bg-gradient-to-b from-tertiary to-secundary">
        <main className="m-4 mt-0 p-16 pt-0">
          <p className="bg-gray-700 w-full h-72">CARROSSEL DE IMAGEM</p>
          <p className="text-center">{slogan}</p>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
              <div className="w-52 h-96 p-1 m-4 bg-orange-600 relative group">1</div>
              {/* <Image src={convF1} alt="convite" width={52} height={96}></Image> */}
                <div id="teste" className="hidden bg-blue-700 group-hover:block ">1.1</div>
                {/* <Image src={convA1} alt="convite" width={52} height={200}></Image> */}
              <div className="w-52 h-96 p-1 m-4 bg-orange-600">2</div>
              <div className="w-52 h-96 p-1 m-4 bg-orange-600">3</div>
            </div>
          </div>
          <div className="flex flex-row justify-around m-4 p-4">
            <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <li className="p-1 m-2 border-16 border-b-80 border-white -rotate-6"><Image src={decor1} width={280} height={257} alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white -rotate-2"><Image src={decor2} width={262} height={257} alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white rotate-12"><Image src={decor3} width={262} height={257} alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white rotate-12"><Image src={decor4} width={262} height={257} alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white -rotate-2"><Image src={decor5} width={262} height={257} alt="foto"></Image></li>
              <li className="p-1 m-2 border-16 border-b-80 border-white "><Image src={decor6} width={262} height={257} alt="foto"></Image></li>
            </ul>
          </div>
          <p className="bg-gray-700 w-full h-72">CARROSSEL DE IMAGEM</p>
          <p>Lembranças <br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quasi fuga incidunt provident itaque minima, sint excepturi ut quas odio placeat veritatis deserunt totam magnam, quisquam at. Eligendi, cupiditate aspernatur.
            Delectus molestias esse quasi nihil officiis commodi voluptates, alias illo illum sapiente sequi quisquam voluptate, non, dolores recusandae suscipit debitis praesentium vel repellat minima? Labore pariatur nesciunt placeat veniam earum.
            Placeat repudiandae tenetur modi, non reiciendis nostrum illum, eligendi cum dicta totam sequi, tempora explicabo magni quisquam ipsam! Doloremque sequi nesciunt accusamus in ex architecto, placeat facere laborum mollitia a?
            Aspernatur sint similique nisi possimus expedita dolorem recusandae accusantium, dolore, consectetur consequatur unde excepturi officiis ratione dolor. Fuga ipsa velit voluptas perferendis, repellat deleniti, saepe fugit culpa, quaerat quisquam molestiae.</p>
        </main>
      </body>
    </>
  );
}

export default HomePage;