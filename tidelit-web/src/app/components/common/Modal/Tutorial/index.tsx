'use client';

import { FiChevronLeft, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Welcome } from "../Welcome";
import ArtistCard from "../../Artist";
import GenresCard from "../../Genres";

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

type Tab = 'artists' | 'genres';

export default function Tutorial() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<Tab>('genres');
  const [selectedArtists, setSelectedArtists] = useState<Array<{ id: string; name: string; image: string }>>([]);
  const [selectedGenres, setSelectedGenres] = useState<Array<{ id: string; name: string; image: string }>>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleBack = () => {
    if (currentTab === 'artists') {
      setCurrentTab('genres');
    } else {
      window.location.href = '/register';
    }
  };

  const handleArtistSelect = (artist: { id: string; name: string; image: string }) => {
    setSelectedArtists(prev => {
      const isSelected = prev.some(a => a.id === artist.id);
      if (isSelected) {
        const newSelection = prev.filter(a => a.id !== artist.id);
        localStorage.setItem('selectedArtists', JSON.stringify(newSelection));
        return newSelection;
      } else {
        if (prev.length >= 6) return prev;
        const newSelection = [...prev, artist];
        localStorage.setItem('selectedArtists', JSON.stringify(newSelection));
        return newSelection;
      }
    });
  };

  const removeSelectedArtist = (artistId: string) => {
    setSelectedArtists(prev => {
      const newSelection = prev.filter(a => a.id !== artistId);
      localStorage.setItem('selectedArtists', JSON.stringify(newSelection));
      return newSelection;
    });
  };

  const handleGenreSelect = (genre: { id: string; name: string; image: string }) => {
    setSelectedGenres(prev => {
      const isSelected = prev.some(g => g.id === genre.id);
      if (isSelected) {
        const newSelection = prev.filter(g => g.id !== genre.id);
        localStorage.setItem('selectedGenres', JSON.stringify(newSelection));
        return newSelection;
      } else {
        if (prev.length >= 6) return prev;
        const newSelection = [...prev, genre];
        localStorage.setItem('selectedGenres', JSON.stringify(newSelection));
        return newSelection;
      }
    });
  };

  const removeSelectedGenre = (genreId: string) => {
    setSelectedGenres(prev => {
      const newSelection = prev.filter(g => g.id !== genreId);
      localStorage.setItem('selectedGenres', JSON.stringify(newSelection));
      return newSelection;
    });
  };

  // Load saved selections from localStorage on component mount
  useEffect(() => {
    const savedArtists = localStorage.getItem('selectedArtists');
    const savedGenres = localStorage.getItem('selectedGenres');
    
    if (savedArtists) {
      setSelectedArtists(JSON.parse(savedArtists));
    }
    if (savedGenres) {
      setSelectedGenres(JSON.parse(savedGenres));
    }
  }, []);

  const filteredArtists = artistsData.filter(artist => 
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {/* Artista */}
    <div className="w-full h-screen  flex flex-col gap-4 justify-center items-center p-10">
      {/* Regresar */}
      <div className='w-full  h-auto flex flex-row items-center justify-center'>
        <button onClick={handleBack} className='w-10 h-10 flex items-center justify-center cursor-pointer'>
          <FiChevronLeft />
        </button>
        <span className='w-full text-center text-sm'>
          {currentTab === 'genres' ? 'Seleccionar Géneros' : 'Seleccionar Artistas'}
        </span>
      </div>

  
      {currentTab === 'artists' ? (
        <>
          {/* Buscador */}
          <input 
            type="text" 
            placeholder="¿Que artistas te gusta?" 
            className="w-full max-w-2xl h-12 rounded-lg border border-gray-300 p-2 text-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="w-full max-w-2xl h-auto flex flex-row gap-2 items-center justify-start">
            <h1 className="text-sm font-bold">Elige a tus favoritos</h1>
            <p className="text-xs text-gray-500">( maximo 6 artistas)</p>
          </div>

          {/* Selected Artists Container - Always visible */}
          <div className="w-full max-w-2xl overflow-x-auto rounded-lg min-h-24 border border-gray-300 hidden justify-start items-center px-4">
              <div className="flex flex-row justify-start items-center gap-4">
                {selectedArtists.length === 0 ? (
                  <div className="w-full text-center text-gray-400 text-sm">
                    Selecciona tus artistas favoritos
                  </div>
                ) : (
                  selectedArtists.map(artist => (
                    <div key={artist.id} className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full relative">
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full rounded-full object-cover"
                          width={64}
                          height={64}
                        />
                        <button
                          onClick={() => removeSelectedArtist(artist.id)}
                          className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
                        >
                          <FiX className="text-white text-xs" />
                        </button>
                      </div>
                      <p className="text-xs text-center mt-2 truncate w-10">{artist.name}</p>
                    </div>
                  ))
                )}
              </div>
          </div>

          {/* Contenedor de artistas */}
          <div className="w-full max-w-2xl h-[500px] overflow-y-auto">
            <div className="grid grid-cols-3 gap-8 p-10">
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
        </>
      ) : (
        <>
          {/* Buscador */}
          <input 
            type="text" 
            placeholder="¿Que géneros te gustan?" 
            className="w-full  h-12 rounded-lg border border-gray-300 p-2 text-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="w-full  h-auto flex flex-row gap-2 items-center justify-start">
            <h1 className="text-sm font-bold">Elige a tus favoritos</h1>
            <p className="text-xs text-gray-500">( maximo 6 generos)</p>
          </div>

          {/* Selected Genres Container - Always visible */}
          <div className="w-full  overflow-x-auto rounded-lg min-h-24 border border-gray-300 hidden justify-start items-center px-4">
              <div className="flex flex-row justify-start items-center gap-4">
                {selectedGenres.length === 0 ? (
                  <div className="w-full text-center text-gray-400 text-sm">
                    Selecciona tus géneros favoritos
                  </div>
                ) : (
                  selectedGenres.map(genre => (
                    <div key={genre.id} className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full relative">
                        <Image
                          src={genre.image}
                          alt={genre.name}
                          className="w-full h-full rounded-full object-cover"
                          width={64}
                          height={64}
                        />
                        <button
                          onClick={() => removeSelectedGenre(genre.id)}
                          className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
                        >
                          <FiX className="text-white text-xs" />
                        </button>
                      </div>
                      <p className="text-xs text-center mt-2 truncate w-10">{genre.name}</p>
                    </div>
                  ))
                )}
              </div>
          </div>

          {/* Contenedor de géneros */}
          <div className="w-full  h-[500px] overflow-y-auto">
            <div className="grid grid-cols-3 gap-8 p-10">
              {genresData
                .filter(genre => 
                  genre.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(genre => (
                  <GenresCard
                    key={genre.id}
                    artist={genre}
                    isSelected={selectedGenres.some(g => g.id === genre.id)}
                    onSelect={handleGenreSelect}
                  />
              ))}
            </div>
          </div>
        </>
      )}
      
      <button 
        onClick={() => {
          if (currentTab === 'genres') {
            if (selectedGenres.length > 0) {
              setCurrentTab('artists');
            }
          } else if (selectedArtists.length > 0) {
            console.log('Artistas seleccionados:', selectedArtists);
            console.log('Géneros seleccionados:', selectedGenres);
            setShowWelcome(true);
          }
        }}
        disabled={(currentTab === 'genres' && selectedGenres.length === 0) || 
                 (currentTab === 'artists' && selectedArtists.length === 0)}
        className={`w-full h-14 rounded-lg p-2 text-xs text-white uppercase
          ${(currentTab === 'genres' && selectedGenres.length === 0) || 
            (currentTab === 'artists' && selectedArtists.length === 0)
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {currentTab === 'genres' ? 'Continuar' : 'Finalizar'}
      </button>
    </div>

      <Welcome 
        isOpen={showWelcome} 
        selectedArtists={selectedArtists}
        onClose={() => {
          setShowWelcome(false);
          router.push('/');
        }} 
      />
    </>
  );
}