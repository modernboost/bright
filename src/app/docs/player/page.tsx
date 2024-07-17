'use client'
import Player from "@/components/Player/Player";


export default function Page() {
	return (
		<>
			<div>
				<Player src={'http://localhost:5243/api/filemanifests/output.mpd'} />
			</div>
		</>
	);
}
