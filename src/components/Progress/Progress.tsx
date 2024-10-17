import { useEffect, useRef, useState } from "react";
import styles from "./Progress.module.css";
import { secondsToTimeString } from "../Player/helpers";

export default function Progress({ value, max, preload, onChange }) {
	const [duration, setDuration] = useState(max);
	const [currentTime, setCurrentTime] = useState(value);
	const [bufferedTime, setBufferedTime] = useState(preload);
	const inputRef = useRef(null);

	useEffect(() => {
		setDuration(max);
		setCurrentTime(value);
		setBufferedTime(preload);
	}, [value, max, preload]);
	useEffect(() => {
		inputRef?.current?.style.setProperty(
			"--preload",
			`${(bufferedTime * 100) / duration}%`
		);
	}, [bufferedTime]);
	useEffect(() => {
		console.log({ currentTime });
		inputRef?.current?.style.setProperty(
			"--progress",
			`${(currentTime * 100) / duration}%`
		);
	}, [currentTime]);

	useEffect(() => {
		return;
		const video = videoRef.current;

		const handleLoadedMetadata = () => setDuration(video.duration);
		const handleTimeUpdate = () => setCurrentTime(video.currentTime);
		const handleProgress = () => {
			if (video.buffered.length > 0) {
				setBufferedTime(video.buffered.end(video.buffered.length - 1));
			}
		};

		video.addEventListener("loadedmetadata", handleLoadedMetadata);
		video.addEventListener("timeupdate", handleTimeUpdate);
		video.addEventListener("progress", handleProgress);

		return () => {
			video.removeEventListener("loadedmetadata", handleLoadedMetadata);
			video.removeEventListener("timeupdate", handleTimeUpdate);
			video.removeEventListener("progress", handleProgress);
		};
	}, []);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	};

	const handleSeek = (e) => {
		onChange && onChange(e.target.value);
	};

	const [over, setOver] = useState(false);
	const [left, setLeft] = useState(0);
	const [time, setTime] = useState("");

	function setPosition(value) {
		dispatch({ type: "position_set", value });
	}

	function handleMouseOver(event) {
		const node = event.target;
		const rect = node.getBoundingClientRect();
		const x1 = event.clientX - rect.left;
		const x2 = event.clientX - rect.right;
		const y = event.clientY - rect.top;

		const percentage = (100 * x1) / (x1 - x2);
		const duration = Boolean(playerCtx.duration) ? playerCtx.duration : 0;
		const p = (duration * percentage) / 100;
		setLeft(x1);
		setTime(secondsToTimeString(p));
	}
	function handleMouseEnter(event) {
		setOver(true);
	}
	function handleMouseLeave(event) {
		setOver(false);
	}

	return (
		<input
			ref={inputRef}
			className={styles.progress}
			type='range'
			name=''
			step={0.1}
			min={0}
			max={duration}
			onChange={handleSeek}
			// defaultValue={playerCtx.volume?? 0}
			value={currentTime}
		/>
	);

	return (
		<>
			<div className='controls'>
				<div className='progress-bar-container' onClick={handleSeek}>
					<div
						className='progress-bar-buffered'
						style={{ width: `${(bufferedTime / duration) * 100}%` }}
					></div>
					<div
						className='progress-bar-played'
						style={{ width: `${(currentTime / duration) * 100}%` }}
					></div>
					<div
						className='progress-bullet'
						style={{ left: `${(currentTime / duration) * 100}%` }}
						onMouseDown={(e) => e.preventDefault()}
						onDrag={(e) => handleBulletDrag(e)}
					></div>
				</div>

				<div className='time-info'>
					<span>{formatTime(currentTime)}</span>
					<span>{formatTime(duration - currentTime)}</span>
					<span>{formatTime(duration)}</span>
				</div>
			</div>
		</>
	);
	return (
		<div className={styles.videoProgressContainerWrapper}>
			<div className={styles.videoProgressContainer}>
				<div className={styles.videoProgressBackground} />
				<div
					className={styles.videoLoadedProgress}
					style={{
						width: `${playerCtx.loadedPosition / (playerCtx.duration / 100)}%`,
					}}
				/>
				<input
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onMouseMove={handleMouseOver}
					onChange={(event) => setPosition(event.target.value)}
					value={playerCtx.position ?? 0}
					min={0}
					style={{
						backgroundSize: `${
							(playerCtx.position * 100) / playerCtx.duration
						}% 0.3rem`,
					}}
					max={Number.isNaN(playerCtx.duration) ? 0 : playerCtx.duration}
					type='range'
					className={
						styles.wFull + " " + styles.videoProgress + " " + styles.rangeInput
					}
				/>
				<div
					className={`${styles.rangeOutput}  `}
					style={{
						left: left,
						display: over ? "block" : "none",
					}}
					aria-hidden='true'
					data-tip
				>
					<div className={styles.rageOutputValueTrack}>
						<div className={styles.rageOutputValues} data-values>
							{time}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
