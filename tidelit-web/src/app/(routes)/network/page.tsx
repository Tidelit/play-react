"use client";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import BalanceView from "@/app/components/common/Card/Network/BalanceView";
import TusmetasView from "@/app/components/common/Card/Network/TusmetasView";
import TusventasView from "@/app/components/common/Card/Network/TusventasView";
import LigasView from "@/app/components/common/Card/Network/LigasView";
import TuslogrosView from "@/app/components/common/Card/Network/TuslogrosView";


function BalanceContent() {
    return (
     <>
        <BalanceView />
     </>
    );
}

function TusMetasContent() {

    return (
    <>
        <TusmetasView />
    </>
    );
}

function TusVentasContent() {
    return (
    <>
        <TusventasView />
    </>
    );
}

function TusLogrosContent() {
    return (
      <>
        <TuslogrosView />
      </>
    );
}

function LigasContent() {
    return (
      <>
        <LigasView />
      </>
    );
}



// Componente principal
export default function Network() {
    const [activeTab, setActiveTab] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Configuración de las pestañas
    const tabs = [
        { id: 0, title: "Balance"},
        { id: 1, title: "Tus Metas" },
        { id: 2, title: "Tus Ventas"},
        { id: 3, title: "Tus Logros" },
        { id: 4, title: "Ligas" },
    ];

    // Función que determina qué contenido mostrar según la pestaña activa
    const getTabContent = () => {
        switch(activeTab) {
             case 0: return <BalanceContent />;
             case 1: return <TusMetasContent />;
             case 2: return <TusVentasContent />;
             case 3: return <TusLogrosContent />;
             case 4: return <LigasContent />;
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
        <div className="w-full h-full min-h-screen">
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col">
                    
                    {/* Barra superior con botón de volver y iconos */}
                    <div className="w-full h-16 flex flex-row justify-start items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100">
                        <Link href="/" className="group flex flex-row items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                            <FiChevronLeft className='w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300' />
                            <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Volver atrás</p>
                        </Link>
                    </div>

                    {/* Navegación de pestañas (con texto) */}
                    <div className="w-full flex flex-row justify-start items-center gap-3 px-8 py-6 bg-white/60 backdrop-blur-sm">
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