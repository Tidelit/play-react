"use client";
import Navbar from "../../components/constant/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";
import { TidelitBanner } from "@/app/components/common/Card/Tidelit/TidelitBanner";
import { TidelitCard } from "@/app/components/common/Card/Tidelit/TidelitCard";


export default function Tidelit() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (current === api.scrollSnapList().length - 1) {
        api.scrollTo(0)
      } else {
        api.scrollNext()
      }
    }, 6000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [api, current])

  return (
    <>
      <div className="w-full max-w-7xl h-full flex flex-col p-10">
        {/* Contenido */}
        <Navbar />

        <div className="w-full h-auto p-10">
          <Carousel 
                    className="w-full h-full"
                    opts={{
                      loop: false,
                      align: "start",
                    }}
                    setApi={setApi}
                  >
                    <CarouselContent>
                      <>
                        <CarouselItem>
                          <TidelitBanner oyentes={88.987} fecha="Abril 15, 2025" />
                        </CarouselItem>
                      </> 
                      <>
                        <CarouselItem>
                          {/* Banner sin importancia, agregado solo por decoracion, se espera agregar una imagen aca o alguna informacion extra a futuro. */}
                          <div className="w-full h-96 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-start p-4">
                            <div className="w-full h-full border-4 border-white flex flex-row justify-start items-center gap-2 p-10">
                          
                            </div>
                          </div>
                        </CarouselItem>
                      </> 
                
                    </CarouselContent>
          </Carousel>
        </div>
     
        {/* Sección del Top 15 */}
        <div className="w-full h-auto flex flex-col justify-start items-start overflow-hidden p-10">
          {/* Texto */}
          <p className="uppercase font-bold text-2xl mb-6">Tidelit top 10</p>
          
          <Carousel className="w-full h-auto">
            <CarouselContent>
              <>
                {/* La idea es que hagas un map aca, donde repetiras CarouselItem tantas veces como quieras y dentro de CarouselItem, agregues de 3 en 3 TidelitCard*/}
                {/* Los TidelitCard deben tener un array de objetos con las propiedades image, title, artist y position que consumiras del Backend */}
                <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center">
                  <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={1} />
                  <TidelitCard image="/Imagenes/Song/Song2.jpg" title="Tidelit Card" artist="Artista" position={2} />
                  <TidelitCard image="/Imagenes/Song/Song3.jpg" title="Tidelit Card" artist="Artista" position={3} />
                  <TidelitCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={4} />
                </CarouselItem>
              </>
            </CarouselContent>
          </Carousel>
     
        </div>

      </div>  
    </>
  );
}