
export default function BalanceView() {
    return (
        <div className="w-full min-h-screen">
            <div className="max-w-6xl mx-auto p-10">
                {/* Meta del mes */}
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-2xl text-blue-500 uppercase ">Meta mensual</p>
                            <h2 className="text-md font-light ">3,600 minutos</h2>
                        </div>
                        <p className="text-md font-extralight ">2,800</p>
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
                    <>
                        <div className="w-full flex flex-row">
                            <div className="hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300  rounded-2xl">
                                <p className="text-xs uppercase tracking-widest">Acumulado</p>
                                <p className="text-3xl font-light text-gray-900">2,800</p>
                            </div>
                            <div className="hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300  rounded-2xl">
                                <p className="text-xs uppercase tracking-widest">Este mes</p>
                                <p className="text-3xl font-light text-gray-900">2,800</p>
                            </div>
                            <div className="hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300  rounded-2xl">
                                <p className="text-xs uppercase tracking-widest">Puntajes de Red</p>
                                <p className="text-3xl font-light text-gray-900">2,800</p>
                            </div>
                            <div className="hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300  rounded-2xl">
                                <p className="text-xs uppercase tracking-widest">Comisiones de Red</p>
                                <p className="text-3xl font-light text-gray-900">2,800</p>
                            </div>
                        </div>
                    </>
                    <>
                        {/* Totales */}
                        <div className="w-auto flex flex-row gap-8 justify-center items-center">
                            <div className="w-full flex flex-col">
                                <p className="text-xs uppercase ">Total puntos</p>
                                <p className="text-4xl font-extralight text-gray-900">10,000</p>
                            </div>
                            <div className="w-full flex flex-col">
                                <p className="text-xs uppercase ">Creditos</p>
                                <p className="text-4xl font-extralight text-gray-900">201</p>
                            </div>
                        </div>
                    </>
                </div>

                {/* Ventas */}
                <div className="flex flex-col gap-4 mb-10">
                    <h3 className="text-xl uppercase text-blue-500">Ventas de álbumes</h3>
                    
                    <div className="w-full flex flex-row gap-4">
                        <div className="w-full flex flex-col justify-center bg-gray-200/20 p-10 rounded-2xl border border-gray-200  hover:border-blue-500 transition-all duration-300">
                            <p className="text-xs text-blue-500 uppercase">Acumulado</p>
                            <p className="text-2xl font-light text-gray-900">2,800</p>
                        </div>
                        <div className="w-auto flex flex-col justify-center bg-gray-200/20 p-10 rounded-2xl border border-gray-200  hover:border-blue-500 transition-all duration-300">
                            <p className="text-xs text-blue-500 uppercase">Este mes</p>
                            <p className="text-3xl font-light text-gray-900">2,800</p>
                        </div>
                        <div className="w-auto flex flex-col justify-center bg-gray-200/20 p-10 rounded-2xl border border-gray-200  hover:border-blue-500 transition-all duration-300">
                            <p className="text-xs text-blue-500 uppercase">Total ventas</p>
                            <p className="text-3xl font-light text-gray-900">10.000</p>
                        </div>
                        
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-4">
                    <div className="w-full flex flex-row justify-between p-4"> 
                        <div className="text-xs flex flex-row gap-4 uppercase">
                            <p>Nivel 1: Listener</p>
                            <p>Desde: 05 de abril de 2025</p>
                            <p>00:00 GTM-5</p>
                        </div>

                        <button className="text-xs uppercase  hover:text-blue-500 transition-colors duration-300">
                            <p>
                                Ver reporte completo →
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}