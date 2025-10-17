"use client";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ArtistCard from "@/app/components/common/TutorialCard/Artist";
import { TidelitCard } from "@/app/components/common/Card/Tidelit/TidelitCard";


// Componente principal
export default function Profile() {
 

    return (
        <div className="w-full h-full flex flex-row">
            
            {/* Contenido principal */}
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-full flex flex-col justify-start items-center">
                    
                    {/* Barra superior con botón de volver y iconos */}
                    <div className="w-full h-14 flex flex-row justify-start items-center gap-2 p-10">
                        <Link href="/" className="w-full hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                            <FiChevronLeft className='w-4 h-4' />
                            <p className="text-xs">Volver atras</p>
                        </Link>
                        
                   
                    </div>

                    {/* Datos de Profile */}
                    <div className="w-full h-[400px] bg-black/50 flex flex-row justify-end items-end p-10">
                        <div className="w-full flex flex-col justify-center items-start">
                            <h1 className="text-2xl text-white uppercase">Nombre de Usuario</h1>
                            <p className="text-sm text-white">12 Oyentes Mensuales</p>
                        </div>
                        <div className="w-full flex flex-row justify-end items-end gap-4">
                            <p className="text-sm text-white">12 seguidores</p>
                            <p className="text-sm text-white">102 Seguidos</p>
                        </div>
                    </div>

                    <div className="w-full h-80 flex flex-row justify-center gap-2 p-10">
                        <div className="w-full h-full border-2 border-gray-400 shadow-md shadow-gray-400">

                        </div>

                        <div className="w-full h-full  flex flex-col gap-2">
                            <div className="w-full  flex flex-col justify-between gap-20 border-2 border-gray-400 p-10 shadow-md shadow-gray-400">
                                                
                                                {/* Texto */}
                                                <div className="w-full h-full  flex flex-col justify-center items-start">
                                                    <p className="text-xs">Favoritos Agregados</p>
                                                    <h1 className="text-2xl font-bold uppercase">Favoritos</h1>
                                                </div>

                            </div>
                                
                            <div className="w-full  flex flex-col justify-between gap-20 border-2 border-gray-400 p-10 shadow-md shadow-gray-400">
                                                
                                                {/* Texto */}
                                                <div className="w-full h-full  flex flex-col justify-center items-start">
                                                    <p className="text-xs">Favoritos Agregados</p>
                                                    <h1 className="text-2xl font-bold uppercase">Playlist</h1>
                                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Mixes sugeridos */}
                    <div className="w-full h-auto p-10">
                             {/* Generos Musicales  */}
                            <Carousel className="w-full  ">
                                <div className="w-full h-20 flex flex-col justify-center items-start">
                                <p className="text-xs">Lo recomendado para ti</p>
                                <h1 className="text-2xl font-bold uppercase">Mixes Sugeridos</h1>
                                </div>
                                <CarouselContent>
                                <>
                                    {/* La idea es que hagas un map aca, donde repetiras CarouselItem tantas veces como quieras y dentro de CarouselItem, agregues de 3 en 3 TidelitCard*/}
                                    {/* Los TidelitCard deben tener un array de objetos con las propiedades image, title, artist y position que consumiras del Backend */}
                                    <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center">
                                    <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={1} />
                                    <TidelitCard image="/Imagenes/Song/Song2.jpg" title="Tidelit Card" artist="Artista" position={2} />
                                    <TidelitCard image="/Imagenes/Song/Song3.jpg" title="Tidelit Card" artist="Artista" position={3} />
                                    </CarouselItem>
                                </>
                                <>
                                    <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center">
                                    <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={4} />
                                    <TidelitCard image="/Imagenes/Song/Song2.jpg" title="Tidelit Card" artist="Artista" position={5} />
                                    <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={6} />
                                    </CarouselItem>
                                </>
                                <>
                                    <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center">
                                    <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={7} />
                                    <TidelitCard image="/Imagenes/Song/Song3.jpg" title="Tidelit Card" artist="Artista" position={8} />
                                    <TidelitCard image="/Imagenes/Song/Song3.jpg" title="Tidelit Card" artist="Artista" position={9} />
                                    </CarouselItem>
                                </>
                                <>
                                    <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center">
                                    <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={10} />
                                    </CarouselItem>
                                </>
                            
                                </CarouselContent>
                            </Carousel>
                    </div>
                
                    {/* Tambien puede gustarte */}
                    <div className="w-full h-auto p-10">
                        {/* Artistas :p */}
                        <div className="w-full h-20 flex flex-col justify-start items-start ">
                            <p className="text-xs">Lo recomendado para ti</p>
                            <h1 className="text-2xl font-bold uppercase">Tambien puede gustarte</h1>
                        </div>
                        <Carousel className="w-full ">
                            <CarouselContent>
                            <>
                                <CarouselItem>
                                    {/* Artistas */}
                                    <div className=" h-40  flex flex-row gap-4 justify-center  items-center">
                                        <ArtistCard />
                                        <ArtistCard />
                                        <ArtistCard />
                                        <ArtistCard />
                                        <ArtistCard />
                                        <ArtistCard />
                                    </div>
                                </CarouselItem>
                            </> 
                            </CarouselContent>
                        </Carousel>
                    </div>

                    
             
                </div>
            </div>
        </div>
    );
}