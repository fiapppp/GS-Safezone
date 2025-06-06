"use client";
import Link from "next/link";
import Container from "@/app/components/container/container";
import Image from "next/image";

const NotFound = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <Container>
        <div className="text-center max-w-xl mx-auto p-10 bg-white rounded-xl shadow-lg">
          <div className="mb-6">
            <Image
              src="/alert.svg" // Use um ícone condizente com o contexto
              alt="Página não encontrada"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>

          <h1 className="text-5xl font-extrabold text-blue-700 mb-4 font-(family-name:--font-title)">
            404
          </h1>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Página não encontrada
          </h2>

          <p className="text-gray-600 mb-6 font-(family-name:--font-txt)">
            A página que você está tentando acessar não existe ou foi movida. Verifique o endereço ou retorne ao início.
          </p>

          <Link href="/" passHref>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold uppercase font-(family-name:--font-txt)">
              Voltar para o início
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;