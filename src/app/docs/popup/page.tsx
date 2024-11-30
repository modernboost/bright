"use client";
import Button from "@/components/Button/Button";
import Popup from "@/components/Popup/Popup";
import { useRef } from "react";

export default function Page() {
	const poperRef = useRef(null);
	return (
		<>
			<div>
				<button>popup</button>
				<Popup	 placement="bottom-end" backdrop trigger='hover'>
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
				<Popup backdrop trigger='hover'>
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
		</>
	);
}
