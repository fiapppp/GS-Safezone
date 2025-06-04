"use client";

import { useState } from "react";
import Container from "@/app/components/container/container";
import Link from "next/link";
import Image from "next/image";

const Cadastro = () => {
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
            <section className="mt-10 py-25 flex items-center">

                <div className="fixed -z-10 top-10 -right-0 md:opacity-90 opacity-50 h-dvh flex items-center">
                    <Image src="/bg-cadastro.png" alt="sf_search" width={1000} height={1000} />
                </div>

                <Container>

                    <h1 className="text-5xl font-extrabold mb-6 text-purple-800 font-(family-name:--font-title)">
                        Cad<span className="text-purple-600">astro</span>
                    </h1>

                    <div className="md:flex flex-col justify-center md:justify-between mb-4">
                        <form action="" className="md:w-1/2 rounded-full justify-baseline font-(family-name:--font-title) my-3">
                            <div className="border border-gray-200 p-13 bg-white shadow transition">
                                <div className="mb-6">
                                    <label htmlFor="nome" className="block text-gray-700 mb-2">Nome</label>
                                    <input type="text" id="nome" name="nome" required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
                                    <input type="email" id="email" name="email" required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="senha" className="block text-gray-700 mb-2">Senha</label>
                                    <input type="password" id="senha" name="senha" required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="conf_senha" className="block text-gray-700 mb-2">Confirme a senha</label>
                                    <input type="password" id="conf_senha" name="conf_senha" required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="cep" className="block text-gray-700 mb-2">CEP</label>
                                    <input
                                        type="text"
                                        id="cep"
                                        name="cep"
                                        value={cep}
                                        onChange={(e) => setCep(e.target.value)}
                                        onBlur={() => buscarEndereco(cep)}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <div className="mb-6 grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="logradouro" className="block text-gray-700 mb-2">Rua</label>
                                        <input
                                            type="text"
                                            id="logradouro"
                                            name="logradouro"
                                            value={endereco.logradouro}
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
                                            value={endereco.bairro}
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
                                            value={endereco.localidade}
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
                                            value={endereco.uf}
                                            readOnly
                                            className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="numero" className="block text-gray-700 mb-2">Número</label>
                                        <input type="text" id="numero" name="numero" required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>
                                </div>
                                <button type="submit"
                                    className="w-full px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 font-(family-name:--font-txt)">
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>

                    <Link href={"/usuario/login"} className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 md:w-1/2 my-5 text-center font-(family-name:--font-txt)">Já tem uma conta? Faça login aqui!</Link>

                </Container>
            </section>
        </>
    );
};

export default Cadastro;