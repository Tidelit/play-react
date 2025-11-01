"use client";
import { useState } from "react";
import PlayListView from "@/app/components/common/Card/Library/PlayListView";
import CompartidosView from "@/app/components/common/Card/Library/CompartidosView";
import PodcastView from "@/app/components/common/Card/Library/PodcastView";
import AlbumesView from "@/app/components/common/Card/Library/AlbumesView";
import EmisoraView from "@/app/components/common/Card/Library/EmisoraView";
import ArtistView from "@/app/components/common/Card/Library/ArtistView";

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
function EmisoraContent() {
    return (
      <>
        <EmisoraView />
      </>
    );
}
function ArtistaContent() {
    return (
      <>
        <ArtistView />
      </>
    );
}




// Componente principal
export default function Library() {
    const [activeTab, setActiveTab] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Configuración de las pestañas
    const tabs = [
        { id: 0, title: "Playlist"},
        { id: 1, title: "Compartidos" },
        { id: 2, title: "Podcast"},
        { id: 3, title: "Albumes"   },
        { id: 4, title: "Emisoras"   },
        { id: 5, title: "Artistas"   },
    ];

    // Función que determina qué contenido mostrar según la pestaña activa
    const getTabContent = () => {
        switch(activeTab) {
             case 0: return <PlaylistContent />;
             case 1: return <CompartidosContent />;
             case 2: return <PodcastContent />;
             case 3: return <AlbumesContent />;
             case 4: return <EmisoraContent />;
             case 5: return <ArtistaContent />;
             default: return <div>Selecciona una pestaña</div>;
        }
    };

    // Función para manejar el cambio de pestaña con transición
    const handleTabChange = (tabId: number) => {
        if (tabId !== activeTab) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveTab(tabId);
                setIsTransitioning(false);
            }, 150);
        }
    };

    // Función para renderizar un botón de pestaña
    const renderTabButton = (tab: { id: number; title: string; }, showText = true) => {
        const isActive = activeTab === tab.id;
        
        return (
            <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`group relative px-6 py-3 flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-all duration-300 rounded-xl border-2 ${
                    isActive 
                        ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-600 shadow-lg shadow-blue-500/25 scale-105' 
                        : 'text-gray-600 bg-white/70 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 hover:shadow-md hover:scale-102'
                }`}
            >
                {showText && (
                    <p className={`text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-700 group-hover:text-blue-600'
                    }`}>
                        {tab.title}
                    </p>
                )}
                {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full animate-scaleIn"></div>
                )}
            </button>
        );
    };

    return (
        <div className="w-full h-full  min-h-screen">
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col">
                    
                    {/* Navegación de pestañas (con texto) */}
                    <div className="w-full flex flex-row justify-start items-center gap-2 p-10 bg-white/60 backdrop-blur-sm ">
                        {tabs.map(tab => renderTabButton(tab, true))}
                    </div>

                    {/* Contenido de la pestaña activa */}
                    <div className="flex-1 w-full overflow-y-auto bg-gradient-to-b from-transparent to-gray-50/30">
                        <div className={`transition-all duration-500 ease-in-out transform ${
                            isTransitioning 
                                ? 'opacity-50 scale-98' 
                                : 'opacity-100 scale-100 animate-fadeIn'
                        }`}>
                            {getTabContent()}
                        </div>
                    </div>
            </div>
        </div>
    );
}