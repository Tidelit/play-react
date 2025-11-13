'use client';

import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { useLoginMutation } from "@/services/v1/auth";
import { FormEvent, useState } from "react";

export default function Login() {
    const [correo, setCorreo] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    const { mutate: login, isPending, isError } = useLoginMutation()

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        if(!correo || !contrasenia) {
            console.log("Completa todos los campos.") // mejorar mensajes de error
            return
        }

        // Ejecuta el login

        login(
           { email: correo, password: contrasenia },
           {
            onSuccess: (data) => {
                console.log("✅ Login exitoso:", data)
                // Redirige al dashboard o guarda estado
                window.location.href = "/" // <-- /index - configurar aqui, a donde redirige si pasa la autenticacion
            },
            onError: (err: any) => {
                console.log("❌ Error en login:", err)
                console.log("Correo o contraseña incorrectos") // mejorar mensajes de error
            },
           } 
        )
    }

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat rounded-2xl" >
                <div className="w-full max-w-2xl h-[650px]  flex flex-col items-center justify-center gap-4 p-10">
                    {/* Logo */}
                    <Link href='/' className='w-auto h-auto flex flex-row justify-center items-center'>
                        <Image src={'/logo/Tidelit.png'} alt='Tidelit Logo' width={250} height={150} priority />
                    </Link>

                    <div className="w-full h-auto flex flex-col justify-center items-center ">
                        <p className="text-xl text-gray-500">Escuchar, invitar, ganar.</p>
                        <p className="text-sm text-gray-500">Asi suena Tidelit</p>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleLogin} className='w-full max-w-md flex flex-col gap-4'>
                        {/* Correo y Contraseña */}
                        <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
                            <input 
                                type="email"
                                placeholder="Correo electrónico"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className='w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />
                            <input 
                                type="password"
                                placeholder="Contraseña"
                                value={contrasenia}
                                onChange={(e) => setContrasenia(e.target.value)}
                                className='w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />
                        </div>

                        {/* Botones de Iniciar sesión y Crear cuenta */}
                        <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
                            <button
                                type="submit"
                                disabled={isPending}
                                className={`w-full h-12 text-xs bg-transparent uppercase text-blue-500 font-medium rounded-lg hover:border-blue-500 transition-colors duration-500 border flex justify-center items-center ${
                                    isPending
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : ""
                                }`}>
                                {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
                            </button>

                            <Link 
                            href='/register'
                            className='w-full h-12 text-xs bg-blue-500 text-white font-medium rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors duration-500 border flex justify-center items-center'
                            >
                                <span className="uppercase">Crear cuenta</span>
                            </Link>
                        </div>
                        
                        {/* Separador */}
                        <span className='w-full text-center text-gray-500 text-xs'>O regístrate con</span>

                        {/* Botones de Google y Facebook */}
                        <div className='flex gap-2 justify-center'>
                            <button className='flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
                                <FaGoogle className='text-xl text-gray-600' />
                            </button>
                            <button className='flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
                                <FaFacebook className='text-xl text-gray-600' />
                            </button>
                        </div>
                    </form>

                    {/* Errores */}
                    {isError && <p className="text-red-500 text-sm mt-2">Error al iniciar sesión. Verifica tus datos.</p>}
                </div>
            </div>
        </>
    )
}