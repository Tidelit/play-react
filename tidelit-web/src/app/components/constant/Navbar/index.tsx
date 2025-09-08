import Image from "next/image";
import { FiBell, FiDownload } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="w-full h-auto flex flex-row justify-center items-center">
            {/* Input de busqueda */}
            <div className="w-full h-full flex flex-row items-center justify-start gap-2">
                <button className="w-22 h-8 bg-blue-500 border text-white rounded-full text-xs font-bold">
                    <p>Todos</p>
                </button>
                <button className="w-22 h-8 border rounded-full text-xs font-bold">
                    <p>Tidelit</p>
                </button>
                <button className="w-22 h-8 border rounded-full text-xs font-bold">
                    <p>Mix Radio</p>
                </button>

            </div>

            {/* Opciones de Notificaciones y usuario  */}
            <div className="w-auto h-full flex flex-row items-center gap-2">
                <button className="w-40 h-12 text-xs font-medium uppercase flex justify-center items-center gap-2 cursor-pointer">
                    <FiDownload className="w-4 h-4"/>
                    <p>Descargar App</p>
                </button>
                <button className="w-auto h-20 ">
                    <FiBell className="w-4 h-4"/>
                </button>

                <button className="w-12 h-12 border rounded-full ">
                    <Image src="/imagenes/Artist/artis.jpg" className="w-full h-full object-cover rounded-full" alt="Logo" width={64} height={64} />
                </button>
            </div>
        </div>
    )
}

export default Navbar;