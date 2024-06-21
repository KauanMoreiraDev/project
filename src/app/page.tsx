import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const ImageGithub = "/images/favicon.png"
  return (
    <>
      <head>
        <title>Home | Kdev</title>
      </head>
      <body>
        <h1 className="bg-blue-700 text-center">Olá, seja Bem-Vindo!</h1>
        <Image src={ImageGithub}
        alt="imagem do github"
        width={200}
        height={200}></Image>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolorem magnam totam sit. Atque possimus nulla nam laborum blanditiis ipsa qui delectus, natus rerum, officiis facere mollitia molestiae quae libero.
        Mollitia eius magnam doloremque quibusdam voluptatum non provident aut dignissimos harum dolorum aliquid amet, debitis autem natus neque aperiam rerum, totam sunt voluptas molestias delectus. Repellendus officiis veniam quasi recusandae!
        Temporibus, minima? Odio modi voluptatem animi? Suscipit, dolorem quia dolore obcaecati amet sapiente porro quae nihil rerum ducimus incidunt ab odio, numquam dicta fuga sint quod quibusdam. Sunt, nam veniam!
        Ipsam, consequatur quae doloremque esse ducimus distinctio velit, dolores, ipsa magni rerum delectus. Cum laboriosam quisquam tenetur aliquid vero nesciunt illum, explicabo eaque illo enim porro labore voluptate modi asperiores?
        Rerum expedita voluptatibus iusto assumenda distinctio. Ipsum, animi architecto? Magni officia facilis amet neque impedit corrupti ratione ea illum architecto, magnam quas odio saepe aliquid aut dicta doloremque deserunt temporibus.</p>
        <Link href="/sobre">Saiba mais </Link>
      </body>
    </>
  );
}

export default Home;