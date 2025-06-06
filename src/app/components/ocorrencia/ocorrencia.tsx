"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import TextoLimitado from "@/app/components/textoLimitado/textoLimitado";

const Ocorrencia = () => {

    const descricao = "Uma enchente foi registrada na região do centro. Evite áreas alagadas.";

    return (
        <>
            <div className="my-1">
                <Link href="/ocorrencias/1">
                    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                        <div className="flex gap-2 items-center mb-3">
                            <Image src="/enchente.svg" alt="sf_alert" width={20} height={20} />
                            <h3 className="text-xl font-semibold text-blue-800 uppercase font-(family-name:--font-title)">Alerta de Enchente</h3>
                        </div>
                        <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">
                            <TextoLimitado texto={descricao} limite={150} />
                        </p>
                        <div className="flex items-center gap-6 justify-end">
                            <p className="text-blue-600 flex justify-end font-(family-name:--font-txt)">Ver Detalhes</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Ocorrencia;