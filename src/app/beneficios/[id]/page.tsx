"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/app/components/container/container";
import { ArrowLeft } from "lucide-react";

const Beneficio = () => {
    // Dados simulados
    const titulo = "Cesta Básica Mensal";
    const nomeResponsavel = "Prefeitura Municipal";
    const quantidadeDisponivel = 25;
    const validade = "30/07/2025";
    const custoPorUnidade = 5;

    const pontosUsuario = 20; // Simulado. Ideal: vir de contexto/autenticação
    const [quantidade, setQuantidade] = useState(1);

    // Cálculo total
    const totalPontosNecessarios = quantidade * custoPorUnidade;
    const podeResgatar = totalPontosNecessarios <= pontosUsuario;

    const incrementar = () => setQuantidade((prev: number) => prev + 1);
    const decrementar = () => setQuantidade((prev: number) => Math.max(1, prev - 1));

    const handleResgatar = () => {
        if (!podeResgatar) return;
        alert(`Você resgatou ${quantidade} unidade(s) de "${titulo}"!`);
        // Aqui entraria o envio de dados para a API
    };

    return (
        <>
            <section className="py-30 h-auto">
                <Container>

                    {/* Pontos do usuário */}
                    <div className="mt-4 text-sm text-gray-600 text-end">
                        <span className="font-bold text-purple-700">Seus pontos: </span>{pontosUsuario}
                    </div>

                    <div className="my-4">
                        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                            <Link className="flex items-center text-purple-800 hover:text-purple-600 mb-4" href="/beneficios">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                <span className="font-(family-name:--font-txt)">Voltar</span>
                            </Link>

                            <div className="flex justify-between">
                                <div>
                                    {/* Título */}
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-semibold text-purple-800 uppercase font-(family-name:--font-title)">
                                            {titulo}
                                        </h3>
                                    </div>

                                    {/* Dados do benefício */}
                                    <div className="text-gray-700 space-y-2 font-(family-name:--font-txt)">
                                        <p><span className="font-semibold text-gray-900">Responsável: </span>{nomeResponsavel}</p>
                                        <p><span className="font-semibold text-gray-900">Quantidade Disponível: </span>{quantidadeDisponivel}</p>
                                        <p><span className="font-semibold text-gray-900">Válido até: </span>{validade}</p>
                                        <p><span className="font-semibold text-gray-900">Custo por unidade: </span>{custoPorUnidade} ponto(s)</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src="/beneficios.svg" alt={"imagem_beneficio"} width={150} height={150}></Image>
                                </div>
                            </div>

                            {/* Contador de quantidade */}
                            <div className="mt-4 flex justify-center md:justify-normal items-center gap-3">
                                <span className="text-sm text-gray-700 font-semibold">Quantidade:</span>
                                <button
                                    onClick={decrementar}
                                    className="bg-gray-200 px-3 py-1 rounded text-lg font-bold"
                                >−</button>
                                <span className="text-lg font-medium">{quantidade}</span>
                                <button
                                    onClick={incrementar}
                                    className="bg-gray-200 px-3 py-1 rounded text-lg font-bold"
                                >+</button>
                            </div>

                            {/* Total e botão de resgate */}
                            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                                <p className="text-gray-800 text-sm">
                                    Total necessário: <span className="font-semibold text-purple-700">{totalPontosNecessarios} ponto(s)</span>
                                </p>
                                <button
                                    onClick={handleResgatar}
                                    disabled={!podeResgatar}
                                    className={`px-5 py-2 rounded text-white transition font-semibold ${podeResgatar ? "bg-purple-500 hover:bg-purple-600" : "bg-gray-400 cursor-not-allowed"
                                        }`}
                                >
                                    Resgatar
                                </button>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    );
};

export default Beneficio;