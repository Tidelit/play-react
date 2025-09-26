"use client";
import Navbar from "../../components/constant/Navbar";



export default function Tidelit() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        {/* Contenido */}
        <Navbar />

        {/* Banner Tidelit */}
        <div className="w-full h-auto flex flex-col justify-start items-start p-10 gap-2 bg-gradient-to-b from-purple-500 to-black">
          {/* Texto */}
          <div className="w-auto h-auto bg-[#E302E6] uppercase font-black text-xl text-white px-2 py-1">
            <p>Live</p>
            <p>Music</p>
          </div>

          {/* Titulo - tidelit top 10*/}
          <div className="w-auto uppercase font-black text-4xl">
            <p className="text-[#E302E6]">tide<span className="text-blue-500">list</span></p>
            <p className="text-white">TOP 10</p>
          </div>
       
          {/* Titulo - oyentes activos*/}
          <div className="w-auto uppercase font-black flex flex-row gap-2 items-center">
            <p className="text-blue-500 text-8xl">88.987</p>
            <p className="text-white text-xs">Oyentes <br/> activos</p>
          </div>

          <h2 className="text-[#E302E6] uppercase font-bold text-sm">Abril 15, 2025</h2>
        </div>
     
        {/* Sección del Top 15 */}
        <div className="w-full h-auto p-10 flex flex-col justify-start items-start overflow-hidden">
          {/* Texto */}
          <p className="uppercase font-bold text-2xl mb-6">Tidelit top 10</p>
     
        </div>
      </div>  
    </>
  );
}