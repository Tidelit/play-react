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
        <div className="w-62 h-62 flex flex-col gap-2 items-center justify-center">
            <div 
                className="relative w-62 h-62 group cursor-pointer" 
                onClick={() => {
                    setCurrentSong({ id, title: songName, artist, url: songUrl, image });
                    setPlayerVisible(true);
                    setIsPlaying(true);
                }}
            >
                {/* Background Image with Blur Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <Image 
                        src={image} 
                        alt={`${songName} Cover`} 
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                    />
                    {/* Blurred Overlay */}
                <div className="absolute inset-0  group-hover:backdrop-blur-xs transition-all duration-500"></div>
                </div>
                
                {/* Play Button - Hidden by default, visible on hover */}
                <div className="absolute inset-0 flex items-center justify-center  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                    <button className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500">
                        <FiPlay className="w-8 h-8 text-white ml-1" />
                    </button>
                </div>
            </div>
            <h1 className="text-md ">{songName}</h1>
        </div>
    </>
    )
}