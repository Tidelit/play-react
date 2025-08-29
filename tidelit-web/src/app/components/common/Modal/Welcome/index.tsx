'use client';

import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import ArtistCard from "../../Artist";
import GenresCard from "../../Genres";

// Sample artist data
const artistsData = [
  { id: '1', name: 'Karol G', image: '/imagenes/Artist/artis.jpg' },
  { id: '2', name: 'Coldplay', image: '/imagenes/Artist/artis.jpg' },
  { id: '3', name: 'Marc Anthony', image: '/imagenes/Artist/artis.jpg' },
  { id: '4', name: 'Carlos Vives', image: '/imagenes/Artist/artis.jpg' },
  { id: '5', name: 'Beyoncé', image: '/imagenes/Artist/artis.jpg' },
  { id: '6', name: 'Bad Bunny', image: '/imagenes/Artist/artis.jpg' },
  { id: '7', name: 'Grupo Niche', image: '/imagenes/Artist/artis.jpg' },
  { id: '8', name: 'Diomedes Diaz', image: '/imagenes/Artist/artis.jpg' },
  { id: '9', name: 'Shakira', image: '/imagenes/Artist/artis.jpg' },
];

// Sample genres data
const genresData = [
  { id: '1', name: 'Rock', image: '/imagenes/Genre/genre.jpg' },
  { id: '2', name: 'Pop', image: '/imagenes/Genre/genre.jpg' },
  { id: '3', name: 'Hip Hop', image: '/imagenes/Genre/genre.jpg' },
  { id: '4', name: 'Reggaeton', image: '/imagenes/Genre/genre.jpg' },
  { id: '5', name: 'Salsa', image: '/imagenes/Genre/genre.jpg' },
  { id: '6', name: 'Jazz', image: '/imagenes/Genre/genre.jpg' },
  { id: '7', name: 'Electrónica', image: '/imagenes/Genre/genre.jpg' },
  { id: '8', name: 'Clásica', image: '/imagenes/Genre/genre.jpg' },
  { id: '9', name: 'Metal', image: '/imagenes/Genre/genre.jpg' },
];

type Tab = 'artists' | 'genres';

interface WelcomeProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ isOpen = true, onClose }) => {
  const [currentTab, setCurrentTab] = useState<Tab>('artists');
  const [selectedArtists, setSelectedArtists] = useState<Array<{ id: string; name: string; image: string }>>([]);
  const [selectedGenres, setSelectedGenres] = useState<Array<{ id: string; name: string; image: string }>>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleArtistSelect = (artist: { id: string; name: string; image: string }) => {
    setSelectedArtists(prev => {
      const isSelected = prev.some(a => a.id === artist.id);
      if (isSelected) {
        return prev.filter(a => a.id !== artist.id);
      } else {
        if (prev.length >= 6) return prev;
        return [...prev, artist];
      }
    });
  };

  const handleGenreSelect = (genre: { id: string; name: string; image: string }) => {
    setSelectedGenres(prev => {
      const isSelected = prev.some(g => g.id === genre.id);
      if (isSelected) {
        return prev.filter(g => g.id !== genre.id);
      } else {
        if (prev.length >= 6) return prev;
        return [...prev, genre];
      }
    });
  };

  const handleContinue = () => {
    if (currentTab === 'artists' && selectedArtists.length > 0) {
      setCurrentTab('genres');
      setSearchTerm('');
    }
  };

  const handleBack = () => {
    if (currentTab === 'genres') {
      // Si estamos en géneros, volver a artistas
      setCurrentTab('artists');
      setSearchTerm('');
    } else {
      // Si estamos en artistas, cerrar el modal
      if (onClose) {
        onClose();
      }
    }
  };

  const filteredArtists = artistsData.filter(artist => 
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGenres = genresData.filter(genre => 
    genre.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div 
    onClick={onClose} 
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="w-full h-[650px] max-w-4xl bg-white shadow-2xl shadow-white rounded-lg flex flex-col items-center justify-center gap-4 p-10">
        {/* Boton de regresar */}
        <div className="w-full max-w-4xl flex flex-row items-center justify-between">
          <button onClick={handleBack} className="w-10">
            <FiChevronLeft />
          </button>
          <p className="w-full text-center text-sm">
            {currentTab === 'artists' ? 'Selecciona tus artistas favoritos' : 'Selecciona tus géneros favoritos'}
          </p>
        </div>

        {/* Contenido del modal */}
        <div className="w-full max-w-4xl h-full flex flex-col items-center justify-between bg-gray-100 rounded-lg p-10">
          <input 
            type="text" 
            placeholder={currentTab === 'artists' ? "Buscar artista" : "Buscar género"} 
            className="w-full max-w-4xl h-10 rounded-lg bg-white p-4 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <p className="w-full max-w-4xl text-start text-xs flex flex-row items-center justify-start gap-2">
            Elige a tus favoritos
            <span className="text-gray-500">( máximo 6 )</span>
          </p>

          {/* Artists Grid */}
          {currentTab === 'artists' && (
            <div className="w-full max-w-4xl flex-1 overflow-y-auto p-10">
              <div className="grid grid-cols-3 gap-4">
                {filteredArtists.map(artist => (
                  <ArtistCard
                    key={artist.id}
                    artist={artist}
                    isSelected={selectedArtists.some(a => a.id === artist.id)}
                    onSelect={handleArtistSelect}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Genres Grid */}
          {currentTab === 'genres' && (
            <div className="w-full max-w-4xl flex-1 overflow-y-auto p-10">
              <div className="grid grid-cols-3 gap-4">
                {filteredGenres.map(genre => (
                  <GenresCard
                    key={genre.id}
                    artist={genre}
                    isSelected={selectedGenres.some(g => g.id === genre.id)}
                    onSelect={handleGenreSelect}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Botón Continuar - Solo aparece cuando hay artistas seleccionados en el tab de artistas */}
          {currentTab === 'artists' && selectedArtists.length > 0 && (
            <button 
              onClick={handleContinue}
              className="w-full max-w-4xl h-12 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Continuar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
