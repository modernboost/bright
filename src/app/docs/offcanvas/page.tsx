'use client'
import Button from "@/components/Button/Button";
import Offcanvas from "@/components/Offcanvas/Offcanvas";
import  {useState} from 'react'

export default function Page() {
	const [open , setOpen] = useState()
	return (
		<>
			<div>
				<Button onClick={()=>setOpen(true)}>Open offcanvas</Button>
				<Offcanvas onClose={()=>setOpen(false)} direction="right" open={open} title='Offcanvas' position='left' items={[]} >



					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
					<p>alskjdf;alskdjf;laksdjf;alksdfj; f if aposifpa </p>
				</Offcanvas>
			</div>
		</>
	);
}
