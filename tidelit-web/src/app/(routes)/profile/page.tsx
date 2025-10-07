"use client";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";


// Componente principal
export default function Profile() {
 

    return (
        <div className="w-full h-screen flex flex-row">
            
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-full flex flex-col justify-start items-center">
                    
                    {/* Barra superior con botón de volver y iconos */}
                    <div className="w-full h-14 flex flex-row justify-start items-center gap-2 p-10">
                        <Link href="/" className="w-full hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                            <FiChevronLeft className='w-4 h-4' />
                            <p className="text-xs">Volver atras</p>
                        </Link>
                        
                   
                    </div>

                    {/* Datos de Profile */}
                    <div className="w-full h-[400px] bg-black/50 flex flex-row justify-end items-end p-10">
                        <div className="w-full flex flex-col justify-center items-start">
                            <h1 className="text-2xl text-white uppercase">Nombre de Usuario</h1>
                            <p className="text-sm text-white">12 Oyentes Mensuales</p>
                        </div>
                        <div className="w-full flex flex-row justify-end items-end gap-4">
                            <p className="text-sm text-white">12 seguidores</p>
                            <p className="text-sm text-white">102 Seguidos</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-row justify-center gap-2 p-10">
                        <div className="w-full h-full border-2">

                        </div>

                        <div className="w-full h-full  flex flex-col gap-2">
                                            <div className="w-full  flex flex-col justify-between gap-20 border-2 p-10">
                                                
                                                {/* Texto */}
                                                <div className="w-full h-full  flex flex-col justify-center items-start">
                                                    <p className="text-xs">Favoritos Agregados</p>
                                                    <h1 className="text-2xl font-bold uppercase">Favoritos</h1>
                                                </div>

                                            </div>
                                
                                            <div className="w-full  flex flex-col justify-between gap-20 border-2 p-10">
                                                
                                                {/* Texto */}
                                                <div className="w-full h-full  flex flex-col justify-center items-start">
                                                    <p className="text-xs">Favoritos Agregados</p>
                                                    <h1 className="text-2xl font-bold uppercase">Favoritos</h1>
                                                </div>

                                            </div>
                        </div>
                    </div>
             
                </div>
            </div>
        </div>
    );
}