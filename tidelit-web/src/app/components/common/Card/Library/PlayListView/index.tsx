"use client";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ArtistCard from "../../../TutorialCard/Artist";
import { FiHeart, FiPlus, FiX } from "react-icons/fi";
import PlaylistView from "../Playlist";

interface Playlist {
    id: number;
    name: string;
    description: string;
    image?: string;
    imageColor?: string;
}

export default function PlayListView() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [playlistName, setPlaylistName] = useState("");
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    // Función para crear nueva playlist
    const createPlaylist = () => {
        if (playlistName.trim()) {
            const newPlaylist: Playlist = {
                id: Date.now(), // Usar timestamp como ID único
                name: playlistName,
                description: "Creado por ti | 0 Canciones",
                imageColor: `bg-gradient-to-t from-[#${Math.floor(Math.random()*16777215).toString(16)}] to-[#${Math.floor(Math.random()*16777215).toString(16)}]`
            };
            setPlaylists([...playlists, newPlaylist]);
            setPlaylistName("");
            setShowCreateModal(false);
        }
    };
    return (
        <>
           <div className="w-full h-full flex flex-col p-20 gap-10">
            {/* Artistas :p */}
            <Carousel className="w-full h-full ">
                <div className="w-full h-20 flex flex-col justify-center items-start">
                    <p className="text-xs">Tus artistas favoritos</p>
                    <h1 className="text-2xl font-bold uppercase">Tus Artistas</h1>
                </div>
                <CarouselContent>
                <>
                    <CarouselItem>
                        {/* Artistas */}
                        <div className=" h-full  flex flex-row gap-4 justify-start  items-center ">
                            <ArtistCard />
                            <ArtistCard />
                            <ArtistCard />
                        </div>
                    </CarouselItem>
                </> 
                </CarouselContent>
            </Carousel>
            
            {/* Playlists por defecto de me gusta y favoritos */}
            <div className="w-full h-full flex flex-col gap-4">
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-xs">Tus playlists por defecto</p>
                    <h1 className="text-2xl font-bold uppercase">Tus Playlists</h1>
                </div>

                {/* Playlist por default de me gusta y favoritos  */}
                <div className="w-full flex flex-row gap-2">
                    {/* Crear Playlist */}
                    <>
                        <button className="w-20 h-20 rounded-2xl bg-transparent border flex justify-center items-center text-4xl hover:bg-gray-50 transition-colors duration-200" onClick={() => setShowCreateModal(true)}>
                            <FiPlus />
                        </button>
                    </>
                    {/* Me gusta */}
                    <>
                        <button className="w-20 h-20 rounded-2xl border flex justify-center items-center text-4xl bg-purple-500 transition-colors duration-200 text-white">
                            <FiHeart />
                        </button>
                    </>
                    {/* Favoritos */}
                    <>
                        <button className="w-20 h-20 rounded-2xl border flex justify-center items-center text-4xl bg-blue-500 transition-colors duration-200 text-white">
                            <FiHeart />
                        </button>
                    </>
                </div>

              
                <div className="w-full h-full p-10 flex flex-col gap-2">
                        {/* Renderizar playlists creadas dinámicamente */}
                        {playlists.map((playlist) => (
                            <PlaylistView 
                                key={playlist.id}
                                name={playlist.name}
                                description={playlist.description}
                                image={playlist.image}
                                imageColor={playlist.imageColor}
                            />
                        ))}
                </div>
            </div>

            {/* Modal para crear playlist */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowCreateModal(false)}>
                    <div 
                        className="bg-white rounded-2xl w-full max-w-2xl h-[600px] mx-4 p-6 animate-in fade-in-0 zoom-in-95 duration-200 shadow-2xl shadow-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Crear nueva playlist</h2>
                            <button 
                                onClick={() => setShowCreateModal(false)}
                                className="hover:text-red-500 transition-colors duration-200"
                            >
                                <FiX className="w-6 h-6"/>
                            </button>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="playlist-name" className="block text-sm font-medium text-gray-700 mb-2">
                                Nombre de la playlist
                            </label>
                            <input
                                id="playlist-name"
                                type="text"
                                value={playlistName}
                                onChange={(e) => setPlaylistName(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        createPlaylist();
                                    }
                                    if (e.key === 'Escape') {
                                        setShowCreateModal(false);
                                        setPlaylistName("");
                                    }
                                }}
                                placeholder="Ingresa el nombre de tu playlist..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                autoFocus
                            />
                        </div>

                        <div className="flex justify-end gap-3">
                            <button 
                                onClick={() => {
                                    setShowCreateModal(false);
                                    setPlaylistName("");
                                }}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                Cancelar
                            </button>
                            <button 
                                onClick={createPlaylist}
                                disabled={!playlistName.trim()}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                            >
                                Crear
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}