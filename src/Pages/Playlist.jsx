import React, { useState, useRef } from 'react';
import SongCard from './SongCard';

const Playlist = () => {
  
    
  const [currentSong, setCurrentSong] = useState(null);
  const songList = [
    {
      id: 1,
      title: 'Aathangara-Orathil',
      musicby: ' 🎵Musicby Harris Jayaraj',
      moviename:' 🎥 Movie Yaan-2014',
      url: 'src/assets/Aathangara-Orathil.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180', 
    },
    //song1 ended
    {
      id: 2,
      title: 'Vaa-Vasuki-MassTamilan',
      musicby: ' 🎵Musicby D.Imman & Shivam',
      moviename:' 🎥Movie Seeru-2020',
      url: 'src/assets/Azhagiya-Asura-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song2 ended
    {
      id: 3,
      title: 'Dooram-Nillu-MassTamilan',
      musicby: ' 🎵Musicby 	Anirudh Ravichander',
      moviename:' 🎥Movie VIP 2-2017',
      url: 'src/assets/Dooram-Nillu-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song3 ended
    {
      id: 4,
      title: 'En-Peru-Meenakumari',
      musicby: '🎵 Musicby Devi Sri Prasad',
      moviename:' 🎥Movie Kanthaswamy-2009',
      url: 'src/assets/En-Peru-Meenakumari-MassTamilan.io.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song4 ended
    {
      id: 5,
      title: 'Enna-Solla-Pogirai',
      musicby: ' 🎵Musicby A. R. Rahman',
      moviename:'🎥 Movie Kandukondain-2000',
      url: 'src/assets/Enna-Solla-Pogirai.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song5 ended
    {
      id: 6,
      title: 'Ennadi-Maayavi-Nee',
      musicby: ' 🎵Musicby  Santhosh Narayanan',
      moviename:'🎥 Movie Vada Chennai -2018',
      url: 'src/assets/Ennadi-Maayavi-Nee-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song6 ended
    {
      id: 7,
      title: 'Irukkana-Idupu-Irukkana',
      musicby: ' 🎵Musicby  Harris jayaraj',
      moviename:'🎥 Movie Nanban -2012',
      url: 'src/assets/Irukkana-Idupu-Irukkana-MassTamilan.fm.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song7 ended
    {
      id: 8,
      title: 'Kaattu-Sirukki',
      musicby: ' 🎵Musicby  A.R.Rahman',
      moviename:'🎥 Movie Raavanan-2010',
      url: 'src/assets/Kaattu-Sirukki.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song8 ended
    {
      id: 9,
      title: 'Kodi-Aruvi',
      musicby: ' 🎵Musicby  Sean Roldan',
      moviename:'🎥 Movie Mehandi circus-2019',
      url: 'src/assets/Kodi-Aruvi-MassTamilan.org.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song9 ended
    {
      id: 10,
      title: 'Kummiyadi-Penne',
      musicby: ' 🎵Musicby  Harris jayaraj',
      moviename:'🎥 Movie Mehandi Chellamae-2004',
      url: 'src/assets/Kummiyadi-Penne-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song10 ended
    {
      id: 11,
      title: 'Mother-Song',
      musicby: ' 🎵Musicby Yuvan Shankar Raja',
      moviename:'🎥 Movie  Valimai-2022',
      url: 'src/assets/Mother-Song-MassTamilan.fm.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song11 ended
    {
      id: 12,
      title: 'Naa-Kaakinaada',
      musicby: ' 🎵Musicby 	S. Thaman',
      moviename:'🎥 Movie Sindhanai Sei-2009',
      url: 'src/assets/Naa-Kaakinaada-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song12 ended
    {
      id: 13,
      title: 'Naan-Sonnadhum',
      musicby: ' 🎵Musicby G.V.Prakash',
      moviename:'🎥 Movie Mayakkam Enna-2011',
      url: 'src/assets/Naan-Sonnadhum-Mazhai-Vandhucha.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song13 ended
    {
      id: 14,
      title: 'Neenga-Mudiyuma',
      musicby: ' 🎵Musicby Sid sriram',
      moviename:'🎥 Movie pyscho-2020',
      url: 'src/assets/Neenga-Mudiyuma-MassTamilan.io.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song14 ended
    {
      id: 15,
      title: 'Nesamaguren',
      musicby: ' 🎵Musicby Stephen Zechariah',
      moviename:'🎥 Movie Album song-2021',
      url: 'src/assets/Nesamaguren-MassTamilan.fm.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song15 ended
    {
      id: 16,
      title: 'Oo-Solriya-Oo-Oo-Solriya',
      musicby: ' 🎵Musicby Devi Sri Prasad',
      moviename:'🎥 Movie Pushpa-2021',
      url: 'src/assets/Oo-Solriya-Oo-Oo-Solriya-MassTamilan.fm.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song16 ended
    {
      id: 17,
      title: 'Oru-Manam',
      musicby: ' 🎵Musicby 	Harris Jayaraj',
      moviename:'🎥 Movie Dhruva Natchathiram-2013',
      url: 'src/assets/Oru-Manam-MassTamilan.io.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song17 ended
    {
      id: 18,
      title: 'Pattamarangal',
      musicby: ' 🎵Musicby 	Hiphop Tamizha',
      moviename:'🎥 Movie Vantha Rajavathaan Varuven-2018',
      url: 'src/assets/Pattamarangal-MassTamilan.org.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song18 ended
    {
      id: 19,
      title: 'Saaral-Mazhaiyai',
      musicby: ' 🎵Musicby 	Stephen Zechariah',
      moviename:'🎥 Movie Album song-2013',
      url: 'src/assets/Saaral-Mazhaiyai-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song19 ended
    {
      id: 20,
      title: 'Sonthamulla',
      musicby: ' 🎵Musicby Siddhu Kumar',
      moviename:'🎥 Movie Anandham Vilayadum Veedu-2021',
      url: 'src/assets/Sonthamulla-Vazhkkai-MassTamilan.fm.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song20 ended
    {
      id: 21,
      title: 'Thamarai-Poovukkum',
      musicby: ' 🎵Musicby 	Vidyasagar',
      moviename:'🎥 Movie Pasumpon-1995',
      url: 'src/assets/Thamarai-Poovukkum-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song21 ended
    {
      id: 22,
      title: 'The-Karma-theme',
      musicby: ' 🎵Musicby 	Anirudh Ravichander',
      moviename:'🎥 Movie U Turn-2019',
      url: 'src/assets/The-Karma-Theme-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song22 ended
    {
      id: 23,
      title: 'Theruvorom',
      musicby: ' 🎵Musicby 	Stephen Zechariah',
      moviename:'🎥 Movie Avathaaram Series-2019',
      url: 'src/assets/Theruvorom-MassTamilan.fm.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song23 ended
    {
      id: 24,
      title: 'Uyir-Uruvaatha-Uru',
      musicby: ' 🎵Musicby 	Sam.CS',
      moviename:'🎥 Movie Iravukku Aayiram Kangal-2018',
      url: 'src/assets/Uyir-Uruvaatha-Uru-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song24 ended
    {
      id: 25,
      title: 'Inkem-Inkem-Inkem-Kaavaale',
      musicby: ' 🎵Musicby 	Sid sriram',
      moviename:'🎥 Movie Geetha govintham-2018',
      url: 'src/assets/Inkem-Inkem-Inkem-Kaavaale-MassTamilan.com.mp3',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.-qoAOD88HUBjM475sjlx-AHaHa&pid=Api&P=0&h=180',
    },
    //song25 ended
    
    

  ];

  const handleSongClick = (songId) => {
    const selectedSong = songList.find((song) => song.id === songId);
    setCurrentSong(selectedSong);
  };

  return (
    <div>
      <h1><center><img src="https://tse3.mm.bing.net/th?id=OIP.puyehLHJFBbQXkj1OhcSNAHaHa&pid=Api&P=0&h=180" alt="" />
      <br/></center></h1>
      {songList.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          onSongClick={handleSongClick}
        />
      ))}
    </div>
  );
};

export default Playlist;


