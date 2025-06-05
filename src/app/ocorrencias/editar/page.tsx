'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/app/components/container/container";

const Denuncia = () => {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState({
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
    });

    const [dataAtual, setDataAtual] = useState("");

    const [modoEdicao, setModoEdicao] = useState(false);
    const [denunciaSelecionada, setDenunciaSelecionada] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [numero, setNumero] = useState("");

    useEffect(() => {
        const hoje = new Date();
        const dia = String(hoje.getDate()).padStart(2, "0");
        const mes = String(hoje.getMonth() + 1).padStart(2, "0");
        const ano = hoje.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;
        setDataAtual(dataFormatada);
    }, []);

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

    const handleSelecionarDenuncia = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const valor = e.target.value;
        setDenunciaSelecionada(valor);
        const editar = !!valor;
        setModoEdicao(editar);

        if (!editar) {
            // Limpa campos
            setTitulo("");
            setDescricao("");
            setCep("");
            setEndereco({
                logradouro: "",
                bairro: "",
                localidade: "",
                uf: "",
            });
            setNumero("");
        }
    };

    return (
        <section className="mt-5 py-40 h-auto">
            <div className="fixed -z-10 top-10 -right-0 md:opacity-90 opacity-50 h-dvh flex items-center">
                <Image src="/bg-denuncias.png" alt="sf_search" width={1000} height={1000} />
            </div>

            <Container>
                <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">
                    Fazer <span className="text-blue-600">denúncia</span>
                </h1>

                <div className="mb-6 md:w-1/2 font-(family-name:--font-title)">
                    <label htmlFor="selecionar_denuncia" className="block text-gray-700 mb-2 text-3xl font-bold">
                        Selecione a denúncia para editar:
                    </label>
                    <select
                        id="selecionar_denuncia"
                        value={denunciaSelecionada}
                        onChange={handleSelecionarDenuncia}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecione a denúncia desejada...</option>
                        <option value="1">Denúncia 1</option>
                        <option value="2">Denúncia 2</option>
                        <option value="3">Denúncia 3</option>
                    </select>
                </div>

                <div className="md:flex flex-col md:justify-between mb-4">
                    <form action="" className="md:w-1/2 rounded-full justify-baseline font-(family-name:--font-title) my-3">
                        <div className="border border-gray-200 p-13 bg-white shadow transition">
                            <div className="mb-6">
                                <label htmlFor="denuncia_ocorrencia" className="block text-gray-700 mb-2">Ocorrência selecionada:</label>
                                <input
                                    type="text"
                                    id="denuncia_ocorrencia"
                                    name="denuncia_ocorrencia"
                                    value={denunciaSelecionada}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-200"
                                />
                            </div>

                            <hr className="text-blue-800 mb-6" />

                            <div className="mb-6 grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="titulo_denuncia" className="block text-gray-700 mb-2">Título</label>
                                    <input
                                        type="text"
                                        id="titulo_denuncia"
                                        name="titulo_denuncia"
                                        value={titulo}
                                        onChange={(e) => setTitulo(e.target.value)}
                                        required
                                        readOnly={!modoEdicao}
                                        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!modoEdicao ? "bg-gray-200" : ""}`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="data_denuncia" className="block text-gray-700 mb-2">Data</label>
                                    <input
                                        type="text"
                                        id="data_denuncia"
                                        name="data_denuncia"
                                        value={dataAtual}
                                        readOnly
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="descricao_denuncia" className="block text-gray-700 mb-2">Descrição</label>
                                <textarea
                                    id="descricao_denuncia"
                                    name="descricao_denuncia"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                    required
                                    rows={3}
                                    readOnly={!modoEdicao}
                                    placeholder="Descreva a denúncia aqui..."
                                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!modoEdicao ? "bg-gray-200" : ""}`}
                                />
                            </div>

                            <hr className="text-blue-800 mb-6" />

                            <h2 className="mb-4 font-(family-name:--font-title) text-2xl text-blue-800 font-bold">Localização do denunciante</h2>

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
                                    readOnly={!modoEdicao}
                                    placeholder="Digite o CEP..."
                                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!modoEdicao ? "bg-gray-200" : ""}`}
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
                                    <input
                                        type="text"
                                        id="numero_denuncia"
                                        name="numero_denuncia"
                                        value={numero}
                                        onChange={(e) => setNumero(e.target.value)}
                                        required
                                        readOnly={!modoEdicao}
                                        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!modoEdicao ? "bg-gray-200" : ""}`}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!modoEdicao}
                                className={`w-full px-6 py-2 text-white font-semibold rounded-lg transition duration-200 font-(family-name:--font-txt) ${modoEdicao ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                Cadastrar denúncia
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Denuncia;
