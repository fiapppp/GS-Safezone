"use client";
import Link from "next/link";
import Login from "@/app/components/login/login"
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(true);

  const isAdmin = true; // Substituir pela lógica real

  return (
    <header className="shadow fixed w-full top-0 left-0 bg-white/70 backdrop-blur-sm z-50">
      <div className="mx-auto max-w-[78.5rem] px-4">
        <div className="flex justify-between items-center h-16">
          <nav className="flex items-center justify-between w-full font-bold">
            <Link className="flex items-center" href="/">
              <img src="/logo.svg" alt="SafeZone Logo" />
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-6 font-(family-name:--font-title) text-lg">
              <Link href="/" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">
                Início
              </Link>

              {/* Ocorrências */}
              {isAdmin ? (
                <div className="relative group">
                  <button className="flex items-center gap-1 text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">
                    Ocorrências <ChevronDown size={16} />
                  </button>
                  <div className="absolute top-full hidden group-hover:block bg-white shadow rounded text-sm z-50">
                    <Link href="/ocorrencias" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Exibir Ocorrências
                    </Link>
                    <Link href="/admin/cadastro-ocorrencia" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Cadastrar Ocorrência
                    </Link>
                    <Link href="/admin/editar-ocorrencia" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Editar Ocorrência
                    </Link>
                  </div>
                </div>
              ) : (
                <Link href="/ocorrencias" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">
                  Ocorrências
                </Link>
              )}

              {/* Benefícios */}
              {isAdmin ? (
                <div className="relative group">
                  <button className="flex items-center gap-1 text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">
                    Benefícios <ChevronDown size={16} />
                  </button>
                  <div className="absolute top-full hidden group-hover:block bg-white shadow rounded text-sm z-50">
                    <Link href="/beneficios" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Exibir Benefícios
                    </Link>
                    <Link href="/admin/cadastro-beneficio" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Cadastrar Benefício
                    </Link>
                    <Link href="/admin/editar-beneficio" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Editar Benefício
                    </Link>
                  </div>
                </div>
              ) : (
                <Link href="/beneficios" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">
                  Benefícios
                </Link>
              )}

              {/* Denúncias */}
              {isAdmin && (
                <Link href="/admin/aprovacao-denuncias" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">
                  Aprovação de Denúncias
                </Link>
              )}

              <Link href="/integrantes" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">
                Sobre nós
              </Link>
              <Login />
            </div>

            {/* Botão Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuAberto(!menuAberto)} className="text-gray-900">
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
            <Link href="/" onClick={() => setMenuAberto(false)} className="w-full text-gray-900 hover:bg-gray-200 rounded p-2">
              Início
            </Link>

            <Link href="/ocorrencias" onClick={() => setMenuAberto(false)} className="w-full text-gray-900 hover:bg-gray-200 rounded p-2">
              Ocorrências
            </Link>
            {isAdmin && (
              <>
                <Link href="/admin/cadastro-ocorrencia" onClick={() => setMenuAberto(false)} className="w-full text-sm text-gray-700 hover:bg-gray-100 px-4">
                  Cadastrar Ocorrência
                </Link>
                <Link href="/admin/editar-ocorrencia" onClick={() => setMenuAberto(false)} className="w-full text-sm text-gray-700 hover:bg-gray-100 px-4">
                  Editar Ocorrência
                </Link>
              </>
            )}

            <Link href="/beneficios" onClick={() => setMenuAberto(false)} className="w-full text-gray-900 hover:bg-gray-200 rounded p-2">
              Benefícios
            </Link>
            {isAdmin && (
              <>
                <Link href="/admin/cadastro-beneficio" onClick={() => setMenuAberto(false)} className="w-full text-sm text-gray-700 hover:bg-gray-100 px-4">
                  Cadastrar Benefício
                </Link>
                <Link href="/admin/editar-beneficio" onClick={() => setMenuAberto(false)} className="w-full text-sm text-gray-700 hover:bg-gray-100 px-4">
                  Editar Benefício
                </Link>
              </>
            )}

            {isAdmin && (
              <Link href="/admin/aprovacao-denuncias" onClick={() => setMenuAberto(false)} className="w-full text-gray-900 hover:bg-gray-200 rounded p-2">
                Aprovação de Denúncias
              </Link>
            )}

            <Link href="/integrantes" onClick={() => setMenuAberto(false)} className="w-full text-gray-900 hover:bg-gray-200 rounded p-2">
              Sobre nós
            </Link>
            <Login />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;