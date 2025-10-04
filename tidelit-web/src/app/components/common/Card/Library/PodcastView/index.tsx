"use client";

import { FiPlus } from "react-icons/fi";
import Podcast from "../Podcast";
import Link from "next/link";


export default function PodcastView() {

    return (
        <>
        <div className="w-full h-full flex flex-col p-10 gap-10">
            
            {/* Playlists por defecto de me gusta y favoritos */}
            <div className="w-full h-full flex flex-col gap-10">
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-xs">Historial de Podcast agregados</p>
                    <h1 className="text-2xl font-bold uppercase">Tus Podcast</h1>
                </div>
                
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    <Podcast 
                        name="La Cordada"
                        text="La Cordada | 36 Episodios"
                    />
                    <Podcast 
                        name="La Cordada"
                        text="La Cordada | 36 Episodios"
                    />
                    <Podcast 
                        name="La Cordada"
                        text="La Cordada | 36 Episodios"
                    />
                    <Podcast 
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