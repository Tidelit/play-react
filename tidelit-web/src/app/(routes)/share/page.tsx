"use client";
import Link from "next/link"
import { FiChevronLeft, FiSearch, FiUserPlus } from "react-icons/fi"
import { FaWhatsapp, FaTiktok, FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaCopy } from "react-icons/fa"
import { useState } from "react"
import Image from "next/image"

interface SocialPlatform {
    name: string
    icon: React.ReactNode
    color: string
    hoverColor: string
    url: string
}

interface User {
    id: number
    username: string
    avatar?: string
    isOnline?: boolean
}

export default function ShareView() {
    const [searchQuery, setSearchQuery] = useState("")
    const [copied, setCopied] = useState(false)
    const [instagramMessage, setInstagramMessage] = useState("")

    // Plataformas sociales
    const socialPlatforms: SocialPlatform[] = [
        {
            name: "WhatsApp",
            icon: <FaWhatsapp className="w-6 h-6" />,
            color: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            url: "https://wa.me/?text="
        },
        {
            name: "TikTok",
            icon: <FaTiktok className="w-6 h-6" />,
            color: "bg-black",
            hoverColor: "hover:bg-gray-800",
            url: "https://www.tiktok.com/share?url="
        },
        {
            name: "Facebook",
            icon: <FaFacebook className="w-6 h-6" />,
            color: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
            url: "https://www.facebook.com/sharer/sharer.php?u="
        },
        {
            name: "Twitter",
            icon: <FaTwitter className="w-6 h-6" />,
            color: "bg-blue-400",
            hoverColor: "hover:bg-blue-500",
            url: "https://twitter.com/intent/tweet?url="
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="w-6 h-6" />,
            color: "bg-gradient-to-r from-purple-500 to-pink-500",
            hoverColor: "hover:from-purple-600 hover:to-pink-600",
            url: "https://www.instagram.com/"
        },
        {
            name: "Telegram",
            icon: <FaTelegram className="w-6 h-6" />,
            color: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            url: "https://t.me/share/url?url="
        }
    ]

    // Lista de usuarios de ejemplo (en producción vendría del backend)
    const [users] = useState<User[]>([
        { id: 1, username: "@miguelangel", avatar: "/logo/Logo.png", isOnline: true },
        { id: 2, username: "@usuario1", isOnline: true },
        { id: 3, username: "@artista123", isOnline: false },
        { id: 4, username: "@musica2024", isOnline: true },
        { id: 5, username: "@listener", isOnline: false },
        { id: 6, username: "@creator", isOnline: true },
        { id: 7, username: "@fan_music", isOnline: true },
        { id: 8, username: "@dj_pro", isOnline: false }
    ])

    // Filtrar usuarios según búsqueda
    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Función para compartir en redes sociales
    const handleSocialShare = (platform: SocialPlatform) => {
        if (typeof window === 'undefined') return
        
        const shareUrl = window.location.href
        const shareText = "¡Mira esta canción/playlist en Tidelit!"
        
        let fullUrl = ''
        
        // Manejar diferentes formatos de URLs según la plataforma
        if (platform.name === 'WhatsApp') {
            fullUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
        } else if (platform.name === 'TikTok') {
            // TikTok requiere que uses su API específica
            fullUrl = `https://www.tiktok.com/share?url=${encodeURIComponent(shareUrl)}`
        } else if (platform.name === 'Facebook') {
            fullUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        } else if (platform.name === 'Twitter') {
            fullUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
        } else if (platform.name === 'Instagram') {
            // Instagram no tiene API de compartir directa, copiar enlace automáticamente
            handleCopyLink()
            setInstagramMessage('Enlace copiado! Pégalo en tu historia de Instagram')
            setTimeout(() => {
                setInstagramMessage('')
            }, 3000)
            return
        } else if (platform.name === 'Telegram') {
            fullUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
        }
        
        if (fullUrl) {
            window.open(fullUrl, '_blank', 'width=600,height=400')
        }
    }

    // Función para copiar enlace
    const handleCopyLink = () => {
        const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
        navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    // Función para compartir con usuario
    const handleShareWithUser = (userId: number) => {
        // Aquí iría la lógica para compartir con el usuario seleccionado
        console.log(`Compartiendo con usuario ${userId}`)
        // Puedes agregar un toast o modal de confirmación aquí
    }

    return (
        <>
            {/* Contenido principal */}
            <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-white">
                    
                {/* Barra superior con botón de volver */}
                <div className="w-full h-14 flex flex-row justify-between items-center p-10">
                        <Link href="/" className="w-auto hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                            <FiChevronLeft className='w-4 h-4' />
                            <p className="text-xs">Volver atras</p>
                        </Link>
                </div>

                {/* Contenido  */}
                <div className="w-full h-full flex flex-col p-20 gap-10">
                    {/* Opciones de compartir en redes sociales */}
                    <div className="w-full flex flex-col gap-2">
                        <h2 className="text-xl font-semibold uppercase">Compartir en redes sociales</h2>
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                            {socialPlatforms.map((platform) => (
                                <button
                                    key={platform.name}
                                    onClick={() => handleSocialShare(platform)}
                                    className={`w-full h-40 flex flex-col items-center justify-center gap-2  rounded-2xl text-white transition-all duration-300 hover:shadow-lg ${platform.color} ${platform.hoverColor}`}
                                >
                                    {platform.icon}
                                    <span className="text-xs font-medium">{platform.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Copiar enlace */}
                    <div className="w-full flex flex-col gap-4">
                        <h2 className="text-xl font-semibold  uppercase">Compartir enlace</h2>
                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex flex-row gap-2">
                                <input
                                    type="text"
                                    readOnly
                                    value={typeof window !== 'undefined' ? window.location.href : ''}
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl bg-gray-50 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    onClick={handleCopyLink}
                                    className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
                                        copied
                                            ? 'bg-green-500 text-white'
                                            : 'bg-blue-500 text-white hover:bg-blue-600'
                                    }`}
                                >
                                    <FaCopy className="w-4 h-4" />
                                    {copied ? 'Copiado!' : 'Copiar'}
                                </button>
                            </div>
                            {instagramMessage && (
                                <p className="text-xs text-green-600 font-medium animate-in fade-in-0 slide-in-from-top-2">
                                    {instagramMessage}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Compartir con usuarios de la web */}
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full flex flex-row justify-between items-center">
                            <h2 className="text-xl font-semibold  uppercase">Compartir con usuarios</h2>
                            <FiUserPlus className="w-5 h-5 " />
                        </div>
                        
                        {/* Barra de búsqueda */}
                        <div className="w-full relative">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar usuarios..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl bg-white text-sm text-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                            />
                        </div>

                        {/* Lista de usuarios */}
                        <div className="w-full max-h-96 overflow-y-auto border border-gray-200 rounded-lg bg-white">
                            {filteredUsers.length > 0 ? (
                                <div className="w-full flex flex-col">
                                    {filteredUsers.map((user) => (
                                        <button
                                            key={user.id}
                                            onClick={() => handleShareWithUser(user.id)}
                                            className="w-full flex flex-row items-center gap-4 p-4 hover:bg-blue-50 transition-colors duration-300 border-b border-gray-100 last:border-b-0"
                                        >
                                            {/* Avatar */}
                                            <div className="relative">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold overflow-hidden">
                                                    {user.avatar ? (
                                                        <Image
                                                            src={user.avatar}
                                                            alt={user.username}
                                                            width={48}
                                                            height={48}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <span className="text-lg">
                                                            {user.username.charAt(1).toUpperCase()}
                                                        </span>
                                                    )}
                                                </div>
                                                {user.isOnline && (
                                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                                )}
                                            </div>
                                            
                                            {/* Información del usuario */}
                                            <div className="flex-1 flex flex-col items-start">
                                                <p className="text-sm font-medium text-gray-800">{user.username}</p>
                                                <p className={`text-xs ${user.isOnline ? 'text-green-600' : 'text-gray-400'}`}>
                                                    {user.isOnline ? 'En línea' : 'Desconectado'}
                                                </p>
                                            </div>

                                            {/* Botón de compartir */}
                                            <div className="px-4 py-2 bg-blue-500 text-white text-xs font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                                Compartir
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="w-full p-8 text-center text-gray-500">
                                    <p className="text-sm">No se encontraron usuarios</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}