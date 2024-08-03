"use client";
import { createContext, useContext, useRef } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
const StoreContext = createContext({});
export default function VedioPlayer({
	url,
	poster,
	props = {},
}: {
	poster: string;
	props?: ReactPlayerProps;
	url: string;
}) {
	const { store, setStore } = useContext(StoreContext);
	const player = useRef(null);
	// if (poster) {
	props = {
		...props,
		config: {
			...props.config,
			file: { attributes: { poster: `/media/${poster}`, preload: "metadata" } },
		},
	};
	// }
	function onStart(e) {
		console.log("start: ", e);
		if (store.playingVideo && store.playingVideo !== player.current) {
			store?.playingVideo?.getInternalPlayer()?.pause();
		}
		setStore((pre) => ({ ...pre, playingVideo: player.current }));
	}
	return (
		<div className='overflow-hidden h-52 bg-black'>
			<ReactPlayer
				ref={player}
				theme='forest' // 'city' 'fantasy' 'forest' 'sea'
				autoPlay={false}
				loop={false}
				// sources= {videoSources}

				width='100%'
				height='100%'
				// playbackRates={[0.5, 1, 1.5, 2, 10]}
				disablePictureInPicture={false}
				url={`/media/videos/${url}`}
				// config={{
				// 	file: {
				// 		attributes: {
				// 			// poster: "/images/doctors.png",
				// 			preload: "metadata"

				// 		},
				// 	},
				// }}
				controls={true}
				onPlay={(e) => onStart(e)}
				{...props}
			/>
		</div>
	);
}
