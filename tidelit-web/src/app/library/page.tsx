"use client";
import { useState } from "react";
import { FiChevronLeft} from "react-icons/fi";
import Link from "next/link";
import Sidebar from "../components/constant/Sidebar";


// Componente para el contenido de Membresía
function FavoritesContent() {
    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
           
           
        </div>
    );
}

// Componente para el contenido de Información
function PlaylistContent() {

    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
       
        </div>
    );
}

// Componente para el contenido de Opciones
function AlbumsContent() {
    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
        
        </div>
    );
}

// Componente para el contenido de Idioma y Ubicación
function EmisorasContent() {
    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
         
        </div>
    );
}




// Componente principal
export default function Library() {
    const [activeTab, setActiveTab] = useState(0);
    
    // Configuración de las pestañas
    const tabs = [
        { id: 0, title: "Favoritos"},
        { id: 1, title: "Playlists" },
        { id: 2, title: "Albums"},
        { id: 3, title: "Emisoras"   },
    ];

    // Función que determina qué contenido mostrar según la pestaña activa
    const getTabContent = () => {
        switch(activeTab) {
             case 0: return <FavoritesContent />;
             case 1: return <PlaylistContent />;
             case 2: return <AlbumsContent />;
             case 3: return <EmisorasContent />;
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
        <div className="w-full h-screen flex flex-row bg-gradient-to-b from-[#D80DE5] to-white p-4 gap-4">
            <Sidebar />
            
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-white to-white/50 rounded-2xl border border-gray-200">
                <div className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-white to-white/50 rounded-2xl gap-2">
                    
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
        </div>
    );
}