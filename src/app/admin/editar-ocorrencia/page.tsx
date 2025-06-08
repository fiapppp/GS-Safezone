'use client';
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/container/container";

const Ocorrencia = () => {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState({
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
    });

    const [modoEdicao, setModoEdicao] = useState(false);
    const [ocorrenciaSelecionada, setOcorrenciaSelecionada] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [numero, setNumero] = useState("");
    const [data, setData] = useState("");
    const [categoria, setCategoria] = useState("");
    const [ativo, setAtivo] = useState(true); // Novo estado de ativação

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

    const handleSelecionarOcorrencia = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const valor = e.target.value;
        setOcorrenciaSelecionada(valor);
        const editar = !!valor;
        setModoEdicao(editar);

        if (!editar) {
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
            setData("");
            setCategoria("");
            setAtivo(true); // Resetar status ao limpar
        }
    };

    return (
        <section className="mt-5 py-40 h-auto">
            <div className="fixed -z-10 top-10 -right-0 md:opacity-90 opacity-50 h-dvh flex items-center">
                <Image src="/bg-denuncias.png" alt="bg_ocorrencias" width={1000} height={1000} />
            </div>

            <Container>
                <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">
                    Editar <span className="text-blue-600">ocorrência</span>
                </h1>

                <div className="mb-6 md:w-1/2 font-(family-name:--font-title)">
                    <label htmlFor="selecionar_ocorrencia" className="block text-gray-700 mb-2 text-3xl font-bold">
                        Selecione a ocorrência para editar:
                    </label>
                    <select
                        id="selecionar_ocorrencia"
                        value={ocorrenciaSelecionada}
                        onChange={handleSelecionarOcorrencia}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecione a ocorrência desejada...</option>
                        <option value="1">Ocorrência 1</option>
                        <option value="2">Ocorrência 2</option>
                        <option value="3">Ocorrência 3</option>
                    </select>
                </div>

                <form className="md:w-1/2 font-(family-name:--font-title) my-3">
                    <div className="border border-gray-200 p-13 bg-white shadow transition">
                        <div className="mb-6">
                            <label htmlFor="ocorrencia_id" className="block text-gray-700 mb-2">Ocorrência selecionada:</label>
                            <input
                                type="text"
                                id="ocorrencia_id"
                                name="ocorrencia_id"
                                value={ocorrenciaSelecionada}
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-200"
                            />
                        </div>

                        <hr className="text-blue-800 mb-6" />

                        <div className="mb-6 grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="titulo_ocorrencia" className="block text-gray-700 mb-2">Título</label>
                                <input
                                    type="text"
                                    id="titulo_ocorrencia"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                    readOnly={!modoEdicao}
                                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${!modoEdicao ? "bg-gray-200" : "focus:outline-none focus:ring-2 focus:ring-blue-500"}`}
                                />
                            </div>
                            <div>
                                <label htmlFor="data_ocorrencia" className="block text-gray-700 mb-2">Data</label>
                                <input
                                    type="date"
                                    id="data_ocorrencia"
                                    value={data}
                                    onChange={(e) => setData(e.target.value)}
                                    readOnly={!modoEdicao}
                                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${!modoEdicao ? "bg-gray-200" : "focus:outline-none focus:ring-2 focus:ring-blue-500"}`}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="categoria_ocorrencia" className="block text-gray-700 mb-2">Categoria</label>
                            <select
                                id="categoria_ocorrencia"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                disabled={!modoEdicao}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${!modoEdicao ? "bg-gray-200" : "focus:outline-none focus:ring-2 focus:ring-blue-500"}`}
                            >
                                <option value="">Selecione...</option>
                                <option value="inundacao">Inundação</option>
                                <option value="incendio">Incêndio</option>
                                <option value="deslizamento">Deslizamento</option>
                                <option value="tempestade">Tempestade</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="descricao_ocorrencia" className="block text-gray-700 mb-2">Descrição</label>
                            <textarea
                                id="descricao_ocorrencia"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                rows={3}
                                readOnly={!modoEdicao}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${!modoEdicao ? "bg-gray-200" : "focus:outline-none focus:ring-2 focus:ring-blue-500"}`}
                            />
                        </div>

                        <hr className="text-blue-800 mb-6" />

                        <h2 className="mb-4 text-2xl text-blue-800 font-bold">Localização da ocorrência</h2>

                        <div className="mb-6">
                            <label htmlFor="cep_ocorrencia" className="block text-gray-700 mb-2">CEP</label>
                            <input
                                type="text"
                                id="cep_ocorrencia"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                onBlur={() => buscarEndereco(cep)}
                                readOnly={!modoEdicao}
                                placeholder="Digite o CEP..."
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${!modoEdicao ? "bg-gray-200" : "focus:outline-none focus:ring-2 focus:ring-blue-500"}`}
                            />
                        </div>

                        <div className="mb-6 grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="logradouro_ocorrencia" className="block text-gray-700 mb-2">Rua</label>
                                <input
                                    type="text"
                                    id="logradouro_ocorrencia"
                                    value={endereco.logradouro}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="bairro_ocorrencia" className="block text-gray-700 mb-2">Bairro</label>
                                <input
                                    type="text"
                                    id="bairro_ocorrencia"
                                    value={endereco.bairro}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="mb-6 grid grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="localidade_ocorrencia" className="block text-gray-700 mb-2">Cidade</label>
                                <input
                                    type="text"
                                    id="localidade_ocorrencia"
                                    value={endereco.localidade}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="uf_ocorrencia" className="block text-gray-700 mb-2">Estado</label>
                                <input
                                    type="text"
                                    id="uf_ocorrencia"
                                    value={endereco.uf}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="numero_ocorrencia" className="block text-gray-700 mb-2">Número</label>
                                <input
                                    type="text"
                                    id="numero_ocorrencia"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                    readOnly={!modoEdicao}
                                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${!modoEdicao ? "bg-gray-200" : "focus:outline-none focus:ring-2 focus:ring-blue-500"}`}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="raio_auxilio_ocorrencia" className="block text-gray-700 mb-2">Raio para auxílio</label>
                            <select
                                id="raio_auxilio_ocorrencia"
                                disabled={!modoEdicao}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${!modoEdicao ? "bg-gray-200" : "focus:outline-none focus:ring-2 focus:ring-blue-500"}`}
                            >
                                <option value="">Selecione...</option>
                                <option value="bairro">Bairro</option>
                                <option value="cidade">Cidade</option>
                                <option value="estado">Estado</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="gravidade_ocorrencia" className="block text-gray-700 mb-2">Gravidade da ocorrência</label>
                            <select
                                id="gravidade_ocorrencia"
                                disabled={!modoEdicao}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${!modoEdicao ? "bg-gray-200" : "focus:outline-none focus:ring-2 focus:ring-blue-500"}`}
                            >
                                <option value="">Selecione...</option>
                                <option value="baixa">Baixa</option>
                                <option value="media">Média</option>
                                <option value="alta">Alta</option>
                            </select>
                        </div>

                        {/* NOVO BLOCO DE STATUS */}
                        <div className="mb-6">
                            <label htmlFor="status_ocorrencia" className="block text-gray-700 mb-2">Status da ocorrência</label>
                            <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    onClick={() => setAtivo(!ativo)}
                                    disabled={!modoEdicao}
                                    className={`px-4 py-2 rounded-full text-white font-semibold transition ${ativo ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                                        } ${!modoEdicao && "opacity-50 cursor-not-allowed"}`}
                                >
                                    {ativo ? "Ativa" : "Inativa"}
                                </button>
                                <span className="text-gray-600">
                                    {ativo ? "Esta ocorrência está ativa" : "Esta ocorrência está desativada"}
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!modoEdicao}
                            className={`font-(family-name:--font-txt) w-full px-6 py-2 text-white font-semibold rounded-lg transition duration-200 ${modoEdicao ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                        >
                            Salvar ocorrência
                        </button>
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default Ocorrencia;