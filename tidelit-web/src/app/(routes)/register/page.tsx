'use client';

import { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
import Modal from "../../components/common/Modal/AuthCode";
import Link from 'next/link';
import { useRegisterUserMutation, useCreateUserMutation } from '@/services/v1/auth';
import { CreateUserData, CreateUserCompleteData } from '@/schemes';

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
  
  // para forms
  const [nombres, setNombres] = useState('')
  const [nombreArtistico, setNombreArtistico] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [edad, setEdad] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [region, setRegion] = useState(selectedCountry.name)
  const [perfil, setPerfil] = useState<number>(1); // ejemplo: 1 = usuario normal, 2 = creador
  const [referido, setReferido] = useState<string | undefined>(undefined)
  const [subgenero, setSubgenero] = useState('')
  const [generoMusical, setGeneroMusical] = useState('')
  
  // Estados para manejo de errores
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [apiError, setApiError] = useState<string>('')
  const [isSuccess, setIsSuccess] = useState(false)

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const codeDropdownRef = useRef<HTMLDivElement>(null);
  const genderDropdownRef = useRef<HTMLDivElement>(null);
  const musicalGenreDropdownRef = useRef<HTMLDivElement>(null);

  const { mutate: register, isPending: registering, isError, error } = useRegisterUserMutation()
  const { mutate: createUser, isPending: creatingUser } = useCreateUserMutation()

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

  // Sincronizar region con selectedCountry
  useEffect(() => {
    setRegion(selectedCountry.name)
  }, [selectedCountry])

  const handleRegister = () => {
    // Limpiar errores previos
    setValidationErrors([])
    setApiError('')
    
    // validaciones basicas
    const errors: string[] = []
    
    if(!nombres.trim()) {
        errors.push('El nombre es requerido')
    }
    if(!email.trim()) {
        errors.push('El email es requerido')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // <-- Expresión regular para validar que sea un email
        errors.push('El email no es válido')
    }
    if(!username.trim()) {
        errors.push('El username es requerido')
    }
    if(!password) {
        errors.push('La contraseña es requerida')
    } else if (password.length < 6) {
        errors.push('La contraseña debe tener al menos 6 caracteres')
    }
    if(password !== confirmPassword) {
        errors.push('Las contraseñas no coinciden')
    }
    if(!termsAccepted) {
        errors.push('Debes aceptar términos y condiciones')
    }

    if(errors.length > 0) {
        setValidationErrors(errors)
        return
    }

    if (userType === 'usuarios') {
      // Registro simple para usuarios
      const payload: CreateUserData = {
        email: email.trim(),
        username: username.trim(),
        password: password,
        nombres: nombres.trim(),
        region: region,
        perfil: 1, // Usuario normal
        referido: referido?.trim() || undefined,
      }

      register(payload, {
        onSuccess: (data) => {
          console.log('Usuario registrado:', data)
          setIsSuccess(true)
          setIsModalOpen(true)
        },
        onError: (err: any) => {
          console.error('Error en register:', err)
          
          if (err?.response?.status === 400) {
            const message = err?.response?.data?.message || 'Datos de entrada inválidos'
            const errors = err?.response?.data?.errors || []
            setApiError(message)
            if (errors.length > 0) {
              setValidationErrors(errors)
            }
          } else if (err?.response?.status === 409) {
            setApiError(err?.response?.data?.message || 'El email o username ya está registrado')
          } else if (err?.response?.status >= 500) {
            setApiError('Error interno del servidor. Intenta nuevamente.')
          } else {
            setApiError('Error registrando usuario. Intenta nuevamente.')
          }
        }
      })
    } else {
      // Registro completo para creadores
      const payload: CreateUserCompleteData = {
        perfil: 2, // Creador
        nombres: nombres.trim(),
        email: email.trim(),
        password: password,
        pais: region,
        telefono: telefono.trim(),
        generos: selectedGender,
        edad: edad.trim(),
        usuario: username.trim(),
        nombre_artistico: nombreArtistico.trim(),
        genero_musical: selectedMusicalGenre,
        subgenero: subgenero.trim(),
        patrocinador: referido?.trim() || undefined,
      }

      createUser(payload, {
        onSuccess: (data) => {
          console.log('Creador registrado:', data)
          setIsSuccess(true)
          setIsModalOpen(true)
        },
        onError: (err: any) => {
          console.error('Error en createUser:', err)
          setApiError('Error registrando creador. Intenta nuevamente.')
        }
      })
    }
  }

  return (
    <>      
      <div className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat rounded-2xl" >
        <div className='w-full max-w-2xl h-[650px]  flex flex-col items-center justify-between   p-10'>
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
                        : 'bg-transparent text-blue-500 hover:bg-blue-100'
                    }`}
                    >
                    USUARIOS
                    </button>
                    <button
                    onClick={() => setUserType('creadores')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-500 border border-blue-500 ${
                        userType === 'creadores'
                        ? 'bg-blue-500 text-white'
                        : 'bg-transparent text-blue-500 hover:bg-blue-100'
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
                                onChange={(e) => userType === 'creadores' ? setNombreArtistico(e.target.value) : setNombres(e.target.value)}
                                type="text"
                                placeholder={userType === 'creadores' ? "Nombre artístico/seudónimo/comercial" : "Nombres y apellidos"}
                                className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />

                            {userType === 'creadores' && (
                                <input 
                                    value={nombres}
                                    onChange={(e) => setNombres(e.target.value)}
                                    type="text"
                                    placeholder="Nombre de pila"
                                    className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                                />
                            )}
                        </div>

                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Correo electrónico"
                            className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />

                        <input 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Username"
                            className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />

                        <div className="w-full flex flex-row gap-2">
                            <div className="relative" ref={countryDropdownRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                    className='w-20 h-10 px-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex items-center justify-between'
                                >
                                    <span className="truncate">{selectedCountry.name}</span>
                                    <FiChevronDown className={`transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {isCountryDropdownOpen && (
                                    <div className="absolute z-10 w-40 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                                        {countries.map((country) => (
                                            <button
                                                key={country.code}
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
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
                                        className="w-20 h-10 flex items-center justify-between px-2 border border-gray-300 rounded-lg text-gray-600"
                                    >
                                        <span>{selectedCountry.code}</span>
                                        <FiChevronDown className={`transition-transform ${isCodeDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isCodeDropdownOpen && (
                                        <div className="absolute z-10 w-24 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                                            {countries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
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
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    type="number"
                                    placeholder="Número de celular"
                                    className='flex-1 h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                                />
                            </div>
                        </div>

                        <div className="w-full flex gap-2">
                            <div className="relative flex-1" ref={genderDropdownRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
                                    className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex items-center justify-between'
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
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
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
                                value={edad}
                                onChange={(e) => setEdad(e.target.value)}
                                type="number"
                                placeholder="Edad"
                                className='flex-1 h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                            />
                        </div>

                        {userType === 'creadores' && (
                            <div className="w-full flex gap-2">
                                <div className="relative flex-1" ref={musicalGenreDropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => setIsMusicalGenreDropdownOpen(!isMusicalGenreDropdownOpen)}
                                        className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex items-center justify-between'
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
                                                    className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
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
                                    value={subgenero}
                                    onChange={(e) => setSubgenero(e.target.value)}
                                    type="text"
                                    placeholder="Subgénero musical"
                                    className='flex-1 h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                                />
                            </div>
                        )}

                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Contraseña"
                            className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />
                        <input 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            placeholder="Confirma tu contraseña"
                            className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />
                    </div>

                    {/* Mostrar errores de validación */}
                    {validationErrors.length > 0 && (
                        <div className="w-full bg-red-50 border border-red-200 rounded-lg p-3">
                            <div className="text-red-600 text-sm font-medium mb-1">
                                Por favor corrige los siguientes errores:
                            </div>
                            <ul className="text-red-600 text-sm list-disc list-inside">
                                {validationErrors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Mostrar error de API */}
                    {apiError && (
                        <div className="w-full bg-red-50 border border-red-200 rounded-lg p-3">
                            <div className="text-red-600 text-sm">{apiError}</div>
                        </div>
                    )}

                    {/* Mostrar mensaje de éxito */}
                    {isSuccess && (
                        <div className="w-full bg-green-50 border border-green-200 rounded-lg p-3">
                            <div className="text-green-600 text-sm">¡Usuario registrado exitosamente!</div>
                        </div>
                    )}

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
                            onClick={handleRegister }
                            disabled={!termsAccepted || registering || creatingUser}
                            className={`w-full h-12 text-xs font-medium rounded-lg flex justify-center items-center transition-colors duration-300 ${
                                termsAccepted 
                                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {(registering || creatingUser) ? 'Registrando...' : 'Continuar'}
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