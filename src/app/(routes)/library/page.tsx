"use client";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import PlayListView from "@/app/components/common/Card/Library/PlayListView";
import CompartidosView from "@/app/components/common/Card/Library/CompartidosView";
import PodcastView from "@/app/components/common/Card/Library/PodcastView";
import AlbumesView from "@/app/components/common/Card/Library/AlbumesView";

function PlaylistContent() {
    return (
     <>
        <PlayListView />
     </>
    );
}

function CompartidosContent() {

    return (
    <>
        <CompartidosView />
    </>
    );
}

function PodcastContent() {
    return (
    <>
        <PodcastView />
    </>
    );
}

function AlbumesContent() {
    return (
      <>
        <AlbumesView />
      </>
    );
}




// Componente principal
export default function Library() {
    const [activeTab, setActiveTab] = useState(0);
    
    // Configuración de las pestañas
    const tabs = [
        { id: 0, title: "Playlist"},
        { id: 1, title: "Compartidos" },
        { id: 2, title: "Podcast"},
        { id: 3, title: "Albumes"   },
    ];

    // Función que determina qué contenido mostrar según la pestaña activa
    const getTabContent = () => {
        switch(activeTab) {
             case 0: return <PlaylistContent />;
             case 1: return <CompartidosContent />;
             case 2: return <PodcastContent />;
             case 3: return <AlbumesContent />;
             default: return <div>Selecciona una pestaña</div>;
        }
    };

    // Función para renderizar un botón de pestaña
    const renderTabButton = (tab: { id: number; title: string; }, showText = true) => {
        const isActive = activeTab === tab.id;
        
        return (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-22 h-8 flex items-center justify-center gap-2 font-bold whitespace-nowrap transition-colors duration-500  border  rounded-2xl ${
                    isActive ? 'text-white bg-blue-500' : 'hover:text-blue-500'
                }`}
            >
                {showText && <p className="text-xs">{tab.title}</p>}
            </button>
        );
    };

    return (
        <div className="w-full h-full flex flex-row ">
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col justify-between items-center">
                    
                    {/* Barra superior con botón de volver y iconos */}
                    <div className="w-full h-14 flex flex-row justify-start items-center gap-2 p-10">
                        <Link href="/" className="w-full hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                            <FiChevronLeft className='w-4 h-4' />
                            <p className="text-xs">Volver atras</p>
                        </Link>
                  
                    </div>

                    {/* Navegación de pestañas (con texto) */}
                    <div className="w-full flex flex-row justify-start items-center gap-2 px-10 ">
                        {tabs.map(tab => renderTabButton(tab, true))}
                    </div>

                    {/* Contenido de la pestaña activa */}
                    <div className="flex-1 w-full overflow-y-auto">
                        {getTabContent()}
                    </div>
            </div>
        </div>
    );
}