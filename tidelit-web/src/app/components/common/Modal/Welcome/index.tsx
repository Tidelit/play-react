'use client';

import Image from "next/image";

interface WelcomeProps {
  isOpen: boolean;
  onClose: () => void;
  selectedArtists: Array<{ id: string; name: string; image: string }>;
}

export const Welcome: React.FC<WelcomeProps> = ({ isOpen, onClose, selectedArtists }) => {
  console.log('Modal Welcome - Artistas recibidos:', selectedArtists);
  if (!isOpen) return null;

  return (
    <div 
    onClick={onClose} 
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="w-full h-[650px] max-w-4xl bg-white rounded-lg  flex flex-col gap-8 items-center justify-center p-10">
        <Image src="/logo/Logo.png" alt="Welcome" width={140} height={250} />
        
        {/* Artistas seleccionados */}
        <div className="w-full flex flex-col items-center gap-4">
          
          {selectedArtists.length > 0 && (
            <div className="w-full flex flex-col items-center gap-2">
              <div className="flex flex-wrap justify-center gap-4 max-w-lg animate-pulse">
                {selectedArtists
                  .filter(artist => artist.image.includes('/imagenes/Artist/')) // Solo mostrar artistas, no géneros
                  .map(artist => (
                    <div key={artist.id} className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-full h-auto flex flex-col items-center justify-center">
            <p className="text-xs">Da el primer paso hacia</p>    
            <p className="text-xs">Una experiencia musical única</p>    
        </div>

        <h1 className="text-2xl font-bold">¡Tidelit te espera!</h1>

        <button
          onClick={onClose} 
          className="w-80 h-14 bg-gradient-to-r from-[#E302E6] via-[#2D49D3] to-[#06D4C9] hover:shadow-md hover:shadow-blue-500 transition-all duration-500 text-white rounded-lg"
        >
          Empezar
        </button>
      </div>
    </div>
  );
}
