import { FiEdit, FiUser, FiPlus, FiTrash2, FiShare2 } from "react-icons/fi";
interface AlbumesProps {
    name: string;
    text: string;
}

export default function Albumes({ name, text }: AlbumesProps) {
    return (
        <>
             <div className="w-full flex flex-row justify-between">
                <div className="w-full flex flex-row ">
                    <button className={`w-40 h-40 rounded-2xl bg-blue-500/50 flex justify-center items-center text-white text-4xl`}>
                    </button>
                    <div className="h-full p-4">
                        <h1 className="text-lg font-semibold">{name}</h1>
                        <p className="text-xs text-gray-600">Compartido por: {text}</p>
                    </div>
                </div>

                <div className="w-full flex flex-row gap-2 justify-end p-4">
                    <button className="h-full text-md  hover:text-blue-500 transition-colors duration-200">
                        <FiPlus />
                    </button>
                    <button className="h-full text-md  hover:text-blue-500 transition-colors duration-200">
                        <FiTrash2 />
                    </button>
                    <button className="h-full text-md  hover:text-blue-500 transition-colors duration-200">
                        <FiEdit />
                    </button>
                    <button className="h-full text-md  hover:text-blue-500 transition-colors duration-200">
                        <FiUser />
                    </button>
                    <button className="h-full text-md  hover:text-blue-500 transition-colors duration-200">
                        <FiShare2 />
                    </button>
                    
                </div>
            </div>
        </>
    )
}