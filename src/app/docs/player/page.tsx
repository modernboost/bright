"use client";
import Player from "@/components/Player/Player";

export default function Page() {
	return (
		<>
			<div>
				<Player
					srcType='dash'
					src={"http://localhost:5186/api/Assets/stream/32"}
				/>
			</div>
			<div>
				<Player
					srcType='directfile'
					src={
						"https://health.afghan-wireless.com/MEDIA/live/Live/Live10/LifeElevan4.mp4"
					}
				/>
			</div>
		</>
	);
}
//
