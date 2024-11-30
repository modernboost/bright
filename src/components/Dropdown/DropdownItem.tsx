import Link from "next/link";
import React, { ReactNode, useContext, useMemo } from "react";
import { DropdownContext } from "./Dropdown";
import styles from "./Dropdown.module.css";
import { dropdownItemStyles } from "./DropdownItem.styles";
import clsx from "clsx";

export default function DropdownItem({
	icon,
	text,
	href,
	children,
	autoClose = true,
	...rest
}: {
	icon?: ReactNode | undefined;
	text: string | number;
	href?: string | undefined;
	children?: React.ReactNode | undefined;
	autoClose?: boolean;
}) {
	const classNames = useMemo(() => clsx(dropdownItemStyles.base), []);
	return (
		<>
			{href ? (
				<Link className={classNames} href={href} {...rest}>
					{icon}
					{text}
					{children}
				</Link>
			) : (
				<div {...rest} className={classNames}>
					{icon}
					{text}
					{children}
				</div>
			)}
		</>
	);
}
