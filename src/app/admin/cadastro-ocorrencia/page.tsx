'use client';
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/container/container";
import API_SF from "@/app/services/api"; // ou onde sua variável API_SF estiver

const Ocorrencias = () => {
    // Estado para o formulário
    const [formData, setFormData] = useState({
        titulo: "",
        dataOcorrencia: "",
        categoria: "",
        descricao: "",
        cep: "",
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
        numero: "",
        raioAuxilio: "",
        gravidade: ""
    });

    // Estado para erros / mensagens
    const [loading, setLoading] = useState(false);

    // Função para atualizar campos do formulário
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Função para buscar endereço pelo CEP
    const buscarEndereco = async (cep: string) => {
        const cepLimpo = cep.replace(/\D/g, "");
        if (cepLimpo.length !== 8) return;

        try {
            const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const data = await res.json();

            if (!data.erro) {
                setFormData({
                    ...formData,
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    localidade: data.localidade,
                    uf: data.uf,
                    cep: cepLimpo
                });
            } else {
                alert("CEP não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
        }
    };

    // Função para enviar o formulário
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Montar objeto a ser enviado conforme seu backend espera
        const ocorrencia = {
            titulo: formData.titulo,
            dataOcorrencia: formData.dataOcorrencia,
            categoria: formData.categoria,
            descricao: formData.descricao,
            endereco: {
                cep: formData.cep,
                logradouro: formData.logradouro,
                bairro: formData.bairro,
                localidade: formData.localidade,
                uf: formData.uf,
                numero: formData.numero,
            },
            raioAuxilio: formData.raioAuxilio,
            gravidade: formData.gravidade,
        };

        console.log("Payload to send:", ocorrencia);
        try {
            const res = await fetch(`${API_SF}api/ocorrencia/criar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ocorrencia)
            });

            if (res.ok) {
                alert("Ocorrência cadastrada com sucesso!");
                setFormData({
                    titulo: "",
                    dataOcorrencia: "",
                    categoria: "",
                    descricao: "",
                    cep: "",
                    logradouro: "",
                    bairro: "",
                    localidade: "",
                    uf: "",
                    numero: "",
                    raioAuxilio: "",
                    gravidade: ""
                });
            } else {
                const errorText = await res.text();
                console.error("Erro ao cadastrar ocorrência:", res.status, errorText);
                alert("Erro ao cadastrar ocorrência: " + errorText);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro na requisição ao cadastrar ocorrência.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="mt-5 py-40 h-auto">

                <div className="fixed -z-10 top-10 -right-0 md:opacity-90 opacity-50 h-dvh flex items-center">
                    <Image src="/bg-ocorrencias.png" alt="sf_search" width={1000} height={1000} />
                </div>

                <Container>
                    <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">
                        Cadastrar <span className="text-blue-600">ocorrência</span>
                    </h1>

                    <form onSubmit={handleSubmit} className="md:w-1/2 rounded-full justify-baseline font-(family-name:--font-title) my-3">
                        <div className="border border-gray-200 p-13 bg-white shadow transition">
                            <div className="mb-6 grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="titulo" className="block text-gray-700 mb-2">Título</label>
                                    <input
                                        type="text"
                                        id="titulo"
                                        name="titulo"
                                        value={formData.titulo}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dataOcorrencia" className="block text-gray-700 mb-2">Data da ocorrência</label>
                                    <input
                                        type="date"
                                        id="dataOcorrencia"
                                        name="dataOcorrencia"
                                        value={formData.dataOcorrencia}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="categoria" className="block text-gray-700 mb-2">Categoria</label>
                                <select
                                    id="categoria"
                                    name="categoria"
                                    value={formData.categoria}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Selecione...</option>
                                    {/* Insira opções de categoria aqui */}
                                    <option value="categoria1">Categoria 1</option>
                                    <option value="categoria2">Categoria 2</option>
                                    <option value="categoria3">Categoria 3</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="descricao" className="block text-gray-700 mb-2">Descrição</label>
                                <textarea
                                    id="descricao"
                                    name="descricao"
                                    value={formData.descricao}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Descreva a ocorrência aqui..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <hr className="text-blue-800 mb-6" />

                            <h2 className="mb-4 font-(family-name:--font-title) text-2xl text-blue-800 font-bold">Localização da ocorrência</h2>
                            <div className="mb-6">
                                <label htmlFor="cep" className="block text-gray-700 mb-2">CEP</label>
                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    value={formData.cep}
                                    onChange={(e) => {
                                        handleChange(e);
                                        buscarEndereco(e.target.value);
                                    }}
                                    required
                                    placeholder="Digite o CEP..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-6 grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="logradouro" className="block text-gray-700 mb-2">Rua</label>
                                    <input
                                        type="text"
                                        id="logradouro"
                                        name="logradouro"
                                        value={formData.logradouro}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="bairro" className="block text-gray-700 mb-2">Bairro</label>
                                    <input
                                        type="text"
                                        id="bairro"
                                        name="bairro"
                                        value={formData.bairro}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="mb-6 grid grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="localidade" className="block text-gray-700 mb-2">Cidade</label>
                                    <input
                                        type="text"
                                        id="localidade"
                                        name="localidade"
                                        value={formData.localidade}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="uf" className="block text-gray-700 mb-2">Estado</label>
                                    <input
                                        type="text"
                                        id="uf"
                                        name="uf"
                                        value={formData.uf}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="numero" className="block text-gray-700 mb-2">Número</label>
                                    <input
                                        type="text"
                                        id="numero"
                                        name="numero"
                                        value={formData.numero}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="raioAuxilio" className="block text-gray-700 mb-2">Raio para auxílio</label>
                                <select
                                    id="raioAuxilio"
                                    name="raioAuxilio"
                                    value={formData.raioAuxilio}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Selecione...</option>
                                    <option value="raio_bairro">Bairro</option>
                                    <option value="raio_localidade">Cidade</option>
                                    <option value="raio_uf">Estado</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="gravidade" className="block text-gray-700 mb-2">Gravidade da ocorrência</label>
                                <select
                                    id="gravidade"
                                    name="gravidade"
                                    value={formData.gravidade}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Selecione...</option>
                                    <option value="gravidade_baixa">Baixa</option>
                                    <option value="gravidade_media">Média</option>
                                    <option value="gravidade_alta">Alta</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 font-(family-name:--font-txt)"
                            >
                                {loading ? "Cadastrando..." : "Cadastrar ocorrência"}
                            </button>
                        </div>
                    </form>
                </Container>
            </section>
        </>
    );
};

export default Ocorrencias;