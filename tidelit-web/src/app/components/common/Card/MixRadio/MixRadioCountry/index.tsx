import Image from "next/image"
interface MixRadioCountryProps {
    country: string
    image: string
    abbreviation: string
    onSelect: (country: string) => void
    isSelected?: boolean
}

export const MixRadioCountry = ({ country, image, abbreviation, onSelect, isSelected = false }: MixRadioCountryProps) => {
    return (
        <>
            <button 
                onClick={() => onSelect(country)}
                className={`relative w-full max-w-18 h-18 bg-transparent rounded-full flex justify-center items-center transition-transform ${isSelected ? 'ring-2 ring-purple-500' : ''}`}
            >
                <Image src={image} alt={country} width={150} height={150} className="w-full h-full object-cover rounded-full" />
                {/* Abreviación sobrepuesta en el centro de la imagen */}
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pointer-events-none">
                    {abbreviation}
                </span>
            </button>
        </>
    )
}