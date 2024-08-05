"use client";
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
			className={styles.button}
			onClick={(e) => onClick(e)}
			{...restProps}
		>
			{children}
		</button>
	);
}
