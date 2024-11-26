import { IconX } from "@tabler/icons-react";
import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import clsx from "clsx";
import "./Modal.css";
const ModalContext = createContext(false);

export default function Modal({
	children,
	open = false,
	onClose = () => {},
	className,
	...restProps
}: {
	restProps?: HTMLElement;
	className?: string;
	open?: boolean;
	onClose: Function;
	children: React.ReactNode;
}) {
	useEffect(() => {
		setIsOpen(open);
	}, [open]);
	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		!isOpen && onClose(isOpen);
	}, [isOpen]);

	const classNames = clsx("modall", className);
	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
			<div
				onClick={() => {
					onClose();
				}}
				className={`modal-backdropp ${isOpen ? "" : "hidden"} `}
			>
				<div
					onClick={(e) => {
						e.stopPropagation();
					}}
					className={classNames}
					{...restProps}
				>
					{children}
				</div>
			</div>
		</ModalContext.Provider>
	);
}

export function ModalHeader({
	children,
	className,
	...restProps
}: {
	className?: string;
	restProps?: HTMLDivElement;
	children?: ReactNode;
}) {
	const { setIsOpen } = useContext(ModalContext);

	const classNames = clsx("modall-header", className);
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
