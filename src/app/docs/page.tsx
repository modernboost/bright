import Link from "next/link";
import { components } from "./components";

export default function Page() {
	return (
		<>
			<h1>Components Documentation</h1>
			<ul>
				{components.map((component, i) => (
					<li key={i}>
						<Link href={component.href}>{component.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
