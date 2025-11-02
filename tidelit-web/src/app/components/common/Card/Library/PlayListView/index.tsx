"use client";
import { useState } from "react";
import { FiEdit, FiShare2, FiPlus, FiTrash2, FiX } from "react-icons/fi";

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

            
            {/* Playlists por defecto de me gusta y favoritos */}
            <div className="w-full h-full flex flex-col gap-10 px-20">
                    
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                        <p className="text-xs">Tus Playlist Favoritas y tus Me gustas</p>
                        <h1 className="text-2xl font-bold uppercase">Tus Playlist</h1>
                </div>
                    
                {/* Grid con máximo 2 columnas */}
                <div className="w-full grid grid-cols-2 gap-2">
                    {/* Favoritos  */}
                    <div className="w-full flex flex-row bg-gray-100 p-10">
                        <button className={`w-62 h-40 rounded-2xl bg-blue-500 flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-blue-500/50 text-4xl`}>
                        </button>
                        <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
                            <div className="w-full h-auto">
                                <h1 className="text-xs font-semibold">Tus Favoritos</h1>
                                <p className="text-[10px] text-gray-600">Playlist por Defecto</p>
                            </div>

                            <div className="w-full flex flex-row gap-2 ">
                                <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                                    <FiEdit />
                                </button>
                                <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                                    <FiShare2 />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Me gustas  */}
                    <div className="w-full flex flex-row bg-gray-100 p-10">
                        <button className={`w-62 h-40 rounded-2xl bg-blue-500 flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-blue-500/50 text-4xl`}>
                        </button>
                        <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
                            <div className="w-full h-auto">
                                <h1 className="text-xs font-semibold">Me gustas</h1>
                                <p className="text-[10px] text-gray-600">Playlist por Defecto</p>
                            </div>

                            <div className="w-full flex flex-row gap-2 ">
                                <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                                    <FiEdit />
                                </button>
                                <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                                    <FiShare2 />
                                </button>
                            </div>
                        </div>
                    </div>
                
                    {/* Crear Playlist  */}
                    <div className="w-full flex flex-row bg-gray-100 p-10">
                        <button className={`w-62 h-40 rounded-2xl border border-blue-500 text-blue-500 flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-blue-500/50 text-4xl`} onClick={() => setShowCreateModal(true)}>
                            <FiPlus />
                        </button>
                        <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
                            <div className="w-full h-auto">
                                <h1 className="text-xs font-semibold">Playlist</h1>
                                <p className="text-[10px] text-gray-600">Crea tu Playlist</p>
                            </div>
                        </div>
                    </div>

                    {/* Playlists creadas dinámicamente */}
                    {playlists.map((playlist) => (
                        <div key={playlist.id} className="w-full flex flex-row bg-gray-100 p-10">
                            <div className={`w-62 h-40 rounded-2xl ${playlist.imageColor || 'bg-gradient-to-t from-blue-400 to-purple-500'} flex justify-center items-center text-white text-2xl font-bold bg-blue-500`}>
                                {playlist.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
                                <div className="w-full h-auto">
                                    <h1 className="text-xs font-semibold">{playlist.name}</h1>
                                    <p className="text-[10px] text-gray-600">{playlist.description}</p>
                                </div>

                                <div className="w-full flex flex-row gap-2 ">
                                    <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                                        <FiEdit />
                                    </button>
                                    <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                                        <FiShare2 />
                                    </button>
                                    <button 
                                        className="h-full text-xs  hover:text-red-500 transition-colors duration-200 cursor-pointer"
                                        onClick={() => setPlaylists(playlists.filter(p => p.id !== playlist.id))}
                                    >
                                        <FiTrash2 />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         
        </>
    )
}