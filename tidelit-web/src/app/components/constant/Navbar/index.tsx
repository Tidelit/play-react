"use client"
import Link from "next/link";
import { FiBell, FiDownload, FiSearch, FiX } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Función para manejar el cambio de tab con transición
    const handleTabChange = (path: string) => {
        if (pathname !== path) {
            setIsTransitioning(true);
            setTimeout(() => {
                router.push(path);
                setIsTransitioning(false);
            }, 150);
        }
    };

    // Función para renderizar un botón de tab
    const renderTabButton = (path: string, title: string) => {
        const isActive = pathname === path;
        
        return (
            <button
                key={path}
                onClick={() => handleTabChange(path)}
                className={`group relative px-6 py-3 flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-all duration-300 rounded-xl border-2 ${
                    isActive 
                        ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-600 shadow-lg shadow-blue-500/25 scale-105' 
                        : 'text-gray-600 bg-white/70 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 hover:shadow-md hover:scale-102'
                }`}
            >
                <p className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-700 group-hover:text-blue-600'
                }`}>
                    {title}
                </p>
                {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full animate-scaleIn"></div>
                )}
            </button>
        );
    };
    return (
        <>
        <div className="w-full h-14  flex flex-row justify-start items-center gap-2 p-10 ">
            {/* Tabs de navegación */}
            <div className="w-full flex flex-row items-start justify-start gap-3">
                {renderTabButton("/", "Todos")}
                {renderTabButton("/tidelit", "Tidelit")}
                {renderTabButton("/mixRadio", "Mix Radio")}
                {/* Botón/Input de búsqueda expandible */}
                <div className="relative overflow-hidden ml-auto">
                    <div className={`group flex items-center gap-2 border-2 rounded-xl shadow-sm transition-all duration-300 ease-in-out ${
                        isSearchExpanded 
                            ? 'w-[300px] px-3 py-3 bg-white/70 border-gray-200 hover:bg-blue-50 hover:border-blue-300' 
                            : 'w-12 h-12 px-0 py-0 bg-white/70 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md hover:scale-102'
                    }`}>
                        {!isSearchExpanded ? (
                            <button 
                                className="w-full h-full flex justify-center items-center transition-colors duration-300"
                                onClick={() => setIsSearchExpanded(true)}
                            >
                                <FiSearch className={`w-5 h-5 transition-colors duration-300 ${
                                    isSearchExpanded ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'
                                }`}/>
                            </button>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && searchQuery.trim()) {
                                            setShowSearchModal(true);
                                        }
                                        if (e.key === 'Escape') {
                                            setIsSearchExpanded(false);
                                            setSearchQuery("");
                                        }
                                    }}
                                    placeholder="Buscar..."
                                    className="text-sm outline-none bg-transparent flex-1 min-w-0 transition-all duration-300 animate-in fade-in-0 slide-in-from-left-2 text-gray-700 placeholder-gray-400"
                                    autoFocus
                                    style={{
                                        animationDelay: isSearchExpanded ? '150ms' : '0ms'
                                    }}
                                />
                                <button 
                                    onClick={() => {
                                        setIsSearchExpanded(false);
                                        setSearchQuery("");
                                    }}
                                    className="hover:text-red-500 transition-colors duration-200 animate-in fade-in-0 slide-in-from-right-2 p-1 rounded-lg hover:bg-red-50"
                                    style={{
                                        animationDelay: isSearchExpanded ? '200ms' : '0ms'
                                    }}
                                >
                                    <FiX className="w-4 h-4"/>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Opciones de Notificaciones y usuario  */}
            <div className="w-auto flex flex-row justify-center items-center gap-2">
                <button className="w-40 h-12 text-xs font-medium uppercase flex justify-center items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors duration-500">
                    <FiDownload className="w-4 h-4"/>
                    <p>Descargar App</p>
                </button>
                <button className="w-auto h-12 text-xs font-medium uppercase flex justify-center items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors duration-500">
                    <FiBell className="w-4 h-4"/>
                </button>
                <Link href='/profile' className="w-12 h-12 text-xs font-medium uppercase flex justify-center items-center gap-2 cursor-pointer border rounded-full hover:text-blue-500 transition-colors duration-500">
                </Link>
            </div>
        </div>

        {/* Modal de búsqueda */}
        {showSearchModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-20" onClick={() => setShowSearchModal(false)}>
                <div 
                    className="bg-white  rounded-2xl shadow-2xl shadow-white w-full max-w-2xl mx-4 p-6 animate-in fade-in-0 zoom-in-95 duration-200"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Resultados de búsqueda</h2>
                        <button 
                            onClick={() => setShowSearchModal(false)}
                            className="hover:text-red-500 transition-colors duration-200"
                        >
                            <FiX className="w-6 h-6"/>
                        </button>
                    </div>
                    
                    <div className="mb-4">
                        <p className="text-gray-600">Buscando: <span className="font-semibold text-blue-600">&ldquo;{searchQuery}&rdquo;</span></p>
                    </div>

                    <div className="space-y-4">
                        {/* Aquí irían los resultados de búsqueda */}
                        <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <h3 className="font-semibold text-gray-800">Canción encontrada</h3>
                            <p className="text-sm text-gray-600">Artista - Álbum</p>
                        </div>
                        
                        <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <h3 className="font-semibold text-gray-800">Artista encontrado</h3>
                            <p className="text-sm text-gray-600">Género musical</p>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <h3 className="font-semibold text-gray-800">Álbum encontrado</h3>
                            <p className="text-sm text-gray-600">Artista - Año</p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button 
                            onClick={() => setShowSearchModal(false)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
    )
}

export default Navbar;