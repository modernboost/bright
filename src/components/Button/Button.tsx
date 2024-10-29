"use client";
import React from "react";
import clsx from "clsx";
type baseColor = "primary" | "secondary" | "yellow" | "success" | "infor";
type baseVariants = "default" | "outline";
interface ButtonProps {
	color: baseColor;
}
export default function Button({
	children,
	color,
	variant,
	onClick = () => {},
	...restProps
}: {
	onClick?: Function;
	children?: React.ReactNode;
	color: baseColor;
	variant: baseVariants;
}) {
	const colors = {
		primary: "btn-primary",
		secondary: "btn-secondary",
	};
	const variants = {
		default: "",
		outline: "btn-outline",
	};

	const props = {
		className: clsx(
			"btn",
			colors[color],
			variants[variant],
			restProps.className
		),
	};
	return (
		<button onClick={(e) => onClick(e)} {...props}>
			{children}
		</button>
	);
}
