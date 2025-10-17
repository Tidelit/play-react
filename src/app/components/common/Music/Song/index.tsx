"use client"
import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';
import { useMusicStore } from '@/app/store/useMusicStore';

interface SongProps {
    image: string;
    songName: string;
    songUrl: string;
    artist: string;
    id: number;
}

export const Song = ({ image, songName, songUrl, artist, id }: SongProps) => {
    const { setCurrentSong, setPlayerVisible, setIsPlaying } = useMusicStore();

    return (
        <>
            <button 
                className="relative w-full h-62 rounded-lg cursor-pointer overflow-hidden group"
                onClick={() => {
                    setCurrentSong({ id, title: songName, artist, url: songUrl, image });
                    setPlayerVisible(true);
                    setIsPlaying(true);
                }}
            >
                {/* Imagen de fondo */}
                <div className="absolute inset-0 w-full h-full">
                    <Image 
                        src={image} 
                        fill
                        style={{ objectFit: 'cover' }}
                        alt={`${songName} Cover`} 
                    />
                </div>
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Play Button - Hidden by default, visible on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500">
                        <FiPlay className="w-8 h-8 text-white ml-1" />
                    </div>
                </div>
                
                {/* Contenido */}
                <div className="absolute inset-0 w-full h-full p-4 flex flex-col justify-end items-start text-white">
                    <div className="flex flex-col justify-start items-start">
                        <h1 className="text-sm font-semibold uppercase">{songName}</h1>
                        <p className="text-xs text-gray-300">{artist}</p>
                    </div>
                </div>
            </button>
        </>
    )
}