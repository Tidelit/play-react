interface TusLogrosProps {
    value: string | number;
    label: string;
    bgColor?: string;
    imageSrc?: string;
}

export default function TusLogros({ 
    value, 
    label, 
}: TusLogrosProps) {
    return (
        <>
        <div className="w-auto flex flex-col gap-2 justify-center">     
            <div className={`w-40 h-40 border-4 border-white shadow-md bg-gray-400 rounded-bl-[50%] rounded-br-[50%] flex items-center justify-center`}>
                {/* <Image 
                    src={imageSrc}
                    alt="Achievement icon"
                    width={100}
                    height={100}
                    className="w-20 h-20"
                    /> */}
            </div>
            <div className="w-40 flex flex-col justify-center items-center">
                <p className="text-xl font-bold">{value}</p>
                <p className="text-xs">{label}</p>
            </div>
        </div>
    </>
    )
}