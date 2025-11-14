interface TusLogrosProps {
    value: string | number;
    label: string;
    bgColor?: string;
    imageSrc?: string;
}

export default function TusLogros({ 
    value, 
    label, 
    bgColor = "bg-gray-400"
}: TusLogrosProps) {
    return (
        <div className="w-auto flex flex-col gap-4 justify-center items-center">     
            <div className={`w-32 h-32 border-2 border-gray-200 shadow-md ${bgColor} rounded-bl-[50%] rounded-br-[50%] flex items-center justify-center hover:border-blue-500 transition-all duration-300`}>
            </div>
            <div className="w-32 flex flex-col justify-center items-center">
                <p className="text-2xl font-light text-gray-900">{value}</p>
                <p className="text-xs text-gray-400 uppercase text-center">{label}</p>
            </div>
        </div>
    )
}