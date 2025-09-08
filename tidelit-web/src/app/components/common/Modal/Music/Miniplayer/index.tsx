import { FiMaximize, FiMusic, FiPlusSquare, FiShare2 } from "react-icons/fi"
import { FiHeart } from "react-icons/fi"
import { FiShuffle } from "react-icons/fi"
import { FiSkipBack } from "react-icons/fi"
import { FiSkipForward } from "react-icons/fi"
import { FiRepeat } from "react-icons/fi"
import { FiPlay } from "react-icons/fi"
import { useState, useRef } from 'react'
import Image from 'next/image'

      
export const Miniplayer = () => {
    const [progress, setProgress] = useState(0)
    const [volume, setVolume] = useState(50) // Default volume 50%
    const progressBarRef = useRef<HTMLDivElement>(null)
    const volumeBarRef = useRef<HTMLDivElement>(null)


    return (
      <>
        <div className=" w-full h-auto flex flex-col gap-8">
          <div 
          className='w-full flex flex-row relative cursor-pointer group' ref={progressBarRef} onClick={(e) => {
            if (!progressBarRef.current) return
            const rect = progressBarRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const width = rect.width
            const percentage = Math.min(Math.max((x / width) * 100, 0), 100)
            setProgress(percentage)
          }}
        >
          <div 
            className='absolute w-full h-2 bg-white/20 top-3 rounded-lg shadow-md'
          />
          <div 
            className='absolute h-2 bg-gradient-to-r from-purple-500 to-blue-500 top-3 rounded-lg shadow-md transition-all'
            style={{ width: `${progress}%` }}
          />
          <div 
            className='absolute h-4 w-4 bg-white rounded-full shadow-lg -top-1 opacity-0 group-hover:opacity-100 transition-opacity'
            style={{ left: `calc(${progress}% - 8px)`, top: '8px' }}
          />
          </div>

          <div className="w-full h-24  flex justify-center items-center bg-white rounded-b-2xl p-4">
          {/* Contenido de la cancion */}
          <div className="w-full h-full flex flex-row gap-2 justify-start items-center">
            <div className="w-14 h-14 rounded-lg overflow-hidden">
              <Image 
                src='/imagenes/Song/Song3.jpg' 
                alt='Song Image' 
                className="w-full h-full object-cover"
                width={96}
                height={96}
              />
            </div>
            <p className="flex flex-col ">
              <span className="text-lg font-bold mt-2">Cancion</span>
              <span className="text-sm text-gray-500 -mt-2">Artista</span>
            </p>
          </div>

          {/* Boton de shuffle, skip back, play, skip forward, repeat */}
          <div className='w-full  h-auto flex flex-row items-center justify-center gap-2 '>
                      <button>
                      <FiShuffle className='w-5 h-5' />
                      </button>
                      <button>
                      <FiSkipBack className='w-5 h-5' />
                      </button>
                      <button className='w-14 h-14 transition-colors duration-500 cursor-pointer bg-gradient-to-b from-[#E302E6] via-[#2D49D3] to-[#06D4C9] flex justify-center items-center rounded-full text-white border-2 border-white hover:bg-bg-gradient-to-b hover:from-[#E302E6]/50 hover:via-[#2D49D3]/20 hover:to-[#06D4C9]/20'>
                      <FiPlay className='w-6 h-6' />
                      </button>
                      <button>
                      <FiSkipForward className='w-5 h-5' />
                      </button>
                      <button>
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
                            className="hover:text-blue-500 transition-colors duration-500 cursor-pointer"
                            onClick={() => setVolume(volume === 0 ? 50 : 0)} // Toggle mute
                          >
                            <FiMusic className='w-4 h-4' />
                          </button>
                          <div 
                            className="w-20 h-6 flex items-center cursor-pointer group relative"
                            ref={volumeBarRef}
                            onClick={(e) => {
                              if (!volumeBarRef.current) return
                              const rect = volumeBarRef.current.getBoundingClientRect()
                              const x = e.clientX - rect.left
                              const width = rect.width
                              const percentage = Math.min(Math.max((x / width) * 100, 0), 100)
                              setVolume(Math.round(percentage))
                            }}
                          >
                            <div className="absolute w-full h-1 bg-gray-200 rounded-full" />
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
                      <button 
                        className="hover:text-blue-500 transition-colors duration-500 cursor-pointer"
                      >
                        <FiMaximize />
                      </button>
          </div>

          </div>
        </div>
      </>
    )
}