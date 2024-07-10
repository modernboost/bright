import { useContext, useReducer, useState } from "react";
import Button from "../Button/Button";
import PlayerProgress from "./PlayerProgress";
import { PlayerContext } from "./Player";
import Popup from "../Popup/Popup";

export default function PlayerControls() {
	const { dispatch, state } = useContext(PlayerContext);

	function forward() {
		dispatch({ type: "forward" });
	}

	function backward() {	
		dispatch({ type: "backward" });
	}

	function togglePlaying() {
		dispatch({ type: "toggle_playing" });
	}

	return (
		<>
			<div>
				<PlayerProgress />
			</div>
			<div>
				{/* playe and pause btn */}
				<Button onClick={togglePlaying}> Play </Button>

				{/* Go to Next video  */}
				<Button onClick={forward}> Forward </Button>

				{/* Go to Previous Video */}
				<Button> Backward </Button>

				{/* Quality */}
				<Button> Quality </Button>
				<Popup>
					<div>Quality 128</div>
					<div>Quality 248</div>
					<div>Quality 360</div>
					<div>Quality 480</div>
					<div>Quality 720</div>
				</Popup>

				{/* Playback Speed */}
				<Button> Speed </Button>
				<Popup>
					<div>0.25X</div>
					<div>0.5X</div>
					<div>o.75X</div>
					<div>1X default</div>
					<div>1.25X</div>
					<div>1.5X</div>
					<div>1.75X</div>
					<div>2X</div>
				</Popup>

				{/* Full screen */}
				<Button> Full screen </Button>

				{/* Picture in Picture mode */}
				<Button> Stick tab </Button>

				{/* Mute and Unmute */}
				<Button> mute </Button>

				{/* Sound Progress bar */}
				<progress />
			</div>
		</>
	);
}
