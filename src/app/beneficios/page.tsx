"use client";
import React from "react";
import Beneficio from "@/app/components/beneficio/beneficio";
import Container from "@/app/components/container/container";

const Beneficios = () => {

    return (
        <>
            <section className="mt-5 py-40 h-auto">

                <Container>

                    <div>
                        <h1 className="text-5xl font-extrabold mb-6 text-purple-800 font-(family-name:--font-title)">Benefícios</h1>

                        <p className="text-lg mb-10 text-gray-700 font-(family-name:--font-txt)">
                            Aqui você encontra uma lista de benefícios disponíveis para contribuir para a população ou serem resgatados. Os benfícios contam com x, y, e z. Alguns benefícios possuem tempo limitado, fique atento!
                        </p>
                    </div>

                    <h2 className="font-(family-name:--font-title) text-3xl mb-10">Faça seu login para ver o seu saldo de pontos!</h2>
                    {/*
                    Quando o usuário estiver logado
                    <h2 className="font-(family-name:--font-title) text-3xl mb-10">Seu saldo de pontos atual é: 0</h2>
                    */}


                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <Beneficio>

                        </Beneficio>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Beneficios;