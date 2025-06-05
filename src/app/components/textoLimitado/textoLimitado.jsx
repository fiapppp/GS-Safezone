"use client";
import React from "react";

const TextoLimitado = ({ texto, limite = 60 }) => {
    const formatarTexto = (texto) => {
        return texto.length > limite ? texto.substring(0, limite) + "..." : texto;
    };

    return <span>{formatarTexto(texto)}</span>;
};

export default TextoLimitado;