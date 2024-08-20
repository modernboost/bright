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

	const [icon, setIcon] = useState(<LoadingIcon />);

	useEffect(() => {
		console.log("playerCtx.state", playerCtx.state);
		if (
			playerCtx.state == "STOPPED" ||
			playerCtx.state == "PAUSED" ||
			playerCtx.state == "ENDED" ||
			playerCtx.state == "LOADED"
		) {
			setIcon(<IconPlayerPlay size={45} className={styles.overlayIcon} />);
		} else if (playerCtx.state == "PLAYING") {
			setIcon(null);
		} else if (
			playerCtx.state == "LOADING" ||
			playerCtx.state == "BUFFERING" ||
			playerCtx.state == "RELOADING" ||
			playerCtx.state == "SEEKING" ||
			playerCtx.state == ""
		) {
			setIcon(<LoadingIcon />);
		} else {
			setIcon(<LoadingIcon />);
		}
	}, [playerCtx.state]);
	return (
		<div
			className={styles.playerOverlay}
			onDoubleClick={handleOverlayDoubleClick}
			onClick={handleOverlayClick}
		>
			<div
				style={{
					position: "relative",
					display: "flex",
				}}
			>
				{icon}
			</div>
		</div>
	);
}

function LoadingIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
			<radialGradient
				id='a11'
				cx='.66'
				fx='.66'
				cy='.3125'
				fy='.3125'
				gradientTransform='scale(1.5)'
			>
				<stop offset='0' stopColor='#FFFFFF'></stop>
				<stop offset='.3' stopColor='#FFFFFF' stopOpacity='.9'></stop>
				<stop offset='.6' stopColor='#FFFFFF' stopOpacity='.6'></stop>
				<stop offset='.8' stopColor='#FFFFFF' stopOpacity='.3'></stop>
				<stop offset='1' stopColor='#FFFFFF' stopOpacity='0'></stop>
			</radialGradient>
			<circle
				transformOrigin='center'
				fill='none'
				stroke='url(#a11)'
				strokeWidth='19'
				strokeLinecap='round'
				strokeDasharray='200 1000'
				strokeDashoffset='0'
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
				transformOrigin='center'
				fill='none'
				opacity='.2'
				stroke='#FFFFFF'
				strokeWidth='19'
				strokeLinecap='round'
				cx='100'
				cy='100'
				r='70'
			></circle>
		</svg>
	);
}
