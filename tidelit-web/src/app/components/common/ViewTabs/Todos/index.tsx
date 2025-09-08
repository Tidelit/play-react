import { Song } from "../../Music/Song"

interface TodosProps {
    onSongSelect?: (songData: { image: string; songName: string; artist?: string }) => void;
}

export const Todos = ({ onSongSelect }: TodosProps) => {
    return (
    <>
        {/* Texto de la seccion */}
        <div className="w-full h-auto flex flex-row  justify-between  items-center">
            <div className="flex flex-col ">
                <p className="text-xs  cursor-pointer hover:text-blue-500 transition-all duration-500">Inspirada en tu actividad reciente</p>
                <h1 className="text-2xl -mt-1 font-bold uppercase">Recomendadas para Hoy</h1>
            </div>
                <p className="text-xs cursor-pointer hover:text-blue-500 transition-all duration-500">Mostrar mas</p>
        </div>
        
        <div className="w-full  flex flex-row gap-4 justify-start  items-center">
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" onSelect={onSongSelect} />
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" onSelect={onSongSelect} />
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" onSelect={onSongSelect} />
            <Song image="/imagenes/Song/Song1.jpg" songName="Gucci Gang" onSelect={onSongSelect} />
        </div>

    

    </>
    )
}