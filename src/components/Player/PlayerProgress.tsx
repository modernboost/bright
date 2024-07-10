import { useContext } from "react";
import { PlayerContext } from "./Player";

export default function PlayerProgress() {
	const playerCtx = useContext(PlayerContext);
	return <progress />;
}
