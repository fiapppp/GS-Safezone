"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/app/components/container/container";
import MapaLocalizacao from "@/app/components/mapa/mapa";
import { ArrowLeft } from "lucide-react";

const DetalheDenuncia = () => {
  const { id } = useParams();
  const router = useRouter();

  const denunciasMock = [
    { id: 1, titulo: "Deslizamento em bairro X", descricao: "Deslizamento de terra em bairro X após fortes chuvas.", data: "05/06/2025", status: "em análise" },
    { id: 2, titulo: "Enchente em rua Y", descricao: "Rua Y completamente alagada.", data: "28/05/2025", status: "em análise" },
    { id: 3, titulo: "Queimada em área Z", descricao: "Queimada descontrolada na área Z.", data: "01/06/2025", status: "recusada" },
    { id: 4, titulo: "Deslizamento em bairro W", descricao: "Deslizamento em bairro W afetando várias casas.", data: "03/06/2025", status: "aprovada" },
  ];

  const denunciaSelecionada = denunciasMock.find(
    (d) => d.id === Number(id)
  );

  const [status, setStatus] = useState(denunciaSelecionada?.status || "em análise");
  const [pontosGerados, setPontosGerados] = useState(0);

  useEffect(() => {
    if (!denunciaSelecionada) {
      router.push("/admin//aprovacao-denuncias");
    }
  }, [denunciaSelecionada, router]);

  if (!denunciaSelecionada) return null;

  const obterInfoStatus = (status: string) => {
    switch (status) {
      case "Aprovada":
        return { cor: "text-green-600", exibePontos: true };
      case "Recusada":
        return { cor: "text-red-600", exibePontos: false };
      case "Em análise":
        return { cor: "text-gray-500", exibePontos: false };
      default:
        return { cor: "text-gray-500", exibePontos: false };
    }
  };

  const { cor, exibePontos } = obterInfoStatus(status);

  const aprovar = () => {
    setStatus("Aprovada");
    setPontosGerados(10);
  };

  const recusar = () => {
    setStatus("Recusada");
    setPontosGerados(0);
  };

  const emAnalise = () => {
    setStatus("Em análise");
    setPontosGerados(0);
  };

  return (
    <section className="py-40 h-auto">
      <Container>

        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
          <Link
            className="flex items-center text-blue-800 hover:text-blue-600 mb-4"
            href="/admin/denuncias"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Voltar</span>
          </Link>

          <div className="grid mb-8">
            <h3 className="text-3xl font-(family-name:--font-title) uppercase text-blue-800 font-semibold">
              {denunciaSelecionada.titulo}
            </h3>
            <p className="text-xs text-gray-400 font-(family-name:--font-txt)">
              Data de criação: {denunciaSelecionada.data}
            </p>
          </div>

          <div className="md:flex justify-between gap-10 items-center mb-5">
            <div>
              <p className="text-gray-600 mb-4">
                {denunciaSelecionada.descricao}
              </p>
            </div>
            <div>
              <MapaLocalizacao width={700} height={200} />
            </div>
          </div>

          <div className="flex justify-between items-center gap-2 font-(family-name:--font-txt)">
            <p className={`${cor}`}>
              Status: <span className="font-semibold">{status}</span>
            </p>
          </div>

          <div className="flex justify-between mt-6 font-(family-name:--font-txt)">
            <div className="flex gap-4">
              <button
                onClick={aprovar}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase"
              >
                Aprovar
              </button>
              <button
                onClick={recusar}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase"
              >
                Reprovar
              </button>
              <button
                onClick={emAnalise}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase"
              >
                Em Análise
              </button>
            </div>
            <div>
              {exibePontos && (
                <p className="text-gray-600">
                  <span className="text-blue-800 font-bold">
                    Pontos Gerados:{" "}
                  </span>
                  {pontosGerados}
                </p>
              )}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default DetalheDenuncia;