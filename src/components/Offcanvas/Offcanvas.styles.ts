export const offCanvasStyles = {
	base: [
		"fixed",
		"z-[60]",
		"bg-[#fefefe]",
		"max-h-screen",
		"h-screen",
		"overflow-auto  p-4 inline-block border top-0",
	],
	direction: {
		left: " left-0",
		right: "right-0",
	},
	size: {
		sm: "sm:max-w-sm ",
		md: "sm:max-w-md md:max-w-xl lg:max-w-2xl",
		lg: "sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl",
	},
	header: ["flex justify-between border-b pb-1"],
	backdrop: ["fixed z-[55] left-0 top-0 w-[100vw] h-[100vh] bg-[#0000005c]"],
};
