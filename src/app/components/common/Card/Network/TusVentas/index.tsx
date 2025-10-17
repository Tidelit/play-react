export default function TusVentas () {
    return (
        <>
            <div className="w-full h-full">
                <div className="w-full flex flex-row gap-2  border-b justify-center items-center p-4">
                            {/* Imagen */}
                            <div className="w-14 h-14  bg-gradient-to-br from-[#D80DE5] via-[#2D49D3] to-[#06D4C9]">

                            </div>

                            {/* Datos  */}
                            <div className="w-full flex flex-row justify-between items-center text-xs">
                                <div className="w-full flex flex-col">
                                    <p>Miguel Jaimes</p>
                                    <p>8 Canciones</p>
                                </div>
                                <div className="w-full flex flex-row gap-4 justify-end">
                                    <div>
                                        <p>Ventas</p>
                                        <p>20 ventas</p>
                                    </div>
                                    <div>
                                        <p>Precio</p>
                                        <p>12.500 pts</p>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </>
    )
}