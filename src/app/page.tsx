import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const ImageGithub = "/public/images/github.png"
  return (
    <>
      <head>
        <title>Home | Kdev</title>
      </head>
      <body>
        <h1>Olá, seja Bem-Vindo!</h1>
        <Link href="/contato">Entre em contato conosco </Link>
        <Image src={ImageGithub}
        alt="imagem do github"
        width={50}
        height={50}></Image>
      </body>
    </>
  );
}

export default Home;