"use client"
import { FiChevronDown, FiMoreVertical, FiShuffle, FiSkipBack, FiSkipForward, FiRepeat } from 'react-icons/fi';
import Image from 'next/image';

interface FullplayerProps {
    isOpen: boolean;
    onClose: () => void;
    songData?: {
        image: string;
        songName: string;
        artist: string;
    };
}

export const Fullplayer = ({ isOpen, onClose, songData }: FullplayerProps) => {
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
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center"
                        >
                            <FiChevronDown className="w-5 h-5 text-gray-600" />
                        </button>
                        <h1 className="text-xl font-semibold text-teal-700">Canciones</h1>
                        <button className="w-10 h-10  flex items-center justify-center ">
                            <FiMoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

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
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-teal-800 mb-2">
                            {songData?.songName || "Hymn for the Weekend"}
                        </h2>
                        <p className="text-gray-500 text-lg">
                            {songData?.artist || "Coldplay"}
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-teal-700 h-2 rounded-full w-1/4 relative">
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-700 rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                            <span>1:23</span>
                            <span>4:15</span>
                        </div>
                    </div>

                    {/* Playback Controls */}
                    <div className="flex items-center justify-center gap-6">
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <FiShuffle className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <FiSkipBack className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                            <div className="w-6 h-6 bg-white rounded-sm ml-0.5"></div>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <FiSkipForward className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <FiRepeat className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};