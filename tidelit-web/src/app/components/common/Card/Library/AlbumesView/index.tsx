"use client";

import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import Albumes from "../Albumes";


export default function AlbumesView() {

    return (
        <>
        <div className="w-full h-full flex flex-col p-10 gap-10">
            
            {/* Playlists por defecto de me gusta y favoritos */}
            <div className="w-full h-full flex flex-col gap-10 p-20">
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-xs">Historial de Albumes agregados</p>
                    <h1 className="text-2xl font-bold uppercase">Tus Albumes</h1>
                </div>
                
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    <Albumes 
                        name="La Cordada"
                        text="La Cordada | 36 Episodios"
                    />
                    <Albumes 
                        name="La Cordada"
                        text="La Cordada | 36 Episodios"
                    />
                    <div className="w-full flex flex-row ">
                        <Link href="/" className={`w-40 h-40 rounded-2xl border flex justify-center items-center text-4xl`}>
                            <FiPlus />
                        </Link>
                    </div>
                </div>
         


              
      
            </div>

         
        </div>
        </>
    )
}