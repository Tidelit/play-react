import Image from "next/image";
import { FiGrid, FiHome, FiSearch } from "react-icons/fi";
import Sidebar from "./components/constant/Sidebar";

export default function Home() {
  return (
 <>
    <div className="w-full h-screen flex flex-row">
          <Sidebar />

          {/* Main Content  */}
          <div className="w-full h-screen flex flex-col gap-2 p-4 bg-gray-200 ">
            {/* <Navbar /> */}
            <div className="w-full h-20 ">
              {/* Header */}
              <div className="w-full h-auto flex flex-row gap-2 justify-start items-center">
                {/* Botono de usuario e imagen de usuario */}
                  <div className='w-20 h-20 flex flex-row justify-center items-center gap-4 '>
                    <button className="w-auto h-14 text-blue-500 rounded-full cursor-pointer flex justify-center items-center">
                      <FiGrid />
                    </button>
                  </div>

                  <div className="w-full h-auto flex flex-row gap-2 justify-start items-center">
                      {/* Section Todos */}
                      <button className="w-28 h-9 border-2  bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all duration-500 cursor-pointer text-white text-xs flex flex-col justify-center rounded-full">
                        <span className="font-bold">Todos</span>
                      </button>
                      {/* Section Tidelit */}
                      <button className="w-28 h-9 border-2  bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all duration-500 cursor-pointer text-white text-xs flex flex-col justify-center rounded-full">
                        <span className="font-bold">Tidelit</span>
                      </button>
                      {/* Section Mix Radio */}
                      <button className="w-28 h-9 border-2  bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all duration-500 cursor-pointer text-white text-xs flex flex-col justify-center rounded-full">
                        <span className="font-bold">Mix Radio</span>
                      </button>
                  </div>
                
                  <div className="w-full h-auto flex flex-row gap-4 justify-end items-center">
                    <button className="w-auto h-14 text-blue-500 rounded-full cursor-pointer flex justify-center items-center">
                      <FiHome />
                    </button>
                    <button className="w-auto h-14 text-blue-500 rounded-full cursor-pointer flex justify-center items-center">
                      <FiSearch />
                    </button>
                    <button className="w-auto h-14 text-blue-500 rounded-full cursor-pointer flex justify-center items-center">
                      <FiGrid />
                    </button>
                    <button className="w-auto h-14 text-blue-500 rounded-full cursor-pointer flex justify-center items-center">
                      <FiGrid />
                    </button>
                  </div>

              </div>
            </div>
            
            <div className="w-full h-auto  flex flex-col gap-2 p-10 rounded-2xl" >
              {/* Section de Artistas */}
              <div className="w-full h-28 flex flex-row  gap-2">
                <button className="w-24 h-24  rounded-full flex flex-col gap-2 justify-center items-center cursor-pointer">
                  <Image src="/imagenes/Foto.png" alt="artist1" className="w-full h-full object-cover rounded-full"  width={200} height={100} /> 
                  <p className="text-xs">Karol G</p>
                </button>
                <button className="w-24 h-24  rounded-full flex flex-col gap-2 justify-center items-center cursor-pointer">
                  <Image src="/imagenes/Foto.png" alt="artist1" className="w-full h-full object-cover rounded-full"  width={200} height={100} /> 
                  <p className="text-xs">Karol G</p>
                </button>
                <button className="w-24 h-24  rounded-full flex flex-col gap-2 justify-center items-center cursor-pointer">
                  <Image src="/imagenes/Foto.png" alt="artist1" className="w-full h-full object-cover rounded-full"  width={200} height={100} /> 
                  <p className="text-xs">Karol G</p>
                </button>
                <button className="w-24 h-24  rounded-full flex flex-col gap-2 justify-center items-center cursor-pointer">
                  <Image src="/imagenes/Foto.png" alt="artist1" className="w-full h-full object-cover rounded-full"  width={200} height={100} /> 
                  <p className="text-xs">Karol G</p>
                </button>
                <button className="w-24 h-24  rounded-full flex flex-col gap-2 justify-center items-center cursor-pointer">
                  <Image src="/imagenes/Foto.png" alt="artist1" className="w-full h-full object-cover rounded-full"  width={200} height={100} /> 
                  <p className="text-xs">Karol G</p>
                </button>
                <button className="w-24 h-24  rounded-full flex flex-col gap-2 justify-center items-center cursor-pointer">
                  <Image src="/imagenes/Foto.png" alt="artist1" className="w-full h-full object-cover rounded-full"  width={200} height={100} /> 
                  <p className="text-xs">Karol G</p>
                </button>
      
              </div>
            
              <h1 className="text-lg font-medium">Canciones</h1>
              {/* Section de Canciones */}
              <div className="w-full h-auto flex flex-row justify-start items-center gap-2">
                <button className="w-64 h-64 border rounded-2xl">
                </button>
                <button className="w-64 h-64 border rounded-2xl">
                </button>
                <button className="w-64 h-64 border rounded-2xl">
                </button>
                <button className="w-64 h-64 border rounded-2xl">
                </button>
         
              </div>

              

            </div>
          
          </div>
    </div>
 </>
  );
}