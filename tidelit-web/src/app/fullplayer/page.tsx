"use client";
import { FiCast, FiChevronLeft, FiMinimize , FiShare2 } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/constant/Sidebar";

export default function Fullplayer() {
    return (
    <>
      <div className="w-full h-screen flex flex-row bg-gradient-to-b from-[#D80DE5]  to-white p-2 gap-2">
        <Sidebar />
        
        {/* Contenido */}
        <div className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-white to-white/50   rounded-2xl border border-gray-200">
           {/* Navbar de fullplayer */}
           <div className="w-full h-14 flex flex-row justify-start items-center gap-2 p-10 ">
               
                <Link href="/" className="w-full hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                    <FiChevronLeft className='w-4 h-4' />
                    <p className="text-xs ">Volver atras</p>
                </Link>

                <div className='w-full h-auto flex flex-row gap-2 items-center justify-end'>
                        <button className="hover:text-blue-500 transition-colors duration-500 cursor-pointer">
                        <FiShare2 className='w-4 h-4' />
                        </button>
                        <button className="hover:text-blue-500 transition-colors duration-500 cursor-pointer">
                        <FiCast className='w-4 h-4' />
                        </button>
                     
                    

                        {/* boton de maximizar/minimizar */}
                        <Link 
                            href="/"
                            className="hover:text-blue-500 transition-colors duration-500 cursor-pointer"
                        >
                            <FiMinimize className="w-4 h-4" />
                        </Link>
                </div>

           </div>

            {/* Imagen de la cancion mas animacion xd */}
            <div className="w-[800px]  max-w-8xl hidden flex-row gap-2 justify-center items-center relative">
                  {/* Imagen de fondo */}
                  <div className="absolute w-full h-full flex justify-center items-center z-10 animate-pulse scale-125">
                    <Image 
                      src="/imagenes/Song/Effect.png"
                      alt="Background Cover"
                      width={512}
                      height={512}
                      className="w-96 h-96 animate-ping drop-shadow-2xl drop-shadow-[#D80DE5]"
                    />
                  </div>

                  {/* Imagen principal */}
                  <div className="w-full max-w-sm h-96  rounded-full shadow-md shadow-white overflow-hidden z-20">
                    <Image 
                      src="/imagenes/Song/Song1.jpg"
                      alt="Song Cover"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>
            </div>
        </div>
      </div>  
    </>
    )
}