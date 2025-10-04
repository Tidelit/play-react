import TusVentas from "../TusVentas";

export default function LigasView () {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center p-10">
                {/* Banner  */}
                <div className="w-full h-80 flex flex-col gap-4 justify-center items-center bg-gradient-to-br from-[#D80DE5] via-[#2D49D3] to-[#06D4C9]">
                    <h1 className="uppercase text-4xl font-black text-white">Ligas tidelit</h1>
                    <p className="uppercase text-xl text-white">Termina en</p>
                    
                    <div className="w-full flex flex-row justify-center items-center gap-10">
                        
                        {/* Dias  */}
                        <div className="w-auto flex flex-col gap-2 justify-center items-center text-white">
                            <div className="flex flex-row gap-2">
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center">0</p>
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center">0</p>
                            </div>
                            <p>Dias</p>
                        </div>

                        {/* Horas  */}
                        <div className="w-auto flex flex-col gap-2 justify-center items-center text-white">
                            <div className="flex flex-row gap-2">
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center">0</p>
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center">0</p>
                            </div>
                            <p>Horas</p>
                        </div>

                        {/* Minutos */}
                        <div className="w-auto flex flex-col gap-2 justify-center items-center text-white">
                            <div className="flex flex-row gap-2">
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center">0</p>
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center">0</p>
                            </div>
                            <p>Minutos</p>
                        </div>

                        {/* Segundos  */}
                        <div className="w-auto flex flex-col gap-2 justify-center items-center text-white">
                            <div className="flex flex-row gap-2">
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center">0</p>
                                <p className="w-10 h-10 bg-white text-black flex justify-center items-center">0</p>
                            </div>
                            <p>Segundos</p>
                        </div>
                    
                    
                    </div>
                </div>

                <div className="w-full flex flex-col gap-4 p-10">
                    {/* Texto */}
                    <div className="w-full h-auto  flex flex-col justify-center items-start">
                        <p className="text-xs">Los mejores posicionados</p>
                        <h1 className="text-2xl font-bold uppercase">Tidelit Ranking</h1>
                    </div>
                    <TusVentas />
                    <TusVentas/>
                    <TusVentas/>
                    <TusVentas/>
                    <TusVentas/>
                </div>


                {/* Ver reporte completo */}
                <div className="w-full h-auto flex justify-center items-center p-4">
                    <button className="w-full max-w-2xl h-14 p-4 border rounded-full flex justify-center items-center text-sm">
                        <p className="uppercase">Ver mas Usuarios</p>
                    </button>
                </div>


            </div>
        </>
    )
}