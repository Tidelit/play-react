"use client";
import { useState } from "react";
import { FiChevronLeft, FiRadio, FiUser, FiSettings, FiCreditCard, FiGlobe, FiVolume2, FiInfo, FiChevronDown, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Sidebar from "../components/constant/Sidebar";

// Componente separado para los acordeones
function AccordionItem({ title }: { title: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border-2 border-white bg-white/50 shadow-md rounded-2xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-row items-center justify-between p-4 transition-colors duration-300"
            >
                <span className="text-xs uppercase">{title}</span>
                <FiChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="p-4 border-t">
                    <Link 
                        href="/" 
                        className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-2"
                    >
                        Leer aquí
                    </Link>
                </div>
            )}
        </div>
    );
}

// Componente para el contenido de Membresía
function MembershipContent() {
    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
            {/* Información del usuario */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Historial de Compras y Pedidos</h1>
                <p className="text-sm">
                    Actualmente tienes el Plan: <span className="text-blue-500 font-bold">Premium</span>
                </p>
            </div>
             
            {/* Tarjetas de planes */}
            <div className="w-full h-full flex flex-row items-start justify-center gap-2 p-10">
                {/* Plan actual */}
                <div className="w-full max-w-4xl h-96 border-2 border-white shadow-md rounded-2xl bg-gradient-to-r from-[#D80DE5] to-[#29B4CE] via-[#2D49D3]">
                    <div className="w-full h-full flex flex-col items-start justify-end p-10">
                        <p className="text-xs font-bold text-white uppercase">Membresia Actual</p>
                        <div className="w-full flex flex-row items-end justify-between text-white">
                            <h1 className="text-6xl font-black uppercase">tidelit <br /> Premium</h1>
                            <p className="text-xs">9/09/2024 - 9/09/2025</p>
                        </div>
                    </div>
                </div>
                
                {/* Planes anteriores */}
                <Link href="/" className="w-full max-w-md h-96 border-2 shadow-md rounded-2xl border-[#29B4CE] text-[#29B4CE] bg-white/50">
                    <div className="w-full h-full flex flex-col items-center justify-center p-10">
                    <FiShoppingCart className="w-40 h-40 " />               
                    </div>
                </Link>
            </div>
        </div>
    );
}

// Componente para el contenido de Información
function InformationContent() {
    const legalDocuments = [
        "Avisos Legales",
        "Terminos y Condiciones de uso",
        "Politicas de derechos de autor",
        "Politicas de privacidad y tratamiento de datos",
        "Programa de proteccion de datos",
        "Terminos y acuerdos de Tidelit Business"
    ];

    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
            {/* Información de contratos */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Tus Contratos y acuerdos comerciales</h1>
                <p className="text-sm">
                    Actualmente tienes dos contratos y un acuerdo firmado con tidelit: 
                    <Link href="/" className="underline"> Puedes leerlos aqui</Link>
                </p>
            </div>
             
            {/* Lista de documentos legales */}
            <div className="w-full h-full flex flex-col items-start justify-start">
                <h1 className="text-sm">Tambien, al registrarte, aceptaste:</h1>
                <div className="w-full flex flex-col gap-2 p-4">
                    {legalDocuments.map((document, index) => (
                        <AccordionItem key={index} title={document} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Componente para el contenido de Opciones
function OptionsContent() {
    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
            {/* Configuración general */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Cambiar Contraseña</h1>
                <p className="text-sm">Se cerrarán todas las sesiones, excepto esta, para proteger tu cuenta si alguien intenta obtener acceso.</p>
            </div>
            
          
        </div>
    );
}

// Componente para el contenido de Idioma y Ubicación
function LanguageLocationContent() {
    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Idioma y Ubicación</h1>
                <p className="text-sm">Configura tus preferencias regionales</p>
            </div>
            
         
        </div>
    );
}

// Componente para el contenido de Dispositivos
function DevicesContent() {
    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Dispositivos Conectados</h1>
                <p className="text-sm">Administra tus dispositivos y sesiones activas</p>
            </div>
         
        </div>
    );
}

// Componente para el contenido de Audio
function AudioContent() {
    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Configuración de Audio</h1>
                <p className="text-sm">Personaliza tu experiencia de sonido</p>
            </div>
            
        
        </div>
    );
}

// Componente para el contenido de Perfil
function ProfileContent() {
    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Informacion de la cuenta</h1>
                <p className="text-sm">Gestiona tu información personal</p>
            </div>
       
        </div>
    );
}

// Componente principal
export default function Options() {
    const [activeTab, setActiveTab] = useState(0);
    
    // Configuración de las pestañas
    const tabs = [
        { id: 0, title: "Membresia", icon: FiCreditCard },
        { id: 1, title: "Información", icon: FiInfo },
        { id: 2, title: "Seguridad", icon: FiSettings },
        { id: 3, title: "Idioma y ubicación", icon: FiGlobe },
        { id: 4, title: "Dispositivos", icon: FiRadio },
        { id: 5, title: "Audio", icon: FiVolume2 },
        { id: 6, title: "Perfil", icon: FiUser }
    ];

    // Función que determina qué contenido mostrar según la pestaña activa
    const getTabContent = () => {
        switch(activeTab) {
             case 0: return <MembershipContent />;
             case 1: return <InformationContent />;
             case 2: return <OptionsContent />;
             case 3: return <LanguageLocationContent />;
             case 4: return <DevicesContent />;
             case 5: return <AudioContent />;
             case 6: return <ProfileContent />;
             default: return <div>Selecciona una pestaña</div>;
        }
    };

    // Función para renderizar un botón de pestaña
    const renderTabButton = (tab: { id: number; title: string; icon: React.ElementType }, showText = true) => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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
        <div className="w-full h-screen flex flex-row bg-gradient-to-b from-[#D80DE5] to-white p-4 gap-4">
            <Sidebar />
            
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-white to-white/50 rounded-2xl gap-2 border border-gray-200">
                    
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
                        {getTabContent()}
                    </div>

                    {/* Botones de acción (ocultos por defecto) */}
                    <div className="w-full hidden justify-end gap-2 p-10 border-t border-gray-200">
                        <button className="w-40 h-10 text-xs text-blue-500 uppercase border border-blue-500 rounded-2xl transition-colors duration-500">
                            Cancelar
                        </button>
                        <button className="w-40 h-10 text-xs text-white uppercase border border-blue-500 rounded-2xl transition-colors duration-500 bg-blue-500">
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}