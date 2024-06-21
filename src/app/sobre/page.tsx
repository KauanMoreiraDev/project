import Link from "next/link";
import Image from "next/image";

const Contato = () => {
  const InstagramImage = "/images/instagram.png"
  const GithubImage = "/images/github.png"
  const LinkedinImage = "/images/linkedin.png"
  const EmailImage= "/images/o-email.png"
  return (
    <>
      <head>
        <title>Contato | Kdev</title>
      </head>
      <main>
        <h1>Um pouco sobre a minha história</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non hic voluptatibus adipisci obcaecati, doloremque illum voluptatum minus similique saepe, veritatis unde nisi consequatur consectetur beatae aspernatur facilis at doloribus.
        Repellendus saepe qui temporibus obcaecati illum, voluptatem reprehenderit. Repellendus dolore error ipsam, doloribus, ea placeat praesentium architecto sit voluptate sapiente itaque. Aspernatur accusantium aliquid blanditiis deserunt repellat quos facilis assumenda.
        Non, iste vel? Officia accusantium natus nulla, unde ex neque qui nam eius cum ut voluptatibus a hic odit rerum! Pariatur culpa eius numquam ipsa autem nam, id iusto doloribus?
        Consequuntur veritatis nemo fugiat maiores aliquam, ut quaerat? Excepturi quasi ipsum voluptatum officia, minima sapiente, harum optio nihil sint quos debitis nulla amet iusto nemo cupiditate quod quisquam voluptate ullam.
        Voluptatem, exercitationem aliquam consequuntur impedit distinctio assumenda est repellendus mollitia accusamus soluta, facilis perspiciatis unde. Laborum necessitatibus maiores, repellat id distinctio commodi consectetur, magni veritatis maxime repellendus assumenda amet eum!
        A iste et at nihil adipisci rerum doloribus placeat dicta vitae quasi minima perferendis cum earum, atque, aspernatur iusto. Minus blanditiis ex alias quaerat officia? Soluta nostrum blanditiis facere assumenda.
        Ea, quod molestiae illum deleniti voluptatem dicta quam. Praesentium ipsum debitis accusantium dicta nihil accusamus recusandae corrupti voluptates ducimus voluptate, mollitia consequuntur nesciunt facere vel impedit fuga vitae eos reprehenderit.
        Fuga ipsum iure aut ipsam perspiciatis, debitis ex, reprehenderit nulla eaque autem magnam, quasi repudiandae blanditiis ullam adipisci sunt aperiam asperiores omnis. Ipsam nisi voluptates, adipisci iure magni odio aliquid.</p>
        <Link href={"https://instagram.com/kauannmoreira_"} target="_blank"><Image src={InstagramImage} alt="instagram" width={50} height={50}></Image> </Link>
        <Link href={"https://github.com/KauanMoreiraDev"} target="_blank"><Image src={GithubImage} alt="Github" width={50} height={50}></Image> </Link>
        <Link href={"https://github.com/KauanMoreiraDev"} target="_blank"><Image src={LinkedinImage} alt="Linkedin" width={50} height={50}></Image> </Link>
        <Link href={"https://github.com/KauanMoreiraDev"} target="_blank"><Image src={EmailImage} alt="Email" width={50} height={50}></Image> </Link>
        <Link href="/">Voltar para a página inicial</Link>
      </main>
    </>
  );
}

export default Contato;