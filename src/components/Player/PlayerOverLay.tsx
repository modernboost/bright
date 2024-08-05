import { useContext } from "react";
import { PlayerContext } from "./Player";
import { IconPlayerPlay } from "@tabler/icons-react";
import styles from './Player.module.css';

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
			className={styles.PlayerOverlay}
			onDoubleClick={handleOverlayDoubleClick}
			onClick={handleOverlayClick}
		>
			{playerCtx.state !== "PLAYING" && (
				<IconPlayerPlay
					size={45}
					className={styles.overlayIcon}
					style={{
						transform: "translate(-50%, -50%)",
					}}
				/>
			)}
		</div>
	);
}
