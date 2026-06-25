// Ambil elemen
const playBtn = document.getElementById("playBtn");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");

// Audio player
const audio = new Audio();

// Daftar lagu sementara
const songs = [
    {
        title: "Halfway Heart",
        artist: "Liana Flores",
        file: "music/halfwayheart.flac"
    },
    {
        title: "Sway",
        artist: "Whirr",
        file: "music/sway.flac"
    }
];

let currentSong = 0;
let isPlaying = false;

// Memuat lagu
function loadSong(index) {
    audio.src = songs[index].file;

    if (title) title.textContent = songs[index].title;
    if (artist) artist.textContent = songs[index].artist;
}

// Play / Pause
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = "▶";
    } else {
        audio.play();
        playBtn.textContent = "⏸";
    }

    isPlaying = !isPlaying;
}

// Tombol play
if (playBtn) {
    playBtn.addEventListener("click", togglePlay);
}

// Progress bar
audio.addEventListener("timeupdate", () => {
    if (!progress || !audio.duration) return;

    progress.value =
        (audio.currentTime / audio.duration) * 100;
});

// Geser progress bar
if (progress) {
    progress.addEventListener("input", () => {
        audio.currentTime =
            (progress.value / 100) * audio.duration;
    });
}

// Lagu selesai
audio.addEventListener("ended", () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();
});

// Search lagu
function searchSongs(keyword) {
    return songs.filter(song =>
        song.title
            .toLowerCase()
            .includes(keyword.toLowerCase())
    );
}

// Contoh penggunaan
console.log(searchSongs("half"));

// Load lagu pertama
loadSong(currentSong);