"use client";
import React from "react";
import Container from "@/app/components/container/container";
import Denuncia from "@/app/components/denuncia/denuncia";

const MinhasDenuncias = () => {

    return (
        <>
            <section className="mt-5 py-40 h-auto">
                <Container>

                    <div>
                        <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">
                            Minhas <span className="text-blue-600">denúncias</span>
                        </h1>

                        <p className="text-lg mb-6 text-gray-700 font-(family-name:--font-txt)">
                            Aqui você pode acompanhar todas as denúncias que realizou na plataforma. É possível verificar o status de cada denúncia — se está em análise, aprovada ou recusada —, além de visualizar os detalhes, datas e os pontos gerados sempre que uma denúncia for aprovada.
                        </p>

                        <div className="flex justify-between items-center">

                        </div>
                    </div>

                    <h2 className="font-(family-name:--font-title) text-3xl mb-10">Suas denúncias:</h2>

                    <div className="grid grid-cols-2 gap-6">
                        <Denuncia />
                    </div>

                </Container>
            </section>
        </>
    );
};

export default MinhasDenuncias;