'use client';

import Image from 'next/image';
import React from 'react';
import { FiCheck } from 'react-icons/fi';

interface ArtistCardProps {
  artist: {
    id: string;
    name: string;
    image: string;
  };
  isSelected: boolean;
  onSelect: (artist: { id: string; name: string; image: string }) => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, isSelected, onSelect }) => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <div className="relative">
        <button 
          onClick={() => onSelect(artist)}
          className="w-24 h-24 rounded-full cursor-pointer shadow-md relative"
        >
          <Image 
            src={artist.image} 
            alt={artist.name} 
            className='w-full h-full rounded-full object-cover' 
            width={100} 
            height={100} 
          />
          {isSelected && (
            <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
              <FiCheck className="text-white" />
            </div>
          )}
        </button>
      </div>
      <p className='text-xs truncate w-32 text-center'>{artist.name}</p>
    </div>
  );
};

export default ArtistCard;
