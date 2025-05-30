import Link from "next/link";

const Header = () => {

    return (
        <>
            <header className="shadow fixed w-full top-0 left-0 bg-white/70 backdrop-blur-sm">
                <div className="mx-auto max-w-[78.5rem] px-4">
                    <div className="flex justify-between items-center h-16">
                        <nav className="flex items-center justify-between w-full font-bold">
                            <Link className="flex items-center" href={"/"}>
                                <img src="/logo.svg" alt="SafeZone Logo" />
                            </Link>
                            <div className="hidden md:flex items-center space-x-3 font-(family-name:--font-title) text-lg">
                                <a href="/" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">Início</a>
                                <a href="/" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">Abrigos</a>
                                <a href="/" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">Áreas de risco</a>
                                <a href="/" className="text-gray-900 hover:text-white rounded p-2 hover:bg-gray-700">Sobre nós</a>
                                <a href="/" className= "hover:text-gray-700 bg-blue-400 rounded p-2 text-white">Login</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;