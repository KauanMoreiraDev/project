import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    const voltar = "/"

    return (
        <>
            <h1>404</h1>
            <h3>Opss... Página não encontrada, <Link href={voltar}>clique aqui para voltar ao inicio</Link></h3>
            <div className="relative w-full">
                <div className="absolute  w-full h-full">
                    <Image src="/images/backgroundConfete.webp" alt="papel de parede" width={1000} height={1000} className="w-full h-full object-cover" />
                </div>
                <div className="w-52 h-52 bg-blue-600"><p>aobaa</p></div>
            </div>

        </>
    );
}

export default NotFound;