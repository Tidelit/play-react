"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';
import { Fullplayer } from '../../Modal/Music/Fullplayer';

interface SongProps {
    image: string;
    songName: string;
}

export const Song = ({ image, songName }: SongProps) => {
    const [isFullplayerOpen, setIsFullplayerOpen] = useState(false);

    const openFullplayer = () => {
        setIsFullplayerOpen(true);
    };

    const closeFullplayer = () => {
        setIsFullplayerOpen(false);
    };

    return (
        <>
        <div className="w-62 h-62 flex flex-col gap-2 items-center justify-center">
            <div className="relative w-62 h-62 group cursor-pointer" onClick={openFullplayer}>
                {/* Background Image with Blur Effect */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <Image 
                        src={image} 
                        alt={`${songName} Cover`} 
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                    />
                    {/* Blurred Overlay */}
                <div className="absolute inset-0  group-hover:backdrop-blur-xs transition-all duration-500 bg-"></div>
                </div>
                
                {/* Play Button - Hidden by default, visible on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#E302E6]/50 via-[#2D49D3]/50 to-[#06D4C9]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                    <button className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500">
                        <FiPlay className="w-8 h-8 text-white ml-1" />
                    </button>
                </div>
            </div>
            <h1 className="text-md ">{songName}</h1>
        </div>

        {/* Fullplayer Modal */}
        <Fullplayer 
            isOpen={isFullplayerOpen}
            onClose={closeFullplayer}
            songData={{
                image: image,
                songName: songName,
                artist: "Artist Name" // You can add artist as a prop if needed
            }}
        />
        </>
    )
}