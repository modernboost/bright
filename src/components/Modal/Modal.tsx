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
import { modalStyles } from "./Modal.style";
import { BaseSize } from "../BaseTypes";
const ModalContext = createContext(false);

export default function Modal({
	children,
	open = false,
	onClose = () => {},
	className,
	size = "md",
	...restProps
}: {
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
		() => clsx(modalStyles.modal, modalStyles.size[size], className),
		[className]
	);
	const backdropClasses = useMemo(
		() => clsx(modalStyles.backdrop, !isOpen && "hidden"),
		[isOpen]
	);

	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
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

	const classNames = useMemo(
		() => clsx(modalStyles.header, className),
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
