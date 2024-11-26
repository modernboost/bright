"use client";
import Button from "@/components/Button/Button";
import Modal, { ModalHeader } from "@/components/Modal/Modal";
import { useState } from "react";

export default function Page() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div>
				<Button onClick={() => setOpen(true)}>Open Modal</Button>
				<Modal open={open} onClose={setOpen}>
					<ModalHeader>Hellow world</ModalHeader>
					<div>this is the Modal content this is the Modal content this is the Modal content this is the Modal content this is the Modal content this is the Modal content this is the Modal content this is the Modal contentthis is the Modal content</div>
					<div>this is the Modal content this is the Modal content this is the Modal content this is the Modal content this is the Modal content this is the Modal content this is the Modal content this is the Modal contentthis is the Modal content</div>
					<div>this is the Modal content</div>
					<div>this is the Modal content</div>
					<div>this is the Modal content</div>
					<div>this is the Modal content</div>
				</Modal>
			</div>
		</>
	);
}
