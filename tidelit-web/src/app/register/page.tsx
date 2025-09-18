'use client';

import { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
import Modal from "../components/common/Modal/AuthCode";
import Link from 'next/link';

// Musical genres data
const musicalGenres = [
  'Rock',
  'Pop',
  'Hip Hop',
  'Reggaeton',
  'Salsa',
  'Jazz',
  'Blues',
  'Electrónica',
  'Clásica',
  'Folk',
  'R&B',
  'Country',
  'Metal',
  'Indie',
  'Vallenato',
  'Bachata',
  'Merengue',
  'Cumbia',
  'Ranchera',
  'Trap'
];

// Country data
const countries = [
  { name: 'Colombia', code: '+57' },
  { name: 'México', code: '+52' },
  { name: 'España', code: '+34' },
  { name: 'Argentina', code: '+54' },
  { name: 'Chile', code: '+56' },
  { name: 'Perú', code: '+51' },
  { name: 'Ecuador', code: '+593' },
  { name: 'Venezuela', code: '+58' },
];

export default function Register() {
  const [userType, setUserType] = useState<'usuarios' | 'creadores'>('usuarios');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isCodeDropdownOpen, setIsCodeDropdownOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [selectedMusicalGenre, setSelectedMusicalGenre] = useState('');
  const [isMusicalGenreDropdownOpen, setIsMusicalGenreDropdownOpen] = useState(false);
  
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const codeDropdownRef = useRef<HTMLDivElement>(null);
  const genderDropdownRef = useRef<HTMLDivElement>(null);
  const musicalGenreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
      if (codeDropdownRef.current && !codeDropdownRef.current.contains(event.target as Node)) {
        setIsCodeDropdownOpen(false);
      }
      if (genderDropdownRef.current && !genderDropdownRef.current.contains(event.target as Node)) {
        setIsGenderDropdownOpen(false);
      }
      if (musicalGenreDropdownRef.current && !musicalGenreDropdownRef.current.contains(event.target as Node)) {
        setIsMusicalGenreDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/background/fondo.png")' }}>
        <div className='w-full max-w-2xl h-[650px] bg-white rounded-lg shadow-2xl shadow-white flex flex-col items-center justify-between   p-10'>
                {/* Regresar */}
                <div className='w-full max-w-md flex flex-row items-center justify-center '>
                    <Link href='/login' className='w-10 h-10 flex items-center justify-center cursor-pointer'>
                        <FiChevronLeft />
                    </Link>
                    <span className='w-full text-center text-sm'>Registro</span>
                </div>
                
                {/* Tabs de tipo de usuario */}
                <div className='w-full max-w-md flex gap-2 mb-2'>
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
                
                {/* Formulario */}
                <div className='w-full max-w-md flex flex-col gap-2'>
                    {/* Formulario de registro */}
                    <div className="w-full h-96 flex flex-col justify-start items-start gap-2">
                        <div className="w-full flex flex-row gap-2">
                            <input 
                                type="text"
                                placeholder={userType === 'creadores' ? "Nombre artístico/seudónimo/comercial" : "Nombres y apellidos"}
                                className='w-full h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />

                            {userType === 'creadores' && (
                                <input 
                                    type="text"
                                    placeholder="Nombre de pila"
                                    className='w-full h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                                />
                            )}
                        </div>

                        <input 
                            type="email"
                            placeholder="Correo electrónico"
                            className='w-full h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />

                        <div className="w-full flex flex-row gap-2">
                            <div className="relative" ref={countryDropdownRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                    className='w-20 h-10 px-2 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex items-center justify-between'
                                >
                                    <span className="truncate">{selectedCountry.name}</span>
                                    <FiChevronDown className={`transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {isCountryDropdownOpen && (
                                    <div className="absolute z-10 w-40 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                                        {countries.map((country) => (
                                            <button
                                                key={country.code}
                                                className="w-full px-4 py-2 text-[10px] text-left hover:bg-gray-100 focus:outline-none"
                                                onClick={() => {
                                                    setSelectedCountry(country);
                                                    setIsCountryDropdownOpen(false);
                                                }}
                                            >
                                                {country.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="w-full flex gap-2">
                                <div className="relative" ref={codeDropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => setIsCodeDropdownOpen(!isCodeDropdownOpen)}
                                        className="w-20 h-10 flex items-center justify-between px-2 border border-gray-300 rounded-lg text-[10px] text-gray-600"
                                    >
                                        <span>{selectedCountry.code}</span>
                                        <FiChevronDown className={`transition-transform ${isCodeDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isCodeDropdownOpen && (
                                        <div className="absolute z-10 w-24 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                                            {countries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    className="w-full px-4 py-2 text-[10px] text-left hover:bg-gray-100 focus:outline-none"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setIsCodeDropdownOpen(false);
                                                    }}
                                                >
                                                    {country.code}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <input 
                                    type="number"
                                    placeholder="Número de celular"
                                    className='flex-1 h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                                />
                            </div>
                        </div>

                        <div className="w-full flex gap-2">
                            <div className="relative flex-1" ref={genderDropdownRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
                                    className='w-full h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex items-center justify-between'
                                >
                                    <span className={selectedGender ? 'text-black' : 'text-gray-400'}>
                                        {selectedGender || 'Género'}
                                    </span>
                                    <FiChevronDown className={`transition-transform ${isGenderDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {isGenderDropdownOpen && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                                        {['Masculino', 'Femenino', 'Otro'].map((gender) => (
                                            <button
                                                key={gender}
                                                className="w-full px-4 py-2 text-[10px] text-left hover:bg-gray-100 focus:outline-none"
                                                onClick={() => {
                                                    setSelectedGender(gender);
                                                    setIsGenderDropdownOpen(false);
                                                }}
                                            >
                                                {gender}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <input 
                                type="number"
                                placeholder="Edad"
                                className='flex-1 h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />
                        </div>

                        {userType === 'creadores' && (
                            <div className="w-full flex gap-2">
                                <div className="relative flex-1" ref={musicalGenreDropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => setIsMusicalGenreDropdownOpen(!isMusicalGenreDropdownOpen)}
                                        className='w-full h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex items-center justify-between'
                                    >
                                        <span className={selectedMusicalGenre ? 'text-black' : 'text-gray-400'}>
                                            {selectedMusicalGenre || 'Género musical'}
                                        </span>
                                        <FiChevronDown className={`transition-transform ${isMusicalGenreDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    {isMusicalGenreDropdownOpen && (
                                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                                            {musicalGenres.map((genre) => (
                                                <button
                                                    key={genre}
                                                    className="w-full px-4 py-2 text-[10px] text-left hover:bg-gray-100 focus:outline-none"
                                                    onClick={() => {
                                                        setSelectedMusicalGenre(genre);
                                                        setIsMusicalGenreDropdownOpen(false);
                                                    }}
                                                >
                                                    {genre}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <input 
                                    type="text"
                                    placeholder="Subgénero musical"
                                    className='flex-1 h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                                />
                            </div>
                        )}

                        <input 
                            type="password"
                            placeholder="Contraseña"
                            className='w-full h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />
                        <input 
                            type="password"
                            placeholder="Confirma tu contraseña"
                            className='w-full h-10 px-4 text-[10px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />
                    </div>

                    {/* Checkbox de términos y condiciones */}
                    <div className="w-full flex items-center ">
                        <div className="w-full flex items-center justify-start gap-2">
                            <input 
                                type="checkbox" 
                                className="w-4 h-4 border border-gray-300 rounded cursor-pointer" 
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                            />
                            <span className="text-xs text-gray-600">
                                Acepto términos y condiciones
                            </span>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="w-full h-auto flex flex-col justify-center items-center">
                        <button
                            onClick={() => termsAccepted && setIsModalOpen(true)}
                            disabled={!termsAccepted}
                            className={`w-full h-12 text-xs font-medium rounded-lg flex justify-center items-center transition-colors duration-300 ${
                                termsAccepted 
                                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            <span className="uppercase">Continuar</span>
                        </button>
                    </div>
                </div>
        </div>
      </div>

      {/* Modal genérico */}
      {isModalOpen && (
        <Modal />
      )}
    </>
  );
}