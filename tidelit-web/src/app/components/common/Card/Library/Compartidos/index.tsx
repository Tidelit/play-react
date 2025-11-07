import Link from "next/link";
import { FiEdit, FiUser, FiPlus, FiTrash2, FiShare2 } from "react-icons/fi";

interface CompartidosProps {
    name: string;
    user: string;
}

export default function Compartidos({ name, user }: CompartidosProps) {
    return (
        <>
            <div className="w-full flex flex-row justify-between">
                <div className="w-full flex flex-row bg-gray-100 p-10">
                    <Link href='/playlist' className={`w-62 h-40 rounded-2xl bg-blue-500 flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-blue-500/50 text-white text-4xl`}></Link>
                    
                    <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
                        <div className="w-full h-auto">
                            <h1 className="text-xs font-semibold">{name}</h1>
                            <p className="text-[10px] text-gray-600">Compartido por: {user}</p>
                        </div>

                        <div className="w-full flex flex-row gap-2 ">
                        <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                            <FiPlus />
                        </button>
                        <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                            <FiTrash2 />
                        </button>
                        <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                            <FiEdit />
                        </button>
                        <button className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                            <FiUser />
                        </button>
                        <Link href='/share' className="h-full text-xs  hover:text-blue-500 transition-colors duration-200 cursor-pointer flex justify-center items-center">
                                        <FiShare2 />
                        </Link>
                        
                        </div>
                    </div>
                </div>

               
            </div>
        </>
    )
}