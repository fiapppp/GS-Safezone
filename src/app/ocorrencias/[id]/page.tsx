"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/app/components/container/container";
import { ArrowLeft } from "lucide-react";
import API_SF from "@/app/services/api";

// Defina um tipo explícito para ocorrência (ajuste conforme sua API)
interface Ocorrencia {
  titulo: string;
  descricao: string;
  // Adicione outros campos conforme necessário
}

const OcorrenciaDetalhe = () => {
  const { id } = useParams();
  const [ocorrencia, setOcorrencia] = useState<Ocorrencia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOcorrencia = async () => {
      try {
        const res = await fetch(`${API_SF}/api/ocorrencia/buscar/${id}`);
        const data: Ocorrencia = await res.json();
        setOcorrencia(data);
      } catch (err) {
        console.error("Erro ao buscar ocorrência:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchOcorrencia();
    }
  }, [id]);

  if (loading)
    return (
      <div className="py-30 h-dvh flex flex-col items-center justify-center">
        <Image
          src="/loader-sf.svg"
          alt="Carregando..."
          width={300}
          height={300}
          className="bg-white rounded-full shadow-md p-6"
        />
        <p className="text-sm animate-pulse font-(family-name:--font-txt) mt-4">
          Carregando mapa...
        </p>
      </div>
    );

  if (!ocorrencia)
    return (
      <p className="text-center text-red-500">
        Ocorrência não encontrada.
      </p>
    );

  return (
    <section className="py-30 h-dvh flex items-center">
      <Container>
        <div className="my-1">
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
            <Link
              className="flex items-center text-blue-800 hover:text-blue-600 mb-4"
              href="/ocorrencias"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-(family-name:--font-txt)">Voltar</span>
            </Link>

            <div className="flex justify-between items-center mb-8">
              <h3 className="font-semibold text-blue-800 uppercase font-(family-name:--font-title) text-3xl">
                {ocorrencia.titulo}
              </h3>
              <Image src="/enchente.svg" alt="sf_alert" width={60} height={60} />
            </div>

            <div className="justify-between grid gap-3 items-center my-5">
              <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">
                {ocorrencia.descricao}
              </p>
            </div>

            <Link
              href="/denuncias/cadastrar"
              className="text-center font-(family-name:--font-txt) px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Fazer denúncia
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OcorrenciaDetalhe;