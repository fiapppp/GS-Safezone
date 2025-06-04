'use client';
import React from "react";
import Image from "next/image";
import Container from "@/app/components/container/container";
import Ocorrencia from "@/app/components/ocorrencia/ocorrencia";

const Ocorrencias = () => {

    return (
        <>
            <section className="mt-5 py-40 h-auto">

                <div className="fixed -z-10 top-10 -right-0 md:opacity-90 opacity-50 h-dvh flex items-center">
                    <Image src="/bg-ocorrencias.png" alt="sf_search" width={1000} height={1000} />
                </div>

                <Container>

                    <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">Cadastrar <span className="text-blue-600">ocorrências</span></h1>

                    <div className="md:flex flex-col md:justify-between mb-4">
                        <form action="" className="md:w-1/2 rounded-full justify-baseline font-(family-name:--font-title) my-3">
                            <div className="border border-gray-200 p-13 bg-white shadow transition">
                                <div className="mb-6">
                                    <label htmlFor="?" className="block text-gray-700 mb-2">?</label>
                                    <input type="?" id="?" name="?" required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="?" className="block text-gray-700 mb-2">?</label>
                                    <input type="?" id="?" name="?" required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <button type="submit"
                                    className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 font-(family-name:--font-txt)">
                                    Cadastrar ocorrência
                                </button>
                            </div>
                        </form>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Ocorrencias;