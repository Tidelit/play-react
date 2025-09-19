import { create } from 'zustand'

interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
  image: string;
}

const songList: Song[] = [
  {
    id: 1,
    title: "Mañana juega colombia",
    artist: "Miguel Angel Jaimes",
    url: "/Audio/song1.mp3",
    image: "/imagenes/Song/Song1.jpg"
  },
  {
    id: 2,
    title: "PUNK PUNK PUNK",
    artist: "Dempserayo",
    url: "/Audio/song2.mp3",
    image: "/imagenes/Song/Song2.jpg"
  }
];

interface MusicStore {
  currentSong: Song;
  isPlaying: boolean;
  progress: number;
  volume: number; 
  duration: number;
  currentTime: number;
  songList: Song[];
  audioElement: HTMLAudioElement | null;
  setCurrentSong: (song: Song) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setProgress: (progress: number) => void;
  setVolume: (volume: number) => void;
  setDuration: (duration: number) => void;
  setCurrentTime: (time: number) => void;
  setAudioElement: (audio: HTMLAudioElement) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  togglePlay: () => void;
  seekTo: (time: number) => void;
}

export const useMusicStore = create<MusicStore>((set, get) => ({
  currentSong: songList[0],
  isPlaying: false,
  progress: 0,
  volume: 50,
  duration: 0,
  currentTime: 0,
  songList: songList,
  audioElement: null,
  
  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setProgress: (progress) => set({ progress }),
  setVolume: (volume) => {
    const { audioElement } = get();
    if (audioElement) {
      audioElement.volume = volume / 100;
    }
    set({ volume });
  },
  setDuration: (duration) => set({ duration }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setAudioElement: (audioElement) => {
    const { volume } = get();
    if (audioElement) {
      audioElement.volume = volume / 100;
    }
    set({ audioElement });
  },
  
  handleNext: () => {
    const { currentSong, songList, audioElement } = get();
    const currentIndex = songList.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songList.length;
    const nextSong = songList[nextIndex];
    set({ currentSong: nextSong });
    if (audioElement) {
      audioElement.src = nextSong.url;
      audioElement.play();
      set({ isPlaying: true });
    }
  },
  
  handlePrevious: () => {
    const { currentSong, songList, audioElement } = get();
    const currentIndex = songList.findIndex(song => song.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + songList.length) % songList.length;
    const previousSong = songList[previousIndex];
    set({ currentSong: previousSong });
    if (audioElement) {
      audioElement.src = previousSong.url;
      audioElement.play();
      set({ isPlaying: true });
    }
  },

  togglePlay: () => {
    const { isPlaying, audioElement } = get();
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      set({ isPlaying: !isPlaying });
    }
  },

  seekTo: (time) => {
    const { audioElement } = get();
    if (audioElement) {
      audioElement.currentTime = time;
    }
  }
}));

