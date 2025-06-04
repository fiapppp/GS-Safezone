"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Ocorrencia = () => {

    return (
        <>
            <div className="my-1">
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                    <div className="flex gap-2 items-center mb-3">
                        <Image src="/enchente.svg" alt="sf_alert" width={20} height={20} />
                        <h3 className="text-xl font-semibold text-blue-800 uppercase font-(family-name:--font-title)">Alerta de Enchente</h3>
                    </div>
                    <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">Uma enchente foi registrada na região do centro. Evite áreas alagadas.</p>
                    <div className="flex items-center gap-6 justify-end">
                        <Link href="/denuncia/cadastrar" className="text-blue-600 hover:underline flex justify-end font-(family-name:--font-txt)">Fazer denúncia</Link>
                        <Link href="/ocorrencias/1" className="text-blue-600 hover:underline flex justify-end font-(family-name:--font-txt)">Ver Detalhes</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ocorrencia;