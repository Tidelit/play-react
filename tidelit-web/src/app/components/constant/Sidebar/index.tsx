'use client';

import React, { useState } from 'react';
import { FiBell, FiLogOut, FiMoon, FiMusic, FiSettings, FiUser } from 'react-icons/fi';
import Modal from '../../common/Modal';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };



  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={`${isOpen ? 'w-[400px]' : 'w-24'} h-full bg-white  flex flex-col p-4 gap-2 transition-all duration-500 ease-in-out overflow-hidden`}>
        {/* Header */}
        <div className="w-full h-auto flex flex-row gap-2">
          {/* Botono de usuario e imagen de usuario */}
            <div className='w-20 h-20 flex flex-row justify-center items-center gap-4'>
              <button 
                onClick={toggleSidebar}
                className="w-14 h-14 hover:bg-blue-500 hover:text-white rounded-full border border-blue-500 bg-white text-blue-500 transition-all duration-500 cursor-pointer"
              >
                <span className="text-2xl font-bold">J</span>
              </button>
            </div>

            {/* Nombre de usuario y boton de ver perfil */}
            <div className={`${isOpen ? 'w-full opacity-100' : 'w-0 opacity-0'} h-20 text-xs flex flex-col justify-center transition-all duration-500 ease-in-out overflow-hidden`}>
              <span className={`font-bold uppercase whitespace-nowrap ${isOpen ? 'translate-x-0' : '-translate-x-4'} transition-all duration-500 ease-in-out`}>
                Nombre de usuario
              </span>
              <span className={`text-gray-500 whitespace-nowrap ${isOpen ? 'translate-x-0' : '-translate-x-4'} transition-all duration-500 ease-in-out`}>
                Ver perfil
              </span>
            </div>
        </div>  

        {/* Contenido */}
        <div className='w-full h-full p-4 flex flex-col justify-between'>
          {/* Botones de contenido */}
          <div className='w-full h-auto flex flex-col'>
            {/* Notificaciones */}
            <button onClick={handleButtonClick}
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer hover:bg-gray-100 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4' : 'p-0'}`}
            >
              <FiBell className='w-4 h-4 min-w-[16px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Notificaciones</span>
            </button>
            {/* Hazte premium */}
            <button onClick={handleButtonClick}
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer hover:bg-gray-100 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4' : 'p-0'}`}
            >
              <FiUser className='w-4 h-4 min-w-[16px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Hazte premium</span>
            </button>
            {/* Conviertete en creador */}
            <button onClick={handleButtonClick}
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer hover:bg-gray-100 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4' : 'p-0'}`}
            >
              <FiMusic className='w-4 h-4 min-w-[16px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Conviertete en creador</span>
            </button>
            {/* Cambiar a modo oscuro */}
            <button onClick={handleButtonClick}
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer hover:bg-gray-100 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4' : 'p-0'}`}
            >
              <FiMoon className='w-4 h-4 min-w-[16px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Cambiar a modo oscuro</span>
            </button>
            {/* Configuracion y privacidad */}
            <button onClick={handleButtonClick}
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer hover:bg-gray-100 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4' : 'p-0'}`}
            >
              <FiSettings className='w-4 h-4 min-w-[16px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Configuracion y privacidad</span>
            </button>
          </div>
          
          {/* Cerrar sesion */}
          <div className='w-full h-auto flex flex-col'>
            {/* Cerrar sesion */}
            <button 
              className={`w-full h-10 bg-white flex flex-row items-center gap-2 text-xs cursor-pointer hover:bg-gray-100 rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'p-4' : 'p-0'}`}
            >
              <FiLogOut className='w-4 h-4 min-w-[16px]' />
              <span className={`whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500 ease-in-out`}>Cerrar sesion</span>
            </button>
          </div>
        </div>
      </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
            <Modal />
            <button
                  onClick={handleCloseModal}
                  className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
            </button>

          </div>
        )}
      </>
    );
};

export default Sidebar;