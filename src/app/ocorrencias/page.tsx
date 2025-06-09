"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/app/components/container/container";
import Ocorrencia from "@/app/components/ocorrencia/ocorrencia";
import TextoLimitado from "../components/textoLimitado/textoLimitado";
import API_SF from "@/app/services/api";

const Ocorrencias = () => {
    const [ocorrencias, setOcorrencias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchOcorrencias = async () => {
            try {
                const res = await fetch(`${API_SF}/api/ocorrencia/listar`);
                if (!res.ok) throw new Error("Erro ao buscar ocorrências");
                const data = await res.json();
                setOcorrencias(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchOcorrencias();
    }, []);

    return (
        <section className="mt-5 py-40 h-auto">
            <Container>
                <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">
                    Ocorrências
                </h1>

                <div className="grid md:flex gap-10 justify-between">
                    <p className="text-lg md:mb-6 text-gray-700 font-(family-name:--font-txt)">
                        Aqui você pode visualizar todas as ocorrências registradas na plataforma. Fique atento às informações e contribua para manter a comunidade bem informada. <br />
                        Você também pode consultar as denúncias que já realizou clicando no botão abaixo. <br />
                        Para denunciar uma ocorrência, clique sobre ela e, na página de detalhes, utilize o botão <strong>"Fazer Denúncia"</strong>.
                    </p>

                    <Link href="/denuncias/minhas-denuncias"
                        className="font-(family-name:--font-txt) flex items-center text-center justify-center mb-10 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
                        Ver minhas denúncias ativas
                    </Link>
                </div>

                <h2 className="font-(family-name:--font-title) text-3xl mb-10">
                    Últimas ocorrências cadastradas:
                </h2>

                {loading ? (
                    <div className="flex justify-center items-center mt-20">
                        <span className="text-blue-600 font-(family-name:--font-txt)">Carregando...</span>
                    </div>
                ) : error ? (
                    <p className="mt-20 text-center text-red-500 font-(family-name:--font-txt)">Erro ao carregar ocorrências.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ocorrencias.map((ocorrencia: any) => (
                            <Ocorrencia
                                key={ocorrencia.id}
                                id={ocorrencia.id}
                                titulo={ocorrencia.titulo}
                                descricao={ocorrencia.descricao}
                                imagem={ocorrencia.imagem}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
};

export default Ocorrencias;