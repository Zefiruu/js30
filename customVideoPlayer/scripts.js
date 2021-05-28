const videoPlayer = document.querySelector(".player__video");

// Play/Pause Button
const playBtn = document.querySelector(".player__button");
const handlePlayClick = () =>
	videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();

playBtn.addEventListener("click", handlePlayClick);
videoPlayer.addEventListener("click", handlePlayClick);
window.addEventListener("keydown", ({ code }) =>
	code === "Space" ? handlePlayClick() : 0
);
videoPlayer.addEventListener("play", () => (playBtn.innerHTML = "| |"));
videoPlayer.addEventListener("pause", () => (playBtn.innerHTML = "►"));

// Volume Slider
const volumeSlider = document.querySelector("input[name='volume']");
const handleVolume = ({ buttons }) => {
	if (buttons === 1) {
		videoPlayer.volume = volumeSlider.value;
	}
};

volumeSlider.addEventListener("mousemove", handleVolume);

// Progress bar
const progressBar = document.querySelector(".progress__filled");
const handleProgressChange = () => {
	let progressPercentage =
		(videoPlayer.currentTime / videoPlayer.duration) * 100;

	progressBar.style.flexBasis = `${progressPercentage}%`;
};

videoPlayer.addEventListener("timeupdate", handleProgressChange);
