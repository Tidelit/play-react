import Image from "next/image"
interface MixRadioBannerCountryProps {
    country: string
    image?: string
}

export const MixRadioBannerCountry = ({ country, image }: MixRadioBannerCountryProps) => {
    return (
        <>
            <div className="relative w-full h-96 flex flex-col justify-center items-center p-4">
                {/* Imagen de fondo del país */}
                {image && (
                    <div className="absolute inset-0 flex justify-start items-end p-8">
                        <div className="w-[32vw] h-80">
                            <Image
                                src={image}
                                alt={`${country} flag`}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}
                {/* Overlay con efecto */}
                <div className="absolute inset-0 bg-purple-500/50 backdrop-blur-2xl" />
                <div className="relative w-full h-full border-4 border-white flex flex-row justify-between items-center p-20">
                    {/* Texto */}
                    <div className="w-full h-full flex flex-col justify-center items-start text-white">
                        <h1 className="text-7xl font-black uppercase">Mix Radio</h1>
                        <p className="text-2xl font-bold uppercase p-2">{country}</p>
                    </div>

                    {/* Imagen */}
                    <div className="relative w-40 h-40 flex justify-center items-center">
                        {/* Efecto de fondo */}
                        <div className="absolute w-32 h-32 flex justify-center items-center z-10 transition-opacity duration-500">
                                      <Image 
                                          src="/imagenes/Song/Effect.png"
                                          alt="Background Effect"
                                          width={64}
                                          height={64}
                                          className="w-full h-full drop-shadow-2xl drop-shadow-white animate-ping"
                                      />
                        </div>
                                  
                        {/* Imagen principal */}
                        <div className="absolute w-full h-full rounded-full overflow-hidden z-50">
                                      <Image 
                                          src="/Logo/Logo.png" 
                                          width={160} 
                                          height={160} 
                                          alt="Logo"
                                          className="w-full h-full object-cover rounded-full" 
                                      />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}