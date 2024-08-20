"use client";
import React, { ReactNode, ReactPropTypes } from "react";
import styles from "./Button.module.css";
export default function Button({
	children,
	onClick = () => {},
	...restProps
}: {
	onClick?: Function;
	children?: React.ReactNode;
}) {
	return (
		<button
		onClick={(e) => onClick(e)}
		{...restProps}
		className={styles.button +" "+ restProps.className}
		>
			{children}
		</button>
	);
}
