"use client";
import React from "react";
import Link from "next/link";
import Container from "@/app/components/container/container";
import MapaLocalizacao from "@/app/components/mapa/mapa";
import { ArrowLeft } from "lucide-react";

const MinhasDenuncias = () => {

    const descricao = "Descrição Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nam expedita molestias corrupti voluptatum, adipisci sed sequi labore? Facere voluptates quaerat quidem id explicabo voluptas consectetur dolor dolorum necessitatibus animi!";

    // Status da denúncia:
    const status = "Aprovada"; // Pode ser: "Aprovada", "Em Análise", "Recusada"
    const pontosGerados = 10; // Pontos só aparecem se for "Aprovada"

    // Função que retorna cor e se exibe os pontos
    const obterInfoStatus = (status: string) => {
        switch (status) {
            case "Aprovada":
                return {
                    cor: "text-green-600",
                    exibePontos: true
                };
            case "Recusada":
                return {
                    cor: "text-red-600",
                    exibePontos: false
                };
            case "Em Análise":
                return {
                    cor: "text-gray-500",
                    exibePontos: false
                };
            default:
                return {
                    cor: "text-gray-500",
                    exibePontos: false
                };
        }
    };

    const { cor, exibePontos } = obterInfoStatus(status);

    return (
        <>
            <section className="py-30 h-auto">
                <Container>

                    <div className="my-1">
                        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                            <Link  className="flex items-center text-blue-800 hover:text-blue-600 mb-4" href="/denuncias/minhas-denuncias">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                <span className="font-(family-name:--font-txt)">Voltar</span>
                            </Link>
                            <div className="grid mb-8">
                                <h3 className="font-semibold text-blue-800 uppercase font-(family-name:--font-title) text-3xl">Título</h3>
                                <p className="text-xs text-gray-400">Data de criação: DD/MM/AAAA</p>
                            </div>

                            <div className="md:flex justify-between grid gap-10 items-center mt-5 mb-5">
                                <div>
                                    <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos praesentium ut animi labore nihil dolorem rerum nulla quas, iusto eligendi perferendis assumenda nesciunt eveniet reprehenderit aperiam possimus, magni amet numquam.</p>
                                </div>
                                <div>
                                    <MapaLocalizacao width={500} height={200}/>
                                </div>
                            </div>

                            <div className="mt-4 md:flex grid md:justify-between items-center font-(family-name:--font-txt) gap-2">
                                <p className={`${cor}`}>
                                    Status: <span className={`${cor} font-semibold`}>{status}</span>
                                </p>

                                {exibePontos && (
                                    <p className="text-gray-600">
                                        <span className="text-blue-800 font-bold">Pontos Gerados: </span>{pontosGerados}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    );
};

export default MinhasDenuncias;