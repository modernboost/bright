"use client";
export default function Button({
	children,
	onClick = () => {},
	...restProps
}: {
	onClick?: Function;
	children?: React.ReactNode;
}) {
	return (
		<button onClick={(e) => onClick(e)} {...restProps}>
			{children}
		</button>
	);
}
