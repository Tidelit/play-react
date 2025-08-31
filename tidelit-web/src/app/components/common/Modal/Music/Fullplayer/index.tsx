"use client"
import { FiChevronDown, FiHeart, FiMonitor, FiMoreVertical, FiMusic, FiPlay, FiRepeat, FiShare2, FiShuffle, FiSkipBack, FiSkipForward, FiPlus, FiList, FiInfo } from 'react-icons/fi';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface FullplayerProps {
    isOpen: boolean;
    onClose: () => void;
    songData?: {
        image: string;
        songName: string;
        artist: string;
    };
}

type ViewMode = 'player' | 'credits';

export const Fullplayer = ({ isOpen, onClose, songData }: FullplayerProps) => {
    const [showOptions, setShowOptions] = useState(false);
    const [currentView, setCurrentView] = useState<ViewMode>('player');

    // Reset states when modal closes
    useEffect(() => {
        if (!isOpen) {
            setShowOptions(false);
            setCurrentView('player');
        }
    }, [isOpen]);
    return (
        <>
            {/* Modal Overlay */}
            <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-150 ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
                <div className={`w-full max-w-2xl h-[650px] bg-white/80 rounded-2xl p-6 relative transition-all duration-150 transform ${
                    isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
                }`}>
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-8">
                        <button 
                            onClick={() => {
                                if (currentView === 'credits') {
                                    setCurrentView('player');
                                } else {
                                    setShowOptions(false);
                                    onClose();
                                }
                            }}
                            className="w-10 h-10 flex items-center justify-center cursor-pointer" 
                        >
                            <FiChevronDown className="w-5 h-5 text-gray-600" />
                        </button>
                        <h1 className="text-xl font-semibold text-teal-700">
                            {currentView === 'credits' ? 'Créditos' : 'Canciones'}
                        </h1>
                        <div className="relative">
                            {currentView === 'player' && (
                                <button 
                                    className="w-10 h-10 flex items-center justify-center"
                                    onClick={() => setShowOptions(!showOptions)}
                                >
                                    <FiMoreVertical className="w-5 h-5 text-gray-600" />
                                </button>
                            )}
                            
                            {/* Dropdown Menu */}
                            {showOptions && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3">
                                        <FiHeart className="w-5 h-5 text-gray-600" />
                                        <span>Agregar a favoritos</span>
                                    </button>
                                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-pink-500">
                                        <FiPlus className="w-5 h-5" />
                                        <span>Agregar a playlist</span>
                                    </button>
                                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3">
                                        <FiList className="w-5 h-5 text-gray-600" />
                                        <span>Agregar a la fila de reproducción</span>
                                    </button>
                                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3">
                                        <FiShare2 className="w-5 h-5 text-gray-600" />
                                        <span>Compartir</span>
                                    </button>
                                    <button 
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3"
                                        onClick={() => {
                                            setCurrentView('credits');
                                            setShowOptions(false);
                                        }}
                                    >
                                        <FiInfo className="w-5 h-5 text-gray-600" />
                                        <span>Créditos</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                
                                    {/* Contenido Principal */}
                    {currentView === 'player' ? (
                    <>
                            {/* Album Art with Background Pattern */}
                    <div className="relative mb-4">
                        {/* Background Pattern */}
                        <div className="w-full h-full absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
                            <Image 
                                src="/imagenes/Song/Effect.png" 
                                alt="Background Effect" 
                                width={400} 
                                height={400}
                                className="w-92 h-92 animate-pulse"
                            />
                        </div>
                        
                        {/* Album Art */}
                        <div className="relative z-10 w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl">
                            <Image 
                                src={songData?.image || "/imagenes/Artist/artis.jpg"} 
                                alt="Album Cover" 
                                width={256} 
                                height={256}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Song Information */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-teal-800 ">
                            {songData?.songName || "Hymn for the Weekend"}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {songData?.artist || "Coldplay"}
                        </p>
                    </div>

                    {/* Boton de compartir, agregar a favoritos, agregar a playlist, reproducir en reproductor */}
                    <div className='w-full h-auto flex flex-row gap-4 items-center justify-center p-4'>
                        <button>
                        <FiShare2 className='w-4 h-4' />
                        </button>
                        <button>
                        <FiHeart className='w-4 h-4' />
                        </button>
                        <button>
                        <FiMusic className='w-4 h-4' />
                        </button>
                        <button>
                        <FiMonitor className='w-4 h-4' />
                        </button>
                    </div>
                    
                    {/* Barra de progreso */}
                    <div className='w-full max-w-xl h-auto flex flex-row  items-center justify-center p-4'>
                        <div className='w-40 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-md'></div>
                        <div className='w-40 h-2 bg-gray-200 rounded-lg shadow-md'></div>
                    </div>

                                        {/* Boton de shuffle, skip back, play, skip forward, repeat */}
                    <div className='w-full  h-auto flex flex-row items-center justify-center gap-4 '>
                        <button>
                        <FiShuffle className='w-6 h-6' />
                        </button>
                        <button>
                        <FiSkipBack className='w-6 h-6' />
                        </button>
                        <button className='w-20 h-20 transition-colors duration-500 cursor-pointer bg-gradient-to-b from-[#E302E6] via-[#2D49D3] to-[#06D4C9] flex justify-center items-center rounded-full text-white border-2 border-white hover:bg-bg-gradient-to-b hover:from-[#E302E6]/50 hover:via-[#2D49D3]/20 hover:to-[#06D4C9]/20'>
                        <FiPlay className='w-6 h-6' />
                        </button>
                        <button>
                        <FiSkipForward className='w-6 h-6' />
                        </button>
                        <button>
                        <FiRepeat className='w-6 h-6' />
                        </button>
                    </div>
                    </>
                    ) : (
                        // Credits View
                        <div className="flex flex-col justify-center items-start gap-4 p-4">
                            {/* Header */}
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image 
                                        src={songData?.image || "/imagenes/Artist/artis.jpg"}
                                        alt="Album Cover"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{songData?.songName || "Hymn for the Weekend"}</h3>
                                    <p className="text-sm text-gray-600">{songData?.artist || "Coldplay"}</p>
                                </div>
                            </div>

                            {/* Credits Sections */}
                            <div className="flex flex-col justify-center items-start gap-4">
                                {/* Interpretada por */}
                                <div>
                                    <h4 className="text-teal-700 font-medium">Interpretada por</h4>
                                    <p className="text-gray-800">Coldplay</p>
                                </div>

                                {/* Escrita por */}
                                <div>
                                    <h4 className="text-teal-700 font-medium">Escrita por</h4>
                                    <div>
                                        <p>Mikkel Eriksen (of Stargate)</p>
                                  
                                    </div>
                                </div>

                                {/* Producida por */}
                                <div className="">
                                    <h4 className="text-teal-700 font-medium">Producida por</h4>
                                    <div>
                                        <p>Mareike Barutzki</p>
                                        <p>Mikkel Storleer Eriksen</p>
                                    
                                    </div>
                                </div>

                                {/* Fuentes */}
                                <div className="">
                                    <h4 className="text-teal-700 font-medium">Fuentes</h4>
                                    <div>
                                        <p>Parlophone UK</p>
                                        <p>Sony Music Publishing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};