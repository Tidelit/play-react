import Link from "next/link"
import { FiChevronLeft } from "react-icons/fi"

export default function ShareView() {
    return (
        <>
            {/* Contenido principal */}
            <div className="w-full h-screen flex flex-col items-center">
                    
                    {/* Barra superior con botón de volver y iconos */}
                    <div className="w-full h-14 flex flex-row justify-between items-center p-10">
                        <Link href="/" className="w-auto hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                            <FiChevronLeft className='w-4 h-4' />
                            <p className="text-xs">Volver atras</p>
                        </Link>
                    </div>
        
             
             
            </div>
        </>
    )
}