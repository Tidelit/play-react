import Image from "next/image";

interface MusicalGenresViewProps {
    genreName: string;
    image: string;
}

export default function MusicalGenresView({ genreName, image }: MusicalGenresViewProps) {
    return(
        <>
            <div className="w-full h-32 bg-gray-200/50 backdrop-blur-xs flex flex-row  justify-between items-center p-4 gap-4 transition-all duration-300 hover:bg-blue-200 cursor-pointer hover:shadow-md border border-gray-100 hover:border hover:border-gray-100 rounded-2xl">
                {/* Nombre del genero  */}
                <div className="w-full h-full flex items-end text-xs uppercase">
                    <p>{genreName}</p>
                </div>

                {/* Imagen  */}
                <div className="w-full h-full flex justify-end items-center">
                    <button className="relative w-20 h-20 rounded-2xl overflow-hidden">
                    <Image 
                        src={image} 
                        fill
                        alt={`${genreName} cover`} 
                        className="object-cover rounded-2xl"
                    />
                    </button>
                </div>
            </div>
        </>
    )
}