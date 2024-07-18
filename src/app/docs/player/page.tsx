"use client";
import Player from "@/components/Player/Player";

export default function Page() {
	return (
		<>
			<div>
				<Player
					srcType='dash'
					src={"http://localhost:5243/api/filemanifests/1"}
				/>
			</div>
		</>
	);
}
//
