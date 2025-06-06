'use client';
import React from "react";
import Image from "next/image";
import Container from "@/app/components/container/container";
import { useState } from "react";

const Ocorrencias = () => {

    // Hooks para gerenciar o CEP e o endereço
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState({
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
    });

    const buscarEndereco = async (cep: string) => {
        const cepLimpo = cep.replace(/\D/g, "");
        if (cepLimpo.length !== 8) return;

        try {
            const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const data = await res.json();

            if (!data.erro) {
                setEndereco({
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    localidade: data.localidade,
                    uf: data.uf,
                });
            } else {
                alert("CEP não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
        }
    };

    return (
        <>
            <section className="mt-5 py-40 h-auto">

                <div className="fixed -z-10 top-10 -right-0 md:opacity-90 opacity-50 h-dvh flex items-center">
                    <Image src="/bg-ocorrencias.png" alt="sf_search" width={1000} height={1000} />
                </div>

                <Container>

                    <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">Cadastrar <span className="text-blue-600">ocorrência</span></h1>

                    <div className="md:flex flex-col md:justify-between mb-4">
                        <form action="" className="md:w-1/2 rounded-full justify-baseline font-(family-name:--font-title) my-3">
                            <div className="border border-gray-200 p-13 bg-white shadow transition">
                                <div className="mb-6 grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="titulo_ocorrencia" className="block text-gray-700 mb-2">Título</label>
                                        <input type="text" id="titulo_ocorrencia" name="titulo_ocorrencia" required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="categoria_ocorrencia" className="block text-gray-700 mb-2">Categoria</label>
                                        <select id="categoria_ocorrencia" name="categoria_ocorrencia" required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
                                            <option value="">Selecione...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="descricao_ocorrencia" className="block text-gray-700 mb-2">Descrição</label>
                                    <textarea id="descricao_ocorrencia" name="descricao_ocorrencia" required rows={5} placeholder="Descreva a ocorrência aqui..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    </textarea>
                                </div>

                                <hr className="text-blue-800 mb-6" />

                                <h2 className="mb-4 font-(family-name:--font-title) text-2xl text-blue-800 font-bold">Localização da ocorrência</h2>
                                <div className="mb-6">
                                    <label htmlFor="cep_denuncia" className="block text-gray-700 mb-2">CEP</label>
                                    <input
                                        type="text"
                                        id="cep_denuncia"
                                        name="cep_denuncia"
                                        value={cep}
                                        onChange={(e) => setCep(e.target.value)}
                                        onBlur={() => buscarEndereco(cep)}
                                        required
                                        placeholder="Digite o CEP..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-6 grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="logradouro_denuncia" className="block text-gray-700 mb-2">Rua</label>
                                        <input
                                            type="text"
                                            id="logradouro_denuncia"
                                            name="logradouro_denuncia"
                                            value={endereco.logradouro}
                                            readOnly
                                            className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="bairro_denuncia" className="block text-gray-700 mb-2">Bairro</label>
                                        <input
                                            type="text"
                                            id="bairro_denuncia"
                                            name="bairro_denuncia"
                                            value={endereco.bairro}
                                            readOnly
                                            className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 grid grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="localidade_denuncia" className="block text-gray-700 mb-2">Cidade</label>
                                        <input
                                            type="text"
                                            id="localidade_denuncia"
                                            name="localidade_denuncia"
                                            value={endereco.localidade}
                                            readOnly
                                            className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="uf_denuncia" className="block text-gray-700 mb-2">Estado</label>
                                        <input
                                            type="text"
                                            id="uf_denuncia"
                                            name="uf_denuncia"
                                            value={endereco.uf}
                                            readOnly
                                            className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="numero_denuncia" className="block text-gray-700 mb-2">Número</label>
                                        <input type="text" id="numero_denuncia" name="numero_denuncia" required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="raio_auxilio_ocorrencia" className="block text-gray-700 mb-2">Raio para auxílio</label>
                                    <select id="raio_auxilio_ocorrencia" name="raio_auxilio_ocorrencia" required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
                                        <option value="">Selecione...</option>
                                        <option value="raio_bairro">Bairro</option>
                                        <option value="raio_localidade">Cidade</option>
                                        <option value="raio_uf">Estado</option>
                                    </select>
                                </div>
                                <button type="submit"
                                    className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 font-(family-name:--font-txt)">
                                    Cadastrar ocorrência
                                </button>
                            </div>
                        </form>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Ocorrencias;