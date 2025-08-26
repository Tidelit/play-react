'use client';

import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import { FiChevronLeft } from "react-icons/fi";

export default function Login() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [userType, setUserType] = useState<'usuarios' | 'creadores'>('usuarios');

  return (
    <>
      <div className="w-full h-screen bg-white flex flex-col items-center justify-center gap-8">

        {/* Texto de bienvenida - solo visible en login */}
        {activeTab === 'login' && (
          <>
            {/* Logo */}
            <Link href='/' className='w-auto h-auto flex flex-row justify-center items-center'>
                <Image src={'/logo/Tidelit.png'} alt='Tidelit Logo' width={250} height={150} priority />
            </Link>
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                <span className='font-bold text-2xl'>¡Bienvenido!</span>
                <span className='text-xs text-gray-600'>a la evolución de la música</span>
            </div>
          </>
        )}

        {/* Tabs de tipo de usuario */}
        {activeTab === 'register' && (
          <>
            <button
            onClick={() => setActiveTab('login')}
            className="w-full max-w-2xl h-14 flex flex-row items-center justify-center gap-2 cursor-pointer">
                <FiChevronLeft />
                <span className="w-full text-center text-sm text-gray-600">Registro</span>
            </button>
            <div className='w-full max-w-2xl flex gap-2'>
                <button
                onClick={() => setUserType('usuarios')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-500 border border-blue-500 ${
                    userType === 'usuarios'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 hover:bg-blue-100'
                }`}
                >
                USUARIOS
                </button>
                <button
                onClick={() => setUserType('creadores')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-500 border border-blue-500 ${
                    userType === 'creadores'
                ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 hover:bg-blue-100'
                }`}
                >
                CREADORES
                </button>
            </div>
          </>
        )}
        
        {/* Formulario */}
        <div className='w-full max-w-2xl flex flex-col gap-4'>
            
            {activeTab === 'login' ? (
              <>
                {/* Correo y Contraseña */}
                <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
                    <input 
                        type="email"
                        placeholder="Correo electrónico"
                        className='w-full h-12 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    />
                    <input 
                        type="password"
                        placeholder="Contraseña"
                        className='w-full h-12 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    />
                </div>

                {/* Botones de Iniciar sesión y Crear cuenta */}
                <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
                    <Link href='/' className='w-full h-12 text-xs bg-white text-blue-500 font-medium rounded-lg hover:border-blue-500 transition-colors duration-500 border flex justify-center items-center'>
                        <span className="uppercase">Iniciar sesión</span>
                    </Link>

                    <button 
                      onClick={() => setActiveTab('register')}
                      className='w-full h-12 text-xs bg-blue-500 text-white font-medium rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors duration-500 border'
                    >
                        <span className="uppercase">Crear cuenta</span>
                    </button>
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
              </>
            ) : (
              <>
                {/* Formulario de registro */}
                <div className="w-full h-96  flex flex-col justify-start items-start gap-2">
                    <div className="w-full flex flex-row gap-2">

                    <input 
                        type="text"
                        placeholder={userType === 'creadores' ? "Nombre artístico/seudónimo/comercial" : "Nombres y apellidos"}
                        className='w-full h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    />

                    {userType === 'creadores' && (
                        <input 
                        type="text"
                        placeholder="Nombre de pila"
                            className='w-full h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />
                    )}
                    </div>

                    <input 
                        type="email"
                        placeholder="Correo electrónico"
                        className='w-full h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />

<div className="w-full flex flex-row gap-2">

                    <input 
                        type="text"
                        placeholder="País"
                        className='w-20 h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    />

                    <div className="w-full flex gap-2">
                        <div className="w-20 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-xs text-gray-600">
                            +57
                        </div>
                        <input 
                            type="tel"
                            placeholder="Número de celular"
                            className='flex-1 h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />
                    </div>
                        </div>

                    <div className="w-full flex gap-2">
                        <input 
                            type="text"
                            placeholder="Género"
                            className='flex-1 h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />
                        <input 
                            type="number"
                            placeholder="Edad"
                            className='flex-1 h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />
                    </div>

                    {userType === 'creadores' && (
                        <div className="w-full flex gap-2">
                            <input 
                                type="text"
                                placeholder="Género musical"
                                className='flex-1 h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />
                            <input 
                                type="text"
                                placeholder="Subgénero musical"
                                className='flex-1 h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />
                        </div>
                    )}

                    <input 
                        type="password"
                        placeholder="Contraseña"
                        className='w-full h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    />
                    <input 
                        type="password"
                        placeholder="Confirma tu contraseña"
                        className='w-full h-10 px-4 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    />
                </div>

                {/* Checkbox de términos y condiciones */}
                <div className="w-full flex items-center gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                        <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded" />
                        <span className="text-xs text-gray-600">Acepto términos y condiciones</span>
                    </div>
                </div>

                {/* Botones */}
                <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
                    <Link href='/' className='w-full h-12 text-xs bg-gray-200 text-gray-500 font-medium rounded-lg flex justify-center items-center'>
                        <span className="uppercase">Continuar</span>
                    </Link>
                </div>
              </>
            )}
        </div>

      </div>
    </>
  );
}