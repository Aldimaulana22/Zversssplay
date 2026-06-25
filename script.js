const playBtn = document.getElementById("playBtn");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const cover = document.getElementById("cover");

const audio = new Audio();

const songs = [
{
title:"Halfway Heart",
artist:"Liana Flores",
file:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
cover:"https://picsum.photos/100?1"
},
{
title:"Sway",
artist:"Whirr",
file:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
cover:"https://picsum.photos/100?2"
}
];

let currentSong = 0;
let isPlaying = false;

function playSong(index){

currentSong = index;

audio.src = songs[index].file;

title.textContent = songs[index].title;
artist.textContent = songs[index].artist;
cover.src = songs[index].cover;

audio.play();

playBtn.textContent = "⏸";
isPlaying = true;
}

playBtn.addEventListener("click",()=>{

if(!audio.src){
playSong(0);
return;
}

if(isPlaying){
audio.pause();
playBtn.textContent="▶";
}else{
audio.play();
playBtn.textContent="⏸";
}

isPlaying=!isPlaying;

});

audio.addEventListener("timeupdate",()=>{

if(audio.duration){

progress.value=
(audio.currentTime/audio.duration)*100;

}

});

progress.addEventListener("input",()=>{

if(audio.duration){

audio.currentTime=
(progress.value/100)*audio.duration;

}

});