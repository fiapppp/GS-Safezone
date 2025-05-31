'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const MapaLocalizacao = () => {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fallbackCoords = {
    lat: -23.5640843,
    lng: -46.6549614, // FIAP São Paulo
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
          setError(
            'Não conseguimos acessar sua localização. Exibindo um local padrão. Por favor, ative a permissão de localização no navegador para visualizar sua posição no mapa.'
          );
          setCoords(fallbackCoords);
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setError('Geolocalização não é suportada neste navegador.');
      setCoords(fallbackCoords);
      setLoading(false);
    }
  }, []);

  const mapaUrl = coords
    ? `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`
    : '';

  return (
    <div className="container">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[500px]">
          <Image src="/loader-sf.svg" alt="Carregando..." width={400} height={200} className='bg-white rounded-full shadow-md p-10'/>
          <p className="text-lg animate-pulse font-(family-name:--font-txt) mt-5">
            Carregando mapa...
          </p>
        </div>
      ) : (
        <div>
          <div className="w-full h-[500px]">
            <iframe
              src={mapaUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {error && (
            <div className="text-center mt-4 p-4 bg-yellow-100 text-yellow-800 rounded-lg">
              ⚠️ {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MapaLocalizacao;