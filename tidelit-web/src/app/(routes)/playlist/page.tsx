"use client";
import Link from "next/link";
import Image from "next/image";
import { FiChevronLeft, FiPlay, FiPause, FiMoreVertical, FiShare2 } from "react-icons/fi";
import { useMusicStore } from '@/app/store/useMusicStore';
import { useState } from "react";

interface Song {
    id: number;
    title: string;
    artist: string;
    image: string;
    url: string;
    duration: string;
}

export default function PlaylistView() {
    const { setCurrentSong, setPlayerVisible, setIsPlaying, currentSong, isPlaying } = useMusicStore();
    const [hoveredSong, setHoveredSong] = useState<number | null>(null);

    // Datos de ejemplo de la playlist (en producción vendrían del backend)
    const playlistData = {
        name: "Mi Playlist Favorita",
        description: "Las mejores canciones para disfrutar",
        image: "/imagenes/Song/Song1.jpg",
        totalSongs: 8,
        totalDuration: "45 min"
    };

    // Lista de canciones de ejemplo
    const songs: Song[] = [
        { id: 1, title: "Mañana juega colombia", artist: "Miguel Angel Jaimes", image: "/imagenes/Song/Song1.jpg", url: "/Audio/song1.mp3", duration: "3:45" },
        { id: 2, title: "PUNK PUNK PUNK", artist: "Dempserayo", image: "/imagenes/Song/Song2.jpg", url: "/Audio/song2.mp3", duration: "4:12" },
        { id: 3, title: "Hurt", artist: "Oliver Tree", image: "/imagenes/Song/Song1.jpg", url: "/Audio/song1.mp3", duration: "3:28" },
        { id: 4, title: "Test Song 1", artist: "Artista Desconocido", image: "/imagenes/Song/Song3.jpg", url: "/Audio/song2.mp3", duration: "2:55" },
        { id: 5, title: "Test Song 2", artist: "Miguel Angel", image: "/imagenes/Song/Song1.jpg", url: "/Audio/song1.mp3", duration: "4:01" },
        { id: 6, title: "Gucci Gang", artist: "Lil Pump", image: "/imagenes/Song/Song2.jpg", url: "/Audio/song2.mp3", duration: "2:10" },
        { id: 7, title: "Mala", artist: "Anuel AA - 6ix9nie", image: "/imagenes/Song/Song3.jpg", url: "/Audio/song1.mp3", duration: "3:35" },
        { id: 8, title: "Summer Vibes", artist: "DJ Mix", image: "/imagenes/Song/Song1.jpg", url: "/Audio/song2.mp3", duration: "5:20" }
    ];

    const handlePlaySong = (song: Song) => {
        setCurrentSong({ 
            id: song.id, 
            title: song.title, 
            artist: song.artist, 
            url: song.url, 
            image: song.image 
        });
        setPlayerVisible(true);
        setIsPlaying(true);
    };

    const isCurrentSongPlaying = (songId: number) => {
        return currentSong && currentSong.id === songId && isPlaying;
    };

    return (
        <>
            {/* Contenido principal */}
            <div className="w-full min-h-screen flex flex-col">
                {/* Barra superior con botón de volver */}
                <div className="w-full h-14 flex flex-row justify-between items-center p-10">
                    <Link href="/library" className="w-auto hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                        <FiChevronLeft className='w-4 h-4' />
                        <p className="text-xs">Volver atras</p>
                    </Link>
                    <Link href="/share" className="w-auto hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                        <FiShare2 className='w-4 h-4' />
                    </Link>
                </div>

                {/* Banner de la playlist con imagen */}
                <div className="w-full h-80 relative overflow-hidden">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={playlistData.image}
                            fill
                            style={{ objectFit: 'cover' }}
                            alt={playlistData.name}
                            priority
                        />
                    </div>
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                    
                    {/* Información de la playlist */}
                    <div className="relative w-full h-full flex flex-col justify-end p-10 text-white">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm opacity-90">Playlist</p>
                            <h1 className="text-4xl font-bold uppercase">{playlistData.name}</h1>
                            <p className="text-sm opacity-80">{playlistData.description}</p>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <span className="text-xs opacity-70">{playlistData.totalSongs} canciones</span>
                                <span className="text-xs opacity-50">•</span>
                                <span className="text-xs opacity-70">{playlistData.totalDuration}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lista de canciones */}
                <div className="w-full flex flex-col bg-white">
                    {/* Header de la lista */}
                    <div className="w-full border-b border-gray-200 p-4">
                        <div className="grid grid-cols-12 gap-4 items-center text-xs font-semibold text-gray-600 uppercase">
                            <div className="col-span-1 text-center">#</div>
                            <div className="col-span-1"></div>
                            <div className="col-span-5">Título</div>
                            <div className="col-span-3">Artista</div>
                            <div className="col-span-1 text-right">Duración</div>
                            <div className="col-span-1"></div>
                        </div>
                    </div>

                    {/* Lista de canciones */}
                    <div className="w-full flex flex-col">
                        {songs.map((song, index) => {
                            const isPlayingThis = isCurrentSongPlaying(song.id);
                            return (
                                <div
                                    key={song.id}
                                    className="w-full border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 group"
                                    onMouseEnter={() => setHoveredSong(song.id)}
                                    onMouseLeave={() => setHoveredSong(null)}
                                >
                                    <div className="grid grid-cols-12 gap-4 items-center p-4 text-sm">
                                        {/* Número de posición */}
                                        <div className="col-span-1 flex justify-center">
                                            {hoveredSong === song.id || isPlayingThis ? (
                                                <button
                                                    onClick={() => handlePlaySong(song)}
                                                    className="text-blue-500 hover:text-blue-600 transition-colors"
                                                >
                                                    {isPlayingThis ? (
                                                        <FiPause className="w-5 h-5" />
                                                    ) : (
                                                        <FiPlay className="w-5 h-5" />
                                                    )}
                                                </button>
                                            ) : (
                                                <span className="text-gray-400 group-hover:text-gray-600">
                                                    {index + 1}
                                                </span>
                                            )}
                                        </div>

                                        {/* Imagen miniatura */}
                                        <div className="col-span-1">
                                            <div className="w-10 h-10 rounded overflow-hidden relative">
                                                <Image
                                                    src={song.image}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    alt={song.title}
                                                />
                                            </div>
                                        </div>

                                        {/* Título de la canción */}
                                        <div className="col-span-5 flex flex-col">
                                            <span className={`font-medium ${isPlayingThis ? 'text-blue-500' : 'text-gray-800'}`}>
                                                {song.title}
                                            </span>
                                        </div>

                                        {/* Artista */}
                                        <div className="col-span-3">
                                            <span className="text-gray-600 text-xs">{song.artist}</span>
                                        </div>

                                        {/* Duración */}
                                        <div className="col-span-1 text-right">
                                            <span className="text-gray-500 text-xs">{song.duration}</span>
                                        </div>

                                        {/* Menú de opciones */}
                                        <div className="col-span-1 flex justify-end">
                                            <button
                                                className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity duration-200 p-2"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Aquí se puede agregar un menú de opciones
                                                }}
                                            >
                                                <FiMoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}