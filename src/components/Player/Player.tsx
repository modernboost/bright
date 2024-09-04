"use client";
import { createContext, useEffect, useReducer, useRef, useState } from "react";
import PlayerControls from "./PlayerControls";
import RxPlayer from "rx-player";
import { ILoadVideoOptions } from "rx-player/types";
import {
	exitFullScreen,
	getLocaleState,
	isFullScreen,
	registerClickEvents,
	requestFullScreen,
	setLocaleState,
} from "./helpers";
import PlayerOverLay from "./PlayerOverLay";
import styles from "./Player.module.css";
RxPlayer.LogLevel = "NONE";

export enum PlayerState {
	PLAYING,
	STOPED,
	LOADED,
	ENDED,
}

interface Player {
	state: PlayerState;
	position: number;
	loadedPosition: number;
	duration: number;
	playBackRate: number;
	muted: boolean;
	volume: number;
	bitRates: {
		id: string;
		width: number;
		heigth: number;
		frameRate: number;
		resolution: string;
		bitRate: string;
		quality: string;
	}[];
	autoBitRate: boolean;
	currentBitRate: {
		id: string;
		width: number;
		heigth: number;
		frameRate: number;
		resolution: string;
		current: boolean;
		bitRate: string;
		quality: string;
	};
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
export default function Player({
	src,
	playerOptions,
	srcType = "directfile",
	onPlay,
	onPause,
}: {
	src: string;
	playerOptions?: ILoadVideoOptions;
	srcType?: "dash" | "directfile" | "auto";
	onPlay?: (player) => void;
	onPause?: (player) => void;
}) {
	const videoRef = useRef(null);
	const wrapperRef = useRef(null);
	const [player, setPlayer] = useState<Player | null>({});
	const [state, dispatch] = useReducer(reducer, {}, (state) => state);
	const [transport, setTransport] = useState({
		type: srcType == "auto" ? "dash" : srcType,
		changed: false,
	});

	useEffect(() => {
		if (!videoRef.current || !wrapperRef.current) return;

		const _player = new RxPlayer({
			videoElement: videoRef.current,
		});

		// play a video
		_player.loadVideo({
			url: src,
			transport: transport.type,
			autoPlay: false,

			// manifestLoader(url, callbacks) {
			// 	// logic to fetch the Manifest
			// },

			// segmentLoader(infos, callbacks) {
			// 	// logic to download a segment
			//   },
			...playerOptions,
		});

		_player.addEventListener("playerStateChange", (state) => {
			console.log("palyer state chagnge", state);
			setPlayer((prev) => ({
				...prev,
				state,
				volume: getLocaleState()?.volume ?? "",
			}));
		});

		_player.addEventListener("positionUpdate", (state) => {
			setPlayer((prev) => ({
				...prev,
				position: Boolean(state.position) ? state.position : 0,
				duration: Boolean(state.duration) ? state.duration : 0,
				playBackRate: state.playbackRate,
				loadedPosition: state.position + state.bufferGap,
			}));
		});

		_player.addEventListener("volumeChange", (state) => {
			console.log("volumn change", state);
			setPlayer((prev) => ({
				...prev,
				volume: state.volume,
				muted: state.muted,
			}));
		});
		_player.addEventListener("videoTrackChange", (state) => {
			console.log("track chage: ", state);
			setPlayer((prev) => ({
				...prev,
				bitRates: state?.representations.map((r) => ({
					...r,
					resolution: `${r.width}X${r.height}`,
					bitRate: r.bitrate,
					quality: `${r.width}`,
				})),
			}));
		});
		_player.addEventListener("videoRepresentationChange", (state) => {
			console.log("representation chage: ", state);
			setPlayer((prev) => ({
				...prev,
				autoBitRate: _player.getLockedVideoRepresentations() === null,
				currentBitRate: {
					...state,
					resolution: `${state.width}X${state.height}`,
					bitRate: state?.bitRate,
					quality: `${state?.width}`,
				},
			}));
		});
		_player.addEventListener("error", (error) => {
			console.log({ error });
			if (error.type == "OTHER_ERROR" && error.code == "PIPELINE_PARSE_ERROR") {
				if (srcType !== "auto") return;
				if (transport.changed) return;

				if (transport.type == "dash") {
					setTransport({ type: "directfile", changed: true });
				} else {
					setTransport({ type: "dash", changed: true });
				}
			}
		});

		document.addEventListener("keydown", clickEvents);

		function clickEvents(event) {
			registerClickEvents({ event, dispatch, player, setPlayer });
		}

		dispatch({
			type: "set_player",
			player,
			setPlayer,
			_player,
			wrapperRef,
			onPlay,
			onPause,
		});
		return () => {
			document.removeEventListener("keydown", clickEvents);
			_player.removeEventListener("videoRepresentationChange");
			_player.removeEventListener("videoTrackChange");
			_player.removeEventListener("volumeChange");
			_player.removeEventListener("positionUpdate");
			_player.removeEventListener("playerStateChange");
			_player.dispose();
		};
	}, [videoRef, wrapperRef, transport]);
	return (
		<div dir='ltr' ref={wrapperRef} className={styles.playerWrapper}>
			<PlayerContext.Provider value={{ dispatch, player }}>
				<video ref={videoRef} className={styles.video} src={src} />
				<PlayerOverLay />
				<PlayerControls />
			</PlayerContext.Provider>
		</div>
	);
}
function reducer(state, action) {
	if (!state?._player && action.type !== "set_player") return;
	if (!state?._player?.isContentLoaded() && action.type !== "set_player")
		return;

	switch (action.type) {
		case "set_player":
			return {
				player: action.player,
				_player: action._player,
				setPlayer: action.setPlayer,
				wrapperRef: action.wrapperRef,
				onPlay: action.onPlay,
				onPause: action.onPause,
			};

			break;
		case "toggle_playing":
			if (state._player.getPlayerState() === "PLAYING") {
				state._player.pause();
				state.onPause && state.onPause(state._player);
				state.setPlayer((prev) => ({ ...prev, state: "PAUSED" }));
			} else if (
				state._player.getPlayerState() === "PAUSED" ||
				state._player.getPlayerState() === "LOADED"
			) {
				state._player.play();
				state.onPlay && state.onPlay(state._player);
				// state.setPlayer((prev) => ({ ...prev, state: 	"STOPED" }));
			}
			return state;

			console.log("Toggling the video");
			break;
		case "forward":
			state._player.seekTo({ relative: action.value });
			return state;

			break;
		case "backward":
			state._player.seekTo({ relative: -action.value });
			return state;
			break;
		case "toggle_fullscreen":
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
			if (!(action.value >= 0) && !(action.value <= 1)) return;
			setLocaleState({ ...getLocaleState(), volume: action.value });
			console.log("action value");
			console.log(action.value);
			state._player.setVolume(action.value);
			if (action.value != 0 && state._player.isMute()) {
				state._player.unMute();
			}

			return state;
			break;
		case "playback_set":
			// console.log(state._player.getVideoRepresentation());
			state._player.setPlaybackRate(action.value);

			return state;
			break;
		case "position_set":
			state._player.seekTo({ position: action.value });
			return state;

			break;
		case "bitrate_set":
			const periods = state._player.getAvailablePeriods();
			for (const period of periods) {
				const periodId = period.id;
				const firstVideoTrack =
					state._player.getAvailableVideoTracks(periodId)[0];
				if (firstVideoTrack !== undefined) {
					console.log("lock with direct ");
					state._player.setVideoTrack({
						trackId: firstVideoTrack.id,
						periodId,
						switchingMode: "direct",
						lockedRepresentations: [action.value.id],
					});
				}
			}
			console.log(state._player.getLockedVideoRepresentations());
			return state;

			break;
		case "autobitrate_set":
			state._player.unlockVideoRepresentations();
			state.setPlayer((prev) => ({
				...prev,
				autoBitRate: state._player.getLockedVideoRepresentations() === null,
				currentBitRate: {
					...state,
					resolution: `${state.width}X${state.height}`,
				},
			}));

			return state;

			break;
		default:
			throw Error("Unknow operation!");
			break;
	}
}
