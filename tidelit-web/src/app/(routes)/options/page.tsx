"use client";
import { useState } from "react";
import { FiChevronLeft, FiUser, FiSettings, FiCreditCard, FiVolume2, FiInfo, FiChevronDown, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

// Componente separado para los acordeones
function AccordionItem({ title }: { title: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border-2 border-white bg-white/50 shadow-md rounded-2xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-row items-center justify-between p-4 transition-colors duration-300"
            >
                <span className="text-xs uppercase">{title}</span>
                <FiChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="p-4 border-t">
                    <Link 
                        href="/" 
                        className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-2"
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
        <div className="w-full h-full flex flex-col p-10 gap-8">
            {/* Información del usuario */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Historial de Compras y Pedidos</h1>
                <p className="text-sm">
                    Actualmente tienes el Plan: <span className="text-blue-500 font-bold">Premium</span>
                </p>
            </div>
             
            {/* Tarjetas de planes */}
            <div className="w-full h-full flex flex-row items-start justify-center gap-2 p-10">
                {/* Plan actual */}
                <div className="w-full max-w-4xl h-96 border-2 border-white shadow-md rounded-2xl bg-gradient-to-r from-[#D80DE5] to-[#29B4CE] via-[#2D49D3]">
                    <div className="w-full h-full flex flex-col items-start justify-end p-10">
                        <p className="text-xs font-bold text-white uppercase">Membresia Actual</p>
                        <div className="w-full flex flex-row items-end justify-between text-white">
                            <h1 className="text-6xl font-black uppercase">tidelit <br /> Premium</h1>
                            <p className="text-xs">9/09/2024 - 9/09/2025</p>
                        </div>
                    </div>
                </div>
                
                {/* Planes anteriores */}
                <Link href="/" className="w-full max-w-md h-96 border-2 shadow-md rounded-2xl border-[#29B4CE] text-[#29B4CE] bg-white/50">
                    <div className="w-full h-full flex flex-col items-center justify-center p-10">
                    <FiShoppingCart className="w-40 h-40 " />               
                    </div>
                </Link>
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
        <div className="w-full h-full flex flex-col p-10 gap-8">
            {/* Información de contratos */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Tus Contratos y acuerdos comerciales</h1>
                <p className="text-sm">
                    Actualmente tienes dos contratos y un acuerdo firmado con tidelit: 
                    <Link href="/" className="underline"> Puedes leerlos aqui</Link>
                </p>
            </div>
             
            {/* Lista de documentos legales */}
            <div className="w-full h-full flex flex-col items-start justify-start">
                <h1 className="text-sm">Tambien, al registrarte, aceptaste:</h1>
                <div className="w-full flex flex-col gap-2 p-4">
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
        <div className="w-full h-full flex flex-col p-10 gap-8">
            {/* Configuración general */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Cambiar Contraseña</h1>
                <p className="text-sm">Se cerrarán todas las sesiones, excepto esta, para proteger tu cuenta si alguien intenta obtener acceso.</p>
            </div>
            
            {/* Formulario de contraseña */}
            <div className="w-full flex flex-col gap-4 p-10">
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-medium">Contraseña actual</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 outline-none transition-colors"
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-medium">Contraseña nueva</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 outline-none transition-colors"
                    />
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-xs">
                    <p className="font-bold mb-2">La contraseña debe tener al menos:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>1 letra minúscula</li>
                        <li>1 número o carácter especial (ejemplo: # ? ! &)</li>
                        <li>10 caracteres</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-medium">Repetir Contraseña</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 outline-none transition-colors"
                    />
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <input type="checkbox" id="forgot" className="w-4 h-4" />
                    <label htmlFor="forgot" className="text-blue-500 cursor-pointer">¿Olvidaste tu contraseña?</label>
                </div>

                <div className="w-full flex gap-2">
                    <button className="flex-1 px-6 py-3 text-xs uppercase border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
                        Cancelar
                    </button>
                    <button className="flex-1 px-6 py-3 text-xs uppercase bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
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
        defaultEQ: true,
        explicitContent: true,
        volumeStabilization: true,
        crossfadeEnabled: true,
        crossfadeDuration: 3
    });

    const handleSettingChange = (key: string, value: any) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="w-full h-full flex flex-col overflow-y-auto p-10">
            {/* Configuración general */}
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Opciones</h1>
                <p className="text-sm">Opciones que puedes modificar para una mejor experiencia.</p>
            </div>
            
            {/* Contenido completo en una sola vista */}
            <div className="flex flex-col p-10 gap-20">
                
                {/* SECCIÓN: Idioma y ubicación */}
                <div className="flex flex-col gap-4">
                    
                    {/* Elije tu idioma */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Elije tu idioma</label>
                        <div className="relative">
                            <select 
                                value={settings.language}
                                onChange={(e) => handleSettingChange('language', e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-8"
                            >
                                <option value="Español">Español</option>
                                <option value="English">English</option>
                                <option value="Português">Português</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* GPS / Ubicación */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">GPS / Ubicación</label>
                            <div className="flex items-center gap-2">
                                <span className={`text-xs ${settings.gpsEnabled ? 'text-blue-600' : 'text-gray-500'}`}>
                                    {settings.gpsEnabled ? 'Activo' : 'Inactivo'}
                                </span>
                                <button
                                    onClick={() => handleSettingChange('gpsEnabled', !settings.gpsEnabled)}
                                    className={`w-12 h-6 rounded-full transition-colors ${
                                        settings.gpsEnabled ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                        settings.gpsEnabled ? 'translate-x-6' : 'translate-x-0.5'
                                    }`} />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">
                            Puedes activarla o desactivarla en el momento que desees
                        </p>
                    </div>

                    {/* País */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">País</label>
                        <div className="relative">
                            <select 
                                value={settings.country}
                                onChange={(e) => handleSettingChange('country', e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-8"
                            >
                                <option value="Colombia">Colombia</option>
                                <option value="México">México</option>
                                <option value="Perú">Perú</option>
                                <option value="Venezuela">Venezuela</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Ciudad */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Ciudad</label>
                        <div className="relative">
                            <select 
                                value={settings.city}
                                onChange={(e) => handleSettingChange('city', e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-8"
                            >
                                <option value="Bogotá">Bogotá</option>
                                <option value="Medellín">Medellín</option>
                                <option value="Cali">Cali</option>
                                <option value="Barranquilla">Barranquilla</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Zona horaria */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Zona horaria</label>
                        <div className="relative">
                            <select 
                                value={settings.timezone}
                                onChange={(e) => handleSettingChange('timezone', e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-8"
                            >
                                <option value="GTM-5">GTM-5</option>
                                <option value="GTM-6">GTM-6</option>
                                <option value="GTM-7">GTM-7</option>
                                <option value="GTM-8">GTM-8</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* SECCIÓN: Dispositivos */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold uppercase text-blue-500">Dispositivos</h3>
                    
                    {/* Dispositivos móviles sincronizados */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-medium">Dispositivos móviles sincronizados</h4>
                        
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className={`text-xs ${settings.mobileSyncEnabled ? 'text-blue-600' : 'text-gray-500'}`}>
                                    Activo
                                </span>
                                <button
                                    onClick={() => handleSettingChange('mobileSyncEnabled', !settings.mobileSyncEnabled)}
                                    className={`w-12 h-6 rounded-full transition-colors ${
                                        settings.mobileSyncEnabled ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                        settings.mobileSyncEnabled ? 'translate-x-6' : 'translate-x-0.5'
                                    }`} />
                                </button>
                            </div>
                            
                            <div className="relative">
                                <select 
                                    value={settings.activeDevice}
                                    onChange={(e) => handleSettingChange('activeDevice', e.target.value)}
                                    className="p-2 border border-gray-300 rounded-lg appearance-none bg-white pr-8 text-sm"
                                >
                                    <option value="I Phone 13 Pro">I Phone 13 Pro</option>
                                    <option value="Samsung Galaxy S21">Samsung Galaxy S21</option>
                                    <option value="Google Pixel 6">Google Pixel 6</option>
                                </select>
                                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        
                        <p className="text-xs text-gray-500">
                            Puedes activarlo o desactivarlo sin cerrar sesión
                        </p>
                    </div>

                    {/* Conecta un dispositivo */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-medium">Conecta un dispositivo</h4>
                        
                        {/* Gráfico circular */}
                        <div className="flex justify-center">
                            <div className="relative w-32 h-32">
                                {/* Círculos concéntricos */}
                                <div className="absolute inset-0 rounded-full border-4 border-teal-200"></div>
                                <div className="absolute inset-2 rounded-full border-4 border-teal-300"></div>
                                <div className="absolute inset-4 rounded-full border-4 border-teal-400"></div>
                                <div className="absolute inset-6 rounded-full border-4 border-teal-500"></div>
                                
                                {/* Centro con waveform */}
                                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                                    <div className="flex items-center gap-1">
                                        <div className="w-1 h-3 bg-purple-500"></div>
                                        <div className="w-1 h-5 bg-blue-500"></div>
                                        <div className="w-1 h-4 bg-teal-500"></div>
                                        <div className="w-1 h-6 bg-purple-500"></div>
                                        <div className="w-1 h-3 bg-blue-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <h4 className="font-bold text-sm">¡Enlaza un nuevo dispositivo!</h4>
                            <p className="text-xs text-gray-500 mt-2">
                                Sincroniza tu dispositivo con otros dispositivos y reproduce tu música con todos al mismo tiempo creando un efecto envolvente (surround)
                            </p>
                        </div>
                    </div>
                </div>

                {/* SECCIÓN: Audio */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold uppercase text-blue-500">Audios</h3>
                    
                    {/* Calidad de audio */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-medium">Calidad de audio</h4>
                        
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className={`text-xs ${settings.autoQuality ? 'text-blue-600' : 'text-gray-500'}`}>
                                    Automática
                                </span>
                                <button
                                    onClick={() => handleSettingChange('autoQuality', !settings.autoQuality)}
                                    className={`w-12 h-6 rounded-full transition-colors ${
                                        settings.autoQuality ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                        settings.autoQuality ? 'translate-x-6' : 'translate-x-0.5'
                                    }`} />
                                </button>
                            </div>
                            
                            <div className="relative">
                                <select 
                                    value={settings.audioQuality}
                                    onChange={(e) => handleSettingChange('audioQuality', e.target.value)}
                                    className="p-2 border border-gray-300 rounded-lg appearance-none bg-white pr-8 text-sm"
                                >
                                    <option value="Alta">Alta</option>
                                    <option value="Media">Media</option>
                                    <option value="Baja">Baja</option>
                                </select>
                                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        
                        <p className="text-xs text-gray-500">
                            Mejorará cuando estés conectado a una red Wi-Fi
                        </p>
                    </div>

                    {/* Ecualizador */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-medium">Ecualizador</h4>
                        
                        {/* Barras del ecualizador */}
                        <div className="flex items-end gap-2 h-16">
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-4 h-8 bg-gray-400 rounded"></div>
                                <span className="text-xs">Bass</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-4 h-12 bg-gray-400 rounded"></div>
                                <span className="text-xs">Mid</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-4 h-6 bg-gray-400 rounded"></div>
                                <span className="text-xs">High</span>
                            </div>
                        </div>
                        
                        {/* Opciones del ecualizador */}
                        <div className="flex flex-col gap-3">
                            {[
                                { key: 'defaultEQ', label: 'EQ por defecto' },
                                { key: 'explicitContent', label: 'Contenido explícito' },
                                { key: 'volumeStabilization', label: 'Estabilizar e igualar volumen de las canciones' }
                            ].map((option) => (
                                <div key={option.key} className="flex items-center justify-between">
                                    <span className="text-xs">{option.label}</span>
                                    <button
                                        onClick={() => handleSettingChange(option.key, !settings[option.key as keyof typeof settings])}
                                        className={`w-12 h-6 rounded-full transition-colors ${
                                            settings[option.key as keyof typeof settings] ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                    >
                                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                            settings[option.key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-0.5'
                                        }`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Crossfade */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-medium">Crossfade</h4>
                        
                        <div className="flex items-center justify-between">
                            <span className={`text-xs ${settings.crossfadeEnabled ? 'text-blue-600' : 'text-gray-500'}`}>
                                {settings.crossfadeEnabled ? 'Activo' : 'Inactivo'}
                            </span>
                            <button
                                onClick={() => handleSettingChange('crossfadeEnabled', !settings.crossfadeEnabled)}
                                className={`w-12 h-6 rounded-full transition-colors ${
                                    settings.crossfadeEnabled ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            >
                                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                    settings.crossfadeEnabled ? 'translate-x-6' : 'translate-x-0.5'
                                }`} />
                            </button>
                        </div>
                        
                        {/* Slider de duración */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-gray-500">Inactivo</span>
                            <div className="flex-1 relative">
                                <input
                                    type="range"
                                    min="0"
                                    max="10"
                                    value={settings.crossfadeDuration}
                                    onChange={(e) => handleSettingChange('crossfadeDuration', parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none slider"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>3 Seg</span>
                                    <span>10 Seg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="w-full flex justify-end gap-2 p-6 border-t border-gray-200">
                <button className="px-6 py-2 text-xs uppercase border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancelar
                </button>
                <button className="px-6 py-2 text-xs uppercase bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                    Guardar
                </button>
            </div>
        </div>
    );
}

// Componente para el contenido de Perfil
function ProfileContent() {
    const [profileData, setProfileData] = useState({
        name: 'Juan David Ramírez',
        username: '@Soyjuanramirez',
        email: 'juandaram98@gmail.com',
        phone: '313 404 2374',
        countryCode: '+57',
        day: '15',
        month: '03',
        year: '1998',
        biography: 'Me llamo Juan Ramírez, amo la música y lo que es capaz de hacerte sentir e imaginar. Soy fan de la vida y celebro el amor verdadero.'
    });

    const handleInputChange = (key: string, value: string) => {
        setProfileData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="w-full h-full flex flex-col p-10 gap-8">
            <div className="w-full flex flex-col">
                <h1 className="text-xl">Información de la cuenta</h1>
                <p className="text-sm">Gestiona tu información personal</p>
            </div>

            {/* Foto de perfil */}
            <div className="w-full flex flex-col items-center gap-4 p-10">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center">
                        <span className="text-6xl font-bold text-white">J</span>
                    </div>
                </div>
                <button className="text-teal-500 text-sm font-medium hover:text-teal-600 transition-colors">
                    Editar foto
                </button>
            </div>

            {/* Formulario de información personal */}
            <div className="w-full flex flex-col gap-6 p-10">
                {/* Nombre */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Nombre</label>
                    <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-500 outline-none transition-colors"
                    />
                </div>

                {/* Nombre de usuario */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Nombre de usuario</label>
                    <input
                        type="text"
                        value={profileData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-500 outline-none transition-colors"
                    />
                </div>

                {/* Correo electrónico */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Correo electrónico</label>
                    <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-500 outline-none transition-colors"
                    />
                </div>

                {/* Celular */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Celular</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={profileData.countryCode}
                            onChange={(e) => handleInputChange('countryCode', e.target.value)}
                            className="w-20 p-3 border border-gray-300 rounded-lg focus:border-teal-500 outline-none transition-colors text-center"
                        />
                        <input
                            type="text"
                            value={profileData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:border-teal-500 outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Fecha de nacimiento */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Fecha de nacimiento</label>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-500">Día</label>
                            <select
                                value={profileData.day}
                                onChange={(e) => handleInputChange('day', e.target.value)}
                                className="p-3 border border-gray-300 rounded-lg focus:border-teal-500 outline-none transition-colors"
                            >
                                {Array.from({ length: 31 }, (_, i) => (
                                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                        {String(i + 1).padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-500">Mes</label>
                            <select
                                value={profileData.month}
                                onChange={(e) => handleInputChange('month', e.target.value)}
                                className="p-3 border border-gray-300 rounded-lg focus:border-teal-500 outline-none transition-colors"
                            >
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                        {String(i + 1).padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-500">Año</label>
                            <select
                                value={profileData.year}
                                onChange={(e) => handleInputChange('year', e.target.value)}
                                className="p-3 border border-gray-300 rounded-lg focus:border-teal-500 outline-none transition-colors"
                            >
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

                {/* Biografía */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Biografía</label>
                    <div className="relative">
                        <textarea
                            value={profileData.biography}
                            onChange={(e) => handleInputChange('biography', e.target.value)}
                            maxLength={150}
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-500 outline-none transition-colors resize-none"
                        />
                        <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                            {profileData.biography.length}/150
                        </div>
                    </div>
                </div>

                {/* Solicitar verificación */}
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                    </div>
                    <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                        Solicitar verificación
                    </button>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="w-full flex justify-end gap-2 p-10 border-t border-gray-200">
                <button className="px-6 py-2 text-xs uppercase border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 transition-colors">
                    Cancelar
                </button>
                <button className="px-6 py-2 text-xs uppercase bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
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
        { id: 5, title: "Audio", icon: FiVolume2 },
        { id: 6, title: "Perfil", icon: FiUser }
    ];

    // Función que determina qué contenido mostrar según la pestaña activa
    const getTabContent = () => {
        switch(activeTab) {
             case 0: return <MembershipContent />;
             case 1: return <InformationContent />;
             case 2: return <OptionsContent />;
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