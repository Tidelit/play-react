'use client';

import React, { useState } from 'react';
import { FiArchive, FiHome, FiLogOut,  FiMonitor,  FiMusic, FiSettings, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${isOpen ? 'w-[400px]' : 'w-28'} h-full flex flex-col p-4 gap-2  border-r-2 border-gray-200 transition-all duration-500 ease-in-out overflow-hidden`}>
        {/* Header */}
        <div className="w-full h-auto flex flex-row gap-2">
          {/* Botono de usuario e imagen de usuario */}
            <div className='w-20 h-20 flex flex-row justify-center items-center gap-4'>
              <button 
                onClick={toggleSidebar}
                className="w-14 h-14 hover:text-white rounded-full  bg-white transition-all duration-500 cursor-pointer flex justify-center items-center"
              >
               <Image src="/logo/Logo.png" alt="user" width={50} height={50} />
              </button>
            </div>

            {/* Nombre de usuario y boton de ver perfil */}
            <div className={`${isOpen ? 'w-full opacity-100' : 'w-0 opacity-0'} h-20 text-xs flex flex-col justify-center transition-all duration-500 ease-in-out overflow-hidden`}>
              <span className={`font-bold uppercase whitespace-nowrap ${isOpen ? 'translate-x-0' : '-translate-x-4'} transition-all duration-500 ease-in-out`}>
                Escucha con Tidelit
              </span>
              <span className={`text-gray-500 whitespace-nowrap ${isOpen ? 'translate-x-0' : '-translate-x-4'} transition-all duration-500 ease-in-out`}>
                Cerrar panel
              </span>
            </div>
        </div>  

        {/* Contenido */}
        <div className='w-full h-full p-4 flex flex-col justify-between'>
          {/* Botones de contenido */}
          <div className='w-full h-auto flex flex-col'>
        
            {/* Inicio */}
            <button
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer border border-white  hover:text-blue-500 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0 '}`}
            >
              <FiHome className='w-6 h-6 min-w-[32px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Inicio</span>
            </button>
            
            {/* Libreria */}
            <button
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer border border-white  hover:text-blue-500 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0 '}`}

            >
              <FiArchive className='w-6 h-6 min-w-[32px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Biblioteca</span>
            </button>
            
            {/* Tu Network */}
            <button
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer border border-white  hover:text-blue-500 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0 '}`}

            >
              <FiMonitor className='w-6 h-6 min-w-[32px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Tu Network</span>
            </button>
            
            {/* Hazte premium */}
            <button
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer border border-white  hover:text-blue-500 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0 '}`}

            >
              <FiUser className='w-6 h-6 min-w-[32px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Hazte premium</span>
            </button>

            {/* Conviertete en creador */}
            <button
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer border border-white  hover:text-blue-500 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0 '}`}

            >
              <FiMusic className='w-6 h-6 min-w-[32px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Hazte creador</span>
            </button>
         

     
     
          </div>
          
          {/* Cerrar sesion */}
          <div className='w-full h-auto flex flex-col'>
                   {/* Configuracion y privacidad */}
                   <button
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer border border-white  hover:text-blue-500 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0 '}`}

            >
              <FiSettings className='w-6 h-6 min-w-[32px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Opciones</span>
            </button>
            {/* Cerrar sesion */}
            <Link href='/login'
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer border border-white  hover:text-blue-500 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0 '}`}

            >
              <FiLogOut className='w-6 h-6 min-w-[32px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Cerrar sesion</span>
            </Link>
          </div>
        </div>
      </div>
       
      </>
    );
};

export default Sidebar;