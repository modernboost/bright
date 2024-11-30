import { IconX } from "@tabler/icons-react";
import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import clsx from "clsx";
import { BaseSize } from "../BaseTypes";
import { offCanvasStyles } from "./Offcanvas.styles";
const OffcanvasContext = createContext(false);

export default function Offcanvas({
	children,
	open = false,
	onClose = () => {},
	title,
	direction = "left",
	header = true,
	className,
	size = "md",
	...restProps
}: {
	title?: string;
	direction?: "left" | "right";
	header?: boolean;
	restProps?: HTMLElement;
	className?: string;
	open?: boolean;
	onClose: Function;
	size?: BaseSize;
	children: React.ReactNode;
}) {
	useEffect(() => {
		setIsOpen(open);
	}, [open]);
	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		!isOpen && onClose(isOpen);
	}, [isOpen]);

	const modalClasses = useMemo(
		() =>
			clsx(
				offCanvasStyles.base,
				offCanvasStyles.size[size],
				offCanvasStyles.direction[direction],
				className
			),
		[className, direction]
	);
	const backdropClasses = useMemo(
		() => clsx(offCanvasStyles.backdrop, !isOpen && "hidden"),
		[isOpen]
	);

	return (
		<OffcanvasContext.Provider value={{ isOpen, setIsOpen }}>
			<div
				onClick={() => {
					onClose();
				}}
				className={backdropClasses}
			>
				<div
					onClick={(e) => {
						e.stopPropagation();
					}}
					className={modalClasses}
					{...restProps}
				>
					{header && <OffcanvasHeader>{title}</OffcanvasHeader>}
					{children}
				</div>
			</div>
		</OffcanvasContext.Provider>
	);
}

export function OffcanvasHeader({
	children,
	className,
	...restProps
}: {
	className?: string;
	restProps?: HTMLDivElement;
	children?: ReactNode;
}) {
	const { setIsOpen } = useContext(OffcanvasContext);

	const classNames = useMemo(
		() => clsx(offCanvasStyles.header, className),
		[className]
	);
	return (
		<div className={classNames} {...restProps}>
			{children}
			<IconX
				onClick={() => setIsOpen(false)}
				className='hover:text-red-500 hover:cursor-pointer'
			/>
		</div>
	);
}
