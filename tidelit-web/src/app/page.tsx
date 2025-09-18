"use client";
import { useState } from "react";
import { Miniplayer } from "./components/common/Modal/Music/Miniplayer";
import { Welcome } from "./components/common/Modal/Welcome";
import Navbar from "./components/constant/Navbar";
import Sidebar from "./components/constant/Sidebar";
import { Song } from "./components/common/Music/Song";
import ArtistCard from "./components/common/TutorialCard/Artist";

export default function Home() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  return (
    <>
      <div className="w-full h-screen flex flex-row bg-gradient-to-b from-[#D80DE5] to-white p-4 gap-4">
        <Sidebar />

        {/* Contenido */}
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <div className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-white to-white/50  rounded-2xl border border-gray-200">
            <Navbar />
    
            {/* Artistas */}
            <div className="w-full h-full  flex flex-row gap-4 justify-start  items-start p-10">
                <ArtistCard />
            </div>
            
            {/* Canciones Recomendadas para Hoy */}
            <div className="w-full h-screen flex flex-col justify-start items-start p-10">
            {/* Texto de la seccion */}
            <div className="w-full h-auto flex flex-row  justify-between  items-center mb-4">
                <div className="flex flex-col ">
                    <p className="text-xs  cursor-pointer hover:text-blue-500 transition-all duration-500">Inspirada en tu actividad reciente</p>
                    <h1 className="text-2xl -mt-1 font-bold uppercase">Recomendadas para Hoy</h1>
                </div>
                <p className="text-xs cursor-pointer hover:text-blue-500 transition-all duration-500">Mostrar mas</p>
            </div>
                
            <div className="w-full  flex flex-row gap-4 justify-start  items-center">
                <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" />
                <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" />
            </div>
            </div>

            <Miniplayer />
          </div>
        </div>

        <Welcome 
          isOpen={isWelcomeOpen}
          onClose={() => setIsWelcomeOpen(false)}
        />
        
      </div>  
    </>
  );
}

