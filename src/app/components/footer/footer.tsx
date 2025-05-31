import Link from "next/link";
import Image from "next/image";
import Container from "../container/container";

const Footer = () => {

    return (
        <>
            <footer className="bg-gray-700 text-white flex-1/3 justify-center">

                <Container >
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 items-center p-10">
                        <div className="grid justify-center py-5">
                            <Link href={"/"}><Image src="/logo-w.svg" alt={"SafeZone Logo"} width={300} height={300}></Image></Link>
                        </div>
                        <div className="py-5 grid md:justify-center">
                            <h3 className="text-2xl pb-3.5 font-(family-name:--font-title) uppercase font-bold">Navegação</h3>
                            <ul className="font-(family-name:--font-txt)">
                                <li className="mb-3 hover:text-gray-400"><Link href="/report">Abrigos</Link></li>
                                <li className="mb-3 hover:text-gray-400"><Link href="/wallet">Áreas de risco</Link></li>
                                <li className="mb-3 hover:text-gray-400"><Link href="/whyReport">Sobre nós</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center py-5">
                            <h3 className="text-sm pb-5 font-(family-name:--font-txt) uppercase font-bold">Em parceria com:</h3>
                            <a href="https://www.fiap.com.br/" target="_blank" rel="noopener noreferrer"><Image src="/fiap_logo_white.svg" alt={"fiap_logo"} width={100} height={100}></Image></a>
                        </div>
                    </div>
                    <div className="py-5 text-white text-xs text-center font-(family-name:--font-txt)">
                        <p>&copy; 2025 SafeZone - Juntos pela sua segurança.</p>
                    </div>
                </Container>
                
            </footer>
        </>
    )
}

export default Footer;