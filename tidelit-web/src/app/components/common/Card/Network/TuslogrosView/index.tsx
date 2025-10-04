import TusLogros from "../TusLogros";

export default function TuslogrosView() {
    return (
        <>
            <div className="w-full h-full p-10">
                {/* Texto */}
                <div className="w-full h-auto  flex flex-col justify-center items-start p-10">
                    <p className="text-xs">Minutos escuchados, mira los logros</p>
                    <h1 className="text-2xl font-bold uppercase">Conoce tus Logros</h1>
                </div>
                <div className="w-full h-full flex flex-row gap-4 p-10">
                    <TusLogros 
                        value="3.600"
                        label="Minutos Escuchados (Mes)"
                    />
                    <TusLogros 
                        value="10.000"
                        label="Minutos Escuchadas (Mes)"
                    />
                    <TusLogros 
                        value="20.000"
                        label="Minutos Escuchadas (Mes)"
                    />
                    <TusLogros 
                        value="30.000"
                        label="Minutos Escuchadas (Mes)"
                    />
                    <TusLogros 
                        value="40.000"
                        label="Minutos Escuchadas (Mes)"
                    />
               
                </div>
                {/* Texto */}
                <div className="w-full h-auto  flex flex-col justify-center items-start p-10">
                    <p className="text-xs">Conoce tus logros por amigos en tu red</p>
                    <h1 className="text-2xl font-bold uppercase">Amigos en tu red</h1>
                </div>
                <div className="w-full h-full flex flex-row gap-4 p-10">
                    <TusLogros 
                        value="30"
                        label="Amigos en tu red (Mes)"
                    />
                    <TusLogros 
                        value="180"
                        label="Seguimientos Recibidos"
                        bgColor="bg-pink-500"
                    />
                    <TusLogros 
                        value="45"
                        label="Recomendaciones Hechas"
                    />
                    <TusLogros 
                        value="12"
                        label="Playlists Compartidas"
                    />
                    <TusLogros 
                        value="8"
                        label="Colaboraciones"
                    />
                    <TusLogros 
                        value="32"
                        label="Mensajes Enviados"
                    />
                </div>
                {/* Texto */}
                <div className="w-full h-auto  flex flex-col justify-center items-start p-10">
                    <p className="text-xs">Conoce tus logros por creaciones subidas</p>
                    <h1 className="text-2xl font-bold uppercase">Creaciones</h1>
                </div>
                <div className="w-full h-full flex flex-row gap-4 p-10">
                    <TusLogros 
                        value="15"
                        label="Playlists Creadas"
                    />
                    <TusLogros 
                        value="8"
                        label="Álbumes Subidos"
                    />
                    <TusLogros 
                        value="120"
                        label="Canciones Subidas"
                    />
                    <TusLogros 
                        value="45"
                        label="Mezclas Creadas"
                    />
                    <TusLogros 
                        value="6"
                        label="Podcasts Grabados"
                    />
                </div>
                {/* Texto */}
                <div className="w-full h-auto  flex flex-col justify-center items-start p-10">
                    <p className="text-xs">Conoce tus logros por seguidores en tidelit</p>
                    <h1 className="text-2xl font-bold uppercase">Seguidores</h1>
                </div>
                <div className="w-full h-full flex flex-row gap-4 p-10">
                    <TusLogros 
                        value="1.2K"
                        label="Seguidores Totales"
                    />
                    <TusLogros 
                        value="450"
                        label="Nuevos Este Mes"
                    />
                    <TusLogros 
                        value="85"
                        label="Engagement Rate"
                    />
                    <TusLogros 
                        value="12"
                        label="Comentarios Diarios"
                    />
                    <TusLogros 
                        value="3.2K"
                        label="Likes Recibidos"
                    />
                </div>
            </div>
        </>
    )
}