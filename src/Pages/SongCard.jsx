

import React, { useState, useRef, useEffect } from 'react';

const SongCard = ({ song, onSongClick}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  
  const handlePlayPause = () => {
    if (isPlaying) {
      // Pause the current song:
      audioRef.current.pause();
    } else {
      // Pause any currently playing song:
      const allAudioElements = document.querySelectorAll('audio');
      allAudioElements.forEach(audio => audio.pause());
  
      // Play the current song:
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  

  const handleDownload = () => {
     const a = document.createElement('a');
         a.href = song.url;
          a.download = song.title + '.mp3';
         document.body.appendChild(a);
         a.click();
         document.body.removeChild(a);
       };

  return (
    <div className="song-card ">
       <img src={song.imageUrl} alt={song.title} class="left-8" /><br/>
      <audio ref={audioRef} src={song.url} /><br/>

      <h3 class="font-semibold ">{song.title}</h3><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      

      
      <h3 class="font-semibold ">{song.moviename}</h3><br/>&nbsp;&nbsp;&nbsp;&nbsp;


      <h3 className="font-semibold">{song.musicby}</h3><br/> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
     
     <div class="text-2xl font-bold ">
     <button class="hover:shadow-md h-12 w-32 bg-gray-500 rounded-2xl"
      onClick={handlePlayPause}>{isPlaying ? 'pause⏯️':'play▶️'}</button> &nbsp;&nbsp;&nbsp;&nbsp;
     <button class="hover:shadow-md h-12 w-40 bg-gray-500 rounded-2xl" onClick={handleDownload}>Download⬇ </button>
     </div>
      
    </div>
  );
};

export default SongCard;