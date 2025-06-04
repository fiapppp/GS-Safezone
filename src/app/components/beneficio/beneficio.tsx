"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Beneficio = () => {

    return (
        <>
            <div className="my-1">
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                    <div className="flex flex-col justify-center gap-2 items-center mb-1">
                        <h3 className="text-xl font-semibold text-purple-800 uppercase font-(family-name:--font-title)">Título</h3>
                        <Image src="/enchente.svg" alt="sf_alert" width={70} height={70} />
                        <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">Nome/Descrição</p>
                    </div>
                    <div className="text-center text-xs">
                        <p className="text-gray-400 mb-0.5">Qtde. disponível: 0</p>
                        <p className="text-xs text-gray-300 italic">Valido até 00/00/0000</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Beneficio;