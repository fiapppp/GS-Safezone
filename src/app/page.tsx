'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/container/container";
import MapaLocalizacao from '@/app/components/mapa/mapa';

export default function Home() {

  return (
    <>
      <section className="mt-10 py-40 h-auto">
        <Container>

          <div className="md:flex md:flex-1/2 md:justify-between items-center">
            <div>
              <p className="text-4xl mb-3">🚨</p>
              <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">
                Bem-vindo ao <span className="text-blue-600">SafeZone</span>
              </h1>

              <p className="text-lg mb-10 max-w-2xl text-gray-700 font-(family-name:--font-txt)">
                Fique por dentro dos desastres mais recentes e ajude quem precisa.
                Acompanhe ocorrências em tempo real, envie denúncias sobre áreas afetadas e contribua para que pessoas em situação de risco recebam os benefícios e o apoio que merecem.
              </p>

              <div className="flex gap-4 font-(family-name:--font-txt)">
                <Link href="/usuario/login">
                  <button className="px-6 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800">
                    Login
                  </button>
                </Link>
                <Link href="/usuario/cadastro">
                  <button className="px-6 py-2 rounded-lg border border-blue-700 text-blue-700 hover:bg-blue-50">
                    Cadastro
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-15 md:mt-0 md:ml-15 flex justify-center">
              <Image src="/sf_home.svg" alt="Safezone home" width={300} height={285} />
            </div>
          </div>

        </Container>
      </section>

      <section className="h-auto py-30 bg-gray-200">
        <Container>

          <div className="grid md:flex md:justify-between items-center gap-10">
            <div className="justify-center items-center">
              <h2 className="text-3xl font-bold mb-5 text-blue-600 uppercase font-(family-name:--font-title)">
                Áreas Afetadas
              </h2>

              <div className="font-(family-name:--font-txt)">
                <p className="text-lg mb-3 max-w-2xl text-gray-700">
                  Acompanhe no mapa os desastres mais recentes próximos de você.
                </p>
                <p className="text-lg mb-10 max-w-2xl text-gray-700">
                  Veja onde há <span className="text-blue-600 font-bold">ocorrências</span>, envie <span className="text-blue-600 font-bold">denúncias</span> e contribua para que pessoas afetadas recebam ajuda e <span className="text-blue-600 font-bold">benefícios</span>.
                </p>

                <Link href="/ocorrencias" className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
                  Ver ocorrências
                </Link>
              </div>
            </div>

            <MapaLocalizacao/>
          </div>

        </Container>
      </section>

      <section className="py-30 h-auto">
        <Container>

          <h2 className="text-3xl font-bold mb-20 text-center text-blue-800 uppercase font-(family-name:--font-title)">
            O que você pode fazer no SafeZone?
          </h2>

          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Card 1 - Enviar Relato */}
              <div className="border border-gray-200 rounded-full p-13 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
                <Image src="/report.svg" alt="sf_report" width={50} height={50} />
                <h2 className="text-2xl font-semibold text-center text-blue-700 mt-5 mb-8 font-(family-name:--font-title)">
                  Enviar Denúncia
                </h2>
                <p className="mb-10 text-gray-600 text-center font-(family-name:--font-txt)">
                  Identificou uma área afetada ou pessoas em risco? Envie uma denúncia e ajude a direcionar benefícios com mais agilidade.
                </p>
                <Link href="/relatos">
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold uppercase font-(family-name:--font-txt)">
                    Enviar agora
                  </button>
                </Link>
              </div>

              {/* Card 2 - Ver Benefícios */}
              <div className="border border-gray-200 rounded-full p-13 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
                <Image src="/beneficios.svg" alt="sf_benefits" width={50} height={50} />
                <h2 className="text-2xl font-semibold text-center text-blue-700 mt-5 mb-8 font-(family-name:--font-title)">
                  Acesso a Benefícios
                </h2>
                <p className="mb-10 text-gray-600 text-center font-(family-name:--font-txt)">
                  Consulte os benefícios disponíveis para pessoas afetadas por desastres na sua região, como auxílios emergenciais e apoio humanitário.
                </p>
                <Link href="/beneficios">
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold uppercase font-(family-name:--font-txt)">
                    Ver Benefícios
                  </button>
                </Link>
              </div>

              {/* Card 3 - Alertas Ativos */}
              <div className="border border-gray-200 rounded-full p-13 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
                <Image src="/alert.svg" alt="sf_alert" width={50} height={50} />
                <h2 className="text-2xl font-semibold text-center text-blue-700 mt-5 mb-8 font-(family-name:--font-title)">
                  Alertas Ativos
                </h2>
                <p className="mb-10 text-gray-600 text-center font-(family-name:--font-txt)">
                  Veja os desastres mais recentes em sua região e acompanhe atualizações em tempo real para se proteger e ajudar.
                </p>
                <Link href="/ocorrencias">
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold uppercase font-(family-name:--font-txt)">
                    Ver Alertas
                  </button>
                </Link>
              </div>

            </div>
          </div>


        </Container>
      </section>

      <section className="py-30 bg-blue-400">
        <Container>

          <div className="md:flex md:flex-1/2 md:justify-between items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6 text-black uppercase font-(family-name:--font-title)">Últimos Desastres</h2>
              <p className="text-lg mb-10 max-w-2xl text-black font-(family-name:--font-txt)">
                Fique por dentro dos desastres que atingem sua região e ajude quem mais precisa. Suas denúncias podem garantir que famílias em risco recebam apoio e benefícios essenciais.
              </p>
              <Link href="/alertas" className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800 font-(family-name:--font-txt)">
                Ver últimas ocorrências
              </Link>
            </div>

            <div className="mt-15 md:mt-0 md:ml-15">

              <p className="font-(family-name:--font-txt) text-sm mb-2 text-gray-700">Exemplos de ocorrências:</p>
              
              <div className="grid grid-cols-1 gap-6">

                {/* Card 1 - Enchente */}
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                  <div className="flex gap-2 items-center mb-3">
                    <Image src="/enchente.svg" alt="Alerta de Enchente" width={20} height={20} />
                    <h3 className="text-xl font-semibold text-blue-800 uppercase font-(family-name:--font-title)">
                      Alerta de Enchente
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">
                    Enchente registrada na região central. Denúncias indicam alagamentos em vias públicas. Autoridades em alerta para envio de auxílio emergencial.
                  </p>
                  <Link href="/alertas/1" className="text-blue-600 hover:underline flex justify-end font-(family-name:--font-txt)">
                    Ver Detalhes
                  </Link>
                </div>

                {/* Card 2 - Queimada */}
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                  <div className="flex gap-2 items-center mb-3">
                    <Image src="/queimada.svg" alt="Alerta de Queimada" width={20} height={20} />
                    <h3 className="text-xl font-semibold text-blue-800 uppercase font-(family-name:--font-title)">
                      Alerta de Queimada
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">
                    Focos de queimada foram relatados próximo à zona urbana. Equipes de contenção e avaliação de impacto social foram acionadas.
                  </p>
                  <Link href="/alertas/2" className="text-blue-600 hover:underline flex justify-end font-(family-name:--font-txt)">
                    Ver Detalhes
                  </Link>
                </div>

                {/* Card 3 - Deslizamento */}
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                  <div className="flex gap-2 items-center mb-3">
                    <Image src="/deslizamento.svg" alt="Alerta de Deslizamento" width={20} height={20} />
                    <h3 className="text-xl font-semibold text-blue-800 uppercase font-(family-name:--font-title)">
                      Alerta de Deslizamento
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">
                    Deslizamento em área de morro foi confirmado por moradores. Comunidade mobilizada para solicitar suporte e acesso a benefícios.
                  </p>
                  <Link href="/alertas/3" className="text-blue-600 hover:underline flex justify-end font-(family-name:--font-txt)">
                    Ver Detalhes
                  </Link>
                </div>

              </div>
            </div>
          </div>


        </Container>
      </section>
    </>
  );
}