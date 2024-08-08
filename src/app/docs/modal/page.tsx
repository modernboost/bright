'use client'
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function Page() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div>
				<Button>Open Modal</Button>
				<Modal open={open} onChange={setOpen}>
					<div>this is the Modal content</div>
				</Modal>paly
			</div>
		</>
	);
}
