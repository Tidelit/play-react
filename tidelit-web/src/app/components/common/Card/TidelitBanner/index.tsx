interface TidelitBannerProps {
    oyentes: number
    fecha: string
}

export const TidelitBanner = ({ oyentes, fecha }: TidelitBannerProps) => {
    return (
        <>
           {/* Banner Tidelit */}
           <div className="w-full h-96 flex flex-col justify-between items-start p-10  bg-gradient-to-b from-purple-500 to-black">
                  {/* Texto */}
                  <div className="w-auto h-auto bg-[#E302E6] uppercase font-black text-xl text-white p-2 border-4 border-white">
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
                    <p className="text-blue-500 text-8xl">{oyentes}</p>
                    <p className="text-white text-xs">Oyentes <br/> activos</p>
                  </div>

                  <h2 className="text-[#E302E6] uppercase font-bold text-sm">{fecha}</h2>
            </div>
        </>
    )
}