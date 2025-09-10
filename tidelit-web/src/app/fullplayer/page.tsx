"use client";
import { FiCast, FiChevronLeft, FiMinimize , FiShare2 } from "react-icons/fi";
import { Miniplayer } from "../components/common/Modal/Music/Miniplayer";
import Link from "next/link";
import Sidebar from "../components/constant/Sidebar";

export default function Fullplayer() {
    return (
    <>
       <div className="w-full h-screen flex flex-row bg-gradient-to-b from-[#D80DE5]  to-white p-4 gap-2">
       <Sidebar />
        
        {/* Contenido */}
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-white to-white/50   rounded-2xl gap-2">
           
           {/* Navbar de fullplayer */}
           <div className="w-full h-14 flex flex-row justify-start items-center gap-2 p-10 ">
               
                <Link href="/" className="w-full hover:text-blue-500 transition-colors duration-500 cursor-pointer flex flex-row items-center gap-2">
                    <FiChevronLeft className='w-4 h-4' />
                    <p className="text-xs ">Volver atras</p>
                </Link>

                <div className='w-full h-auto flex flex-row gap-2 items-center justify-end'>
                        <button className="hover:text-blue-500 transition-colors duration-500 cursor-pointer">
                        <FiShare2 className='w-4 h-4' />
                        </button>
                        <button className="hover:text-blue-500 transition-colors duration-500 cursor-pointer">
                        <FiCast className='w-4 h-4' />
                        </button>
                     
                    

                        {/* boton de maximizar/minimizar */}
                        <Link 
                            href="/"
                            className="hover:text-blue-500 transition-colors duration-500 cursor-pointer"
                        >
                            <FiMinimize className="w-4 h-4" />
                        </Link>
                </div>

           </div>

           <div className="w-full h-full flex flex-col justify-center items-center "></div>

           <Miniplayer />
          </div>
        </div>
      </div>  
    </>
    )
}