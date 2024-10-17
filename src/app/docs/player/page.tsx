"use client";
import Player from "@/components/Player/Player";
import TestPlayer from "@/components/Player/Testplayer";

export default function Page() {
	return (
		<>
			<div>
			<TestPlayer
			 videoSrc={"https://health.mbt.af/media/videos/qndeygx50r8xb84pedk44qjo.mp4"}
			 
			 />

			</div>
			<div>
				<Player
					srcType='dash'
					src={"http://localhost:5186/api/Assets/stream/32"}
				/>
			</div>
			{/* <div>
				<Player
					srcType='directfile'
					src={
						"https://health.afghan-wireless.com/MEDIA/live/Live/Live10/LifeElevan4.mp4"
					}
				/>
			</div> */}
		</>
	);
}
//
