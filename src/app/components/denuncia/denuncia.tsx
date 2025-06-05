"use client";
import React from "react";
import TextoLimitado from "@/app/components/textoLimitado/textoLimitado";

const Denuncia = () => {

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
        <div className="my-1">
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-blue-800 uppercase font-(family-name:--font-title)">
                        Título
                    </h3>
                </div>

                <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">
                    <TextoLimitado texto={descricao} limite={60} />
                </p>

                <p className="text-xs text-gray-400">DD/MM/AAAA</p>

                <div className="mt-4 md:flex grid md:justify-between items-center font-(family-name:--font-txt) text-sm gap-2">
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
    );
};

export default Denuncia;