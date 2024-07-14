import { createContext, useEffect, useReducer, useRef, useState } from "react";
import PlayerControls from "./PlayerControls";
import RxPlayer from "rx-player";
import { exitFullScreen, isFullScreen, requestFullScreen } from "./helpers";

export enum PlayerState {
	PLAYING,
	STOPED,
	LOADED,
	ENDED,
}

interface Player {
	state: PlayerState;
	position: number;
	duration: number;
	playBackRate: number;
	muted: boolean;
	volume: number;
	bitRates: { resolution: string; current: boolean; bitRate: string }[];
	pause: () => void;
	play: () => void;
	forward: (seconds: number) => void;
	backward: (seconds: number) => void;
	setVolumn: (volumn: number) => void;
	setMuted: (muted: boolean) => void;
	setFullScreen: () => void;
	setMiniMode: () => void;
	setBitRate: (bitRate: number) => void;
	seekTo: (position: number) => void;
	setPlayBackRate: (rate: number) => void;
}
// class CustomPlayer implements Player {
// 	player;
// 	state = PlayerState.STOPED;
// 	muted = false;
// 	duration: number = 0;
// 	position: number = 0;
// 	playBackRate: number = 1;
// 	volume: number = 1;
// 	bitRates: { resolution: string; current: boolean; bitRate: string }[] = [
// 		{ resolution: "400X300", current: true, bitRate: "128x100" },
// 	];

// 	constructor(player) {
// 		this.player = player;
// 	}

// 	pause() {
// 		console.log(this.player)
// 		this?.player.pause();
// 	}
// 	play() {
// 		console.log(this.player.play)
// 		this?.player.play();
// 	}
// 	forward(seconds: number) {
// 		this?.player.seekTo({ relative: seconds });
// 	}
// 	backward(seconds: number) {
// 		this?.player.seekTo({ relative: -seconds });
// 	}
// 	setVolumn(volumn: number) {
// 		// this?.player.seekTo({relative: -seconds})
// 	}
// 	setFullScreen() {
// 		// this?.player.seekTo({relative: -seconds})
// 	}
// 	setMiniMode() {
// 		// this?.player.seekTo({relative: -seconds})
// 	}
// 	setBitRate(bitRate: number) {
// 		// this?.player.seekTo({relative: -seconds})
// 	}
// 	setMuted(muted: boolean) {
// 		// this?.player.seekTo({relative: -seconds})
// 	}
// 	seekTo(position: number) {
// 		this.player.seedTo(position);
// 	}
// 	setPlayBackRate (rate: number) {
// 		this.player.setPlaybackRate(rate);
// 	};
// }

export const PlayerContext = createContext({} as Player);
export default function Player({ src }: { src: string }) {
	const videoRef = useRef(null);
	const [player, setPlayer] = useState<Player | null>({});
	const wrapperRef = useRef(null);
	const [state, dispatch] = useReducer(reducer, {}, (state) => state);

	useEffect(() => {
		if (!videoRef.current) return;

		const _player = new RxPlayer({
			videoElement: videoRef.current,
		});

		// play a video
		_player.loadVideo({
			url: "http://localhost:5243/api/filemanifests/output.mpd",
			transport: "dash",
			autoPlay: true,
		});

		_player.addEventListener("playerStateChange", (state) => {
			setPlayer((prev) => ({ ...prev, state }));
		});

		_player.addEventListener("positionUpdate", (state) => {
			setPlayer((prev) => ({
				...prev,
				position: state.position,
				duration: state.duration,
				playBackRate: state.playbackRate,
			}));
		});

		_player.addEventListener("volumeChange", (state) => {
			console.log("volumeChange", state);
			setPlayer((prev) => ({
				...prev,
				volume: state.volume,
				muted: state.muted,
			}));
		});
		_player.addEventListener("videoTrackChange", (state) => {
			console.log("videoTrackChange", state);
		});
		_player.addEventListener("videoRepresentationChange", (state) => {
			console.log("videoRepresentationChange", state);
		});
		dispatch({ type: "set_player", player, setPlayer, _player, wrapperRef });
	}, [videoRef]);
	return (
		<div ref={wrapperRef} className='relative'>
			<PlayerContext.Provider value={{ dispatch, player }}>
				<video ref={videoRef} className='video ' src={src} />
				<PlayerControls />
			</PlayerContext.Provider>
		</div>
	);
}
function reducer(state, action) {
	switch (action.type) {
		case "set_player":
			return {
				player: action.player,
				_player: action._player,
				setPlayer: action.setPlayer,
				wrapperRef: action.wrapperRef,
			};

			break;
		case "toggle_playing":
			if (state._player.getPlayerState() === "PLAYING") {
				state._player.pause();
				state.setPlayer((prev) => ({ ...prev, state: "PLAYING" }));
			} else {
				state._player.play();
				// state.setPlayer((prev) => ({ ...prev, state: 	"STOPED" }));
			}
			return state;

			console.log("Toggling the video");
			break;
		case "forward":
			state._player.seekTo({ relative: action.value });
			console.log("Next video");
			return state;

			break;
		case "backward":
			state._player.seekTo({ relative: -action.value });
			return state;
			break;
		case "fullscreen":
			const ref = state.wrapperRef.current;
			if (isFullScreen(ref)) exitFullScreen(ref);
			else requestFullScreen(ref);

			return state;
			break;
		case "picture_in_picture":
			break;
		case "toggle_muted":
			console.log("togging mute");
			if (state._player.isMute()) {
				state._player.unMute();
			} else {
				state._player.mute();
			}
			return state;
			break;
		case "volumn_set":
			state._player.setVolume(action.value);
			if (action.value != 0 && state._player.isMute()) {
				state._player.unMute();
			}

			return state;
			break;
		case "playback_set":
			console.log(state._player.getVideoRepresentation());
			state._player.setPlaybackRate(action.value);

			return state;
			break;
		case "volumn_set":
			state._player.setVolume(action.value);
			if (action.value != 0 && state._player.isMute()) {
				state._player.unMute();
			}

			return state;
			break;
		default:
			throw Error("Unknow operation!");
			break;
	}
}
