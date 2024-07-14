import { useContext } from "react";
import { PlayerContext } from "./Player";

export default function PlayerProgress() {
	const playerCtx = useContext(PlayerContext);
	return (
		<div className='video-progress-container'>
			<div className='video-loaded-progress'></div>
			<input type='range' className='w-full video-progress' />
		</div>
	);
}
