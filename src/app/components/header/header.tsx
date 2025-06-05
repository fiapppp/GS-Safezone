"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

const Header = () => {

    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <>
            <header className="shadow fixed w-full top-0 left-0 bg-white/70 backdrop-blur-sm z-50">
                <div className="mx-auto max-w-[78.5rem] px-4">
                    <div className="flex justify-between items-center h-16">
                        <nav className="flex items-center justify-between w-full font-bold">
                            <Link className="flex items-center" href={"/"}>
                                <img src="/logo.svg" alt="SafeZone Logo" />
                            </Link>

                            {/* Menu Desktop */}
                            <div className="hidden md:flex items-center space-x-3 font-(family-name:--font-title) text-lg">
                                <Link href="/" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">Início</Link>
                                <Link href="/ocorrencias" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">Ocorrências</Link>
                                <Link href="/beneficios" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">Benefícios</Link>
                                <Link href="/integrantes" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">Sobre nós</Link>
                                <Link href="/usuario/login" className="hover:text-gray-700 bg-blue-400 rounded p-2 text-white">Login</Link>
                            </div>

                            {/* Botão Menu Mobile */}
                            <div className="md:hidden flex items-center">
                                <button onClick={toggleMenu} className="text-gray-900">
                                    {menuAberto ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Menu Mobile */}
                {menuAberto && (
                    <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md">
                        <div className="flex flex-col items-start p-4 space-y-2 font-(family-name:--font-title) text-lg">
                            <Link href="/" onClick={toggleMenu} className="w-full text-gray-900 hover:bg-gray-200 rounded p-2">Início</Link>
                            <Link href="/ocorrencias" onClick={toggleMenu} className="w-full text-gray-900 hover:bg-gray-200 rounded p-2">Ocorrências</Link>
                            <Link href="/beneficios" onClick={toggleMenu} className="w-full text-gray-900 hover:bg-gray-200 rounded p-2">Benefícios</Link>
                            <Link href="/integrantes" onClick={toggleMenu} className="w-full text-gray-900 hover:bg-gray-200 rounded p-2">Sobre nós</Link>
                            <Link href="/usuario/login" onClick={toggleMenu} className="w-full bg-blue-400 text-white rounded p-2 hover:bg-blue-500">Login</Link>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;