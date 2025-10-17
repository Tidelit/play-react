'use client';

import Image from "next/image";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

export default function Modal() {

    return (
    <div className="fixed inset-0  flex items-center justify-center z-50 bg-black/50 backdrop-blur-xs">
        <div className="relative w-full max-w-4xl h-[650px] bg-white shadow-2xl shadow-white backdrop-blur-2xl rounded-2xl flex flex-col items-center justify-between gap-4 p-10">

            {/* Logo */}
            <Link href='/' className='w-auto h-auto flex flex-row justify-center items-center'>
                <Image src={'/logo/Tidelit.png'} alt='Tidelit Logo' width={250} height={150} priority />
            </Link>
            <div className="w-full h-auto flex flex-col justify-center items-center ">
                <p className="text- text-gray-500">Para continuar</p>
                <p className="text-sm text-gray-500">Ingresa el código enviado a tu celular / correo</p>
            </div>

            {/* Inputs */}
            <div className="w-full max-w-sm flex justify-center gap-2">
                            <input 
                                type="text"
                                maxLength={1}
                                className="w-full h-16 text-2xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <input 
                                type="text"
                                maxLength={1}
                                className="w-full h-16 text-2xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <input 
                                type="text"
                                maxLength={1}
                                className="w-full h-16 text-2xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <input 
                                type="text"
                                maxLength={1}
                                className="w-full h-16 text-2xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
            </div>

            <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
                    {/* Botón de verificar */}
                    <Link href='/' className="w-full max-w-sm h-14 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
                        Validar
                    </Link>

                    <div className="w-full max-w-sm h-20 flex flex-row justify-center items-center shadow-md rounded-lg p-4">
                                <button className="w-40">
                                    <FiCheck className="w-6 h-6 text-green-500"/>
                                </button>
                                <div className="w-full h-auto flex flex-col justify-start items-start">
                                    <span className="text-sm font-bold">Posees problemas</span>
                                    <span className="text-xs">Intentalo de nuevo</span>
                                </div>
                                <button className="w-full">
                                    <span className="text-sm">Reenviar código</span>
                                </button>
                    </div>
            </div>
        </div>
    </div>
    );
}