"use client";
import { useState } from "react";
import Sidebar from "./components/constant/Sidebar";
import { FiBell, FiUser } from "react-icons/fi";
import { Todos } from "./components/common/ViewTabs/Todos";

type Tab = 'Todos' | 'Tidelit' | 'MixRadio' | 'playlists' | 'Search';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<{id: string, name: string, type: string, image?: string}>>([]);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Simulate search results - in a real app, this would be an API call
      const mockResults = [
        { id: '1', name: 'Bad Bunny', type: 'artist', image: '/imagenes/Artist/artis.jpg' },
        { id: '2', name: 'Un Verano Sin Ti', type: 'album', image: '/imagenes/Artist/artis.jpg' },
        { id: '3', name: 'Me Porto Bonito', type: 'song', image: '/imagenes/Artist/artis.jpg' },
        { id: '4', name: 'Reggaeton', type: 'genre', image: '/imagenes/Genre/genre.jpg' },
        { id: '5', name: 'Latin Pop', type: 'genre', image: '/imagenes/Genre/genre.jpg' },
      ].filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(mockResults);
      setSearchQuery(query);
      setActiveTab('Search');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Todos':
        return (
         <>
          <div className="w-full h-full p-10">
            <Todos />
          </div>
         </>
        );
      case 'Tidelit':
        return (
        <>
          <div className="w-full h-full ">
            
          </div>
        </>
        );
      case 'MixRadio':
        return (
       <>
          <div className="w-full h-full ">
            
          </div>
       </>
        );
      case 'Search':
        return (
          <>
            <div className="w-full h-full p-10">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Resultados de búsqueda para &quot;{searchQuery}&quot;</h1>
                <p className="text-gray-600">{searchResults.length} resultados encontrados</p>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {searchResults.map((result) => (
                    <div key={result.id} className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                        <img 
                          src={result.image || '/imagenes/Artist/artis.jpg'} 
                          alt={result.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm font-medium">{result.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{result.type}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No se encontraron resultados para tu búsqueda.</p>
                </div>
              )}
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

        <div className="w-full h-screen flex flex-col bg-gradient-to-b from-gray-400 to-white p-4">
          {/* Navbar con tabs */}
          <div className="w-full bg-white  p-4">
            {/* Barra superior con iconos */}
            <div className="flex items-center justify-between p-4">
           
              {/* Barra de búsqueda central */}
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                
                  <input
                    type="text"
                    placeholder="Busca tus playlists, artistas, canciones, generos, emisoras, etc."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                    className="w-full h-12 bg-gray-100 text-xs p-4 text-gray-900 border border-gray-400  rounded-lg"
                  />
              
                </div>
              </div>

              {/* Iconos derechos */}
              <div className="flex items-center gap-2">
                <button >
                  <FiBell className="w-6 h-6"/>
                </button>
           
                <div className="w-14 h-14 rounded-full border flex items-center justify-center">
                  <FiUser className="w-6 h-6"/>
                </div>
              </div>
            </div>

            {/* Tabs de navegación */}
            <div className="flex items-center  border-b border-gray-200">
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
              
              {activeTab === 'Search' && (
                <button
                  className="px-4 py-3 text-sm font-medium border-b-2 border-blue-500 text-blue-600"
                >
                  Búsqueda
                </button>
              )}
  
            </div>
          </div>

          {/* Contenido principal */}
          <div className="flex-1 overflow-y-auto bg-white ">
            {renderTabContent()}
          </div>
        </div>
      </div>


      {/* <Welcome /> */}
    </>
  );
}

