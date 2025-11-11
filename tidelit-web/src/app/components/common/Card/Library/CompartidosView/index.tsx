
import Compartidos from "../Compartidos";
export default function CompartidosView() {

    return (
        <>
            <div className="w-full h-full flex flex-row ">
            
            {/* Playlists por defecto de me gusta y favoritos */}
            <div className="w-full h-full flex flex-col gap-10 px-20">
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-md">Historial de Playlist compartidas</p>
                    <h1 className="text-xl font-bold uppercase">Playlist compartidas contigo</h1>
                </div>
                
                {/* Grid  */}
                <div className="w-full flex flex-row gap-2">
                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                    </div>
                </div>
                
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-md">Historial de canciones compartidas</p>
                    <h1 className="text-xl font-bold uppercase">Canciones compartidas contigo</h1>
                </div>

                  {/* Grid  */}
                  <div className="w-full flex flex-row gap-2">
                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                    </div>
                </div>
              
                {/* Texto y titulo de las playlists */}
                <div className="w-full h-auto  flex flex-col justify-center items-start">
                    <p className="text-md">Historial de albumes compartidas</p>
                    <h1 className="text-xl font-bold uppercase">Albumes compartidas contigo</h1>
                </div>

                 {/* Grid  */}
                 <div className="w-full flex flex-row gap-2">
                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                        <Compartidos 
                            name="Playlist de Música Electrónica"
                            user="María García"
                        />
                    </div>
                </div>
            </div>
         
            </div>
        </>
    )
}