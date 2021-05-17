function clock() {
	setTimeout(() => {
		let now = new Date(),
			sec = now.getSeconds() * 6 - 90,
			min = now.getMinutes() * 6 - 90,
			hour = now.getHours() * 30 - 90;
		document.getElementById("second-hand").style.transform =
			"rotate(" + sec + "deg)";
		document.getElementById("minute-hand").style.transform =
			"rotate(" + min + "deg)";
		document.getElementById("hour-hand").style.transform =
			"rotate(" + hour + "deg)";

		console.log(min);
		if (sec < 1000) {
			clock();
		}
	}, 1000);
}
clock();
