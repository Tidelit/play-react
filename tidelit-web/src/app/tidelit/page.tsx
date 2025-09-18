"use client";
import { Miniplayer } from "../components/common/Modal/Music/Miniplayer";
import Navbar from "../components/constant/Navbar";
import Sidebar from "../components/constant/Sidebar";

export default function Tidelit() {

  return (
    <>
      <div className="w-full h-screen flex flex-row bg-gradient-to-b from-[#D80DE5] to-white p-4 gap-4">
        <Sidebar />

        {/* Contenido */}
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <div className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-white to-white/50  rounded-2xl border border-gray-200">
            <Navbar />
    
         

            <Miniplayer />
          </div>
        </div>

 
        
      </div>  
    </>
  );
}

