import Image from "next/image"
interface TidelitCardProps {
    image: string
    title: string
    artist: string
    position: number
}

export const TidelitCard = ({ image, title, artist, position }: TidelitCardProps) => {
    return (
        <>
           <button className="relative w-full h-62 rounded-lg cursor-pointer overflow-hidden group">
                {/* Imagen de fondo */}
                <div className="absolute inset-0 w-full h-full">
                    <Image 
                        src={image} 
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Song cover" 
                    />
                </div>
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50  to-transparent" />
                
                {/* Contenido */}
                <div className="relative w-full h-full p-4 flex flex-row justify-between items-end text-white">
                    <div className="flex flex-col justify-start items-start">
                        <h1 className="text-sm font-semibold uppercase">{title}</h1>
                        <p className="text-xs text-gray-300">{artist}</p>
                    </div>
                    <p className="text-4xl font-black text-center drop-shadow-md drop-shadow-black">{position}</p>
                </div>
           </button>
        </>
    )
}