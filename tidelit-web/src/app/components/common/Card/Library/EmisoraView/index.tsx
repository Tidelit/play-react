import Emisora from "../Emisora";
export default function EmisoraView() {
    return (
        <>
            <div className="w-full h-full flex flex-row ">
            
            <div className="w-full h-full flex flex-col gap-10 px-20">
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-xs">Historial de Emisoras agregadas</p>
                    <h1 className="text-2xl font-bold uppercase">Tus Emisoras</h1>
                </div>
                
                {/* Grid  */}
                <div className="w-full flex flex-row gap-2">
                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Emisora
                            name="La Cordada"
                            text="Venezuela"
                        />
                        <Emisora
                            name="La Cordada"
                            text="Venezuela"
                        />
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Emisora
                            name="La Cordada"
                            text="Venezuela"
                        />
                        <Emisora
                            name="La Cordada"
                            text="Venezuela"
                        />
                    </div>
                </div>
                
             
            </div>
         
            </div>
        </>
    )
}