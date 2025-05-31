import Container from "@/app/components/container/container";
import Link from "next/link";

const Cadastro = () => {

    return (
        <>
            <section className="mt-10 py-40 h-auto">
                <Container>

                    <h1>Cadastro</h1>

                </Container>

                <Link href={"/login"} className="text-blue-500 hover:text-blue-700">
                    <p className="text-center">Já tem uma conta? Faça login aqui!</p>
                </Link>
            </section>
        </>
    )
}

export default Cadastro;