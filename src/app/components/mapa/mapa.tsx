"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MapaLocalizacaoProps {
  onErro?: () => void;
}

const MapaLocalizacao: React.FC<MapaLocalizacaoProps> = ({ onErro }) => {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fallbackCoords = {
    lat: -23.5640843,
    lng: -46.6549614, // FIAP São Paulo
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (err) => {
          const mensagemErro =
            err?.message ||
            "Erro desconhecido ao tentar acessar a localização.";

          setError(
            `Não conseguimos acessar sua localização. ${mensagemErro} Exibindo um local padrão.`
          );
          setCoords(fallbackCoords);
          setLoading(false);
          if (onErro) onErro(); // chama callback de erro se existir
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setError("Geolocalização não é suportada neste navegador.");
      setCoords(fallbackCoords);
      setLoading(false);
      if (onErro) onErro();
    }
  }, [onErro]);

  const mapaUrl = coords
    ? `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`
    : "";

  return (
    <div className="w-full h-64 md:h-80">
      {loading ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Image
            src="/loader-sf.svg"
            alt="Carregando..."
            width={100}
            height={100}
            className="bg-white rounded-full shadow-md p-6"
          />
          <p className="text-sm animate-pulse font-(family-name:--font-txt) mt-4">
            Carregando mapa...
          </p>
        </div>
      ) : (
        <div className="w-full h-full relative">
          <iframe
            src={mapaUrl}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "20px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {error && (
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-yellow-100 text-yellow-800 text-sm text-center rounded-b-lg">
              ⚠️ {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapaLocalizacao;