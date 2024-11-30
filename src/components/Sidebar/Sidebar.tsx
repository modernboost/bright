import Link from "next/link";

export default function Sidebar({}) {
	const items = [
		{
			label: "Button",
			link: "/docs/button",
			icon: "user",
		},
		{
			label: "input",
			link: "/docs/input",
			icon: "user",
		},
		{
			label: "Modal",
			link: "/docs/modal",
			icon: "user",
		},
		{
			label: "popup",
			link: "/docs/popup",
			icon: "user",
		},
		{
			label: "Offcanvas",
			link: "/docs/offcanvas",
			icon: "user",
		},
	];
	return (
		<div className='border'>
			<div>Nav header</div>
			<nav className='flex flex-col'>
				{items.map((item) => {
					return (
						<Link className='p-2 hover:bg-sky-200 ' href={item.link}>
							{item.label} {item.icon}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}
