import { useContext, useEffect, useReducer, useState } from "react";
import Button from "../Button/Button";
import PlayerProgress from "./PlayerProgress";
import { PlayerContext } from "./Player";
import Popup from "../Popup/Popup";
import {
	IconMaximize,
	IconPlayerPause,
	IconPlayerPlay,
	IconPlayerSkipBack,
	IconPlayerSkipForward,
	IconPlayerSkipForwardFilled,
	IconPlayerStop,
	IconPlayerStopFilled,
	IconRewindBackward10,
	IconRewindForward10,
	IconVolume,
	IconVolume3,
	IconVolumeOff,
	IconWindowMinimize,
} from "@tabler/icons-react";
import { secondsToTimeString } from "./helpers";

export default function PlayerControls() {
	const { dispatch, player: playerCtx } = useContext(PlayerContext);

	function forward() {
		dispatch({ type: "forward", value: 10 });
	}

	function backward() {
		dispatch({ type: "backward", value: 10 });
	}

	function togglePlaying() {
		dispatch({ type: "toggle_playing" });
	}
	function toggleMuted() {
		dispatch({ type: "toggle_muted" });
	}
	function setVolumn(volumn) {
		dispatch({ type: "volumn_set", value: volumn });
	}
	function setFullScreen() {
		dispatch({ type: "fullscreen" });
	}
	function setPlayback(rate: number) {
		dispatch({ type: "playback_set", value: rate });
	}

	return (
		<div className='video-controls-wrapper'>
			<PlayerProgress />
			<div className='video-options-wrapper'>
				{/* playe and pause btn */}
				<Button onClick={togglePlaying}>
					{" "}
					{playerCtx.state == "PLAYING" ? (
						<IconPlayerPause />
					) : (
						<IconPlayerPlay />
					)}{" "}
				</Button>
				<div>
					{secondsToTimeString(playerCtx.position)} / {""}
					{secondsToTimeString(playerCtx.duration)}
				</div>

				{/* Go to Previous Video */}
				<Button onClick={backward}>
					<IconRewindBackward10 />
				</Button>

				{/* Go to Next video  */}
				<Button onClick={forward}>
					<IconRewindForward10 />
				</Button>

				{/* Mute and Unmute */}
				<Button onClick={() => toggleMuted()}>
					{playerCtx.muted ? <IconVolumeOff /> : <IconVolume />}{" "}
				</Button>

				{/* <Popup placement='top'> */}
				<div>
					{/* <input
							step={0.1}
							min={0}
							max={1}
							onChange={(event) => setVolumn(event.target.value)}
							defaultValue={playerCtx.volumn}
							style={{
								top: "100%",
								transform: "rotate(-90deg) ",
								transformOrigin: "top left ",
							}}
							type='range'
							className='relative w-36'
						/> */}
					<input
						className='w-20'
						type='range'
						name=''
						id=''
						step={0.1}
						min={0}
						max={1}
						onChange={(event) => setVolumn(event.target.value)}
						defaultValue={playerCtx.volumn}
					/>
				</div>
				{/* </Popup> */}

				{/* Quality */}
				<Button  className='ms-auto'>
					{playerCtx?.bitRates?.find((bitRate) => bitRate.current)
						?.resolution ?? "Auto"}{" "}
				</Button>
				<Popup trigger='hover'>
					{playerCtx?.bitRates?.map((bitRate, i) => (
						<div key={i} onClick={() => playerCtx.setBitRate(i)}>
							{bitRate.resolution}
						</div>
					))}
				</Popup>

				{/* Playback Speed */}
				<Button> {playerCtx?.playBackRate ?? "1"}X </Button>
				<Popup trigger='hover'>
					<div className="text-slate-600">
						<div className="hover:cursor-pointer hover:bg-slate-100" onClick={() => setPlayback(0.25)}>0.25</div>
						<div className="hover:cursor-pointer hover:bg-slate-100" onClick={() => setPlayback(0.5)}>0.5</div>
						<div className="hover:cursor-pointer hover:bg-slate-100" onClick={() => setPlayback(0.72)}>o.75</div>
						<div className="hover:cursor-pointer hover:bg-slate-100" onClick={() => setPlayback(1)}>1 Normal</div>
						<div className="hover:cursor-pointer hover:bg-slate-100" onClick={() => setPlayback(1.25)}>1.25</div>
						<div className="hover:cursor-pointer hover:bg-slate-100" onClick={() => setPlayback(1.5)}>1.5</div>
						<div className="hover:cursor-pointer hover:bg-slate-100" onClick={() => setPlayback(1.75)}>1.75</div>
						<div className="hover:cursor-pointer hover:bg-slate-100" onClick={() => setPlayback(2)}>2</div>
					</div>
				</Popup>

				{/* Picture in Picture mode */}
				{/* <Button>
					<IconWindowMinimize />
				</Button> */}

				{/* Full screen */}
				<Button onClick={setFullScreen}>
					<IconMaximize />
				</Button>
			</div>
		</div>
	);
}
