// Get elements
const videoPlayer = document.getElementById("videoPlayer");
const playPauseBtn = document.getElementById("playPause");
const rewindBtn = document.getElementById("rewind");
const forwardBtn = document.getElementById("forward");
const fullscreenBtn = document.getElementById("fullscreen");

// Play and Pause
playPauseBtn.addEventListener("click", () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = "Pause";
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = "Play";
    }
});

// Rewind 10 seconds
rewindBtn.addEventListener("click", () => {
    videoPlayer.currentTime -= 10;
});

// Forward 10 seconds
forwardBtn.addEventListener("click", () => {
    videoPlayer.currentTime += 10;
});

// Fullscreen
fullscreenBtn.addEventListener("click", () => {
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.webkitRequestFullscreen) { // Safari
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) { // IE/Edge
        videoPlayer.msRequestFullscreen();
    }
});
