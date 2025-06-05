"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/container/container";

const Beneficios = () => {

    const tiposBeneficio = ['a', 'b', 'c', 'd'];
    const [tipoSelecionado, setTipoSelecionado] = useState('');

    return (
        <>
            <section className="mt-10 py-25 flex items-center">

                <div className="fixed -z-10 top-10 -right-0 md:opacity-90 opacity-50 h-dvh flex items-center">
                    <Image src="/bg-beneficios.png" alt="sf_search" width={1000} height={1000} />
                </div>

                <Container>

                    <h1 className="text-5xl font-extrabold mb-6 text-purple-800 font-(family-name:--font-title)">
                        Cadastrar <span className="text-purple-600">benefício</span>
                    </h1>

                    <div className="md:flex flex-col justify-center md:justify-between mb-4">
                        <form action="" className="md:w-1/2 rounded-full justify-baseline font-(family-name:--font-title) my-3">
                            <div className="border border-gray-200 p-13 bg-white shadow transition">
                                <div className="mb-6">
                                    <label htmlFor="nome_beneficio" className="block text-gray-700 mb-2">Nome</label>
                                    <input type="text" id="nome_beneficio" name="nome_beneficio" required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>
                                <div className="mb-6 grid grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="custo_beneficio" className="block text-gray-700 mb-2">Custo</label>
                                        <input type="text" id="custo_beneficio" name="custo_beneficio" required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="data_beneficio" className="block text-gray-700 mb-2">Data de validade</label>
                                        <input type="text" id="data_beneficio" name="data_beneficio" required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="quantidade_beneficio" className="block text-gray-700 mb-2">Quantidade</label>
                                        <input type="text" id="quantidade_beneficio" name="quantidade_beneficio" required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="tipo_beneficio" className="block text-gray-700 mb-2">Tipo de benefício</label>
                                    <select
                                        id="tipo_beneficio"
                                        name="tipo_beneficio"
                                        required
                                        value={tipoSelecionado}
                                        onChange={(e) => setTipoSelecionado(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    >
                                        <option value="">Selecione...</option>
                                        {tiposBeneficio.map((tipo, index) => (
                                            <option key={index} value={tipo}>{tipo}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit"
                                    className="w-full px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 font-(family-name:--font-txt)">
                                    Cadastrar benefício
                                </button>
                            </div>
                        </form>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Beneficios;