export function secondsToTimeString(seconds: number) {
	const weekSeconds = 7 * 24 * 60 * 60;
	const daySeconds = 24 * 60 * 60;

	const weeks = Math.floor(seconds / weekSeconds);
	const days = Math.floor((seconds % (7 * 24 * 3600)) / (24 * 3600));
	const hours = Math.floor((seconds % (24 * 3600)) / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secs = Math.floor(seconds % 60);

	const formattedWeeks = weeks > 0 ? `${weeks}w ` : "";
	const formattedDays = days > 0 ? `${days}d ` : "";
	const formattedHours = hours > 0 ? `${String(hours).padStart(2, "0")}:` : "";
	const formattedMinutes =
		minutes > 0 || hours > 0 ? `${String(minutes).padStart(2, "0")}:` : "";
	const formattedSeconds = `${String(secs).padStart(2, "0")}`;
	return `${formattedWeeks}${formattedDays}${formattedHours}${formattedMinutes}${formattedSeconds}`.trim();
}

export function isFullScreen(el) {
	return !!(
		document.fullscreenElement ||
		document.mozFullScreenElement ||
		document.webKitFullScreenElement ||
		document.msFullScreenElement
	);
}
export function requestFullScreen(el) {
	if (el.requestFullscreen) {
		el.requestFullscreen();
	} else if (el.msRequestFullscreen) {
		el.msRequestFullscreen();
	} else if (el.mozRequestFullScreen) {
		el.mozRequestFullScreen();
	} else if (el.webkitRequestFullScreen) {
		el.webkitRequestFullScreen();
	}
}
export function exitFullScreen(el) {
	if (document.exitFullScreen) {
		document.exitFullSceen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullScreen) {
		document.webkitExitFullScreen();
	}
}
export function registerClickEvents({
	playerRef,
	getPlayer,
	event,
	dispatch,
	setPlayer,
}) {
	const player = playerRef.current;
	console.log(playerRef.current);
	console.log(event);
	
	if (document.activeElement !== player) {
		return; // Exit if video is not focused
	}
	console.log(event);
	switch (event.code) {
		case "Space":
			dispatch({ type: "toggle_playing" });
			break;
		case "ArrowRight":
			dispatch({ type: "forward", value: 5 });
			break;
		case "ArrowLeft":
			dispatch({ type: "backward", value: 5 });
			break;
		case "ArrowUp":
			dispatch({ type: "volumn_set", value: Number(player.volume) + 0.1 });
			break;
		case "ArrowDown":
			dispatch({ type: "volumn_set", value: Number(player.volume) - 0.1 });
			break;
		case "KeyF":
			dispatch({ type: "toggle_fullscreen" });
			break;
		case "Enter":
			dispatch({ type: "toggle_fullscreen" });
			break;
		case "KeyM":
			dispatch({ type: "toggle_muted" });
			break;
		default:
			if (event.code.startsWith("Digit")) {
				const digit = event.code.charAt(5);
				dispatch({ type: "forward", value: (digit / 10) * player.duration });
			}
			break;
	}
}

export function getLocaleState() {
	const res = JSON.parse(localStorage.getItem("player_local_stae") ?? "{}");
	console.log({ res });
	return res;
}
export function setLocaleState(state: {
	volumn: string;
	playback: number;
	quality: [];
}) {
	localStorage.setItem("player_local_stae", JSON.stringify(state));
}
