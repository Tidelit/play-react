"use client";
import React from "react";
import Navbar from "../../components/constant/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { MixRadioBannerCountry } from "@/app/components/common/Card/MixRadio/MixRadioBannerCountry";
import { MixRadioCountry } from "@/app/components/common/Card/MixRadio/MixRadioCountry";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import { MixRadioCard } from "@/app/components/common/Card/MixRadio/MixRadioCard";

interface CountryData {
  name: string;
  image: string;
  abbreviation: string;
}

const countries: CountryData[] = [
  { name: "Colombia", image: "/Pais/Colombia.webp", abbreviation: "CO" },
  { name: "Venezuela", image: "/Pais/Venezuela.jpg", abbreviation: "VE" },
  { name: "Peru", image: "/Pais/Peru.webp", abbreviation: "PE" },
  { name: "Mexico", image: "/Pais/Mexico.webp", abbreviation: "MX" }
];

export default function MixRadio() {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0].name);
  const selectedCountryData = countries.find(c => c.name === selectedCountry);

  return (
    <>
      <div className="w-full max-w-7xl h-full flex flex-col p-10 gap-4">
        {/* Contenido */}
        <Navbar />

        <div className="w-full max-w-7xl h-auto flex flex-col">
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
                                    abbreviation={country.abbreviation}
                                    onSelect={setSelectedCountry}
                                    isSelected={selectedCountry === country.name}
                                  />
                                ))}
                              </div>
                            </CarouselItem>
                        </> 
                  
                      </CarouselContent>
          </Carousel>
              
          <MixRadioBannerCountry  country={selectedCountry}  image={selectedCountryData?.image}/>
        </div>
  
        {/* Sección del Top 15 */}
        <div className="w-full max-w-7xl h-auto flex flex-col justify-start items-start overflow-hidden p-10">
          {/* Texto */}
          <p className="uppercase font-bold text-2xl mb-6">Top 10 emisoras</p>
          <Carousel className="w-full h-auto ">
            <CarouselContent>
              <>
                {/* La idea es que hagas un map aca, donde repetiras CarouselItem tantas veces como quieras y dentro de CarouselItem, agregues de 3 en 3 TidelitCard*/}
                {/* Los TidelitCard deben tener un array de objetos con las propiedades image, title, artist y position que consumiras del Backend */}
                <CarouselItem className="w-full flex flex-row gap-2 justify-center items-center">
                  <MixRadioCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={1} />
                  <MixRadioCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={2} />
                  <MixRadioCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={3} />
                  <MixRadioCard image="/Imagenes/Song/Song1.jpg" title="Tidelit Card" artist="Artista" position={4} />
                </CarouselItem>
              </>
        
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-full flex flex-col gap-4 p-10">
          {/* Texto */}
          <div className="w-full h-auto  flex flex-col justify-center items-start">
                        <p className="text-md">Las emisoras mas escuchadas del pais</p>
                        <h1 className="text-xl font-bold uppercase">Emisoras mas Escuchadas</h1>
          </div>
          
          <div className="w-full h-full flex flex-col items-center gap-2 p-10">
                  {/* Playlist  */}
                  <div className="w-full h-24 bg-gray-200/50 backdrop-blur-xs flex flex-row  justify-between items-center p-10 gap-4 transition-all duration-300 hover:bg-blue-200 cursor-pointer hover:shadow-md border border-gray-100 hover:border hover:border-gray-100 rounded-2xl">
                                  <div className="flex flex-row items-center gap-4">
                                      <p>1</p>
                                      <button className="w-14 h-14 border bg-white"></button>
                                      <p className="text-xs ">Playlist</p>
                                  </div>
                                  <Link href='/profile/artist' className="flex flex-row gap-2 cursor-pointer transition-all duration-300 hover:text-blue-500">
                                      <p className="text-xs">Visitar</p>
                                      <FiEye />
                                  </Link>
                              </div>
          </div>
        </div>


      </div>  
    </>
  );
}

