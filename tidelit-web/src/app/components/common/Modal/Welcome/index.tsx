'use client';

import Image from "next/image";




interface WelcomeProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ isOpen = true, onClose }) => {

  if (!isOpen) return null;

  return (
    <div 
    onClick={onClose} 
    className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
      
      <div className="w-full h-[650px] max-w-4xl bg-white shadow-2xl shadow-white backdrop-blur-2xl rounded-2xl flex flex-col items-center justify-center gap-8 p-10 relative">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <span className="text-2xl">&times;</span>
        </button>
        <Image src="/logo/Logo.png" alt="Welcome" width={100} height={100} className="w-40 h-40 object-cover rounded-2xl" />          
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm">Da el primer paso hacia</p>
          <p className="text-sm">una experiencia musical única</p>
        </div>
        <h1 className="text-4xl font-bold">¡Tidelit te espera!</h1>
        <button className="w-full max-w-xs h-14 bg-gradient-to-r from-[#D80DE5] to-[#06D4C9] via-[#2D49D3] text-white rounded-full uppercase font-bold cursor-pointer hover:bg-blue-600 transition-colors">Empezar</button>
      </div>
    </div>
  );
}
