'use client';

import React, { useState } from 'react';
import { FiArchive, FiHome, FiLogOut, FiMenu, FiMonitor, FiMoon, FiMusic, FiSettings, FiUser, FiX } from 'react-icons/fi';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Elementos del menú principal
  const menuItems = [
    { icon: FiHome, text: 'Inicio' },
    { icon: FiArchive, text: 'Biblioteca', href: '/library' },
    { icon: FiMonitor, text: 'Tu Network', href: '/network' },
    { icon: FiUser, text: 'Hazte premium' },
    { icon: FiMusic, text: 'Hazte creador' },
    { icon: FiMoon, text: 'Modo oscuro' },
  ];

  // Elementos del menú inferior
  const bottomItems = [
    { icon: FiSettings, text: 'Opciones', href: '/options' },
    { icon: FiLogOut, text: 'Cerrar sesion', href: '/login' },
  ];

  return (
    <>
      <div className={`${isOpen ? 'w-80 xl:w-[250px]' : 'w-20'} h-full min-[320px]:hidden xl:flex flex-col items-center transition-all duration-500 ease-in-out overflow-hidden`}>
        
        {/* Header */}
        <div className="w-full h-auto flex flex-row justify-center items-center p-4">
          <div className='w-full h-full flex flex-row '>
            <button 
              onClick={toggleSidebar}
              className="w-14 h-14 rounded-full  transition-all duration-500 cursor-pointer flex justify-center items-center"
            >
              {isOpen ? (
                <FiX className='w-6 h-6 min-w-[42px]' />
              ) : (
                <FiMenu className='w-6 h-6 min-w-[42px]' />
              )}
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className='w-full h-full  flex flex-col justify-center items-center p-5'>
          {/* Menú principal */}
          <div className='w-full h-full flex flex-col items-center justify-center'>
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href || '/'}
                  key={index}
                  className={`w-full h-12 flex flex-row items-center  text-xs  uppercase cursor-pointer   hover:text-blue-500 rounded-2xl transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0'}`}
                >
                  <Icon className='w-5 h-5 min-w-[32px]' />
                  <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>
                    {item.text}
                  </span>
                </Link>
              );
            })}
          </div>
          
          {/* Menú inferior */}
          <div className='w-full h-auto flex flex-col items-center justify-center'>
            {bottomItems.map((item, index) => {
              const Icon = item.icon;
              
              if (item.href) {
                return (
                  <Link
                    key={index}
                    href={item.href}
                  className={`w-full h-12 flex flex-row items-center  text-xs  uppercase cursor-pointer hover:text-blue-500 rounded-2xl transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0'}`}
                  >
                    <Icon className='w-5 h-5 min-w-[32px]' />
                    <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>
                      {item.text}
                    </span>
                  </Link>
                );
              }

              return (
                <button
                  key={index}
                  className={`w-full h-12 flex flex-row items-center  text-xs uppercase cursor-pointer hover:text-blue-500 rounded-2xl transition-all duration-500 ease-in-out ${isOpen ? 'p-4 hover:border-blue-500' : 'p-0'}`}
                >
                  <Icon className='w-6 h-6 min-w-[42px]' />
                  <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>

        
        </div>

      </div>
    </>
  );
};

export default Sidebar;