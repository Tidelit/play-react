import { Footer } from "@/app/components/constant/Footer"

export const Todos = () => {
    return (
        <>
        <div className="w-full h-40 bg-gray-200 flex flex-row gap-4 justify-between  items-center mb-4 "></div>


        {/* Texto de la seccion */}
        <div className="w-full h-auto flex flex-row gap-4 justify-between  items-center mb-4 p-4">
            <div className="flex flex-col ">
                <p className="text-xs  cursor-pointer hover:text-blue-500 transition-all duration-500">Inspirada en tu actividad reciente</p>
                <h1 className="text-2xl -mt-1 font-bold">Recomendadas para Hoy</h1>
            </div>
                <p className="text-xs cursor-pointer hover:text-blue-500 transition-all duration-500">Mostrar mas</p>
        </div>
        
        <div className="w-full h-80 bg-gray-200 flex flex-row gap-4 justify-between  items-center mb-4"></div>

        {/* Texto de la seccion */}
        <div className="w-full h-auto flex flex-row gap-4 justify-between  items-center mb-4 p-4">
            <div className="flex flex-col ">
                <p className="text-xs  cursor-pointer hover:text-blue-500 transition-all duration-500">Explora los generos musicales mas populares</p>
                <h1 className="text-2xl -mt-1 font-bold">Explora los Generos Musicales</h1>
            </div>
                <p className="text-xs cursor-pointer hover:text-blue-500 transition-all duration-500">Mostrar mas</p>
        </div>

        <div className="w-full h-80 bg-gray-200 flex flex-row gap-4 justify-between  items-center mb-4"></div>

        
        {/* Texto de la seccion */}
        <div className="w-full h-auto flex flex-row gap-4 justify-between  items-center mb-4 p-4">
            <div className="flex flex-col ">
                <p className="text-xs  cursor-pointer hover:text-blue-500 transition-all duration-500">Las 15 mejores Emisoras de la Plataforma</p>
                <h1 className="text-2xl -mt-1 font-bold">Emisoras Recomendadas</h1>
            </div>
                <p className="text-xs cursor-pointer hover:text-blue-500 transition-all duration-500">Mostrar mas</p>
        </div>
      
        <div className="w-full h-full bg-gray-200 flex flex-row gap-4 justify-between  items-center mb-4"></div>

        <Footer />
    
        </>
    )
}