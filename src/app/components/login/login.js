"use client";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiraEm");
    localStorage.removeItem("usuario");
    setUser(null);
  };

  return (
    <div className="relative">
      {!user ? (
        <Link
          href="/usuario/login"
          className="text-gray-900 hover:text-white rounded block px-4 py-2 hover:bg-blue-700"
        >
          Login
        </Link>
      ) : (
        <div className="group relative inline-block text-left">
          <div className="flex items-center gap-2 cursor-pointer text-gray-900 hover:text-white px-4 py-2 hover:bg-gray-700 rounded">
            <FaUserCircle size={24} className="text-blue-600" />
            <span>{user.name || user.username || "Usuário"}</span>
          </div>

          <div className="absolute right-0 mt-1 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 hidden group-hover:block">
            <div className="py-2">
              <div className="px-4 py-1">
                <p className="text-sm font-medium text-gray-900">{user.name || user.username || "Usuário"}</p>
                <p className="text-xs text-gray-600">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
