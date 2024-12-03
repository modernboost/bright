"use client";
import Button from "@/components/Button/Button";
import Popup from "@/components/Popup/Popup";
import { useRef } from "react";

export default function Page() {
	const poperRef = useRef(null);
	return (
		<>
			<div className='mb-20'>
				<button>popup</button>
				<Popup trigger="hover" placement='bottom-end' backdrop>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
				</Popup>
			</div>
			<div>
				<button>popup</button>
				<Popup  trigger="hover">
					<button>this is botton</button>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>this is the popup content</div>
					<div>
						<button>popup</button>
						<Popup trigger="hover" backdrop>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
							<div>this is the popup content</div>
						</Popup>
					</div>
				</Popup>
			</div>
		</>
	);
}
