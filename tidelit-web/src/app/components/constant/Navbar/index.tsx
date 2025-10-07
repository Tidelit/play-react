"use client"
import Link from "next/link";
import { FiBell, FiDownload, FiSearch, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchModal, setShowSearchModal] = useState(false);
    return (
        <>
        <div className="w-full h-14  flex flex-row justify-start items-center gap-2 p-10 ">
            {/* Input de busqueda */}
            <div className="w-full  flex flex-row items-start justify-start gap-2">
                <Link 
                    href="/" 
                    className={`w-22 h-8 border rounded-full text-xs font-bold flex justify-center items-center transition-colors duration-300 ${
                        pathname === '/' ? 'bg-blue-500 text-white' : 'hover:bg-blue-50'
                    }`}
                >
                    <p>Todos</p>
                </Link>
                <Link 
                    href="/tidelit" 
                    className={`w-22 h-8 border rounded-full text-xs font-bold flex justify-center items-center transition-colors duration-300 ${
                        pathname === '/tidelit' ? 'bg-blue-500 text-white' : 'hover:bg-blue-50'
                    }`}
                >
                    <p>Tidelit</p>
                </Link>
                <Link 
                    href="/mixRadio" 
                    className={`w-22 h-8 border rounded-full text-xs font-bold flex justify-center items-center transition-colors duration-300 ${
                        pathname === '/mixRadio' ? 'bg-blue-500 text-white' : 'hover:bg-blue-50'
                    }`}
                >
                    <p>Mix Radio</p>
                </Link>
                {/* Botón/Input de búsqueda expandible */}
                <div className="relative overflow-hidden">
                    <div className={`flex items-center gap-2 bg-white border rounded-full shadow-sm transition-all duration-300 ease-in-out ${
                        isSearchExpanded 
                            ? 'w-[300px] px-3 py-1 opacity-100' 
                            : 'w-10 h-8 px-0 py-0 opacity-100'
                    }`}>
                        {!isSearchExpanded ? (
                            <button 
                                className="w-full h-full flex justify-center items-center hover:bg-blue-50 transition-colors duration-300"
                                onClick={() => setIsSearchExpanded(true)}
                            >
                                <FiSearch className="w-4 h-4"/>
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
                                    className="text-sm outline-none bg-transparent flex-1 min-w-0 transition-all duration-300 animate-in fade-in-0 slide-in-from-left-2"
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
                                    className="hover:text-red-500 transition-colors duration-200 animate-in fade-in-0 slide-in-from-right-2"
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
            <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50" onClick={() => setShowSearchModal(false)}>
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