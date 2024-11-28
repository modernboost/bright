export const modalStyles = {
	modal: [
		"relative",
		"z-2",
		"left-[50%]",
		"top-[50%]",
		"w-[100%]",
		"bg-[#fefefe]",
		"max-h-[95dvh]",
		"w-full",
		"transform translate-x-[-50%] translate-y-[-50%]",
		"overflow-auto rounded-md p-4 inline-block border",
	],
	size: {
		sm: "sm:max-w-sm ",
		md: "sm:max-w-md md:max-w-xl lg:max-w-2xl",
		lg: "sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl",
	},
	header: ["flex justify-between border-b pb-1"],
	backdrop: ["fixed z-1 left-0 top-0 w-[100vw] h-[100vh] bg-[#0000005c]"],
};
