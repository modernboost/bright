"use client";
import React from "react";
import clsx from "clsx";
import { BaseColor, BaseSize } from "../BaseTypes";
type ButtonVariants = "gost" | "link" | "outline" | "active" | "diabled";
type ButtonShaps = "square" | "circle" | "block" | "wide";
export default function Button({
	children,
	disabled,
	color,
	size,
	shap,
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
	shap?: ButtonShaps;
	className?: string;
	variant?: ButtonVariants;
}) {
	const colors: Record<BaseColor, string> = {
		primary: "btn-primary",
		secondary: "btn-secondary",
		accent: "btn-accent",
		warning: "btn-warning",
		error: "btn-error",
		info: "btn-info",
		success: "btn-success",
		// "primary-content": "btn-primary-content",
		// "secondary-content": "btn-secondary-content",
		// "warning-content": "btn-warning-content",
		// "error-content": "btn-error-content",
		// "info-content": "btn-info-content",
		// "accent-content": "btn-accent-content",
		// "success-content": "btn-success-content",
		// "neutral-content": "btn-neutral-content",
		// "base-100": "btn-base-100",
		// "base-200": "btn-base-200",
		// "base-300": "btn-base-300",
		// "base-content": "btn-base-content",
	};
	const sizes: Record<BaseSize, string> = {
		sm: "btn-sm",
		md: "btn-md",
		lg: "btn-ld",
	};
	const shapes: Record<ButtonShaps, string> = {
		square: "btn-square",
		circle: "btn-circle",
		block: "btn-block",
		wide: "btn-wide",
	};
	const variants: Record<ButtonVariants, string> = {
		active: "btn-active",
		diabled: "btn-diabled",
		gost: "btn-gost",
		link: "btn-link",
		outline: "btn-outline",
	};

	const classNames = clsx(
		"btn",
		color && colors[color],
		variant && variants[variant],
		shap && shapes[shap],
		size && sizes[size],
		(disabled || loading) && variants["diabled"],
		className
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
