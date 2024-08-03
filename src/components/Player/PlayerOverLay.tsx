import { useContext } from "react";
import { PlayerContext } from "./Player";
import { IconPlayerPlay } from "@tabler/icons-react";

export default function PlayerOverLay() {
	const { dispatch, player: playerCtx } = useContext(PlayerContext);
	function handleOverlayDoubleClick(event) {
		dispatch({ type: "toggle_fullscreen" });
	}
	function handleOverlayClick(event) {
		dispatch({ type: "toggle_playing" });
	}
	return (
		<div
			className=' b-player-overlay'
			onDoubleClick={handleOverlayDoubleClick}
			onClick={handleOverlayClick}
		>
			{playerCtx.state !== "PLAYING" && (
				<IconPlayerPlay
					size={45}
					className=' text-slate-200 shadow-xl relative top-[50%] left-[50%]'
					style={{
						transform: "translate(-50%, -50%)",
					}}
				/>
			)}
		</div>
	);
}
