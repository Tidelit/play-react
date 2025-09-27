"use client";
import React from "react";
import Navbar from "../../components/constant/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { TidelitCard } from "@/app/components/common/Card/Tidelit/TidelitCard";
import { MixRadioBannerCountry } from "@/app/components/common/Card/MixRadio/MixRadioBannerCountry";
import { MixRadioCountry } from "@/app/components/common/Card/MixRadio/MixRadioCountry";

interface CountryData {
  name: string;
  image: string;
}

const countries: CountryData[] = [
  { name: "Colombia", image: "/Pais/Colombia.webp" },
  { name: "Venezuela", image: "/Pais/Venezuela.jpg" },
  { name: "Peru", image: "/Pais/Peru.webp" },
  { name: "Mexico", image: "/Pais/Mexico.webp" }
];

export default function MixRadio() {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0].name);
  const selectedCountryData = countries.find(c => c.name === selectedCountry);

  return (
    <>
      <div className="w-full h-full flex flex-col">
        {/* Contenido */}
        <Navbar />

        <Carousel className="w-full h-full">
            <CarouselContent>
              <>
                {/* Nota: Miguel */}
                {/* La idea es que hagas un map aca, donde repetiras CarouselItem tantas veces como se requiera y dentro de CarouselItem, agregues de 12 en 12 MixRadioCountry*/}
                {/* Los MixRadioCountry deben recibir un country e imagen, apenas reciba el country, en el banner inferior, MixRadioBannerCountry debera recibir el country seleccionado*/}
                  <CarouselItem>
                   <div className="w-full h-40 flex flex-row justify-start items-center gap-4 p-20">
                      {countries.map((country) => (
                        <MixRadioCountry 
                          key={country.name}
                          country={country.name}
                          image={country.image}
                          onSelect={setSelectedCountry}
                          isSelected={selectedCountry === country.name}
                        />
                      ))}
                    </div>
                  </CarouselItem>
              </> 
        
            </CarouselContent>
        </Carousel>
     
        <MixRadioBannerCountry 
          country={selectedCountry} 
          image={selectedCountryData?.image}
        />
      
  
        {/* Sección del Top 15 */}
        <div className="w-full h-auto flex flex-col justify-start items-start overflow-hidden p-10">
          {/* Texto */}
          <p className="uppercase font-bold text-2xl mb-6">Top 10 emisoras</p>
          
          <Carousel className="w-full h-[32vw] ">
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
      </div>  
    </>
  );
}

