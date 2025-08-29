"use client";
import { useState } from "react";
import Sidebar from "./components/constant/Sidebar";
import { Welcome } from "./components/common/Modal/Welcome";
import { FiBell, FiUser } from "react-icons/fi";

type Tab = 'Todos' | 'Tidelit' | 'MixRadio' | 'playlists';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('Todos');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Todos':
        return (
         <>
          <div className="w-full h-full bg-gray-200">
            
            </div>
         </>
        );
      case 'Tidelit':
        return (
        <>
         <div className="w-full h-full bg-gray-200">
            
            </div>
        </>
        );
      case 'MixRadio':
        return (
       <>
        <div className="w-full h-full bg-gray-200">
            
          </div>
       </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-row">
        <Sidebar />

        <div className="w-full h-screen flex flex-col bg-gray-200 p-4">
          {/* Navbar con tabs */}
          <div className="w-full bg-white  p-4">
            {/* Barra superior con iconos */}
            <div className="flex items-center justify-between px-6 py-3">
           
              {/* Barra de búsqueda central */}
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                
                  <input
                    type="text"
                    placeholder="¿Qué quieres reproducir?"
    className="w-full h-12 bg-gray-100 text-xs p-4 text-gray-900 placeholder-gray-500 rounded-lg"
/>
              
                </div>
              </div>

              {/* Iconos derechos */}
              <div className="flex items-center gap-2">
                <button >
                  <FiBell  />
                </button>
           
                <div className="w-14 h-14 rounded-full border flex items-center justify-center">
                  <FiUser />
                </div>
              </div>
            </div>

            {/* Tabs de navegación */}
            <div className="flex items-center px-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('Todos')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'Todos'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveTab('Tidelit')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'Tidelit'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Tidelit
              </button>
              <button
                onClick={() => setActiveTab('MixRadio')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'MixRadio'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Mix Radio
              </button>
  
            </div>
          </div>

          {/* Contenido principal */}
          <div className="flex-1 overflow-y-auto bg-white p-4">
            {renderTabContent()}
          </div>
        </div>
      </div>


        {/* <Welcome /> */}
    </>
  );
}

