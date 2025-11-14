"use client";
import { useState } from "react";
import { FiChevronLeft, FiTrendingUp, FiTarget, FiShoppingBag, FiAward, FiUsers } from "react-icons/fi";
import Link from "next/link";
import BalanceView from "@/app/components/common/Card/Network/BalanceView";
import TusmetasView from "@/app/components/common/Card/Network/TusmetasView";
import TusventasView from "@/app/components/common/Card/Network/TusventasView";
import LigasView from "@/app/components/common/Card/Network/LigasView";
import TuslogrosView from "@/app/components/common/Card/Network/TuslogrosView";


function BalanceContent() {
    return (
     <>
        <div className="w-full h-full flex flex-col gap-2 p-10">
            <BalanceView />
        </div>
     </>
    );
}

function TusMetasContent() {

    return (
    <>
        <div className="w-full h-full flex flex-col gap-2 p-10">
            <TusmetasView />
        </div>
    </>
    );
}

function TusVentasContent() {
    return (
    <>
        <div className="w-full h-full flex flex-col gap-2 p-10">
            <TusventasView />
        </div>
    </>
    );
}

function TusLogrosContent() {
    return (
      <>
        <div className="w-full h-full flex flex-col gap-2 p-10">
            <TuslogrosView />
        </div>
      </>
    );
}

function LigasContent() {
    return (
      <>
        <div className="w-full h-full flex flex-col gap-2 p-10">
            <LigasView />
        </div>
      </>
    );
}



// Componente principal
export default function Network() {
    const [activeTab, setActiveTab] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Configuración de las pestañas
    const tabs = [
        { id: 0, title: "Balance", icon: FiTrendingUp },
        { id: 1, title: "Tus Metas", icon: FiTarget },
        { id: 2, title: "Tus Ventas", icon: FiShoppingBag },
        { id: 3, title: "Tus Logros", icon: FiAward },
        { id: 4, title: "Ligas", icon: FiUsers },
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
    const renderTabButton = (tab: { id: number; title: string; icon: React.ElementType }, showText = true) => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
            <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 font-medium whitespace-nowrap transition-colors duration-500 ${
                    isActive ? 'border-blue-500 text-blue-500' : 'border-transparent hover:text-blue-500'
                }`}
            >
                <IconComponent className="w-4 h-4" />
                {showText && <p className="text-[10px] uppercase font-bold">{tab.title}</p>}
            </button>
        );
    };

    return (
        <div className="w-full h-screen flex flex-row">
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-full flex flex-col justify-between items-center">
                    
                    {/* Barra superior con botón de volver y iconos */}
                    <div className="w-full h-14 flex flex-row justify-start items-center gap-2 p-10">
                        <Link href="/" className="w-full hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                            <FiChevronLeft className='w-4 h-4' />
                            <p className="text-xs">Volver atras</p>
                        </Link>
                        
                        {/* Iconos de pestañas (solo iconos) */}
                        <div className="w-full flex flex-row justify-end items-center overflow-x-auto gap-2">
                            {tabs.map(tab => renderTabButton(tab, false))}
                        </div>
                    </div>

                    {/* Navegación de pestañas (con texto) */}
                    <div className="w-full flex flex-row justify-start items-center gap-4 px-10">
                        {tabs.map(tab => renderTabButton(tab, true))}
                    </div>

                    {/* Contenido de la pestaña activa */}
                    <div className="flex-1 w-full overflow-y-auto">
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
        </div>
    );
}