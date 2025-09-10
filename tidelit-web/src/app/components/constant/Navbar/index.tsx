import { FiBell, FiDownload, FiSearch } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="w-full h-14  flex flex-row justify-start items-center gap-2 p-10 ">
            {/* Input de busqueda */}
            <div className="w-full  flex flex-row items-start justify-start gap-2">
                <button className="w-22 h-8 bg-blue-500 border text-white rounded-full text-xs font-bold">
                    <p>Todos</p>
                </button>
                <button className="w-22 h-8 border rounded-full text-xs font-bold">
                    <p>Tidelit</p>
                </button>
                <button className="w-22 h-8 border rounded-full text-xs font-bold">
                    <p>Mix Radio</p>
                </button>
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