'use client';




interface WelcomeProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ isOpen = true, onClose }) => {

  if (!isOpen) return null;

  return (
    <div 
    onClick={onClose} 
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="w-full h-[650px] max-w-4xl bg-white shadow-2xl shadow-white rounded-lg flex flex-col items-center justify-center gap-4 p-10">
   
      </div>
    </div>
  );
}
