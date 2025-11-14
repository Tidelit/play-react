import TusVentas from "../TusVentas";


export default function TusventasView () {
    return (
        <div className="w-full min-h-screen">
            <div className="max-w-6xl mx-auto p-10">
                {/* Título */}
                <div className="flex flex-col gap-4 mb-4">
                    <div>
                        <p className="text-2xl text-blue-500 uppercase">Tus ventas este mes</p>
                        <h2 className="text-md font-light">Conoce tu balance de ventas del mes</h2>
                    </div>
                </div>

                {/* Ventas de álbumes */}
                <div className="flex flex-col gap-4 mb-20">
                    <div className="w-full flex flex-row gap-4">
                        <div className="w-full flex flex-col justify-center bg-gray-200/20 p-10 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
                            <p className="text-xs text-blue-500 uppercase">Acumulado</p>
                            <p className="text-2xl font-light text-gray-900">2,800</p>
                        </div>
                        <div className="w-auto flex flex-col justify-center bg-gray-200/20 p-10 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
                            <p className="text-xs text-blue-500 uppercase">Este mes</p>
                            <p className="text-3xl font-light text-gray-900">2,800</p>
                        </div>
                        <div className="w-auto flex flex-col justify-center bg-gray-200/20 p-10 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
                            <p className="text-xs text-blue-500 uppercase">Puntos por ventas</p>
                            <p className="text-3xl font-light text-gray-900">10,000</p>
                        </div>
                    </div>
                </div>

                {/* Planes vendidos */}
                <div className="flex flex-col gap-4 mb-20">
                    <h3 className="text-xl uppercase text-blue-500">Planes vendidos</h3>
                    
                    <div className="w-full flex flex-col justify-center bg-gray-200/20 p-10 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
                        <div className="w-full flex flex-row justify-between">
                            <div className="w-full flex flex-col justify-center items-center">
                                <p className="text-3xl font-light text-gray-900">30</p>
                                <p className="text-xs text-blue-500 uppercase">Students</p>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <p className="text-3xl font-light text-gray-900">30</p>
                                <p className="text-xs text-blue-500 uppercase">One</p>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <p className="text-3xl font-light text-gray-900">30</p>
                                <p className="text-xs text-blue-500 uppercase">One Pro</p>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <p className="text-3xl font-light text-gray-900">30</p>
                                <p className="text-xs text-blue-500 uppercase">Fandom</p>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <p className="text-3xl font-light text-gray-900">30</p>
                                <p className="text-xs text-blue-500 uppercase">Álbumes</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Métricas de planes */}
                <div className="flex flex-row gap-4 mb-20">
                    <div className="w-full flex flex-row">
                        <div className="hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300 rounded-2xl">
                            <p className="text-xs uppercase tracking-widest">Acumulado por ventas <span className="text-blue-500">Students</span></p>
                            <p className="text-3xl font-light text-gray-900">2,800</p>
                        </div>
                        <div className="hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300 rounded-2xl">
                            <p className="text-xs uppercase tracking-widest">Ventas plan <span className="text-blue-500">Students</span> este mes</p>
                            <p className="text-3xl font-light text-gray-900">2,800</p>
                        </div>
                        <div className="hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300 rounded-2xl">
                            <p className="text-xs uppercase tracking-widest">Acumulado por ventas <span className="text-blue-500">One</span></p>
                            <p className="text-3xl font-light text-gray-900">2,800</p>
                        </div>
                        <div className="hover:bg-gray-200/50 backdrop-blur-xs flex flex-col justify-center p-10 transition-all duration-300 rounded-2xl">
                            <p className="text-xs uppercase tracking-widest">Ventas plan <span className="text-blue-500">One</span> este mes</p>
                            <p className="text-3xl font-light text-gray-900">2,800</p>
                        </div>
                    </div>
                </div>

                {/* Lista de ventas */}
                <div className="flex flex-col gap-4 mb-10">
                    <h3 className="text-xl uppercase text-blue-500">Tus ventas de álbumes</h3>
                    <TusVentas/>
                    <TusVentas/>
                    <TusVentas/>
                    <TusVentas/>
                    <TusVentas/>
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
                                Ver más ventas →
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}