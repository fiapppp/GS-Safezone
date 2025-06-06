"use client";
import React from "react";
import Link from "next/link";
import Container from "@/app/components/container/container";
import Ocorrencia from "@/app/components/ocorrencia/ocorrencia";

const Ocorrencias = () => {

    return (
        <>
            <section className="mt-5 py-40 h-auto">
                <Container>

                    <div>
                        <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">Ocorrências</h1>

                        <div className="grid md:flex gap-10 justify-between">
                            <div className="">
                                <p className="text-lg md:mb-6 text-gray-700 font-(family-name:--font-txt)">
                                    Aqui você pode visualizar todas as ocorrências registradas na plataforma. Fique atento às informações e contribua para manter a comunidade bem informada. <br />
                                    Você também pode consultar as denúncias que já realizou clicando no botão abaixo. <br />
                                    Para denunciar uma ocorrência, clique sobre ela e, na página de detalhes, utilize o botão <strong>"Fazer Denúncia"</strong>.
                                </p>
                            </div>
                            <div className="flex justify-between text-center items-center">
                                <Link
                                    href="/denuncias/minhas-denuncias"
                                    className="font-(family-name:--font-txt) mb-10 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                                >
                                    Ver minhas denúncias ativas
                                </Link>
                            </div>
                        </div>

                        <h2 className="font-(family-name:--font-title) text-3xl mb-10">Últimas ocorrências cadastradas:</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Ocorrencia />
                        </div>
                    </div>


                </Container>
            </section>
        </>
    );
};

export default Ocorrencias;