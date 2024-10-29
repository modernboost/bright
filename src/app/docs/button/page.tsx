"use client";

import { Button } from "@/components";

export default function Page() {
	return (
		<div className='flex flex-col'>
			<Button>Default</Button>
			<br />
			<h1>colors</h1>
			<Button color='primary'>Primary</Button>
			<Button color='secondary'>Primary</Button>
			<Button color='info'>info</Button>
			<Button color='warning'>wanring</Button>
			<Button color='error'>error</Button>
			<Button color='accent'>accent</Button>
			<Button color='primary-content'>Primary-content</Button>
			<Button color='secondary-content'>secondary-content</Button>
			<Button color='info-content'>info content</Button>
			<Button color='accent-content'>accent-content</Button>
			<br />
			<h1>Variants</h1>
			<Button variant='active'>active</Button>
			<Button variant='diabled'>disabled</Button>
			<Button variant='gost'>gost</Button>
			<Button variant='link'>Link</Button>
			<Button variant='outline'>outline</Button>
			<br />
			<h1>Sizes</h1>
			<Button size='sm'>sm</Button>
			<Button size='md'>md</Button>
			<Button size='lg'>lg</Button>
			<br />
			<h1>Shapes</h1>
			<Button shap='block'>block</Button>
			<Button shap='circle'>circle</Button>
			<Button shap='square'>square</Button>
			<Button shap='wide'>wide</Button>
		</div>
	);
}
