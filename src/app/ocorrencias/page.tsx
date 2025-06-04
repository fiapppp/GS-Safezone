"use client";
import React from "react";
import Container from "@/app/components/container/container";
import Ocorrencia from "@/app/components/ocorrencia/ocorrencia";

const Ocorrencias = () => {

    return (
        <>
            <section className="mt-5 py-40 h-auto">

                <Container>

                    <div>
                        <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">Ocorrências</h1>

                        <p className="text-lg mb-10 text-gray-700 font-(family-name:--font-txt)">
                            Aqui você pode visualizar as ocorrências registradas na plataforma. Fique atento às informações e ajude a manter a comunidade informada.
                        </p>
                    </div>

                    <h2 className="font-(family-name:--font-title) text-3xl mb-10">Últimas ocorrências cadastradas:</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Ocorrencia>


                        </Ocorrencia>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Ocorrencias;