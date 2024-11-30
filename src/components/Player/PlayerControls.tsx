import { useContext, useEffect, useReducer, useState } from "react";
import { PlayerContext } from "./Player";
import Popup from "../Popup/Popup";
import styles from "./Player.module.css";
import {
	IconMaximize,
	IconPlayerPauseFilled,
	IconPlayerPlayFilled,
	IconVolume,
	IconVolumeOff,
} from "@tabler/icons-react";
import { secondsToTimeString } from "./helpers";
import Progress from "../Progress/Progress";

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
	function setPosition(e) {
		dispatch({ type: "position_set", value: e.target.value });
	}
	const speedList = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

	return (
		<div className={styles.videoControlsWrapper}>
			<Progress
				onChange={setPosition}
				max={playerCtx.duration}
				value={playerCtx.position}
				preload={playerCtx.loadedPosition}
			/>
			<div className={styles.videoOptionsWrapper}>
				{/* playe and pause btn */}
				<div className={styles.btn} type='button' onClick={togglePlaying}>
					{playerCtx.state == "PLAYING" ? (
						<IconPlayerPauseFilled />
					) : (
						<IconPlayerPlayFilled />
					)}
				</div>
				<div className={styles.progressDisplayText}>
					{secondsToTimeString(playerCtx.position ?? 0)} / {""}
					{secondsToTimeString(playerCtx.duration ?? 0)}
				</div>

				{/* Go to Previous Video */}
				{/* <div
					onClick={backward}
					className={styles.btn + " " + styles.smHidden}
					type='button'
				>
					<IconRewindBackward10 />
				</div> */}

				{/* Go to Next video  */}
				{/* <div
					onClick={forward}
					type='button'
					className={styles.btn + " " + styles.smHidden}
				>
					<IconRewindForward10 />
				</div> */}

				{/* Mute and Unmute */}
				<div onClick={() => toggleMuted()} type='button' className={styles.btn}>
					{playerCtx.muted ? <IconVolumeOff /> : <IconVolume />}{" "}
				</div>

				{/* <Popup placement='top'> */}
				<div className={styles.mxW16}>
					<Progress
						step={0.1}
						min={0}
						max={1}
						onChange={(event) => setVolumn(event.target.value)}
						// defaultValue={playerCtx.volume?? 0}
						value={playerCtx.volume ?? 0}
					/>
				</div>
				{/* </Popup> */}

				{/* Quality */}
				{(playerCtx?.autoBitRate || playerCtx?.bitRates) && (
					<>
						<Popup
							refEl={
								<div className={styles.mlAuto + " " + styles.btn} type='button'>
									{playerCtx?.autoBitRate
										? "Auto"
										: playerCtx?.currentBitRate?.quality + "p"}
								</div>
							}
							trigger='hover'
							placement='top'
						>
							<div
								style={{
									padding: "0px",
									display: "flex",
									flexDirection: "column",
									gap: "0.1rem",
								}}
								className={styles.slate600}
							>
								<div
									role='button'
									style={{
										padding: "0.4rem",
										borderRadius: "0.4rem",
									}}
									className={`${styles.popupHover} ${
										playerCtx.autoBitRate ? styles.popupHoverSlate200 : ""
									} `}
									key={0}
									onClick={setAutobitRate}
								>
									Auto
								</div>
								{playerCtx?.bitRates?.map((bitRate, i) => (
									<div
										style={{
											padding: "0.4rem",
											borderRadius: "0.4rem",
										}}
										className={`${styles.popupHover} ${
											bitRate.id == playerCtx?.currentBitRate?.id &&
											!playerCtx.autoBitRate
												? styles.popupHoverSlate200
												: ""
										} `}
										key={++i}
										onClick={() => setBitRate(bitRate)}
									>
										{bitRate.quality}p
									</div>
								))}
							</div>
						</Popup>
					</>
				)}

				{/* Playback Speed */}

				<Popup
					refEl={
						<div type='button' className={styles.btn}>
							{" "}
							{playerCtx?.playBackRate ?? "1"}X{" "}
						</div>
					}
					trigger='hover'
					placement='top'
				>
					<div
						style={{
							padding: "0px",
							display: "flex",
							gap: "0.1rem",

							flexDirection: "column",
						}}
						className={styles.slate600}
					>
						{speedList.map((speed, i) => (
							<div
								style={{
									padding: "0.4rem",
									borderRadius: "0.4rem",
								}}
								key={i}
								className={`${styles.popupHover} ${
									speed == playerCtx.playBackRate && styles.popupHover
								}`}
								onClick={() => setPlayback(speed)}
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
				<div type='button' className={styles.btn} onClick={setFullScreen}>
					<IconMaximize />
				</div>
			</div>
		</div>
	);
}
