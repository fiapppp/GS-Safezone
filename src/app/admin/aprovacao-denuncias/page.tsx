"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/app/components/container/container";

type DenunciaType = {
  id: number;
  titulo: string;
  data: string;
  status: string;
};

const AprovDenuncias = () => {
  const [ordenacao, setOrdenacao] = useState("mais-recentes");
  const [statusFiltro, setStatusFiltro] = useState("todos");
  const [denuncias, setDenuncias] = useState<DenunciaType[]>([]);

  const denunciasMock = [
    { id: 1, titulo: "Deslizamento em bairro X", data: "2025-06-05", status: "aprovada" },
    { id: 2, titulo: "Enchente em rua Y", data: "2025-05-28", status: "em análise" },
    { id: 3, titulo: "Queimada em área Z", data: "2025-06-01", status: "recusada" },
    { id: 4, titulo: "Deslizamento em bairro W", data: "2025-06-03", status: "em análise" },
  ];

  useEffect(() => {
    let resultado = [...denunciasMock];

    if (statusFiltro !== "todos") {
      resultado = resultado.filter((d) => d.status === statusFiltro);
    }

    resultado.sort((a, b) => {
      if (ordenacao === "mais-recentes") {
        return new Date(b.data).getTime() - new Date(a.data).getTime();
      } else if (ordenacao === "mais-antigas") {
        return new Date(a.data).getTime() - new Date(b.data).getTime();
      } else if (ordenacao === "titulo-alfabetico") {
        return a.titulo.localeCompare(b.titulo);
      }
      return 0;
    });

    setDenuncias(resultado);
  }, [ordenacao, statusFiltro]);

  return (
    <section className="mt-5 py-40 h-auto">
      <Container>

        <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">
          Gerenciamento <span className="text-blue-700">de</span> <span className="text-blue-600">Denúncias</span>
        </h1>

        <div className="flex justify-between md:text-base text-xs items-center mb-10 font-(family-name:--font-txt) gap-10">
          <div className="flex items-center">
            <label htmlFor="statusFiltro" className="mr-3 text-gray-700 font-medium">
              Filtrar por status:
            </label>
            <select
              id="statusFiltro"
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
              onChange={(e) => setStatusFiltro(e.target.value)}
              value={statusFiltro}
            >
              <option value="todos">Todos</option>
              <option value="em análise">Em análise</option>
              <option value="aprovada">Aprovadas</option>
              <option value="recusada">Recusadas</option>
            </select>
          </div>

          <div className="flex items-center">
            <label htmlFor="ordenacao" className="mr-3 text-gray-700 font-medium">
              Ordenar por:
            </label>
            <select
              id="ordenacao"
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
              onChange={(e) => setOrdenacao(e.target.value)}
              value={ordenacao}
            >
              <option value="mais-recentes">Mais recentes</option>
              <option value="mais-antigas">Mais antigas</option>
              <option value="titulo-alfabetico">Título (A-Z)</option>
            </select>
          </div>
        </div>

        <h2 className="text-3xl mb-10 font-(family-name:--font-title)">
          Denúncias {statusFiltro === "todos" ? "cadastradas" : statusFiltro}:
        </h2>

        {denuncias.length === 0 ? (
          <p className="text-gray-500 font-(family-name:--font-txt)">Nenhuma denúncia encontrada.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {denuncias.map((item) => (
              <Link
                key={item.id}
                href={`/admin/aprovacao-denuncias/${item.id}`}
                className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-(family-name:--font-title) uppercase text-blue-800 font-semibold mb-2">
                  {item.titulo}
                </h3>
                <p className="text-xs font-(family-name:--font-txt) text-gray-500 mb-2">
                  Data: {item.data}
                </p>
                <p
                  className={`font-bold font-(family-name:--font-txt) ${
                    item.status === "aprovada"
                      ? "text-green-600"
                      : item.status === "recusada"
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  Status: {item.status}
                </p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default AprovDenuncias;