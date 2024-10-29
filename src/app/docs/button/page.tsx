"use client";

import { Button } from "@/components";

export default function Page() {
	return (
		<div className='flex flex-col'>
			<Button>Default button</Button>
			<Button color='primary'>Primary</Button>
			<Button color='secondary'>Primary</Button>
			<Button variant={"outline"}>Secondary</Button>
		</div>
	);
}
