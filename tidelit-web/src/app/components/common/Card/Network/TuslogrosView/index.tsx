import TusLogros from "../TusLogros";

export default function TuslogrosView() {
    return (
        <div className="w-full min-h-screen">
            <div className="max-w-6xl mx-auto p-10">
                {/* Minutos escuchados */}
                <div className="flex flex-col gap-4 mb-20">
                    <div>
                        <p className="text-2xl text-blue-500 uppercase">Conoce tus logros</p>
                        <h2 className="text-md font-light">Minutos escuchados, mira los logros</h2>
                    </div>
                    <div className="w-full flex flex-row gap-4 flex-wrap">
                        <TusLogros 
                            value="3,600"
                            label="Minutos Escuchados (Mes)"
                        />
                        <TusLogros 
                            value="10,000"
                            label="Minutos Escuchados (Mes)"
                        />
                        <TusLogros 
                            value="20,000"
                            label="Minutos Escuchados (Mes)"
                        />
                        <TusLogros 
                            value="30,000"
                            label="Minutos Escuchados (Mes)"
                        />
                        <TusLogros 
                            value="40,000"
                            label="Minutos Escuchados (Mes)"
                        />
                    </div>
                </div>

                {/* Amigos en tu red */}
                <div className="flex flex-col gap-4 mb-20">
                    <h3 className="text-xl uppercase text-blue-500">Amigos en tu red</h3>
                    <div className="w-full flex flex-row gap-4 flex-wrap">
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
                </div>

                {/* Creaciones */}
                <div className="flex flex-col gap-4 mb-20">
                    <h3 className="text-xl uppercase text-blue-500">Creaciones</h3>
                    <div className="w-full flex flex-row gap-4 flex-wrap">
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
                </div>

                {/* Seguidores */}
                <div className="flex flex-col gap-4 mb-10">
                    <h3 className="text-xl uppercase text-blue-500">Seguidores</h3>
                    <div className="w-full flex flex-row gap-4 flex-wrap">
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
                                Ver reporte completo →
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}