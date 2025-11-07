"use client";
import { useState } from "react";
import { Welcome } from "./components/common/Modal/Welcome";
import Navbar from "./components/constant/Navbar";
import { Song } from "./components/common/Music/Song";
import ArtistCard from "./components/common/TutorialCard/Artist";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { TidelitCard } from "./components/common/Card/Tidelit/TidelitCard";

export default function Home() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  return (
    <>
      <div className="w-full max-w-7xl flex flex-col justify-center items-center">

        <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center p-10">
            <Navbar />
      
            <div className="w-full max-w-7xl h-60 flex justify-center items-center ">
              {/* Artistas :p */}
              <Carousel className="w-full max-w-7xl">
                <CarouselContent>
                  <>
                    <CarouselItem>
                        {/* Artistas */}
                        <div className="w-full h-40 flex flex-row justify-start  items-center">
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

            <div className="w-full max-w-7xl h-full flex flex-col items-center gap-4 px-20">
                
                <span className="w-full h-24 flex flex-col justify-end  uppercase">
                  <p className="text-md ">Escucha</p>
                  <h1 className="text-xl ">Canciones</h1>
                </span>

                {/* Musica  */}
                <Carousel className="w-full">
                        <CarouselContent>
                          <>
                            {/* La idea es que hagas un map aca, donde repetiras CarouselItem tantas veces como quieras y dentro de CarouselItem, agregues de 3 en 3 TidelitCard*/}
                            {/* Los TidelitCard deben tener un array de objetos con las propiedades image, title, artist y position que consumiras del Backend */}
                            <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center">
                                <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" artist="Lil Pump" songUrl="" id={1} />
                                <Song image="/imagenes/Song/Song2.jpg" songName="Mala" artist="Anuel AA - 6ix9nie" songUrl="" id={2} />
                                <Song image="/imagenes/Song/Song1.jpg" songName="Hurt" artist="Oliver Tree" songUrl="" id={3} />
                                <Song image="/imagenes/Song/Song3.jpg" songName="Test 1" artist="Miguel Angel" songUrl="" id={4} />
                                <Song image="/imagenes/Song/Song1.jpg" songName="Test 2" artist="Miguel Angel" songUrl="" id={5} />
                            </CarouselItem>
                          </>
                        </CarouselContent>
                </Carousel>


                <span className="w-full h-24 flex flex-col justify-end  uppercase">
                  <p className="text-md">Selecciona tus </p>
                  <h1 className="text-xl ">Generos musicales</h1>
                </span>

                {/* Generos musicales  */}
                <Carousel className="w-full ">
                        <CarouselContent>
                          <>
                            {/* La idea es que hagas un map aca, donde repetiras CarouselItem tantas veces como quieras y dentro de CarouselItem, agregues de 3 en 3 TidelitCard*/}
                            {/* Los TidelitCard deben tener un array de objetos con las propiedades image, title, artist y position que consumiras del Backend */}
                            <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center ">
                              <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={1} />
                              <TidelitCard image="/Imagenes/Song/Song2.jpg" title="Tidelit Card" artist="Artista" position={2} />
                              <TidelitCard image="/Imagenes/Song/Song3.jpg" title="Tidelit Card" artist="Artista" position={3} />
                              <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={4} />
                              <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={5} />
                            </CarouselItem>
                          </>
                
                    
                        </CarouselContent>
                </Carousel>

                <span className="w-full h-24 flex flex-col justify-end  uppercase">
                  <p className="text-md">Escucha</p>
                  <h1 className="text-xl ">Top 10 Emisoras</h1>
                </span>

                {/* Emisoras  */}
                <Carousel className="w-full">
                        <CarouselContent>
                          <>
                            {/* La idea es que hagas un map aca, donde repetiras CarouselItem tantas veces como quieras y dentro de CarouselItem, agregues de 3 en 3 TidelitCard*/}
                            {/* Los TidelitCard deben tener un array de objetos con las propiedades image, title, artist y position que consumiras del Backend */}
                            <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center">
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

        <Welcome  isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)}/>
          
      </div>
    </>
  );
}

