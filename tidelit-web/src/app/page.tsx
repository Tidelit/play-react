"use client";
import { useState } from "react";
import { Welcome } from "./components/common/Modal/Welcome";
import Navbar from "./components/constant/Navbar";
import { Song } from "./components/common/Music/Song";
import ArtistCard from "./components/common/TutorialCard/Artist";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import MusicalGenresView from "@/app/components/common/MusicalGenres";
import Link from "next/link";

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

            <div className="w-full max-w-7xl h-full flex flex-col items-center gap-20 ">
                
                {/* Musica  */}
                <>
                  <span className="w-full h-24 flex flex-col justify-end  uppercase">
                    <p className="text-md ">Escucha</p>
                    <h1 className="text-xl font-bold">Canciones</h1>
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
                </>

                {/* Generos  */}
                <>
                  <span className="w-full h-24 flex flex-col justify-end  uppercase">
                    <p className="text-md">Agrega tus favoritos</p>
                    <span className="w-full flex flex-row justify-between">
                      <h1 className="text-xl font-bold">Generos musicales</h1>
                      <Link href='/music' className="text-xs transition-all duration-300 hover:text-blue-500 underline">Ver mas</Link>
                    </span>
                  </span>
              

                  {/* Generos musicales  */}
                  <div className="w-full h-full flex flex-col gap-2 p-10">
                    <div className="w-full">
                        <div className="w-full flex flex-row gap-2">
                          <MusicalGenresView genreName="Pop" image="/imagenes/Song/Song1.jpg"/>
                          <MusicalGenresView genreName="Rock" image="/imagenes/Song/Song2.jpg"/>
                          <MusicalGenresView genreName="Hip Hop" image="/imagenes/Song/Song3.jpg"/>
                          <MusicalGenresView genreName="Reggaeton" image="/imagenes/Song/Song1.jpg"/>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="w-full flex flex-row gap-2">
                          <MusicalGenresView genreName="Jazz" image="/imagenes/Song/Song2.jpg"/>
                          <MusicalGenresView genreName="Electronic" image="/imagenes/Song/Song3.jpg"/>
                          <MusicalGenresView genreName="Country" image="/imagenes/Song/Song1.jpg"/>
                          <MusicalGenresView genreName="Classical" image="/imagenes/Song/Song2.jpg"/>
                        </div>
                    </div>
                  </div>
                </>
                
                {/* Emisoras  */}
                <>
                <span className="w-full h-24 flex flex-col justify-end  uppercase">
                  <p className="text-md">Escucha</p>
                  <h1 className="text-xl font-bold">Top 10 Emisoras</h1>
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
                </>
            </div>
        </div>

        <Welcome  isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)}/>
          
      </div>
    </>
  );
}

