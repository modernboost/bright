import React, { forwardRef } from "react";

import { BaseColor, BaseSize } from "../BaseTypes";
import clsx from "clsx";
type ButtonVariants = "gost" | "link" | "outline" | "active" | "disabled";
type ButtonShaps = "square" | "circle" | "block" | "wide";
export default function Input({
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
		primary: "input-primary",
		secondary: "input-secondary",
		accent: "input-accent",
		warning: "input-warning",
		error: "input-error",
		info: "input-info",
		success: "input-success",
	};
	const sizes: Record<BaseSize, string> = {
		sm: "input-sm",
		md: "input-md",
		lg: "input-ld",
	};
	const shapes: Record<ButtonShaps, string> = {
		square: "input-square",
		circle: "input-circle",
		block: "input-block",
		wide: "input-wide",
	};
	const variants: Record<ButtonVariants, string> = {
		active: "input-active",
		diabled: "input-diabled",
		gost: "input-gost",
		link: "input-link",
		outline: "input-outline",
	};

	const classNames = clsx(
		"input",
		color && colors[color],
		variant && variants[variant],
		shap && shapes[shap],
		size && sizes[size],
		(disabled || loading) && variants["diabled"],
		className
	);
	return <input disabled={disabled} className={classNames} {...restProps} />;
}
