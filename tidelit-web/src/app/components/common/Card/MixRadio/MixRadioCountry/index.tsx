import Image from "next/image"
interface MixRadioCountryProps {
    country: string
    image: string
    onSelect: (country: string) => void
    isSelected?: boolean
}

export const MixRadioCountry = ({ country, image, onSelect, isSelected = false }: MixRadioCountryProps) => {
    return (
        <>
            <button 
                onClick={() => onSelect(country)}
                className={`w-full max-w-18 h-18 bg-transparent rounded-full flex justify-center items-center transition-transform ${isSelected ? 'ring-2 ring-purple-500' : ''}`}
            >
                <Image src={image} alt={country} width={150} height={150} className="w-full h-full object-cover rounded-full" />
            </button>
        </>
    )
}