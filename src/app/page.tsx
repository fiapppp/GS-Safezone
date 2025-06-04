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
                Aqui você pode se manter seguro em situações de risco. Encontre abrigos
                disponíveis, receba alertas em tempo real sobre desastres na sua região e
                envie relatos para ajudar sua comunidade.
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
                Mapa de Abrigos
              </h2>

              <div className="font-(family-name:--font-txt)">
                <p className="text-lg mb-10 max-w-2xl text-gray-700">
                  Veja os abrigos disponíveis para os alertas mais recentes na sua região.
                  Mantenha-se informado e seguro!
                </p>

                <Link href="/alertas" className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
                  Procurar abrigos
                </Link>
              </div>
            </div>

            <MapaLocalizacao />
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

              {/* Card 1 */}
              <div className="border border-gray-200 rounded-full p-13 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
                <Image src="/report.svg" alt="sf_report" width={50} height={50} />
                <h2 className="text-2xl font-semibold text-center text-blue-700 mt-5 mb-8 font-(family-name:--font-title)">
                  Enviar Relato
                </h2>
                <p className="mb-10 text-gray-600 text-center font-(family-name:--font-txt)">
                  Viu uma situação de risco? Avise! Seu relato pode ajudar autoridades e outras pessoas.
                </p>
                <Link href="/relatos">
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold uppercase font-(family-name:--font-txt)">
                    Enviar Relato
                  </button>
                </Link>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-200 rounded-full p-13 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
                <Image src="/search.svg" alt="sf_search" width={50} height={50} />
                <h2 className="text-2xl font-semibold text-center text-blue-700 mt-5 mb-8 font-(family-name:--font-title)">
                  Encontre Abrigos
                </h2>
                <p className="mb-10 text-gray-600 text-center font-(family-name:--font-txt)">
                  Descubra abrigos próximos, veja capacidade disponível e como chegar até lá.
                </p>
                <Link href="/abrigos">
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold uppercase font-(family-name:--font-txt)">
                    Buscar Abrigos
                  </button>
                </Link>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-200 rounded-full p-13 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
                <Image src="/alert.svg" alt="sf_alert" width={50} height={50} />
                <h2 className="text-2xl font-semibold text-center text-blue-700 mt-5 mb-8 font-(family-name:--font-title)">
                  Título
                </h2>
                <p className="mb-10 text-gray-600 text-center font-(family-name:--font-txt)">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link href="/alertas">
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold uppercase font-(family-name:--font-txt)">
                    Link
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
              <h2 className="text-3xl font-extrabold mb-6 text-black uppercase font-(family-name:--font-title)">Últimos Ocorrências</h2>
              <p className="text-lg mb-10 max-w-2xl text-black font-(family-name:--font-txt)">
                Fique por dentro das últimas ocorrências registradas. Compartilhe os relatos e ajude as comuniadades afetadas.
              </p>
              <Link href="/alertas" className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800 font-(family-name:--font-txt)">
                Ver útimas ocorrências
              </Link>
            </div>

            <div className="mt-15 md:mt-0 md:ml-15">
              <div className="grid grid-cols-1 gap-6">
                {/* Card 1 */}
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                  <div className="flex gap-2 items-center mb-3">
                    <Image src="/enchente.svg" alt="sf_alert" width={20} height={20} />
                    <h3 className="text-xl font-semibold text-blue-800 uppercase font-(family-name:--font-title)">Alerta de Enchente</h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">Uma enchente foi registrada na região do centro. Evite áreas alagadas.</p>
                  <Link href="/alertas/1" className="text-blue-600 hover:underline flex justify-end font-(family-name:--font-txt)">Ver Detalhes</Link>
                </div>

                {/* Card 2 */}
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                  <div className="flex gap-2 items-center mb-3">
                    <Image src="/queimada.svg" alt="sf_alert" width={20} height={20} />
                    <h3 className="text-xl font-semibold text-blue-800 uppercase font-(family-name:--font-title)">Alerta de Queimada</h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">Uma queimada foi registrada na região do centro. Evite áreas com fumaça e focos de incêndio.</p>
                  <Link href="/alertas/2" className="text-blue-600 hover:underline flex justify-end font-(family-name:--font-txt)">Ver Detalhes</Link>
                </div>

                {/* Card 3 */}
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                  <div className="flex gap-2 items-center mb-3">
                    <Image src="/deslizamento.svg" alt="sf_alert" width={20} height={20} />
                    <h3 className="text-xl font-semibold text-blue-800 uppercase font-(family-name:--font-title)">Alerta de Deslizamento</h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">Um deslizamento foi registrado na região do centro. Evite encostas, morros e áreas de risco.</p>
                  <Link href="/alertas/3" className="text-blue-600 hover:underline flex justify-end font-(family-name:--font-txt)">Ver Detalhes</Link>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </section>
    </>
  );
}