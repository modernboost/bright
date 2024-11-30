"use client";
import React, { useMemo } from "react";
import clsx from "clsx";
import { BaseColor, BaseSize } from "../BaseTypes";
import { buttonStyles } from "./Button.styles";
type ButtonVariants = "gost" | "link" | "outline" | "active" | "diabled";
type ButtonShaps = "square" | "circle" | "block" | "wide";
export default function Button({
	children,
	disabled,
	color,
	size,
	shape,
	variant,
	loading,
	onClick = () => {},
	className,
	...restProps
}: {
	onClick?: Function;
	disabled?: boolean;
	loading?: boolean;
	children?: React.ReactNode;
	color?: BaseColor;
	size?: BaseSize;
	shape?: ButtonShaps;
	className?: string;
	variant?: ButtonVariants;
}) {
	const classNames = useMemo(
		() =>
			clsx(
				buttonStyles.base,
				buttonStyles.colors[color],
				buttonStyles.variants[variant],
				buttonStyles.shapes[shape],
				buttonStyles.sizes[size],
				(disabled || loading) && buttonStyles.variants["diabled"],
				className
			),
		[color, variant, shape, size, disabled, loading, className]
	);

	return (
		<button
			disabled={disabled}
			onClick={(e) => onClick(e)}
			className={classNames}
			{...restProps}
		>
			{loading && <span className='loading loading-spinner'></span>}
			{children}
		</button>
	);
}
