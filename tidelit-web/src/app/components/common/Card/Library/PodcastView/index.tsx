
import Podcast from "../Podcast";
export default function PodcastView() {

    return (
        <>
            <div className="w-full h-full flex flex-row ">
            
            <div className="w-full h-full flex flex-col gap-10 px-20">
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-md">Historial de Podcast agregados</p>
                    <h1 className="text-xl font-bold uppercase">Tus Podcast</h1>
                </div>
                
                {/* Grid  */}
                <div className="w-full flex flex-row gap-2">
                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Podcast name="La cordada" text="36"/>
                        <Podcast name="text" text="dad"/>
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Podcast name="text" text="dad"/>
                        <Podcast name="text" text="dad"/>
                    </div>
                </div>
                
             
            </div>
         
            </div>
        </>
    )
}