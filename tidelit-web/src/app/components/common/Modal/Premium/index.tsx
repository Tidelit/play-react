'use client';

import { useState } from "react";

interface PremiumProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Premium: React.FC<PremiumProps> = ({ isOpen = true, onClose }) => {
  const [visible, setVisible] = useState(isOpen);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    artisticName: '',
    firstName: '',
    email: '',
    musicalGenre: '',
    musicalSubgenre: ''
  });

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContinue = () => {
    if (acceptTerms) {
      // Aquí puedes agregar la lógica para procesar el formulario
      console.log('Formulario enviado:', formData);
      handleClose();
    }
  };

  if (!isOpen || !visible) return null;

  return (
    <div 
    className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
      
      <div className="w-full h-[650px] max-w-4xl bg-white shadow-2xl shadow-white backdrop-blur-2xl rounded-2xl flex flex-col items-center justify-between gap-4 p-10 relative">
        {/* Boton de volver atras y la x de cerrar  */}
        <div className="w-full flex flex-row justify-between items-start">
          <p className="absolute top-4 text-blue-500 font-bold ">Conviertete en Creador</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        
        {/* Formulario de datos */}
        <div className="w-full h-full flex flex-col items-start justify-start gap-4 p-10">
          
          <div className="w-full space-y-4">
            {/* Nombre artístico */}
            <input
              type="text"
              name="artisticName"
              placeholder="Nombre artístico/seudónimo/comercial"
              value={formData.artisticName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            
            {/* Nombre de pila */}
            <input
              type="text"
              name="firstName"
              placeholder="Nombre de pila"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            
            {/* Correo electrónico */}
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            
            {/* Género y Subgénero musical */}
            <div className="flex gap-4">
              <input
                type="text"
                name="musicalGenre"
                placeholder="Género musical"
                value={formData.musicalGenre}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <input
                type="text"
                name="musicalSubgenre"
                placeholder="Subgénero musical"
                value={formData.musicalSubgenre}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-40 flex flex-col items-center justify-center gap-4">
          {/* Checkbox de términos y condiciones */}
          <div className="w-full flex items-center gap-3">
            <input 
              type="checkbox" 
              id="terms" 
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              Acepto{' '}
              <span className="underline cursor-pointer hover:text-gray-800">
                terminos y condiciones
              </span>
            </label>
          </div>
          
            {/* Botón de continuar */}
            <button 
              onClick={handleContinue}
              disabled={!acceptTerms}
              className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors ${
                acceptTerms 
                  ? 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              CONTINUAR
            </button>
        </div>

      </div>
    </div>
  );
}
