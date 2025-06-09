"use client";
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuario");
    console.log("UserContext: usuarioLogado from localStorage:", usuarioLogado);
    if (typeof usuarioLogado === "string" && usuarioLogado.trim() !== "") {
      try {
        const parsedUser = JSON.parse(usuarioLogado);
        console.log("UserContext: parsedUser:", parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse usuario from localStorage:", error);
        localStorage.removeItem("usuario");
        setUser(null);
      }
    } else {
      setUser(null);
    }

    // Listen for userLogin event to update user state dynamically
    const handleUserLogin = (event) => {
      console.log("UserContext: userLogin event received:", event.detail);
      setUser(event.detail);
    };

    window.addEventListener("userLogin", handleUserLogin);

    return () => {
      window.removeEventListener("userLogin", handleUserLogin);
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
