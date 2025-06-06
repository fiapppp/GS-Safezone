'use client';
import React from "react";
import Image from "next/image";
import Container from "@/app/components/container/container";

const Integrantes = () => {

    return (
        <>
            <section className="mt-5 py-40 h-auto">
                <Container>

                    <h1 className="text-5xl font-extrabold mb-6 text-purple-800 font-(family-name:--font-title)">Integrantes</h1>

                    <p className="text-lg mb-10 text-gray-700 font-(family-name:--font-txt)">O desafio prorposto para nós alunos da <a href="https://www.fiap.com.br/" className='text-pink-600 font-bold'>FIAP</a> é propor uma solução que use tecnologia, inovação e boas ideias para ajudar pessoas, proteger o meio ambiente ou prevenir problemas ainda maiores. Assim nasceu o <span className="uppercase font-(family-name:--font-title) text-blue-800 font-bold">SafeZone</span>.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                        <div className="rounded p-7 py-8 border border-gray-200 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
                            <div className="rounded-full flex items-center justify-center mb-5">
                                <Image src="/gc_profile.svg" alt="" width={250} height={250} />
                            </div>
                            <div className="text-center font-(family-name:--font-title) uppercase my-10 text-blue-800">
                                <p className="text-3xl font-bold">Gabriel Cruz</p>
                                <p>RM 559613</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <a href={""} target="_blank" rel="noopener noreferrer" className='hover:bg-gray-300 transition duration-150 ease-in-out p-5 rounded-full'><Image src="/linkedin_logo.svg" alt="linkedin_logo" width={50} height={50} /></a>
                                <a href="https://github.com/gabrielCZz" target="_blank" rel="noopener noreferrer" className='hover:bg-gray-300 transition duration-150 ease-in-out p-5 rounded-full'><Image src="/github_logo.svg" alt="" width={50} height={50} /></a>
                            </div>
                        </div>

                        <div className="rounded p-7 py-8 border border-gray-200 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
                            <div className="rounded-full flex items-center justify-center mb-5">
                                <Image src="/kf_profile.svg" alt="" width={250} height={250} />
                            </div>
                            <div className="text-center font-(family-name:--font-title) uppercase my-10 text-blue-800">
                                <p className="text-3xl font-bold">Kauã Ferreira</p>
                                <p>RM 560992</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <a href="https://www.linkedin.com/in/kaua-ferreira/" target="_blank" rel="noopener noreferrer" className='hover:bg-gray-300 transition duration-150 ease-in-out p-5 rounded-full'><Image src="/linkedin_logo.svg" alt="linkedin_logo" width={50} height={50} /></a>
                                <a href="https://github.com/k-auaferreira" target="_blank" rel="noopener noreferrer" className='hover:bg-gray-300 transition duration-150 ease-in-out p-5 rounded-full'><Image src="/github_logo.svg" alt="" width={50} height={50} /></a>
                            </div>
                        </div>

                        <div className="rounded p-7 py-8 border border-gray-200 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
                            <div className="rounded-full flex items-center justify-center mb-5">
                                <Image src="/vb_profile.svg" alt="" width={250} height={250} />
                            </div>
                            <div className="text-center font-(family-name:--font-title) uppercase my-10 text-blue-800">
                                <p className="text-3xl font-bold">Vinicius Bitú</p>
                                <p>RM 560227</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <a href="https://www.linkedin.com/in/viniciusbitu" target="_blank" rel="noopener noreferrer" className='hover:bg-gray-300 transition duration-150 ease-in-out p-5 rounded-full'><Image src="/linkedin_logo.svg" alt="linkedin_logo" width={50} height={50} /></a>
                                <a href="https://github.com/Vi-debu" target="_blank" rel="noopener noreferrer" className='hover:bg-gray-300 transition duration-150 ease-in-out p-5 rounded-full'><Image src="/github_logo.svg" alt="" width={50} height={50} /></a>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Integrantes;