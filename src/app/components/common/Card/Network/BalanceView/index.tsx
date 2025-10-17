
import Image from "next/image";

export default function BalanceView () {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center p-10">
                {/* Banner  */}
                <div className="w-full h-80 flex flex-row bg-gradient-to-br from-[#D80DE5] via-[#2D49D3] to-[#06D4C9]">
                    {/* Imagen  */}
                    <div className="w-80 h-80 flex items-center justify-center p-10">
                        <Image 
                            src="/logo/Logo.png"
                            alt="User Avatar"
                            width={800}
                            height={800}
                            className="w-full h-full drop-shadow-2xl drop-shadow-white object-cover"
                        />
                    </div>

                    {/* Texto usuario */}
                    <div className="w-full  text-white flex flex-col justify-center p-4 gap-4">
                        <div className="w-full flex flex-col ">
                            <p className="uppercase font-bold">User name:</p>
                            <h1 className="uppercase font-bold text-2xl">@MIGUELANGEL</h1>
                        </div>

                        <div className="w-80 h-10 border rounded-full flex items-center p-4">
                            <p>Nivel 1: Listener</p>
                        </div>
                       
                        <div className="w-full flex flex-col ">
                            <p className="uppercase font-bold">Sponsor:</p>
                            <h1 className="uppercase font-bold text-2xl">@MIGUELANGEL</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex flex-row justify-between">
                    <span className="text-sm flex flex-row gap-4 p-4">
                        <p>Desde: 05 de abril de 2025</p>
                        <p>00:00 GTM-5</p>
                    </span>
                    <span className="text-sm flex flex-row gap-4 p-4">
                        <p>Desde: 05 de abril de 2025</p>
                        <p>00:00 GTM-5</p>
                    </span>
                </div>

                {/* Tus metas  */}
                <div className="w-full h-full flex flex-col gap-4 p-10">
                    {/* Texto */}
                    <div className="w-full h-auto  flex flex-col justify-center items-start">
                        <p className="text-xs">Completa 3.600 minutos escuchados</p>
                        <h1 className="text-2xl font-bold uppercase">Tu meta este mes</h1>
                    </div>

                        {/* Progress Bar */}
                        <div className="w-full">
                            <div className="relative">
                                {/* Progress Track */}
                                <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                                    {/* Progress Fill */}
                                    <div 
                                        className="h-full rounded-full bg-gradient-to-r from-[#D80DE5] via-[#2D49D3] to-[#06D4C9] relative"
                                        style={{ width: '75%' }}
                                    >
                                        {/* Progress Indicator */}
                                        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-[#D80DE5] to-[#06D4C9]"></div>
                                    </div>
                                </div>
                                
                                {/* Value Display */}
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                                    <span className="text-[#06D4C9] font-semibold text-lg">2,800</span>
                                </div>
                        </div>
                    </div>
                </div>

                {/* Métricas Generales */}
                <div className="w-full h-full rounded-2xl flex flex-col gap-2">
                    <div className="w-full flex flex-col gap-2">
                        {/* Primera fila */}
                        <div className="w-full flex flex-row gap-2">
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Tu acumulado</p>
                                <p className="text-xl font-bold text-gray-800">2.800 pts</p>
                            </div>
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Este mes</p>
                                <p className="text-xl font-bold text-gray-800">2.800 pts</p>
                            </div>
                        </div>
                        
                        {/* Segunda fila */}
                        <div className="w-full flex flex-row gap-2">
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Acumulado por comisiones de red</p>
                                <p className="text-xl font-bold text-gray-800">7.200 pts</p>
                            </div>
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Puntaje de red</p>
                                <p className="text-xl font-bold text-gray-800">36.000 pts</p>
                            </div>
                        </div>
                    </div>

                    {/* Tarjetas grandes */}
                    <div className="flex flex-row gap-2">
                        <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-10 text-white">
                            <p className="text-sm uppercase">Total puntos</p>
                            <p className="text-3xl font-bold">10.000 pts</p>
                        </div>
                        <div className="w-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-10 text-white">
                            <p className="text-sm uppercase">Tus créditos</p>
                            <p className="text-3xl font-bold">146</p>
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex gap-2">
                        <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                            Convierte A Créditos
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                            Monetiza
                        </button>
                    </div>
                </div>

                <div className="w-full h-20">

                </div>

                 {/* Ventas de este mes */}
                 <div className="w-full h-full rounded-2xl flex flex-col gap-2">
                    <div className="w-full flex flex-col gap-2">
                        {/* Primera fila */}
                        <div className="w-full flex flex-row gap-2">
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Acumulado por ventas de Albumes</p>
                                <p className="text-xl font-bold text-gray-800">2.800 pts</p>
                            </div>
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Ventas de Albumes Este mes</p>
                                <p className="text-xl font-bold text-gray-800">2.800 pts</p>
                            </div>
                        </div>
                    </div>

                    {/* Tarjetas grandes */}
                    <div className="flex flex-row gap-2">
                        <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-10 text-white">
                            <p className="text-sm uppercase">Puntos por ventas</p>
                            <p className="text-3xl font-bold">10.000 pts</p>
                        </div>
                    </div>
                </div>


                {/* Ver reporte completo */}
                <div className="w-full h-auto flex justify-center items-center p-4">
                    <button className="w-full max-w-2xl h-14 p-4 border rounded-full flex justify-center items-center text-sm">
                        <p className="uppercase">Ver reporte completo</p>
                    </button>
                </div>


            </div>
        </>
    )
}