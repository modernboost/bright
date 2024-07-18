import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "./Player";
import { secondsToTimeString } from "./helpers";

export default function PlayerProgress() {
	const { dispatch, player: playerCtx } = useContext(PlayerContext);
	const [over, setOver] = useState(false);
	const [left, setLeft] = useState(0);
	const [time, setTime] = useState("");
	function setPosition(value) {
		dispatch({ type: "position_set", value });
	}

	function handleMouseOver(event) {
		const total = event.target.offsetWidth;
		const current = event.clientX;
		const percentage = (100 * current) / total;
		const p = (playerCtx.duration * percentage) / 100;

		setLeft(event.clientX);

		setTime(secondsToTimeString(p));
	}
	function handleMouseEnter(event) {
		setOver(true);
	}
	function handleMouseLeave(event) {
		setOver(false);
	}
	return (
		<div className='video-progress-container'>
			<div
				className='video-loaded-progress'
				style={{
					width: `${playerCtx.loadedPosition / (playerCtx.duration / 100)}%`,
				}}
			></div>
			<input
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onMouseMove={handleMouseOver}
				onChange={(event) => setPosition(event.target.value)}
				value={playerCtx.position ?? 0}
				min={0}
				style={{
					backgroundSize: `${(playerCtx.position * 100) / playerCtx.duration}%`,
				}}
				max={Number.isNaN(playerCtx.duration) ? 0 : playerCtx.duration}
				type='range'
				className='w-full video-progress range__input'
			/>
			<div
				className={`range__output ${over ? "block" : ""}`}
				style={{
					left: left,
				}}
				aria-hidden='true'
				data-tip
			>
				<div className='range__output-value-track'>
					<div className=' range__output-values' data-values>
						{time}
					</div>
				</div>
			</div>
		</div>
	);
}
