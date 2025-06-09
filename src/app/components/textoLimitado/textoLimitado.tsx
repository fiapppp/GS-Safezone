"use client";
import React from "react";

interface Props {
    texto: string;
    limite?: number;
}

const TextoLimitado = ({ texto, limite = 60 }: Props) => {
    const formatarTexto = (texto: string) => {
        return texto.length > limite ? texto.substring(0, limite) + "..." : texto;
    };

    return <span>{formatarTexto(texto)}</span>;
};

export default TextoLimitado;