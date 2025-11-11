import Albumes from "../Albumes";
export default function AlbumesView() {

    return (
        <>
            <div className="w-full h-full flex flex-row ">            
                <div className="w-full h-full flex flex-col gap-10 px-20">
                    {/* Texto y titulo de las playlists */}
                    <div className="w-full h-auto  flex flex-col justify-center items-start">
                        <p className="text-md">Historial de Albumes agregados</p>
                        <h1 className="text-xl font-bold uppercase">Tus Albumes</h1>
                    </div>

                    {/* Grid  */}
                    <div className="w-full flex flex-row gap-2">
                        <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                            <Albumes name="La cordada" text="23" />
                            <Albumes name="La cordada" text="23" />
                        </div>

                        <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                            <Albumes name="La cordada" text="23" />
                            <Albumes name="La cordada" text="23" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}