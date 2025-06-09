import Link from "next/link";
import TextoLimitado from "@/app/components/textoLimitado/textoLimitado";

interface OcorrenciaProps {
    id: number;
    titulo: string;
    descricao: string;
    imagem?: string;
}

const Ocorrencia = ({ id, titulo, descricao }: OcorrenciaProps) => {
    return (
        <div className="border border-gray-200 p-4 rounded shadow bg-white hover:shadow-lg transition">
            <h3 className="font-(family-name:--font-title) uppercase text-xl font-bold text-blue-700">
                {titulo}
            </h3>
            <p className="font-(family-name:--font-txt) text-gray-600 mt-2 line-clamp-3">
                <TextoLimitado texto={descricao} limite={60} />
            </p>
            <Link
                href={`/ocorrencias/${id}`}
                className="font-(family-name:--font-txt) text-right text-blue-600 mt-4 inline-block hover:underline font-semibold"
            >
                Ver detalhes
            </Link>
        </div>
    );
};

export default Ocorrencia;