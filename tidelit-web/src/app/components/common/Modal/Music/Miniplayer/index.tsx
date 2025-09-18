import { FiMaximize, FiMusic, FiPlusSquare, FiShare2 } from "react-icons/fi"
import { FiHeart } from "react-icons/fi"
import { FiShuffle } from "react-icons/fi"
import { FiSkipBack } from "react-icons/fi"
import { FiSkipForward } from "react-icons/fi"
import { FiRepeat } from "react-icons/fi"
import { FiPlay, FiPause } from "react-icons/fi"
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useMusicStore } from '@/app/store/useMusicStore'
import Link from "next/link"

export const Miniplayer = () => {
    const { 
      currentSong,
      isPlaying,
      progress,
      volume,
      duration,
      audioElement,
      setProgress,
      setVolume,
      setDuration,
      setAudioElement,
      handleNext,
      handlePrevious,
      togglePlay,
      seekTo
    } = useMusicStore()
    
    const progressBarRef = useRef<HTMLDivElement>(null)
    const volumeBarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!audioElement) {
        const audio = new Audio(currentSong.url);
        setAudioElement(audio);
      }
    }, [audioElement, currentSong.url, setAudioElement])

    useEffect(() => {
      if (!audioElement) return;

      const handleTimeUpdate = () => {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        setProgress(progress);
      };

      const handleLoadedMetadata = () => {
        setDuration(audioElement.duration);
      };

      const handleEnded = () => {
        handleNext();
      };

      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.addEventListener('ended', handleEnded);

      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.removeEventListener('ended', handleEnded);
      };
    }, [audioElement, setProgress, setDuration, handleNext]);


    return (
      <>
        <div className=" w-full h-auto flex flex-col gap-4 p-10">
           <div 
             className='w-full flex flex-row relative cursor-pointer group' 
             ref={progressBarRef} 
             onClick={(e) => {
               if (!progressBarRef.current || !audioElement) return;
               const rect = progressBarRef.current.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const width = rect.width;
               const percentage = Math.min(Math.max((x / width) * 100, 0), 100);
               const time = (percentage / 100) * duration;
               seekTo(time);
             }}
           >
             <div 
               className='absolute w-full h-2 bg-white/20 border border-gray-300 top-3 rounded-2xl'
             />
             <div 
               className='absolute h-2 bg-gradient-to-r from-purple-500 to-blue-500 top-3 rounded-2xl shadow-md shadow-blue-500 transition-all'
               style={{ width: `${progress}%` }}
             />
             <div 
               className='absolute h-4 w-4 bg-white rounded-full shadow-lg -top-1 opacity-0 group-hover:opacity-100 transition-opacity'
               style={{ left: `calc(${progress}% - 8px)`, top: '8px' }}
             />
           </div>

           <div className="w-full h-24 flex justify-center items-center rounded-b-2xl">
             {/* Contenido de la cancion */}
             <div className="w-full h-full flex flex-row gap-2 justify-start items-center">
               <div className="w-14 h-14 rounded-lg overflow-hidden">
                 <Image 
                   src={currentSong.image}
                   alt='Song Image' 
                   className="w-full h-full object-cover"
                   width={100}
                   height={100}
                 />
               </div>
               <p className="flex flex-col p-4">
                 <span className="min-[320px]:text-[10px] xl:text-sm font-bold uppercase">{currentSong.title}</span>
                 <span className="min-[320px]:hidden xl:flex text-gray-500 ">{currentSong.artist}</span>
               </p>
             </div>

             {/* Boton de shuffle, skip back, play, skip forward, repeat */}
             <div className='w-full h-auto flex flex-row items-center justify-center gap-2'>
               <button className="hover:text-blue-500 transition-colors duration-500 cursor-pointer">
                 <FiShuffle className='w-5 h-5' />
               </button>
               <button 
                 className="hover:text-blue-500 transition-colors duration-500 cursor-pointer"
                 onClick={handlePrevious}
               >
                 <FiSkipBack className='w-5 h-5' />
               </button>
               <button 
                 className='w-14 h-14 transition-colors duration-500 cursor-pointer bg-gradient-to-b from-[#E302E6] via-[#2D49D3] to-[#06D4C9] flex justify-center items-center rounded-full text-white border-2 border-white hover:bg-bg-gradient-to-b hover:from-[#E302E6]/50 hover:via-[#2D49D3]/20 hover:to-[#06D4C9]/20'
                 onClick={togglePlay}
               >
                 {isPlaying ? <FiPause className='w-6 h-6' /> : <FiPlay className='w-6 h-6' />}
               </button>
               <button 
                 className="hover:text-blue-500 transition-colors duration-500 cursor-pointer"
                 onClick={handleNext}
               >
                 <FiSkipForward className='w-5 h-5' />
               </button>
               <button className="hover:text-blue-500 transition-colors duration-500 cursor-pointer">
                 <FiRepeat className='w-5 h-5' />
               </button>
             </div>

          {/* controles de la cancion con botones de play, pause, next, previous */}
          <div className='w-full h-auto flex flex-row gap-2 items-center justify-end'>
                      <button className="hover:text-blue-500 transition-colors duration-500 cursor-pointer">
                      <FiShare2 className='w-4 h-4' />
                      </button>
                      <button className="hover:text-blue-500 transition-colors duration-500 cursor-pointer">
                      <FiHeart className='w-4 h-4' />
                      </button>
                      <button className="hover:text-blue-500 transition-colors duration-500 cursor-pointer">
                      <FiPlusSquare className='w-4 h-4' />
                      </button>
                        <div className="w-24 h-auto flex flex-row items-center justify-center gap-2">
                            <button 
                              className={`transition-colors duration-500 cursor-pointer ${
                                volume === 0 
                                  ? 'text-red-500 hover:text-red-600' 
                                  : 'hover:text-blue-500'
                              }`}
                              onClick={() => setVolume(volume === 0 ? 50 : 0)}
                            >
                              <FiMusic className='w-4 h-4' />
                            </button>
                            <div 
                              className="w-20 h-6 flex items-center cursor-pointer group relative"
                              ref={volumeBarRef}
                              onClick={(e) => {
                                if (!volumeBarRef.current) return;
                                const rect = volumeBarRef.current.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const width = rect.width;
                                const percentage = Math.min(Math.max((x / width) * 100, 0), 100);
                                setVolume(Math.round(percentage));
                              }}
                            >
                              <div className="absolute w-full h-1 bg-white/20 border border-gray-300 rounded-2xl" />
                              <div 
                                className="absolute h-1 bg-blue-500 rounded-full transition-all"
                                style={{ width: `${volume}%` }}
                              />
                              <div 
                                className="absolute h-3 w-3 bg-blue-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ left: `calc(${volume}% - 6px)` }}
                              />
                            </div>
                        </div>

                       {/* boton de maximizar */}
                       <Link href='/fullplayer' 
                          className="hover:text-blue-500 transition-colors duration-500 cursor-pointer"
                        >
                          <FiMaximize className="w-4 h-4" />
                          
                       </Link>
          </div>

          </div>
        </div>
      </>
    )
}