"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Container from "@/app/components/container/container";
import Link from "next/link";
import Image from "next/image";
import API_SF from "@/app/services/api";
import { UserContext } from "../../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const router = useRouter();
    const { setUser } = useContext(UserContext);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro("");

        try {
            const res = await fetch(`${API_SF}api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            if (!res.ok) {
                throw new Error("Email ou senha inválidos.");
            }

            const data = await res.json();

            localStorage.setItem("token", data.token);
            localStorage.setItem("expiraEm", data.expiraEm);
            localStorage.setItem("usuario", JSON.stringify(data.usuario)); // <-- Salva o usuário


            router.push("/");
        } catch (err: any) {
            setErro(err.message || "Erro ao realizar login");
        }
    };

    return (
        <section className="mt-10 py-25 h-dvh flex items-center">
            <div className="fixed -z-10 top-10 -right-0 md:opacity-90 opacity-50 h-dvh flex items-center">
                <Image src="/bg-login.png" alt="sf_search" width={1000} height={1000} />
            </div>

            <Container>
                <h1 className="text-5xl font-extrabold mb-6 text-blue-800 font-(family-name:--font-title)">
                    Lo<span className="text-blue-600">gin</span>
                </h1>

                <form
                    onSubmit={handleLogin}
                    className="md:w-1/2 rounded-full justify-baseline font-(family-name:--font-title) my-3"
                >
                    <div className="border border-gray-200 p-13 bg-white shadow transition rounded-xl p-6">
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="senha" className="block text-gray-700 mb-2">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {erro && <p className="text-red-600 mb-4">{erro}</p>}
                        <button
                            type="submit"
                            className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 font-(family-name:--font-txt)"
                        >
                            Entrar
                        </button>
                    </div>
                </form>

                <Link
                    href={"/usuario/cadastro"}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 md:w-1/2 my-5 text-center block font-(family-name:--font-txt)"
                >
                    Não tem uma conta? Cadastre-se aqui!!
                </Link>
            </Container>
        </section>
    );
};

export default Login;
