import { useContext, useEffect, useReducer, useState } from "react";
import Button from "../Button/Button";
import PlayerProgress from "./PlayerProgress";
import { PlayerContext } from "./Player";
import Popup from "../Popup/Popup";
import {
	IconMaximize,
	IconPlayerPause,
	IconPlayerPlay,
	IconRewindBackward10,
	IconRewindForward10,
	IconVolume,
	IconVolumeOff,
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
		dispatch({ type: "toggle_fullscreen" });
	}
	function setPlayback(rate: number) {
		dispatch({ type: "playback_set", value: rate });
	}
	function setBitRate(bitRate) {
		dispatch({ type: "bitrate_set", value: bitRate });
	}
	function setAutobitRate() {
		dispatch({ type: "autobitrate_set" });
	}

	const speedList = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

	return (
		<div className='video-controls-wrapper'>
			<PlayerProgress />
			<div className='video-options-wrapper'>
				{/* playe and pause btn */}
				<Button onClick={togglePlaying}>
					{playerCtx.state == "PLAYING" ? (
						<IconPlayerPause />
					) : (
						<IconPlayerPlay />
					)}
				</Button>
				<div className='progress-display-text'>
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
				<Button className='ms-auto'>
					{/* {playerCtx?.currentBitRate?.resolution} */}
					{playerCtx?.autoBitRate && "Auto"}
				</Button>
				<Popup trigger='hover'>
					<div className='text-slate-600 '>
						<div
							className=' hover:cursor-pointer hover:bg-slate-100'
							key={0}
							onClick={setAutobitRate}
						>
							Auto
						</div>
						{playerCtx?.bitRates?.map((bitRate, i) => (
							<div
								className={`hover:cursor-pointer hover:bg-slate-200 ${
									bitRate.id == playerCtx?.currentBitRate?.id
										? "bg-slate-200"
										: ""
								} `}
								key={++i}
								onClick={() => setBitRate(bitRate)}
							>
								{bitRate.resolution}
							</div>
						))}
					</div>
				</Popup>

				{/* Playback Speed */}
				<Button> {playerCtx?.playBackRate ?? "1"}X </Button>
				<Popup trigger='hover'>
					<div className='text-slate-600'>
						{speedList.map((speed) => (
							<div
								className={`hover:cursor-pointer hover:bg-slate-100 ${
									speed == 1 && "bg-slate-200"
								}`}
								onClick={() => setPlayback(0.25)}
							>
								{speed} {speed === 1 && "Normal"}
							</div>
						))}
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
