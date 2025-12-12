import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Sample royalty-free music URL (Gentle piano or ambient)
  // Using a reliable placeholder sound file
  const musicUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112762.mp3";

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className={`bg-white rounded-full shadow-lg border border-slate-100 p-2 flex items-center gap-2 transition-all duration-300 ${isPlaying ? 'w-auto px-4' : 'w-12 h-12 justify-center'}`}>
        <audio ref={audioRef} src={musicUrl} loop />
        
        <button
          onClick={togglePlay}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
        </button>

        {isPlaying && (
          <div className="flex items-center gap-2 animate-fade-in">
             <div className="hidden sm:flex flex-col">
                <span className="text-xs font-semibold text-slate-800">Ambient Lo-Fi</span>
                <span className="text-[10px] text-slate-500">Relaxing Vibes</span>
             </div>
            <button
              onClick={toggleMute}
              className="text-slate-400 hover:text-slate-600 ml-2"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        )}
        
        {!isPlaying && (
           <span className="absolute -top-1 -right-1 flex h-3 w-3">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
           </span>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;