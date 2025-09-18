import Link from "next/link";
import { FiBell, FiDownload, FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return (
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
                <button className="w-10 h-8 border rounded-full text-xs font-bold flex justify-center items-center">
                    <FiSearch className="w-4 h-4"/>
                </button>

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
                <button className="w-12 h-12 text-xs font-medium uppercase flex justify-center items-center gap-2 cursor-pointer border rounded-full hover:text-blue-500 transition-colors duration-500">
                </button>
            </div>
        </div>
    )
}

export default Navbar;