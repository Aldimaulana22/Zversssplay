const playBtn = document.getElementById("playBtn");

let playing = false;

playBtn.addEventListener("click", () => {
    playing = !playing;

    playBtn.textContent = playing ? "⏸" : "▶";
});
