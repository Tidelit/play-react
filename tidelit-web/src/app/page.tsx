"use client";
import { Miniplayer } from "./components/common/Modal/Music/Miniplayer";
import Navbar from "./components/constant/Navbar";
import Sidebar from "./components/constant/Sidebar";

export default function Home() {

  return (
    <>
      <div className="w-full h-screen flex flex-row bg-gradient-to-b from-[#D80DE5]/50 via-[#2D49D3]/50 to-[#06D4C9]/50 p-4 gap-2">
        <Sidebar />
        
        {/* Contenido */}
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-full flex flex-col justify-between items-center bg-white/80 backdrop-blur-2xl shadow-2xl rounded-2xl gap-2">
           <div className="w-full h-auto flex flex-col justify-center items-center p-10">
            <Navbar />
           </div>
           <Miniplayer />
          </div>
        </div>
        
      </div>  
    </>
  );
}

