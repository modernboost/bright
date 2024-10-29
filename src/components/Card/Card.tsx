"use client";
import React from "react";
import clsx from "clsx";
import { BaseColor, BaseSize } from "../BaseTypes";
type CardVariants = "title" | "image";
export default function Card({
	children,
	variant,
	className,
	...restProps
}: {
	children?: React.ReactNode;
	className?: string;
	variant?: CardVariants;
}) {

	const classNames = clsx("card", className);

	return (
		<div className={classNames} {...restProps}>
			{children}
		</div>
	);
}
