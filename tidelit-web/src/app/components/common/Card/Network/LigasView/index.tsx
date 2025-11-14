import TusVentas from "../TusVentas";

export default function LigasView () {
    return (
        <div className="w-full min-h-screen">
            <div className="max-w-6xl mx-auto p-10">
                {/* Banner  */}
                <div className="w-full h-80 flex flex-col gap-4 justify-center items-center bg-gradient-to-br from-[#D80DE5] via-[#2D49D3] to-[#06D4C9] rounded-2xl mb-20">
                    <h1 className="uppercase text-4xl font-black text-white">Ligas tidelit</h1>
                    <p className="uppercase text-xl text-white">Termina en</p>
                    
                    <div className="w-full flex flex-row justify-center items-center gap-10">
                        {/* Dias  */}
                        <div className="w-auto flex flex-col gap-2 justify-center items-center text-white">
                            <div className="flex flex-row gap-2">
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center rounded">0</p>
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center rounded">0</p>
                            </div>
                            <p className="text-xs uppercase">Dias</p>
                        </div>

                        {/* Horas  */}
                        <div className="w-auto flex flex-col gap-2 justify-center items-center text-white">
                            <div className="flex flex-row gap-2">
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center rounded">0</p>
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center rounded">0</p>
                            </div>
                            <p className="text-xs uppercase">Horas</p>
                        </div>

                        {/* Minutos */}
                        <div className="w-auto flex flex-col gap-2 justify-center items-center text-white">
                            <div className="flex flex-row gap-2">
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center rounded">0</p>
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center rounded">0</p>
                            </div>
                            <p className="text-xs uppercase">Minutos</p>
                        </div>

                        {/* Segundos  */}
                        <div className="w-auto flex flex-col gap-2 justify-center items-center text-white">
                            <div className="flex flex-row gap-2">
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center rounded">0</p>
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center rounded">0</p>
                            </div>
                            <p className="text-xs uppercase">Segundos</p>
                        </div>
                    </div>
                </div>

                {/* Ranking */}
                <div className="flex flex-col gap-4 mb-10">
                    <h3 className="text-xl uppercase text-blue-500">Tidelit Ranking</h3>
                    <p className="text-md font-light text-gray-400">Los mejores posicionados</p>
                    <TusVentas />
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
                                Ver más usuarios →
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}