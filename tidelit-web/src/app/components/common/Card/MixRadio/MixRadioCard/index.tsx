import Image from "next/image"
interface MixRadioCardProps {
    image: string
    title: string
    artist: string
    position: number
}

export const MixRadioCard = ({ image, title, artist, position }: MixRadioCardProps) => {
    return (
        <>
        <div className="w-full flex flex-col">
           <button className="relative w-full max-w-80 h-80 rounded-2xl cursor-pointer overflow-hidden group">
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
                
            {/* Badge de posición en esquina superior derecha */}
            <div className="absolute top-0 right-0 ">
                <div className="relative w-20 h-20 flex items-center justify-center">
                    {/* Forma irregular con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600">
                    </div>
                    <p className="relative text-3xl font-black text-white z-10">{position}</p>
                </div>
            </div>
           </button>

            {/* Contenido */}
            <div className="relative w-full h-full p-4 flex flex-row justify-between items-end ">
                <div className="flex flex-col justify-start items-start">
                    <h1 className="text-xs font-bold uppercase">{title}</h1>
                    <p className="text-xs">{artist}</p>
                </div>
            </div>
        </div>
        </>
    )
}