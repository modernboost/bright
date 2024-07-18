'use client'
import Player from "@/components/Player/Player";


export default function Page() {
	return (
		<>
			<div>
				<Player srcType="dash" src={'http://localhost:5243/api/filemanifests/1'} />
			</div>
			<div>
				<Player srcType="directfile" src={'https://health.afghan-wireless.com/MEDIA/live/Live/Live10/LifeElevan4.mp4'} />
			</div>
		</>
	);
}
// 