export default function TusVentas () {
    return (
        <div className="w-full flex flex-row gap-4 items-center p-4 bg-gray-200/20 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
            {/* Imagen */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D80DE5] via-[#2D49D3] to-[#06D4C9]">
            </div>

            {/* Datos  */}
            <div className="w-full flex flex-row justify-between items-center">
                <div className="w-full flex flex-col">
                    <p className="text-sm font-light text-gray-900">Miguel Jaimes</p>
                    <p className="text-xs text-gray-400">8 Canciones</p>
                </div>
                <div className="w-full flex flex-row gap-4 justify-end">
                    <div className="text-xs">
                        <p className="text-gray-400 uppercase">Ventas</p>
                        <p className="text-gray-900 font-light">20 ventas</p>
                    </div>
                    <div className="text-xs">
                        <p className="text-gray-400 uppercase">Precio</p>
                        <p className="text-gray-900 font-light">12,500 pts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}