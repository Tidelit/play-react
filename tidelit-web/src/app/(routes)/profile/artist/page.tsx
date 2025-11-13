import { Song } from "@/app/components/common/Music/Song";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";
import { FiChevronLeft, FiEye } from "react-icons/fi";

export default function ArtistProfile() {
    return (
        <>
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col justify-center items-center">
                    
                    {/* Barra superior con botón de volver y iconos */}
                    <div className="w-full h-14 flex flex-row justify-between items-center p-10">
                                <Link href="/" className="w-auto hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                                    <FiChevronLeft className='w-4 h-4' />
                                    <p className="text-xs">Volver atras</p>
                                </Link>
                    </div>
        
                    {/* Datos de Profile */}
                    <>
                        <div className="w-full h-80 bg-blue-800/50"></div>
        
                        <div className="w-full h-auto bg-blue-800/40 flex flex-row justify-end items-end p-10">
                            <div className="w-full flex flex-col justify-center items-start">
                                <h1 className="text-xl text-white uppercase">Nombre de Usuario</h1>
                                <span className="flex flex-row gap-2">
                                    <p className="text-sm text-white">Artista</p>
                                    <p className="text-sm text-white">Membresia VIP</p>
                                </span>
                            </div>
                            <div className="w-full h-auto flex flex-row justify-end items-end gap-4">
                                <p className="h-10 text-sm text-white flex justify-center items-center">1.200 Seguidores</p>
                                <p className="h-10 text-sm text-white flex justify-center items-center">134 Seguidos</p>
                            
                                <button className="w-24 h-10 bg-blue-500 ">
                                    <p className="text-sm text-white">Seguir</p>
                                </button>
                            </div>
                        </div>
                    </>
        
                    {/* Contenido  */}
                    <>
                        <div className="w-full h-full bg-white">
                            
                            {/* Description  */}
                            <div className="w-full h-auto flex flex-col p-10 gap-4">
                                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, animi cum, maxime reiciendis itaque repellat deleniti, iste pariatur eveniet vel veritatis. Magnam saepe ipsum rerum, ipsam doloremque suscipit fugiat nihil.</p>
                            </div>
        
                            {/* Artistas Favoritos  */}
                            <div className="w-full h-auto  flex flex-col p-10 gap-4">
                                <div className="flex flex-col">
                                    <p className="text-sm">Favoritos del momento</p>
                                    <h1 className="text-xl uppercase">Artistas favoritos</h1>
                                </div>
        
                                <div className="w-full h-full flex flex-col items-center gap-2 p-10">
                                    {/* Artistas  */}
                                    <div className="w-full h-24 border flex flex-row items-center bg-gray-200/50 backdrop-blur-xs flex flex-row  justify-between items-center p-10 gap-4 transition-all duration-300 hover:bg-blue-200 cursor-pointer hover:shadow-md border border-gray-100 hover:border hover:border-gray-100 rounded-2xl">
                                        <div className="flex flex-row items-center gap-4">
                                            <p>1</p>
                                            <button className="w-14 h-14 border  rounded-full bg-white"></button>
                                            <p className="text-xs">Artista</p>
                                        </div>
                                        <Link href='/library' className="flex flex-row gap-2 cursor-pointer transition-all duration-300 hover:text-blue-500">
                                            <p className="text-xs">Visitar</p>
                                            <FiEye />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        
                        
                            {/* Canciones Favoritos  */}
                            <div className="w-full h-auto flex flex-col p-10 gap-4">
                                <div className="flex flex-col">
                                    <p className="text-sm">Favoritos del momento</p>
                                    <h1 className="text-xl uppercase">Playlist</h1>
                                </div>
        
                                    
                                <div className="w-full h-full flex flex-col items-center gap-2 p-10">
                                    {/* Playlist  */}
                                    <div className="w-full h-24 border flex flex-row items-center bg-gray-200/50 backdrop-blur-xs flex flex-row  justify-between items-center p-10 gap-4 transition-all duration-300 hover:bg-blue-200 cursor-pointer hover:shadow-md border border-gray-100 hover:border hover:border-gray-100 rounded-2xl">
                                            <div className="flex flex-row items-center gap-4">
                                                <p>1</p>
                                                <button className="w-14 h-14 border bg-white"></button>
                                                <p className="text-xs">Playlist Name</p>
                                            </div>
                                            <Link href='/library' className="flex flex-row gap-2 cursor-pointer transition-all duration-300 hover:text-blue-500">
                                            <p className="text-xs">Visitar</p>
                                            <FiEye />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
        
                    {/* Mix sugeridos  */}
                    <>
                        <div className="w-full h-full bg-blue-800/40 flex flex-row justify-start items-start p-10">
                                        <div className="w-full flex flex-col justify-center items-start">
                                                    <h1 className="text-xl text-white uppercase">Mix Sugeridos</h1>
                                        </div>
                        </div>
        
                        <div className="w-full h-full bg-blue-800/50">
                                    <div className="w-full flex justify-center items-center p-10">
                                        {/* Musica  */}
                                        <Carousel className="w-full">
                                                <CarouselContent>
                                                <>
                                                    {/* La idea es que hagas un map aca, donde repetiras CarouselItem tantas veces como quieras y dentro de CarouselItem, agregues de 3 en 3 TidelitCard*/}
                                                    {/* Los TidelitCard deben tener un array de objetos con las propiedades image, title, artist y position que consumiras del Backend */}
                                                    <CarouselItem className="w-full h-80  flex flex-row gap-2 justify-center items-center ">
                                                        <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" artist="Lil Pump" songUrl="" id={1} />
                                                        <Song image="/imagenes/Song/Song2.jpg" songName="Mala" artist="Anuel AA - 6ix9nie" songUrl="" id={2} />
                                                        <Song image="/imagenes/Song/Song1.jpg" songName="Hurt" artist="Oliver Tree" songUrl="" id={3} />
                                                        <Song image="/imagenes/Song/Song3.jpg" songName="Test 1" artist="Miguel Angel" songUrl="" id={4} />
                                                        <Song image="/imagenes/Song/Song1.jpg" songName="Test 2" artist="Miguel Angel" songUrl="" id={5} />
                                                    </CarouselItem>
                                                </>
                                                </CarouselContent>
                                        </Carousel>
                                    </div>
                        </div>
                    </>
             
            </div>
        </>
    )
}