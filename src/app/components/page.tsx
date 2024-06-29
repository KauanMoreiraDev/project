import Image from "next/image";
import Link from "next/link";

const imagePath = "/images/logo.png";


const Header = () => {
    return (
        <>
            <h1>Ag Balloons - por Aline Godoy</h1>
            <nav className="bg-slate-500 flex flex-row justify-around items-center">
                <Link href="/">Convite</Link>
                <Link href="/">Decoração </Link>
                <Image src={imagePath} alt="Logo da Kdev" width={50} height={50} ></Image>
                <Link href="/">Recriação</Link>
                <Link href="/">Contato </Link>
            </nav>
        </>
    );
}

export default Header;