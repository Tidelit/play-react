"use client";
import { useState, useEffect } from "react";
import Sidebar from "./components/constant/Sidebar";
import { Welcome } from "./components/common/Modal/Welcome";

export default function Home() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    // Verificar si es la primera vez o si se recargó la página
    const hasVisited = localStorage.getItem('hasVisitedHome');
    
    if (!hasVisited) {
      // Primera vez visitando
      setShowWelcomeModal(true);
      localStorage.setItem('hasVisitedHome', 'true');
    } else {
      // Ya ha visitado antes, verificar si es un reload
      const isReload = performance.navigation.type === 1; // 1 = reload
      if (isReload) {
        setShowWelcomeModal(true);
      }
    }
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcomeModal(false);
  };

  // Datos de ejemplo para el modal (puedes personalizarlos)
  const sampleArtists = [
    {
      id: "1",
      name: "Artista 1",
      image: "/imagenes/Artist/artis.jpg"
    },
    {
      id: "2", 
      name: "Artista 2",
      image: "/imagenes/Artist/artis.jpg"
    }
  ];

  return (
    <>
      <div className="w-full h-screen flex flex-row">
        <Sidebar />

        <div className="w-full h-screen flex flex-col bg-gray-200"></div>
      </div>

      {/* Modal de Bienvenida */}
      <Welcome 
        isOpen={showWelcomeModal}
        onClose={handleCloseWelcome}
        selectedArtists={sampleArtists}
      />
    </>
  );
}

