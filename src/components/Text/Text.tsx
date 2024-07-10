import React from "react";

export default function Text({
	children,
	type,
	...restProps
}: {
	children: React.ReactNode;
	type: "h1" | "h2" | "h3" | "h4" | "h5" | "h5" | "p";
	restProps?: React.ComponentProps<"h1">;
}) {
	if (type === "p") {
		return <p></p>;
	} else {
		return React.createElement(
			type,
			{
				...restProps,
			},
			children
		);
	}
}
