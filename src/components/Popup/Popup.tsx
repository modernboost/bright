"use client";
import React, { Ref, useEffect, useMemo, useRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { PopperProps } from "react-popper";
import clsx from "clsx";
import { popupStyles } from "./Popup.styles";
import ReactDOM from "react-dom";
import maxSize from "popper-max-size-modifier";

export default function Popup({
	trigger = "click",
	triggerRef,
	children,
	popperProps = {},
	placement = "bottom",
	open,
	backdrop,
	onChange,
	triggerEl,
}: {
	trigger?: "click" | "hover";
	backdrop?: boolean;
	children?: React.ReactNode;
	triggerRef?: Ref;
	popperProps?: PopperProps;
	open?: boolean;
	placement?: "top" | "bottom" | "left" | "rigth";
	onChange?: Function | undefined;
	triggerEl?: React.ReactNode;
}) {
	"use memo";
	const referenceEl = useRef(null);
	const aftherTriggerEl = useRef(null);
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
		timer && clearTimeout(timer);
		if (!show) {
			setShow(true);
		}
	}
	function handleMouseLeave(event) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			setShow(false);
		}, 300);
	}

	useEffect(() => {
		if (triggerRef?.current) {
			referenceEl.current = triggerRef.current;
		}
		if (!referenceEl.current && floatingEl.current) {
			referenceEl.current = aftherTriggerEl.current?.previousElementSibling;
		}

		if (!referenceEl.current || !floatingEl.current) {
			return;
		}

		referenceEl.current?.addEventListener("click", toggle);

		if (trigger == "hover") {
			referenceEl.current.addEventListener("mouseenter", handleMouseEnter);
			referenceEl.current.addEventListener("mouseleave", handleMouseLeave);
			floatingEl.current?.addEventListener("mouseenter", handleMouseEnter);
			floatingEl.current?.addEventListener("mouseleave", handleMouseLeave);
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
							state.styles.popper.maxHeight = `${height - 1}px`;
						},
					},
					...(popperProps?.modifiers ?? []),
				],
			}
		);

		return () => {
			if (popperInstance.current) {
				popperInstance.current.destroy();
				popperInstance.current = null;
			}

			window.removeEventListener("click", windowClickHandler);

			if (!referenceEl.current) return;
			referenceEl.current.removeEventListener("click", toggle);
			if (trigger == "hover") {
				referenceEl.current.removeEventListener("mouseenter", handleMouseEnter);
				referenceEl.current.removeEventListener("mouseleave", handleMouseLeave);
				floatingEl.current?.removeEventListener("mouseenter", handleMouseEnter);
				floatingEl.current?.removeEventListener("mouseleave", handleMouseLeave);
			}
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
			{triggerEl && triggerEl}
			<div ref={aftherTriggerEl} className={backdropClasses}></div>
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
