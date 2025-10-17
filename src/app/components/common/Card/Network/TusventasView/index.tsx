import TusVentas from "../TusVentas";


export default function TusventasView () {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-2">

                {/* Texto */}
                <div className="w-full h-auto  flex flex-col justify-center items-start p-10">
                    <p className="text-xs">Conoce tu balance de ventas del mes</p>
                    <h1 className="text-2xl font-bold uppercase">Tus ventas este mes</h1>
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
               
                {/* Ventas de este mes */}
                <div className="w-full h-full rounded-2xl flex flex-col gap-2">
                    {/* Tarjetas grandes */}
                    <div className="flex flex-row gap-2">
                        <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-10 text-white">
                            <p className="text-sm uppercase">Planes vendidos</p>
                            
                            <div className="w-full flex flex-row justify-between p-10">
                             
                                <p className="w-full flex flex-col justify-center items-center">
                                    <span>30</span>
                                    <span>Students</span>
                                </p>
                                <p className="w-full flex flex-col justify-center items-center">
                                    <span>30</span>
                                    <span>One</span>
                                </p>
                                <p className="w-full flex flex-col justify-center items-center">
                                    <span>30</span>
                                    <span>One Pro</span>
                                </p>
                                <p className="w-full flex flex-col justify-center items-center">
                                    <span>30</span>
                                    <span>Fandom</span>
                                </p>
                                <p className="w-full flex flex-col justify-center items-center">
                                    <span>30</span>
                                    <span>Albumes</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        {/* Primera fila */}
                        <div className="w-full flex flex-row gap-2">
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Acumulado por ventas <span className="uppercase font-bold text-blue-500">Studens</span></p>
                                <p className="text-xl font-bold text-gray-800">2.800 pts</p>
                            </div>
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Ventas plan <span className="uppercase font-bold text-blue-500">Studens</span> este mes</p>
                                <p className="text-xl font-bold text-gray-800">2.800 pts</p>
                            </div>
                        </div>
                        {/* Segunda fila */}
                        <div className="w-full flex flex-row gap-2">
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Acumulado por ventas <span className="uppercase font-bold text-blue-500">One</span></p>
                                <p className="text-xl font-bold text-gray-800">2.800 pts</p>
                            </div>
                            <div className="w-full bg-white border border-blue-200 rounded-2xl p-10">
                                <p className="text-sm text-gray-600 uppercase">Ventas plna <span className="uppercase font-bold text-blue-500">One</span> este mes</p>
                                <p className="text-xl font-bold text-gray-800">2.800 pts</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="w-full flex flex-col gap-4 p-10">
                    {/* Texto */}
                    <div className="w-full h-auto  flex flex-col justify-center items-start">
                        <p className="text-xs">Mira tus ventas</p>
                        <h1 className="text-2xl font-bold uppercase">Tus ventas del albumes</h1>
                    </div>
                    <TusVentas/>
                    <TusVentas/>
                    <TusVentas/>
                    <TusVentas/>
                    <TusVentas/>
                </div>


                {/* Ver reporte completo */}
                <div className="w-full h-auto flex justify-center items-center p-4">
                    <button className="w-full max-w-2xl h-14 p-4 border rounded-full flex justify-center items-center text-sm">
                        <p className="uppercase">Ver mas referidos</p>
                    </button>
                </div>


            </div>
        </>
    )
}