import MusicalGenresView from "@/app/components/common/MusicalGenres";

export default function Music() {
    return (
        <>
            <div className="w-full p-10 flex flex-col gap-10">
                <span className="w-full h-auto flex flex-col  uppercase">
                    <p className="text-md ">Encuentra tu genero Musical favorito</p>
                    <h1 className="text-xl font-bold">Todos los Generos</h1>
                </span>

                <div className="w-full h-full flex justify-center items-center gap-2">
                    
                    <div className="w-full flex flex-col gap-2">
                        <MusicalGenresView genreName="Pop" image="/imagenes/Song/Song1.jpg"/>
                        <MusicalGenresView genreName="Rock" image="/imagenes/Song/Song2.jpg"/>
                        <MusicalGenresView genreName="Hip Hop" image="/imagenes/Song/Song3.jpg"/>
                        <MusicalGenresView genreName="Reggaeton" image="/imagenes/Song/Song1.jpg"/>
                        <MusicalGenresView genreName="Jazz" image="/imagenes/Song/Song2.jpg"/>
                    </div>
                    
                    <div className="w-full flex flex-col gap-2">
                        <MusicalGenresView genreName="Electronic" image="/imagenes/Song/Song3.jpg"/>
                        <MusicalGenresView genreName="Country" image="/imagenes/Song/Song1.jpg"/>
                        <MusicalGenresView genreName="Classical" image="/imagenes/Song/Song2.jpg"/>
                        <MusicalGenresView genreName="R&B" image="/imagenes/Song/Song3.jpg"/>
                        <MusicalGenresView genreName="Latin" image="/imagenes/Song/Song1.jpg"/>
                    </div>
                    
                    <div className="w-full flex flex-col gap-2">
                        <MusicalGenresView genreName="Blues" image="/imagenes/Song/Song2.jpg"/>
                        <MusicalGenresView genreName="Metal" image="/imagenes/Song/Song3.jpg"/>
                        <MusicalGenresView genreName="Folk" image="/imagenes/Song/Song1.jpg"/>
                        <MusicalGenresView genreName="Indie" image="/imagenes/Song/Song2.jpg"/>
                        <MusicalGenresView genreName="Soul" image="/imagenes/Song/Song3.jpg"/>
                    </div>
                    
           
                </div>
            </div>
        </>
    )
}