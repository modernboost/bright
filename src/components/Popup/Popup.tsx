"use client";
import React, { Ref, useEffect, useRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { PopperProps } from "react-popper";
import styles from "./Popup.module.css";

export default function Popup({
	trigger = "click",
	referenceElement,
	children,
	popperProps = {},
	placement = "bottom",
	open,
	onChange,
}: {
	trigger?: "click" | "hover";
	children?: React.ReactNode;
	referenceElement?: HTMLElement;
	popperProps?: PopperProps;
	open?: boolean;
	placement?: "top" | "bottom" | "left" | "rigth";
	onChange?: Function | undefined;
}) {
	"use memo";

	const [reference, setReference] = useState<HTMLElement | null>(null);
	const [show, setShow] = useState(open);
	const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
	const [arrowElement, setArrowElement] = useState(null);
	const popperInstance = useRef(null);

	let timer: number | string | null = null;

	useEffect(() => {
		setShow(open);
	}, [open]);

	useEffect(() => {
		onChange && onChange(show);
	}, [show]);

	function toggle(event: Event) {
		event.stopImmediatePropagation();
		setShow((v) => !v);
	}
	function windowClickHandler(event) {
		if (!popperElement?.contains(event.target)) {
			setShow(false);
		}
	}
	function handleMouseEnter() {
		clearTimeout(timer);
		removeEventListener("mouseleave", handleMouseLeave, true);
		setShow(true);
	}
	function handleMouseLeave() {
		timer = setTimeout(() => {
			setShow(false);
		}, 300);
	}

	useEffect(() => {
		if (referenceElement?.current) {
			setReference(referenceElement.current);
		}
		if (!reference && popperElement) {
			setReference(popperElement.previousElementSibling);
		}

		if (reference && popperElement) {
			if (trigger == "hover") {
				reference.addEventListener("mouseenter", handleMouseEnter, {
					capture: true,
				});
				reference.addEventListener("mouseleave", handleMouseLeave, {
					capture: true,
				});

				popperElement.addEventListener("mouseenter", handleMouseEnter, true);
				popperElement?.addEventListener("mouseleave", handleMouseLeave, true);
			} else {
				reference.addEventListener("click", toggle, { capture: true });
			}

			if (show) window.addEventListener("click", windowClickHandler);

			popperInstance.current = createPopper(reference, popperElement, {
				placement,
				...popperProps,
				modifiers: [
					{
						name: "offset",
						options: {
							offset: [0, 8],
						},
					},
					{
						name: "preventOverflow",
						options: {
							boundary: "viewport",
						},
					},
					//   {
					//     name: "arrow",
					//     options: {
					//       element: arrowElement,
					//       padding: 5,
					//     },
					//   },
					...(popperProps?.modifiers ?? []),
				],
			});
		}

		return () => {
			if (popperInstance.current) {
				popperInstance.current.destroy();
				popperInstance.current = null;
			}
			if (reference) {
				if (trigger == "hover") {
					reference.removeEventListener("mouseenter", handleMouseEnter, {
						capture: true,
					});
					reference.removeEventListener("mouseleave", handleMouseLeave, {
						capture: true,
					});

					popperElement?.removeEventListener(
						"mouseenter",
						handleMouseEnter,
						true
					);
					popperElement?.removeEventListener(
						"mouseleave",
						handleMouseLeave,
						true
					);
				} else {
					reference.removeEventListener("click", toggle, { capture: true });
				}
			}

			window.removeEventListener("click", windowClickHandler);
		};
	}, [reference, popperElement, show, arrowElement]);

	return (
		<div
			ref={setPopperElement}
			className={`${show ? styles.popupOpen : ""} ${styles.popup}`}
		>
			{children}
			<div className={styles.popupArrow} ref={setArrowElement} />
		</div>
	);
}
