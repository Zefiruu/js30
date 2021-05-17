function playSound(sound, currentTimez = 0) {
	let audio = new Audio("media/" + sound + ".mp3");
	audio.currentTime = currentTimez;
	audio.play();
}
let scale = (key) => {
	let element = document.getElementById(key);
	element.classList.add("scale");
	setTimeout(() => element.classList.remove("scale"), 100);
};

document.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "d":
			playSound("kiero");
			break;
		case "f":
			playSound("nya");
			break;
		case "j":
			playSound("ooh", 1);
			break;
		case "k":
			playSound("yoshi");
			break;
	}
	scale(e.key);
});
