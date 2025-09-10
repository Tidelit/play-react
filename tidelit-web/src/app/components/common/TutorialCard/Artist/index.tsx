'use client';

import Image from 'next/image';
import React from 'react';



const ArtistCard = () => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
        <button 
          className="w-32 h-32 rounded-full cursor-pointer border-2 border-white shadow-xl "
        >
          <Image 
            src="/imagenes/Artist/artis.jpg"
            alt="Artist" 
            className='w-full h-full rounded-full object-cover' 
            width={100} 
            height={100} 
          />
        </button>
        <p className='text-xs truncate w-32 text-center'>Artist 1</p>
    </div>
  );
};

export default ArtistCard;
