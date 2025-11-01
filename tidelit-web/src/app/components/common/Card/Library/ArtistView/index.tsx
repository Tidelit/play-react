import Artistas from "../Artistas";
export default function ArtistView() {
    return (
        <>
            <div className="w-full h-full flex flex-row ">
            
            <div className="w-full h-full flex flex-col gap-10 px-20">
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-xs">Historial de Artistas agregados</p>
                    <h1 className="text-2xl font-bold uppercase">Tus Artistas</h1>
                </div>
                
                {/* Grid  */}
                <div className="w-full flex flex-row gap-2">
                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Artistas name="Miguel" text="Colombia"/>
                        <Artistas name="Miguel" text="Colombia"/>
                    </div>
                </div>
                
             
            </div>
         
            </div>
        </>
    )
}