import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "./Player";
import { secondsToTimeString } from "./helpers";
import styles from "./Player.module.css";

export default function PlayerProgress() {
	const { dispatch, player: playerCtx } = useContext(PlayerContext);
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
