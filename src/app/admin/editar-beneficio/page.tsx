"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "@/app/components/container/container";

const Beneficios = () => {
    const router = useRouter();

    const tiposBeneficio = ['a', 'b', 'c', 'd'];

    const [beneficioSelecionado, setBeneficioSelecionado] = useState("");
    const [modoEdicao, setModoEdicao] = useState(false);

    const [nome, setNome] = useState("");
    const [custo, setCusto] = useState("");
    const [dataValidade, setDataValidade] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [tipoSelecionado, setTipoSelecionado] = useState("");
    const [statusAtivo, setStatusAtivo] = useState(true); // NOVO

    const handleSelecionarBeneficio = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const valor = e.target.value;
        setBeneficioSelecionado(valor);
        const editar = !!valor;
        setModoEdicao(editar);

        if (editar) {
            // Aqui você pode carregar os dados reais do benefício selecionado
            setNome(`Benefício ${valor}`);
            setCusto("100");
            setDataValidade("01/01/2026");
            setQuantidade("50");
            setTipoSelecionado("a");
            setStatusAtivo(true); // Simulando que está ativo
        } else {
            setNome("");
            setCusto("");
            setDataValidade("");
            setQuantidade("");
            setTipoSelecionado("");
            setStatusAtivo(true);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!modoEdicao) return;

        // Aqui você pode adicionar a lógica de envio para API
        console.log("Benefício editado com sucesso!");
        console.log("Status ativo:", statusAtivo);

        router.push("/beneficios");
    };

    return (
        <>
            <section className="mt-10 py-25 flex items-center">
                <div className="fixed -z-10 top-10 -right-0 md:opacity-90 opacity-50 h-dvh flex items-center">
                    <Image src="/bg-beneficios.png" alt="sf_search" width={1000} height={1000} />
                </div>

                <Container>
                    <h1 className="text-5xl font-extrabold mb-6 text-purple-800 font-(family-name:--font-title)">
                        Editar <span className="text-purple-600">benefício</span>
                    </h1>

                    <div className="mb-6 md:w-1/2 font-(family-name:--font-title)">
                        <label htmlFor="selecionar_beneficio" className="block text-gray-700 mb-2 text-3xl font-bold">
                            Selecione o benefício para editar:
                        </label>
                        <select
                            id="selecionar_beneficio"
                            value={beneficioSelecionado}
                            onChange={handleSelecionarBeneficio}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Selecione o benefício desejado...</option>
                            <option value="1">Benefício 1</option>
                            <option value="2">Benefício 2</option>
                            <option value="3">Benefício 3</option>
                        </select>
                    </div>

                    <div className="md:flex flex-col justify-center md:justify-between mb-4">
                        <form onSubmit={handleSubmit} className="md:w-1/2 rounded-full justify-baseline font-(family-name:--font-title) my-3">
                            <div className="border border-gray-200 p-13 bg-white shadow transition">
                                <div className="mb-6">
                                    <label htmlFor="editar_beneficio" className="block text-gray-700 mb-2">Benefício selecionado:</label>
                                    <input
                                        type="text"
                                        id="editar_beneficio"
                                        name="editar_beneficio"
                                        value={beneficioSelecionado}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                    />
                                </div>

                                <hr className="text-purple-800 mb-6" />

                                <div className="mb-6">
                                    <label htmlFor="nome_beneficio" className="block text-gray-700 mb-2">Nome</label>
                                    <input
                                        type="text"
                                        id="nome_beneficio"
                                        name="nome_beneficio"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                        readOnly={!modoEdicao}
                                        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${!modoEdicao ? "bg-gray-200" : ""}`}
                                    />
                                </div>

                                <div className="mb-6 grid grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="custo_beneficio" className="block text-gray-700 mb-2">Custo</label>
                                        <input
                                            type="text"
                                            id="custo_beneficio"
                                            name="custo_beneficio"
                                            value={custo}
                                            onChange={(e) => setCusto(e.target.value)}
                                            required
                                            readOnly={!modoEdicao}
                                            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${!modoEdicao ? "bg-gray-200" : ""}`}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="data_beneficio" className="block text-gray-700 mb-2">Data de validade</label>
                                        <input
                                            type="text"
                                            id="data_beneficio"
                                            name="data_beneficio"
                                            value={dataValidade}
                                            onChange={(e) => setDataValidade(e.target.value)}
                                            required
                                            readOnly={!modoEdicao}
                                            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${!modoEdicao ? "bg-gray-200" : ""}`}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="quantidade_beneficio" className="block text-gray-700 mb-2">Quantidade</label>
                                        <input
                                            type="text"
                                            id="quantidade_beneficio"
                                            name="quantidade_beneficio"
                                            value={quantidade}
                                            onChange={(e) => setQuantidade(e.target.value)}
                                            required
                                            readOnly={!modoEdicao}
                                            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${!modoEdicao ? "bg-gray-200" : ""}`}
                                        />
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
                                        disabled={!modoEdicao}
                                        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${!modoEdicao ? "bg-gray-200" : ""}`}
                                    >
                                        <option value="">Selecione...</option>
                                        {tiposBeneficio.map((tipo, index) => (
                                            <option key={index} value={tipo}>{tipo}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* BOTÃO DE STATUS */}
                                <div className="mb-6">
                                    <label htmlFor="status_beneficio" className="block text-gray-700 mb-2">Status do benefício</label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setStatusAtivo(!statusAtivo)}
                                            disabled={!modoEdicao}
                                            className={`px-4 py-2 rounded-full text-white font-semibold transition ${
                                                statusAtivo ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                                            } ${!modoEdicao && "opacity-50 cursor-not-allowed"}`}
                                        >
                                            {statusAtivo ? "Ativo" : "Inativo"}
                                        </button>
                                        <span className="text-gray-600">{statusAtivo ? "Este benefício está ativo" : "Este benefício está desativado"}</span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!modoEdicao}
                                    className={`w-full px-6 py-2 text-white font-semibold rounded-lg transition duration-200 font-(family-name:--font-txt) ${
                                        modoEdicao ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    Salvar benefício
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Beneficios;