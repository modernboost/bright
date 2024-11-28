"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { PopperProps } from "react-popper";
import clsx from "clsx";
import { popupStyles } from "./Popup.styles";
import ReactDOM from "react-dom";
import maxSize from "popper-max-size-modifier";

export default function Popup({
	trigger = "click",
	referenceElement,
	children,
	popperProps = {},
	placement = "bottom",
	open,
	backdrop,
	onChange,
	refEl,
}: {
	trigger?: "click" | "hover";
	backdrop?: boolean;
	children?: React.ReactNode;
	referenceElement?: HTMLElement;
	popperProps?: PopperProps;
	open?: boolean;
	placement?: "top" | "bottom" | "left" | "rigth";
	onChange?: Function | undefined;
	refEl: React.ReactNode;
}) {
	"use memo";
	const referenceEl = useRef(null);
	const aftherRefEl = useRef(null);
	const [show, setShow] = useState(open);
	const floatingEl = useRef(null);
	const [arrowElement, setArrowElement] = useState(null);
	const popperInstance = useRef(null);

	let timer: number | null = null;

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
		if (!floatingEl.current?.contains(event.target)) {
			setShow(false);
		}
	}
	function handleMouseEnter() {
		clearTimeout(timer);
		referenceEl.current?.removeEventListener(
			"mouseleave",
			handleMouseLeave,
			true
		);
		setShow(true);
	}
	function handleMouseLeave(event) {
		if (floatingEl.current?.contains(event.target)) return;
		timer = setTimeout(() => {
			setShow(false);
		}, 300);
	}
	const applyMaxSize = useEffect(() => {
		if (referenceElement?.current) {
			referenceEl.current = referenceElement.current;
		}
		if (!referenceEl.current && floatingEl.current) {
			referenceEl.current = aftherRefEl.current?.previousElementSibling;
		}

		if (referenceEl.current && floatingEl.current) {
			if (trigger == "hover") {
				referenceEl.current.addEventListener("mouseenter", handleMouseEnter, {
					capture: true,
				});
				referenceEl.current.addEventListener("mouseleave", handleMouseLeave, {
					capture: true,
				});

				floatingEl.current?.addEventListener(
					"mouseenter",
					handleMouseEnter,
					true
				);
				floatingEl.current?.addEventListener(
					"mouseleave",
					handleMouseLeave,
					true
				);
			} else {
				referenceEl.current?.addEventListener("click", toggle, {
					capture: true,
				});
			}

			if (show) window.addEventListener("click", windowClickHandler);

			popperInstance.current = createPopper(
				referenceEl.current,
				floatingEl.current,
				{
					placement,
					...popperProps,
					modifiers: [
						{
							name: "preventOverflow",
							options: {
								boundary: "viewport", // Prevent overflow from viewport
								altBoundary: true, // Check boundaries other than the parent
							},
						},
						{
							name: "offset",
							options: {
								offset: [0, 10], // Add spacing between the reference and popup
							},
						},
						maxSize,

						{
							name: "applyMaxSize",
							enabled: true,
							phase: "beforeWrite",
							requires: ["maxSize"],
							fn({ state }) {
								const { height } = state.modifiersData.maxSize;
								state.styles.popper.maxHeight = `${height}px`;
							},
						},
						...(popperProps?.modifiers ?? []),
					],
				}
			);
		}

		return () => {
			if (popperInstance.current) {
				popperInstance.current.destroy();
				popperInstance.current = null;
			}
			if (referenceEl.current) {
				if (trigger == "hover") {
					referenceEl.current.removeEventListener(
						"mouseenter",
						handleMouseEnter,
						{
							capture: true,
						}
					);
					referenceEl.current.removeEventListener(
						"mouseleave",
						handleMouseLeave,
						{
							capture: true,
						}
					);

					floatingEl.current?.removeEventListener(
						"mouseenter",
						handleMouseEnter,
						true
					);
					floatingEl.current?.removeEventListener(
						"mouseleave",
						handleMouseLeave,
						true
					);
				} else {
					referenceEl.current.removeEventListener("click", toggle, {
						capture: true,
					});
				}
			}

			window.removeEventListener("click", windowClickHandler);
		};
	}, [referenceEl.current, floatingEl.current, show, arrowElement]);

	const popupClasses = useMemo(
		() => clsx(popupStyles.popup, show && "!block"),
		[show]
	);
	const backdropClasses = useMemo(
		() => clsx(popupStyles.backdrop, show && backdrop && "!block"),
		[show]
	);

	return (
		<>
			{refEl}
			<div ref={aftherRefEl} className={backdropClasses}></div>
			{ReactDOM.createPortal(
				<div ref={floatingEl} className={popupClasses}>
					{children}
					<div className={popupStyles.arrow} ref={setArrowElement} />
				</div>,
				document.body
			)}
		</>
	);
}
