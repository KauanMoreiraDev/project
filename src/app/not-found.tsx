import Link from "next/link";

const NotFound = () => {
    const voltar = "/"

    return(
        <>
        <h1>404</h1>
        <h3>Opss... Página não encontrada, <Link href={voltar}>clique aqui para voltar ao inicio</Link></h3>
        </>
    );
}

export default NotFound;