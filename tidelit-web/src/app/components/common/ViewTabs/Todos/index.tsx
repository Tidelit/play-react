import { Footer } from "@/app/components/constant/Footer"
import { Song } from "../../Music/Song"

export const Todos = () => {
    return (
        <>
        {/* Texto de la seccion */}
        <div className="w-full h-auto flex flex-row gap-4 justify-between  items-center mb-4 p-4">
            <div className="flex flex-col ">
                <p className="text-xs  cursor-pointer hover:text-blue-500 transition-all duration-500">Inspirada en tu actividad reciente</p>
                <h1 className="text-2xl -mt-1 font-bold uppercase">Recomendadas para Hoy</h1>
            </div>
                <p className="text-xs cursor-pointer hover:text-blue-500 transition-all duration-500">Mostrar mas</p>
        </div>
        
        <div className="w-full  flex flex-row gap-4 justify-start  items-center mb-4 p-10">
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" />
            <Song image="/imagenes/Song/Song2.jpg" songName="Conejo Malo?" />
            <Song image="/imagenes/Song/Song3.jpg" songName="Astroworld" />
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang - Remix" />
        </div>

        {/* Texto de la seccion */}
        <div className="w-full h-auto flex flex-row gap-4 justify-between  items-center mb-4 p-4">
            <div className="flex flex-col ">
                <p className="text-xs  cursor-pointer hover:text-blue-500 transition-all duration-500">Explora los generos musicales mas populares</p>
                <h1 className="text-2xl -mt-1 font-bold uppercase">Explora los Generos Musicales</h1>
            </div>
                <p className="text-xs cursor-pointer hover:text-blue-500 transition-all duration-500">Mostrar mas</p>
        </div>

        <div className="w-full  flex flex-row gap-4 justify-start  items-center mb-4 p-10">
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" />
            <Song image="/imagenes/Song/Song2.jpg" songName="Conejo Malo?" />
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang - Remix" />
        </div>

        
        {/* Texto de la seccion */}
        <div className="w-full h-auto flex flex-row gap-4 justify-between  items-center mb-4 p-4">
            <div className="flex flex-col ">
                <p className="text-xs  cursor-pointer hover:text-blue-500 transition-all duration-500">Las 15 mejores Emisoras de la Plataforma</p>
                <h1 className="text-2xl -mt-1 font-bold uppercase">Emisoras Recomendadas</h1>
            </div>
                <p className="text-xs cursor-pointer hover:text-blue-500 transition-all duration-500">Mostrar mas</p>
        </div>
      
        <div className="w-full  flex flex-row gap-4 justify-start  items-center mb-4 p-10">
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" />
            <Song image="/imagenes/Song/Song2.jpg" songName="Conejo Malo?" />
            <Song image="/imagenes/Song/Song3.jpg" songName="Astroworld" />
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang - Remix" />
        </div>
        <Footer />
    
        </>
    )
}