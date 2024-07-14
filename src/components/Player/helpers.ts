export function secondsToTimeString(seconds: number) {
	const weeks = Math.floor(seconds / (7 * 24 * 3600));
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
