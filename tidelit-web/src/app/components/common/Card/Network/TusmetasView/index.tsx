import TusReferidos from "../TusMetas";


export default function TusmetasView () {
    return (
        <div className="w-full min-h-screen">
            <div className="max-w-6xl mx-auto p-10">
                {/* Meta del mes */}
                <div className="flex flex-col gap-4 mb-20">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-2xl text-blue-500 uppercase">Tu meta este mes</p>
                            <h2 className="text-md font-light">Completa 3,600 minutos escuchados</h2>
                        </div>
                        <p className="text-md font-extralight">2,800</p>
                    </div>
                    
                    <div className="h-2 bg-gray-200/20 border border-gray-200 relative rounded-2xl">
                        <div 
                            className="absolute left-0 top-0 h-full bg-blue-500"
                            style={{ width: '75%' }}
                        ></div>
                        <div 
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"
                            style={{ left: '75%', marginLeft: '-4px' }}
                        ></div>
                    </div>
                    
                    <div className="flex justify-between">
                        <span className="text-xs text-gray-400">0</span>
                        <span className="text-xs text-gray-400">3,600</span>
                    </div>
                </div>

                {/* Grid de métricas */}
                <div className="flex flex-row gap-4 mb-20">
                    <div className="w-full flex flex-row gap-4">
                        <>
                            <div className="w-full hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300 rounded-2xl border border-gray-200 hover:border-blue-500">
                                <p className="text-xs uppercase">Tu acumulado</p>
                                <p className="text-xl font-light">2,800</p>
                            </div>
                        </>
                        <>
                            <div className="w-full hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300 rounded-2xl border border-gray-200 hover:border-blue-500">
                                <p className="text-xs uppercase">Este mes</p>
                                <p className="text-xl font-light">2,800</p>
                            </div>
                        </>
                        <>
                            <div className="w-full hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300 rounded-2xl border border-gray-200 hover:border-blue-500">
                                <p className="text-xs uppercase">Comisiones Red</p>
                                <p className="text-xl font-light">2,800</p>
                            </div>
                        </>
                        <>
                            <div className="w-full hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300 rounded-2xl border border-gray-200 hover:border-blue-500">
                                <p className="text-xs uppercase">Puntaje Red</p>
                                <p className="text-xl font-light">2,800</p>
                            </div>
                        </>
              
               
                    </div>
                  
                </div>

                {/* Lista de referidos */}
                <div className="flex flex-col gap-4 mb-10">
                    <h3 className="text-xl uppercase text-blue-500">Tu lista de referidos</h3>
                    <TusReferidos />
                    <TusReferidos />
                    <TusReferidos />
                    <TusReferidos />
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-4">
                    <div className="w-full flex flex-row justify-between p-4"> 
                        <div className="text-xs flex flex-row gap-4 uppercase">
                            <p>Nivel 1: Listener</p>
                            <p>Desde: 05 de abril de 2025</p>
                            <p>00:00 GTM-5</p>
                        </div>

                        <button className="text-xs uppercase hover:text-blue-500 transition-colors duration-300">
                            <p>
                                Ver más referidos →
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}