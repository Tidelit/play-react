"use client";

import Compartidos from "../Compartidos";


export default function CompartidosView() {

    return (
        <>
        <div className="w-full h-full flex flex-col p-10 gap-10">
            
            {/* Playlists por defecto de me gusta y favoritos */}
            <div className="w-full h-full flex flex-col gap-10">
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-xs">Historial de Playlist compartidas</p>
                    <h1 className="text-2xl font-bold uppercase">Playlist compartidas contigo</h1>
                </div>
                
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    <Compartidos 
                        name="Playlist de Música Electrónica"
                        user="María García"
                    />
                    <Compartidos 
                        name="Playlist de Música Electrónica"
                        user="María García"
                    />
                </div>
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-xs">Historial de canciones compartidas</p>
                    <h1 className="text-2xl font-bold uppercase">Canciones compartidas contigo</h1>
                </div>

                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    <Compartidos 
                        name="Bohemian Rhapsody"
                        user="Carlos López"
                    />
                </div>
              
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-xs">Historial de albumes compartidas</p>
                    <h1 className="text-2xl font-bold uppercase">Albumes compartidas contigo</h1>
                </div>

                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    <Compartidos 
                        name="Abbey Road"
                        user="Ana Martínez"
                    />
                    <Compartidos 
                        name="Abbey Road"
                        user="Ana Martínez"
                    />
                    <Compartidos 
                        name="Abbey Road"
                        user="Ana Martínez"
                    />
                </div>


              
      
            </div>

         
        </div>
        </>
    )
}