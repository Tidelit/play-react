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
    <div className="w-full flex flex-col justify-center items-center">

      <div className="w-full h-full flex flex-col justify-between items-center">
          <Navbar />
    
          {/* Artistas :p */}
          <Carousel className="w-full h-full ">
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

          {/* Musica  */}
          <Carousel className="w-full  p-10 ">
            <div className="w-full h-20 flex flex-col justify-center items-start">
              <p className="text-xs">Lo nuevo en la actualidad</p>
              <h1 className="text-2xl font-bold uppercase">Canciones</h1>
            </div>
            <CarouselContent>
              <>
                {/* La idea es que hagas un map aca, donde repetiras CarouselItem tantas veces como quieras y dentro de CarouselItem, agregues de 3 en 3 TidelitCard*/}
                {/* Los TidelitCard deben tener un array de objetos con las propiedades image, title, artist y position que consumiras del Backend */}
                <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center">
                    <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" artist="Lil Pump"/>
                    <Song image="/imagenes/Song/Song2.jpg" songName="Mala" artist="Anuel AA - 6ix9nie"/>
                    <Song image="/imagenes/Song/Song1.jpg" songName="Hurt" artist="Oliver Tree"/>
                    <Song image="/imagenes/Song/Song3.jpg" songName="Test 1" artist="Miguel Angel" />
                    <Song image="/imagenes/Song/Song1.jpg" songName="Test 2" artist="Miguel Angel"/>
                </CarouselItem>
              </>
            </CarouselContent>
          </Carousel>

          {/* Generos Musicales  */}
          <Carousel className="w-full  p-10 ">
            <div className="w-full h-20 flex flex-col justify-center items-start">
              <p className="text-xs">Lo nuevo en la actualidad</p>
              <h1 className="text-2xl font-bold uppercase">Generos musicales</h1>
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

          {/* Nota de Miguel - Banner decorativo, es un ejemplo aun no esta claro si dejarlo o volverlo un componente para reutilizarlo en otras secciones*/}
          {/* Puedes ignorarlo por ahora  */}
          <div className="w-full h-full p-10">
            <div className="relative w-full h-96 flex flex-col justify-center items-center p-4">
                  {/* Overlay con efecto */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-2xl" />
                  <div className="relative w-full h-full border-4 border-white flex flex-row justify-between items-center p-20">

                  </div>
            </div>
          </div>

          {/* Emisoras  */}
          <Carousel className="w-full  p-10 ">
            <div className="w-full h-20 flex flex-col justify-center items-start">
              <p className="text-xs">Lo nuevo en la actualidad</p>
              <h1 className="text-2xl font-bold uppercase">TOP 10 EMISORAS RECOMENDADAS</h1>
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

          {/* Nota de Miguel - Banner decorativo, es un ejemplo aun no esta claro si dejarlo o volverlo un componente para reutilizarlo en otras secciones*/}
          {/* Puedes ignorarlo por ahora  */}
          <div className="w-full h-full p-10">
            <div className="relative w-full h-96 flex flex-col justify-center items-center p-4">
                  {/* Overlay con efecto */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-2xl" />
                  <div className="relative w-full h-full border-4 border-white flex flex-row justify-between items-center p-20">

                  </div>
            </div>
          </div>

      </div>

      <Welcome 
        isOpen={isWelcomeOpen}
        onClose={() => setIsWelcomeOpen(false)}
        />
        
    </div>

    </>
  );
}

