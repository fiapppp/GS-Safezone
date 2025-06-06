"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/container/container";
import MapaLocalizacao from "@/app/components/mapa/mapa";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Ocorrencias = () => {
    const router = useRouter();

    return (
        <>
            <section className="py-30 h-auto">
                <Container>

                    <div className="my-1">
                        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
                            <Link className="flex items-center text-blue-800 hover:text-blue-600 mb-4" href="/ocorrencias">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                <span className="font-(family-name:--font-txt)">Voltar</span>
                            </Link>
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="font-semibold text-blue-800 uppercase font-(family-name:--font-title) text-3xl">Título</h3>
                                <Image src="/enchente.svg" alt="sf_alert" width={60} height={60} />
                            </div>

                            <div className="justify-between grid gap-3 items-center mt-5 mb-10">
                                <div>
                                    <p className="text-gray-600 mb-4 font-(family-name:--font-txt)">Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos praesentium ut animi labore nihil dolorem rerum nulla quas, iusto eligendi perferendis assumenda nesciunt eveniet reprehenderit aperiam possimus, magni amet numquam.</p>
                                </div>
                                <div>
                                    <Link href="/denuncias/cadastrar" className="text-center font-(family-name:--font-txt) px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">Fazer denúncia</Link>
                                </div>
                            </div>

                            <div>
                                <MapaLocalizacao />
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    );
};

export default Ocorrencias;