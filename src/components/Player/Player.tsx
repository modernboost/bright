import { createContext, useReducer } from "react";
import PlayerControls from "./PlayerControls";

export const PlayerContext = createContext({ dispatch: () => {} });
export default function Player({ src }: { src: string }) {
	const player = {};
	const [state, dispatch] = useReducer(reducer, player, (player) => player);

	return (
		<>
			<PlayerContext value={{ dispatch, state }}>
				<video src={src} />
				<PlayerControls />
			</PlayerContext>
		</>
	);
}
function reducer(state, action) {
	switch (action.type) {
		case "toggle_playing":
			console.log("Toggling the video")


			break;
		case "forward":
			console.log("Next video")



			break;
		case "backward":


			break;
		case "fullscreen":



			break;
		case "picture_in_picture":


			break;
		case "toggle_mute":


			break;
		case "volumn_set":

		
			break;
		default:
			throw Error("Unknow operation!");
			break;
	}
}
