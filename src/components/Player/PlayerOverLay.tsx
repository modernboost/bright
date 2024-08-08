import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "./Player";
import { IconPlayerPlay } from "@tabler/icons-react";
import styles from "./Player.module.css";

export default function PlayerOverLay() {
	const { dispatch, player: playerCtx } = useContext(PlayerContext);
	function handleOverlayDoubleClick(event) {
		dispatch({ type: "toggle_fullscreen" });
	}
	function handleOverlayClick(event) {
		dispatch({ type: "toggle_playing" });
	}

	const [icon, setIcon] = useState(null);

	useEffect(() => {
		console.log("playerCtx.state", playerCtx.state);
		if (playerCtx.state == "STOPPED" || playerCtx.state == "PAUSED") {
			setIcon(
				<IconPlayerPlay
					size={45}
					className={styles.overlayIcon}
					style={{
						transform: "translate(-50%, -50%)",
					}}
				/>
			);
		} else if (
			playerCtx.state == "LOADING" ||
			playerCtx.state == "BUFFERING" ||
			playerCtx.state == "RELOADING" ||
			playerCtx.state == "SEEKING" 

		) {
			setIcon(
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
					<radialGradient
						id='a11'
						cx='.66'
						fx='.66'
						cy='.3125'
						fy='.3125'
						gradientTransform='scale(1.5)'
					>
						<stop offset='0' stop-color='#FFFFFF'></stop>
						<stop offset='.3' stop-color='#FFFFFF' stop-opacity='.9'></stop>
						<stop offset='.6' stop-color='#FFFFFF' stop-opacity='.6'></stop>
						<stop offset='.8' stop-color='#FFFFFF' stop-opacity='.3'></stop>
						<stop offset='1' stop-color='#FFFFFF' stop-opacity='0'></stop>
					</radialGradient>
					<circle
						transform-origin='center'
						fill='none'
						stroke='url(#a11)'
						stroke-width='19'
						stroke-linecap='round'
						stroke-dasharray='200 1000'
						stroke-dashoffset='0'
						cx='100'
						cy='100'
						r='70'
					>
						<animateTransform
							type='rotate'
							attributeName='transform'
							calcMode='spline'
							dur='2'
							values='360;0'
							keyTimes='0;1'
							keySplines='0 0 1 1'
							repeatCount='indefinite'
						></animateTransform>
					</circle>
					<circle
						transform-origin='center'
						fill='none'
						opacity='.2'
						stroke='#FFFFFF'
						stroke-width='19'
						stroke-linecap='round'
						cx='100'
						cy='100'
						r='70'
					></circle>
				</svg>
			);
		} else {
			setIcon(null);
		}
	}, [playerCtx.state]);
	return (
		<div
			className={styles.playerOverlay}
			onDoubleClick={handleOverlayDoubleClick}
			onClick={handleOverlayClick}
		>
			<div style={
				{
					width: "4em"
				}
			}>{icon}</div>
		</div>
	);
}
