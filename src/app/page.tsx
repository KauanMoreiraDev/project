import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const slogan = "Sabe aquela magia que só uma festa bem feita pode proporcionar? Nós transformamos momentos especiais em memórias inesquecíveis com nossa recriação e decoração de festas dos sonhos! A Ag Balloons nasceu da paixão por criar ambientes mágicos que transportam você para um mundo de fantasia, repleto de cores, alegria e sofisticação.Desde aniversários infantis até celebrações adultas, oferecemos decorações temáticas e personalizadas que vão além das expectativas. Quer uma festa de princesa, um safári emocionante ou uma elegante noite de gala? Nós realizamos! Além das decorações encantadoras, temos uma equipe dedicada e criativa que garante que cada detalhe seja perfeito, fazendo com que a sua festa seja única e especial.  Venha vivenciar a experiência única de uma festa criada pela Festa Encantada! Transformamos qualquer evento em uma celebração mágica que vai encantar a todos, de crianças a adultos!"

  const InstagramImage = "/images/instagram.png"
  const GithubImage = "/images/github.png"
  const LinkedinImage = "/images/linkedin.png"
  const EmailImage = "/images/o-email.png"
  return (
    <>
      <head>
        <title>Home | Kdev</title>
      </head>
      <body className="flex flex-col justify-center text-center w-1200 bg-gradient-to-b from bg-tertiary to-bg-secundary">
        <p className="bg-gray-700 w-full h-36">CARROSSEL DE IMAGEM</p>
        <p className="text-center">{slogan}</p>
        <div className="w-4/5 flex justify-center">
          <div className="w-52 h-96 p-1 m-4 bg-orange-600">1</div>
          <div className="w-52 h-96 p-1 m-4 bg-orange-600">2</div>
          <div className="w-52 h-96 p-1 m-4 bg-orange-600">3</div>
        </div>
        <div className="flex flex-row justify-around">
          <div className="w-28 h-36 p-1 m-2 bg-lime-500 border-4 border-b-8 border-white"></div>
          <div className="w-28 h-36 p-1 m-2 bg-lime-500"></div>
          <div className="w-28 h-36 p-1 m-2 bg-lime-500"></div>
          <div className="w-28 h-36 p-1 m-2 bg-lime-500"></div>
          <div className="w-28 h-36 p-1 m-2 bg-lime-500"></div>
          <div className="w-28 h-36 p-1 m-2 bg-lime-500"></div>
        </div>
        <p className="bg-gray-700 w-full h-36">CARROSSEL DE IMAGEM</p>
        <p>Lembranças <br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quasi fuga incidunt provident itaque minima, sint excepturi ut quas odio placeat veritatis deserunt totam magnam, quisquam at. Eligendi, cupiditate aspernatur.
        Delectus molestias esse quasi nihil officiis commodi voluptates, alias illo illum sapiente sequi quisquam voluptate, non, dolores recusandae suscipit debitis praesentium vel repellat minima? Labore pariatur nesciunt placeat veniam earum.
        Placeat repudiandae tenetur modi, non reiciendis nostrum illum, eligendi cum dicta totam sequi, tempora explicabo magni quisquam ipsam! Doloremque sequi nesciunt accusamus in ex architecto, placeat facere laborum mollitia a?
        Aspernatur sint similique nisi possimus expedita dolorem recusandae accusantium, dolore, consectetur consequatur unde excepturi officiis ratione dolor. Fuga ipsa velit voluptas perferendis, repellat deleniti, saepe fugit culpa, quaerat quisquam molestiae.</p>
      </body>
    </>
  );
}

export default HomePage;