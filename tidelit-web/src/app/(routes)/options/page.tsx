"use client";
import { useState } from "react";
import { FiChevronLeft, FiUser, FiSettings, FiCreditCard, FiVolume2, FiInfo, FiChevronDown, FiShoppingCart, FiUserPlus } from "react-icons/fi";
import Link from "next/link";

// Componente separado para los acordeones
function AccordionItem({ title }: { title: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border-0 border-b border-gray-200 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-row items-center justify-between py-4 transition-colors duration-300 hover:text-gray-900"
            >
                <span className="text-sm text-gray-700 font-normal">{title}</span>
                <FiChevronDown 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="pb-4">
                    <Link 
                        href="/" 
                        className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-normal underline"
                    >
                        Leer aquí
                    </Link>
                </div>
            )}
        </div>
    );
}

// Componente para el contenido de Membresía
function MembershipContent() {
    return (
        <div className="w-full max-w-7xl h-full flex flex-col p-20 gap-8">
            {/* Información del usuario */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Historial de Compras y Pedidos</h1>
                <p className="text-sm text-gray-600">
                    Actualmente tienes el Plan: <span className="text-gray-900 font-medium">Premium</span>
                </p>
            </div>
             
            {/* Tarjetas de planes */}
            <div className="w-full h-full flex flex-row items-start justify-center gap-6 p-10">
                {/* Plan actual */}
                <div className="w-full max-w-4xl h-96 border-0 border-l-2 border-gray-900 bg-gray-50">
                    <div className="w-full h-full flex flex-col items-start justify-end p-10">
                        <p className="text-xs text-gray-500 uppercase mb-2">Membresia Actual</p>
                        <div className="w-full flex flex-row items-end justify-between">
                            <h1 className="text-5xl font-light text-gray-900">tidelit <br /> Premium</h1>
                            <p className="text-sm text-gray-500">9/09/2024 - 9/09/2025</p>
                        </div>
                    </div>
                </div>
                
                {/* Planes anteriores */}
                <Link href="/" className="w-full max-w-md h-96 border-0 border-l-2 border-gray-200 bg-gray-50 hover:border-gray-400 transition-colors">
                    <div className="w-full h-full flex flex-col items-center justify-center p-10">
                        <FiShoppingCart className="w-20 h-20 text-gray-400" />               
                        <p className="text-sm text-gray-600 mt-4">Tienda</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

// Componente para el contenido de Hazte Creador
function CreatorContent() {
    const [formData, setFormData] = useState({
        artisticName: "",
        firstName: "",
        email: "",
        musicGenre: "",
        musicSubgenre: ""
    });
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleInputChange = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="w-full max-w-7xl h-full flex flex-col p-20 gap-8 overflow-y-auto">
            {/* Configuración general */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Hazte creador</h1>
                <p className="text-sm">¿Quieres unirte y subir tus canciones y albumes a Tidelit? Unete como Creador</p>
            </div>
            
            {/* Información adicional */}
            <div className="w-full flex flex-col gap-0 p-0">
                <div className="flex flex-col">
                    <AccordionItem title="¿Cuánto puedo ganar como creador?" />
                    <AccordionItem title="¿Cómo se calculan las regalías?" />
                    <AccordionItem title="¿Cuándo recibo los pagos?" />
                    <AccordionItem title="¿Puedo subir cualquier tipo de música?" />
                </div>
            </div>

            {/* Configuración general */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Hazte creador</h1>
                <p className="text-sm">Llena el Formulario con tus datos de Artista.</p>
            </div>

            {/* Formulario */}
            <div className="w-full flex flex-col gap-8 p-10">
                {/* Nombre artístico/seudónimo/comercial */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-700 font-normal">Nombre artístico/seudónimo/comercial</label>
                    <input
                        type="text"
                        value={formData.artisticName}
                        onChange={(e) => handleInputChange('artisticName', e.target.value)}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder="Nombre artístico/seudónimo/comercial"
                    />
                </div>

                {/* Nombre de pila */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-700 font-normal">Nombre de pila</label>
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder="Nombre de pila"
                    />
                </div>

                {/* Correo electrónico */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-700 font-normal">Correo electrónico</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder="Correo electrónico"
                    />
                </div>

                {/* Género musical y Subgénero musical (lado a lado) */}
                <div className="flex flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-sm text-gray-700 font-normal">Género musical</label>
                        <input
                            type="text"
                            value={formData.musicGenre}
                            onChange={(e) => handleInputChange('musicGenre', e.target.value)}
                            className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                            placeholder="Género musical"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-sm text-gray-700 font-normal">Subgénero musical</label>
                        <input
                            type="text"
                            value={formData.musicSubgenre}
                            onChange={(e) => handleInputChange('musicSubgenre', e.target.value)}
                            className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                            placeholder="Subgénero musical"
                        />
                    </div>
                </div>

                {/* Checkbox de términos y condiciones */}
                <div className="flex items-center gap-3 pt-2">
                    <input 
                        type="checkbox" 
                        id="acceptTerms" 
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="w-4 h-4 border-gray-300 rounded-sm text-gray-900 focus:ring-0"
                    />
                    <label htmlFor="acceptTerms" className="text-sm text-gray-700 cursor-pointer font-normal">
                        Acepto{" "}
                        <Link href="https://legal.tidelit.co/terms-conditions/" className="underline text-gray-900 hover:text-gray-700">
                            terminos y condiciones
                        </Link>
                    </label>
                </div>

                {/* Botón Continuar */}
                <button 
                    className={`w-full px-8 py-3 text-sm transition-colors font-normal mt-4 ${
                        acceptTerms 
                            ? 'bg-blue-500 text-white hover:bg-blue-800' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!acceptTerms}
                >
                    Continuar
                </button>
            </div>
        </div>
    );
}

// Componente para el contenido de Información
function InformationContent() {
    const legalDocuments = [
        "Avisos Legales",
        "Terminos y Condiciones de uso",
        "Politicas de derechos de autor",
        "Politicas de privacidad y tratamiento de datos",
        "Programa de proteccion de datos",
        "Terminos y acuerdos de Tidelit Business"
    ];

    return (
        <div className="w-full h-full flex flex-col p-20 gap-8">
            {/* Información de contratos */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Tus Contratos y acuerdos comerciales</h1>
                <p className="text-sm text-gray-600">
                    Actualmente tienes dos contratos y un acuerdo firmado con tidelit: 
                    <Link href="/" className="text-gray-900 underline hover:text-gray-700"> Puedes leerlos aqui</Link>
                </p>
            </div>
             
            {/* Lista de documentos legales */}
            <div className="w-full h-full flex flex-col items-start justify-start">
                <h2 className="text-sm text-gray-700 font-normal mb-4">Tambien, al registrarte, aceptaste:</h2>
                <div className="w-full flex flex-col">
                    {legalDocuments.map((document, index) => (
                        <AccordionItem key={index} title={document} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Componente para el contenido de Opciones (Seguridad/Contraseña)
function OptionsContent() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="w-full h-full flex flex-col p-20 gap-8">
            {/* Configuración general */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Cambiar Contraseña</h1>
                <p className="text-sm">Se cerrarán todas las sesiones, excepto esta, para proteger tu cuenta si alguien intenta obtener acceso.</p>
            </div>
            
            {/* Formulario de contraseña */}
            <div className="w-full flex flex-col gap-8 p-10">
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-700 font-normal">Contraseña actual</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900"
                    />
                </div>
                
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-700 font-normal">Contraseña nueva</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900"
                    />
                </div>

                <div className="bg-gray-50 border-0 border-l-2 border-gray-200 pl-4 py-3 text-sm text-gray-600">
                    <p className="font-medium mb-2 text-gray-900">La contraseña debe tener al menos:</p>
                    <ul className="space-y-1 text-gray-600">
                        <li>• 1 letra minúscula</li>
                        <li>• 1 número o carácter especial (ejemplo: # ? ! &)</li>
                        <li>• 10 caracteres</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-700 font-normal">Repetir Contraseña</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900"
                    />
                </div>

                <div className="flex items-center gap-3 pt-2">
                    <input type="checkbox" id="forgot" className="w-4 h-4 border-gray-300 rounded-sm" />
                    <label htmlFor="forgot" className="text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors font-normal">¿Olvidaste tu contraseña?</label>
                </div>

                <div className="w-full flex gap-4 pt-4">
                    <button className="flex-1 px-8 py-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal">
                        Cancelar
                    </button>
                    <button className="flex-1 px-8 py-2.5 text-sm bg-blue-500 text-white hover:bg-blue-800 transition-colors font-normal">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}

// Componente para el contenido de Audio
function AudioContent() {
    const [settings, setSettings] = useState({
        // Idioma y ubicación
        language: 'Español',
        gpsEnabled: true,
        country: 'Colombia',
        city: 'Bogotá',
        timezone: 'GTM-5',
        
        // Dispositivos
        mobileSyncEnabled: true,
        activeDevice: 'I Phone 13 Pro',
        
        // Audio
        autoQuality: true,
        audioQuality: 'Alta',
        defaultEQ: false,
        explicitContent: true,
        volumeStabilization: true,
        crossfadeEnabled: true,
        crossfadeDuration: 3,
        
        // Ecualizador
        bass: 80,
        slider2: 30,
        mid: 60,
        high: 90,
        slider5: 70
    });

    const handleSettingChange = (key: string, value: string | boolean | number) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="w-full h-full flex flex-col overflow-y-auto p-20">
            {/* Configuración general */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Opciones</h1>
                <p className="text-sm">Opciones que puedes modificar para una mejor experiencia.</p>
            </div>
            
            {/* Contenido completo en una sola vista */}
            <div className="w-full h-full flex flex-col p-10 gap-20">
                
                {/* SECCIÓN: Audio */}
                <div className="w-full flex flex-col gap-6">
                    <span className="w-full flex flex-col">
                        <h3 className="text-lg font-normal text-gray-900">Audios</h3>
                        <h4 className="text-sm text-gray-600">Calidad de audio</h4>
                    </span>
                    
                    <div className="w-full flex flex-col">
                        {/* Calidad de audio */}
                        <div className="flex flex-col gap-6">
                            
                            <div className="flex items-center justify-between py-2 border-0 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    <span className={`text-sm font-normal ${settings.autoQuality ? 'text-gray-900' : 'text-gray-500'}`}>
                                        Automática
                                    </span>
                                    <button
                                        onClick={() => handleSettingChange('autoQuality', !settings.autoQuality)}
                                        className={`w-11 h-6 rounded-full transition-colors ${
                                            settings.autoQuality ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                    >
                                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                            settings.autoQuality ? 'translate-x-5' : 'translate-x-0.5'
                                        }`} />
                                    </button>
                                </div>
                                
                                <select 
                                    value={settings.audioQuality}
                                    onChange={(e) => handleSettingChange('audioQuality', e.target.value)}
                                    className="px-0 py-2 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-sm text-gray-900 appearance-none cursor-pointer"
                                >
                                    <option value="Alta">Alta</option>
                                    <option value="Media">Media</option>
                                    <option value="Baja">Baja</option>
                                </select>
                            </div>
                            
                            <p className="text-sm text-gray-500">
                                Mejorará cuando estés conectado a una red Wi-Fi
                            </p>
                        </div>

                        {/* Ecualizador */}
                        <div className="w-full flex flex-row gap-12 pt-6">
                            {/* Sección izquierda: Sliders del ecualizador */}
                            <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-normal text-gray-900">Ecualizador</h4>
                            
                                {/* Sliders verticales del ecualizador */}
                                <div className="flex items-end justify-start gap-4 h-48">
                                    {/* Slider 1 - Bass */}
                                <div className="flex flex-col items-center gap-2">
                                        <div 
                                            className="relative w-6 h-40 cursor-pointer select-none"
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                const sliderElement = e.currentTarget as HTMLElement;
                                                const updateValue = (clientY: number) => {
                                                    const rect = sliderElement.getBoundingClientRect();
                                                    const y = rect.bottom - clientY;
                                                    const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
                                                    handleSettingChange('bass', Math.round(percentage));
                                                };
                                                updateValue(e.clientY);
                                                const handleMouseMove = (e: MouseEvent) => {
                                                    e.preventDefault();
                                                    updateValue(e.clientY);
                                                };
                                                const handleMouseUp = () => {
                                                    document.removeEventListener('mousemove', handleMouseMove);
                                                    document.removeEventListener('mouseup', handleMouseUp);
                                                };
                                                document.addEventListener('mousemove', handleMouseMove);
                                                document.addEventListener('mouseup', handleMouseUp);
                                            }}
                                        >
                                            {/* Track de fondo gris */}
                                            <div className="absolute inset-0 w-full bg-gray-200 rounded-sm pointer-events-none"></div>
                                            {/* Barra de valor azul claro */}
                                            <div 
                                                className="absolute bottom-0 w-full bg-blue-400 rounded-t-sm transition-all duration-200 pointer-events-none"
                                                style={{ height: `${settings.bass}%` }}
                                            ></div>
                                            {/* Manejador circular */}
                                            <div 
                                                className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm pointer-events-none z-20"
                                                style={{ bottom: `calc(${settings.bass}% - 8px)`, left: '50%', transform: 'translateX(-50%)' }}
                                            ></div>
                                        </div>
                                    <span className="text-xs text-gray-600">Bass</span>
                                </div>
                                    
                                    {/* Slider 2 */}
                                <div className="flex flex-col items-center gap-2">
                                        <div 
                                            className="relative w-6 h-40 cursor-pointer select-none"
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                const sliderElement = e.currentTarget as HTMLElement;
                                                const updateValue = (clientY: number) => {
                                                    const rect = sliderElement.getBoundingClientRect();
                                                    const y = rect.bottom - clientY;
                                                    const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
                                                    handleSettingChange('slider2', Math.round(percentage));
                                                };
                                                updateValue(e.clientY);
                                                const handleMouseMove = (e: MouseEvent) => {
                                                    e.preventDefault();
                                                    updateValue(e.clientY);
                                                };
                                                const handleMouseUp = () => {
                                                    document.removeEventListener('mousemove', handleMouseMove);
                                                    document.removeEventListener('mouseup', handleMouseUp);
                                                };
                                                document.addEventListener('mousemove', handleMouseMove);
                                                document.addEventListener('mouseup', handleMouseUp);
                                            }}
                                        >
                                            <div className="absolute inset-0 w-full bg-gray-200 rounded-sm pointer-events-none"></div>
                                            <div 
                                                className="absolute bottom-0 w-full bg-blue-400 rounded-t-sm transition-all duration-200 pointer-events-none"
                                                style={{ height: `${settings.slider2}%` }}
                                            ></div>
                                            <div 
                                                className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm pointer-events-none z-20"
                                                style={{ bottom: `calc(${settings.slider2}% - 8px)`, left: '50%', transform: 'translateX(-50%)' }}
                                            ></div>
                                        </div>
                                    </div>
                                    
                                    {/* Slider 3 - Mid */}
                                    <div className="flex flex-col items-center gap-2">
                                        <div 
                                            className="relative w-6 h-40 cursor-pointer select-none"
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                const sliderElement = e.currentTarget as HTMLElement;
                                                const updateValue = (clientY: number) => {
                                                    const rect = sliderElement.getBoundingClientRect();
                                                    const y = rect.bottom - clientY;
                                                    const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
                                                    handleSettingChange('mid', Math.round(percentage));
                                                };
                                                updateValue(e.clientY);
                                                const handleMouseMove = (e: MouseEvent) => {
                                                    e.preventDefault();
                                                    updateValue(e.clientY);
                                                };
                                                const handleMouseUp = () => {
                                                    document.removeEventListener('mousemove', handleMouseMove);
                                                    document.removeEventListener('mouseup', handleMouseUp);
                                                };
                                                document.addEventListener('mousemove', handleMouseMove);
                                                document.addEventListener('mouseup', handleMouseUp);
                                            }}
                                        >
                                            <div className="absolute inset-0 w-full bg-gray-200 rounded-sm pointer-events-none"></div>
                                            <div 
                                                className="absolute bottom-0 w-full bg-blue-600 rounded-t-sm transition-all duration-200 pointer-events-none"
                                                style={{ height: `${settings.mid}%` }}
                                            ></div>
                                        </div>
                                    <span className="text-xs text-gray-600">Mid</span>
                                </div>
                                    
                                    {/* Slider 4 - High */}
                                <div className="flex flex-col items-center gap-2">
                                        <div 
                                            className="relative w-6 h-40 cursor-pointer select-none"
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                const sliderElement = e.currentTarget as HTMLElement;
                                                const updateValue = (clientY: number) => {
                                                    const rect = sliderElement.getBoundingClientRect();
                                                    const y = rect.bottom - clientY;
                                                    const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
                                                    handleSettingChange('high', Math.round(percentage));
                                                };
                                                updateValue(e.clientY);
                                                const handleMouseMove = (e: MouseEvent) => {
                                                    e.preventDefault();
                                                    updateValue(e.clientY);
                                                };
                                                const handleMouseUp = () => {
                                                    document.removeEventListener('mousemove', handleMouseMove);
                                                    document.removeEventListener('mouseup', handleMouseUp);
                                                };
                                                document.addEventListener('mousemove', handleMouseMove);
                                                document.addEventListener('mouseup', handleMouseUp);
                                            }}
                                        >
                                            <div className="absolute inset-0 w-full bg-gray-200 rounded-sm pointer-events-none"></div>
                                            <div 
                                                className="absolute bottom-0 w-full bg-blue-600 rounded-t-sm transition-all duration-200 pointer-events-none"
                                                style={{ height: `${settings.high}%` }}
                                            ></div>
                                </div>
                                        <span className="text-xs text-gray-600">Hight</span>
                            </div>
                            
                                    {/* Slider 5 */}
                                    <div className="flex flex-col items-center gap-2">
                                        <div 
                                            className="relative w-6 h-40 cursor-pointer select-none"
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                const sliderElement = e.currentTarget as HTMLElement;
                                                const updateValue = (clientY: number) => {
                                                    const rect = sliderElement.getBoundingClientRect();
                                                    const y = rect.bottom - clientY;
                                                    const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
                                                    handleSettingChange('slider5', Math.round(percentage));
                                                };
                                                updateValue(e.clientY);
                                                const handleMouseMove = (e: MouseEvent) => {
                                                    e.preventDefault();
                                                    updateValue(e.clientY);
                                                };
                                                const handleMouseUp = () => {
                                                    document.removeEventListener('mousemove', handleMouseMove);
                                                    document.removeEventListener('mouseup', handleMouseUp);
                                                };
                                                document.addEventListener('mousemove', handleMouseMove);
                                                document.addEventListener('mouseup', handleMouseUp);
                                            }}
                                        >
                                            <div className="absolute inset-0 w-full bg-gray-200 rounded-sm pointer-events-none"></div>
                                            <div 
                                                className="absolute bottom-0 w-full bg-blue-600 rounded-t-sm transition-all duration-200 pointer-events-none"
                                                style={{ height: `${settings.slider5}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Sección derecha: Opciones del ecualizador */}
                            <div className="flex flex-col gap-0 pt-10">
                                {[
                                    { key: 'defaultEQ', label: 'EQ por defecto' },
                                    { key: 'explicitContent', label: 'Contenido explícito' },
                                    { key: 'volumeStabilization', label: 'Estabilizar e igualar volumen de las canciones' }
                                ].map((option) => (
                                    <div key={option.key} className="flex items-center justify-between py-3 border-0 border-b border-gray-200 min-w-[350px]">
                                        <span className="text-sm text-gray-700 font-normal">{option.label}</span>
                                        <button
                                            onClick={() => handleSettingChange(option.key, !settings[option.key as keyof typeof settings])}
                                            className={`w-11 h-6 rounded-full transition-colors ${
                                                settings[option.key as keyof typeof settings] ? 'bg-blue-500' : 'bg-gray-300'
                                            }`}
                                        >
                                            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                                settings[option.key as keyof typeof settings] ? 'translate-x-5' : 'translate-x-0.5'
                                            }`} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Crossfade */}
                        <div className="flex flex-col gap-6 pt-6">
                            <h4 className="text-sm font-normal text-gray-900">Crossfade</h4>
                            
                            <div className="flex items-center justify-between py-2 border-0 border-b border-gray-200">
                                <span className={`text-sm font-normal ${settings.crossfadeEnabled ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {settings.crossfadeEnabled ? 'Activo' : 'Inactivo'}
                                </span>
                                <button
                                    onClick={() => handleSettingChange('crossfadeEnabled', !settings.crossfadeEnabled)}
                                    className={`w-11 h-6 rounded-full transition-colors ${
                                        settings.crossfadeEnabled ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                        settings.crossfadeEnabled ? 'translate-x-5' : 'translate-x-0.5'
                                    }`} />
                                </button>
                            </div>
                            
                         {/* Slider de duración */}
                         <div className="flex flex-col gap-3 pt-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Duración</span>
                                    <span className="text-sm font-normal text-gray-900">
                                        {settings.crossfadeDuration === 0 ? 'Inactivo' : `${settings.crossfadeDuration} seg`}
                                    </span>
                                </div>
                                <div className="relative pt-1">
                                    <input
                                        type="range"
                                        min="0"
                                        max="10"
                                        value={settings.crossfadeDuration}
                                        onChange={(e) => handleSettingChange('crossfadeDuration', parseInt(e.target.value))}
                                        disabled={!settings.crossfadeEnabled}
                                        className="w-full h-1 bg-blue-500 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{
                                            background: settings.crossfadeEnabled 
                                                ? `linear-gradient(to right, #111827 0%, #111827 ${settings.crossfadeDuration * 10}%, #e5e7eb ${settings.crossfadeDuration * 10}%, #e5e7eb 100%)`
                                                : '#e5e7eb'
                                        }}
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>0</span>
                                        <span>3</span>
                                        <span>6</span>
                                        <span>10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SECCIÓN: Idioma y ubicación */}
                <div className="flex flex-col gap-6">
                    
                    {/* Elije tu idioma */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-700 font-normal">Elije tu idioma</label>
                        <select 
                            value={settings.language}
                            onChange={(e) => handleSettingChange('language', e.target.value)}
                            className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 appearance-none cursor-pointer"
                        >
                            <option value="Español">Español</option>
                            <option value="English">English</option>
                            <option value="Português">Português</option>
                        </select>
                    </div>

                    {/* GPS / Ubicación */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between py-2 border-0 border-b border-gray-200">
                            <label className="text-sm text-gray-700 font-normal">GPS / Ubicación</label>
                            <div className="flex items-center gap-3">
                                <span className={`text-sm font-normal ${settings.gpsEnabled ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {settings.gpsEnabled ? 'Activo' : 'Inactivo'}
                                </span>
                                <button
                                    onClick={() => handleSettingChange('gpsEnabled', !settings.gpsEnabled)}
                                    className={`w-11 h-6 rounded-full transition-colors ${
                                        settings.gpsEnabled ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                        settings.gpsEnabled ? 'translate-x-5' : 'translate-x-0.5'
                                    }`} />
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">
                            Puedes activarla o desactivarla en el momento que desees
                        </p>
                    </div>

                    <div className="w-full flex flex-row justify-between gap-6">
                        {/* País */}
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm text-gray-700 font-normal">País</label>
                            <select 
                                value={settings.country}
                                onChange={(e) => handleSettingChange('country', e.target.value)}
                                className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 appearance-none cursor-pointer"
                            >
                                <option value="Colombia">Colombia</option>
                                <option value="México">México</option>
                                <option value="Perú">Perú</option>
                                <option value="Venezuela">Venezuela</option>
                            </select>
                        </div>

                        {/* Ciudad */}
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm text-gray-700 font-normal">Ciudad</label>
                            <select 
                                value={settings.city}
                                onChange={(e) => handleSettingChange('city', e.target.value)}
                                className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 appearance-none cursor-pointer"
                            >
                                <option value="Bogotá">Bogotá</option>
                                <option value="Medellín">Medellín</option>
                                <option value="Cali">Cali</option>
                                <option value="Barranquilla">Barranquilla</option>
                            </select>
                        </div>
                    </div>

                    {/* Zona horaria */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-700 font-normal">Zona horaria</label>
                        <select 
                            value={settings.timezone}
                            onChange={(e) => handleSettingChange('timezone', e.target.value)}
                            className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 appearance-none cursor-pointer"
                        >
                            <option value="GTM-5">GTM-5</option>
                            <option value="GTM-6">GTM-6</option>
                            <option value="GTM-7">GTM-7</option>
                            <option value="GTM-8">GTM-8</option>
                        </select>
                    </div>
                </div>

                {/* SECCIÓN: Dispositivos */}
                <div className="w-full flex flex-col gap-6">
                    <span className="w-full flex flex-col">
                        <h3 className="text-lg font-normal text-gray-900">Dispositivos</h3>
                        <h4 className="text-sm text-gray-600">Dispositivos móviles sincronizados</h4>
                    </span>
                    
                    <div className="w-full flex flex-col gap-6">
                        
                        {/* Dispositivos móviles sincronizados */}                            
                        <div className="flex items-center justify-between py-2 border-0 border-b border-gray-200">      
                            <select 
                                value={settings.activeDevice}
                                onChange={(e) => handleSettingChange('activeDevice', e.target.value)}
                                className="px-0 py-2 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-sm text-gray-900 appearance-none cursor-pointer"
                            >
                                <option value="I Phone 13 Pro">I Phone 13 Pro</option>
                                <option value="Samsung Galaxy S21">Samsung Galaxy S21</option>
                                <option value="Google Pixel 6">Google Pixel 6</option>
                            </select>

                            <div className="flex items-center gap-3">
                                <span className={`text-sm font-normal ${settings.mobileSyncEnabled ? 'text-gray-900' : 'text-gray-500'}`}>
                                    Activo
                                </span>
                                <button
                                    onClick={() => handleSettingChange('mobileSyncEnabled', !settings.mobileSyncEnabled)}
                                    className={`w-11 h-6 rounded-full transition-colors ${
                                        settings.mobileSyncEnabled ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                        settings.mobileSyncEnabled ? 'translate-x-5' : 'translate-x-0.5'
                                    }`} />
                                </button>
                            </div>
                        </div>
                            
                        {/* Conecta un dispositivo */}
                        <div className="h-full flex flex-col gap-4">
                            <div className="w-full flex flex-col">
                                <h4 className="text-sm font-normal text-gray-900">Conecta un dispositivo</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    Sincroniza tu dispositivo con otros dispositivos y reproduce tu música con todos al mismo tiempo creando un efecto envolvente (surround)
                                </p>
                            </div>
                            
                            {/* Gráfico circular */}
                            <div className="w-full h-80 flex justify-center items-center">
                                <div className="relative w-32 h-32">
                                    {/* Círculos concéntricos */}
                                    <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ping"></div>
                                    <div className="absolute inset-2 rounded-full border-2 border-blue-300 animate-ping"></div>
                                    <div className="absolute inset-4 rounded-full border-2 border-blue-400 animate-ping"></div>
                                    <div className="absolute inset-6 rounded-full border-2 border-blue-500 animate-ping"></div>
                                    
                                    {/* Centro con waveform */}
                                    <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                                        <div className="flex items-center gap-1">
                                            <div className="w-1 h-3 bg-blue-400 animate-ping"></div>
                                            <div className="w-1 h-5 bg-blue-500 animate-ping"></div>
                                            <div className="w-1 h-4 bg-blue-600 animate-ping"></div>
                                            <div className="w-1 h-6 bg-blue-500 animate-ping"></div>
                                            <div className="w-1 h-3 bg-blue-400 animate-ping"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="w-full flex justify-end gap-4 pt-8 mt-8 border-t border-gray-100">
                <button className="px-8 py-2.5 text-sm text-gray-600 hover:text-blue-900 transition-colors font-normal">
                    Cancelar
                </button>
                <button className="px-8 py-2.5 text-sm text-white bg-blue-500 hover:bg-blue-800 transition-colors font-normal">
                    Guardar
                </button>
            </div>
        </div>
    );
}

// Componente para el contenido de Perfil
function ProfileContent() {
    const [profileData, setProfileData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        countryCode: '+57',
        day: '',
        month: '',
        year: '',
        biography: ''
    });

    const handleInputChange = (key: string, value: string) => {
        setProfileData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="w-full h-full flex flex-col p-20 gap-8">
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Información de la cuenta</h1>
                <p className="text-sm">Gestiona tu información personal</p>
            </div>

            {/* Foto de perfil */}
             <>
                <div className="w-full flex flex-col">
                    <div className="w-full h-80 bg-blue-800/50"></div>

                    <div className="w-full h-auto bg-blue-800/40 flex flex-row justify-end items-end p-10">
                        <div className="w-full flex flex-col justify-center items-start">
                            <h1 className="text-xl text-white uppercase">Nombre de Usuario</h1>
                            <span className="flex flex-row gap-2">
                                <p className="text-sm text-white">Usuario</p>
                                <p className="text-sm text-white">Membresia VIP</p>
                            </span>
                        </div>
                        <div className="w-full flex flex-row justify-end items-end gap-4">
                            <p className="text-sm text-white">12 seguidores</p>
                            <p className="text-sm text-white">102 Seguidos</p>
                        </div>
                    </div>
                </div>
            </>

            {/* Formulario de información personal */}
            <>
                <div className="w-full flex flex-col gap-8 p-10">
                    
                    <div className="w-full flex flex-row gap-6">
                        {/* Nombre */}
                        <div className="w-full flex flex-col gap-1.5">
                            <label className="text-sm text-gray-700 font-normal">Nombre</label>
                            <input
                                type="text"
                                value={profileData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                            />
                        </div>

                        {/* Nombre de usuario */}
                        <div className="w-full flex flex-col gap-1.5">
                            <label className="text-sm text-gray-700 font-normal">Nombre de usuario</label>
                            <input
                                type="text"
                                value={profileData.username}
                                onChange={(e) => handleInputChange('username', e.target.value)}
                                className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Correo electrónico */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-700 font-normal">Correo electrónico</label>
                        <input
                            type="email"
                            value={profileData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                        />
                    </div>

                    <div className="w-full flex flex-row gap-6">
                        {/* Celular */}
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm text-gray-700 font-normal">Celular</label>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={profileData.countryCode}
                                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                                    className="w-20 px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-center text-gray-900"
                                />
                                <input
                                    type="text"
                                    value={profileData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className="flex-1 px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Fecha de nacimiento */}
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm text-gray-700 font-normal">Fecha de nacimiento</label>
                            <div className="flex gap-3">
                                <div className="flex-1 flex flex-col gap-1">
                                    <select
                                        value={profileData.day}
                                        onChange={(e) => handleInputChange('day', e.target.value)}
                                        className="px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 appearance-none cursor-pointer"
                                    >
                                        <option value="">Día</option>
                                        {Array.from({ length: 31 }, (_, i) => (
                                            <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                                {String(i + 1).padStart(2, '0')}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <select
                                        value={profileData.month}
                                        onChange={(e) => handleInputChange('month', e.target.value)}
                                        className="px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 appearance-none cursor-pointer"
                                    >
                                        <option value="">Mes</option>
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                                {String(i + 1).padStart(2, '0')}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <select
                                        value={profileData.year}
                                        onChange={(e) => handleInputChange('year', e.target.value)}
                                        className="px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors bg-transparent text-gray-900 appearance-none cursor-pointer"
                                    >
                                        <option value="">Año</option>
                                        {Array.from({ length: 100 }, (_, i) => {
                                            const year = 2024 - i;
                                            return (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Biografía */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-700 font-normal">Biografía</label>
                        <div className="relative">
                            <textarea
                                value={profileData.biography}
                                onChange={(e) => handleInputChange('biography', e.target.value)}
                                maxLength={150}
                                rows={4}
                                className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 outline-none transition-colors resize-none bg-transparent text-gray-900 placeholder:text-gray-400"
                            />
                            <div className="absolute bottom-3 right-0 text-xs text-gray-400">
                                {profileData.biography.length}/150
                            </div>
                        </div>
                    </div>

                    {/* Solicitar verificación */}
                    <div className="flex items-center gap-3 pt-2">
                        <div className="w-4 h-4 border border-gray-300 rounded-sm flex items-center justify-center">
                            <span className="text-gray-600 text-xs">✓</span>
                        </div>
                        <button className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-normal">
                            Solicitar verificación
                        </button>
                    </div>
                </div>
            </>

            {/* Botones de acción */}
            <div className="w-full flex justify-end gap-4 pt-8 mt-8 border-t border-gray-100">
                <button className="px-8 py-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal">
                    Cancelar
                </button>
                <button className="px-8 py-2.5 text-sm text-white bg-blue-500 hover:bg-blue-800 transition-colors font-normal">
                    Guardar
                </button>
            </div>
        </div>
    );
}

// Componente principal
export default function Options() {
    const [activeTab, setActiveTab] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Configuración de las pestañas
    const tabs = [
        { id: 0, title: "Membresia", icon: FiCreditCard },
        { id: 1, title: "Información", icon: FiInfo },
        { id: 2, title: "Seguridad", icon: FiSettings },
        { id: 3, title: "Hazte Creador", icon: FiUserPlus },
        { id: 5, title: "Audio", icon: FiVolume2 },
        { id: 6, title: "Perfil", icon: FiUser }
    ];

    // Función que determina qué contenido mostrar según la pestaña activa
    const getTabContent = () => {
        switch(activeTab) {
             case 0: return <MembershipContent />;
             case 1: return <InformationContent />;
             case 2: return <OptionsContent />;
             case 3: return <CreatorContent />;
             case 5: return <AudioContent />;
             case 6: return <ProfileContent />;
             default: return <div>Selecciona una pestaña</div>;
        }
    };

    // Función para manejar el cambio de pestaña con transición
    const handleTabChange = (tabId: number) => {
        if (tabId !== activeTab) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveTab(tabId);
                setIsTransitioning(false);
            }, 150);
        }
    };

    // Función para renderizar un botón de pestaña
    const renderTabButton = (tab: { id: number; title: string; icon: React.ElementType }, showText = true) => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
            <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 font-medium whitespace-nowrap transition-colors duration-500 ${
                    isActive ? 'border-blue-500 text-blue-500' : 'border-transparent hover:text-blue-500'
                }`}
            >
                <IconComponent className="w-4 h-4" />
                {showText && <p className="text-[10px] uppercase font-bold">{tab.title}</p>}
            </button>
        );
    };

    return (
        <div className="w-full h-screen flex flex-row">
            
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-full flex flex-col justify-between items-center">
                    
                    {/* Barra superior con botón de volver y iconos */}
                    <div className="w-full h-14 flex flex-row justify-start items-center gap-2 p-10">
                        <Link href="/" className="w-full hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                            <FiChevronLeft className='w-4 h-4' />
                            <p className="text-xs">Volver atras</p>
                        </Link>
                        
                        {/* Iconos de pestañas (solo iconos) */}
                        <div className="w-full flex flex-row justify-end items-center overflow-x-auto gap-2">
                            {tabs.map(tab => renderTabButton(tab, false))}
                        </div>
                    </div>

                    {/* Navegación de pestañas (con texto) */}
                    <div className="w-full flex flex-row justify-start items-center gap-4 px-10">
                        {tabs.map(tab => renderTabButton(tab, true))}
                    </div>

                    {/* Contenido de la pestaña activa */}
                    <div className="flex-1 w-full overflow-y-auto">
                        <div className={`transition-all duration-500 ease-in-out transform ${
                            isTransitioning 
                                ? 'opacity-50 scale-98' 
                                : 'opacity-100 scale-100 animate-fadeIn'
                        }`}>
                            {getTabContent()}
                        </div>
                    </div>

                    {/* Botones de acción (ocultos por defecto) */}
                    <div className="w-full hidden justify-end gap-2 p-10 border-t border-gray-200">
                        <button className="w-40 h-10 text-xs text-blue-500 uppercase border border-blue-500 rounded-2xl transition-colors duration-500">
                            Cancelar
                        </button>
                        <button className="w-40 h-10 text-xs text-white uppercase border border-blue-500 rounded-2xl transition-colors duration-500 bg-blue-500">
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}