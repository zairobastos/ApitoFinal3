import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import clsx from "clsx";
export interface dataText {
	children: ReactNode;
	asChild?: boolean;
	fontColor?:
		| "text-black-900"
		| "text-black-100"
		| "text-black-300"
		| "text-gray-900"
		| "text-gray-700"
		| "text-gray-600"
		| "text-gray-500"
		| "text-gray-400"
		| "text-green-100"
		| "text-green-800"
		| "text-red-800"
		| "text-white";
	fontSize:
		| "text-sm"
		| "text-base"
		| "text-xl"
		| "text-1xl"
		| "text-2xl"
		| "text-3xl"
		| "text-4xl"
		| "text-42xl"
		| "text-42px"
		| "text-5xl"
		| "text-6xl";
	lineHeight?: string;
	fontWeight?: string;
	textAlign?: "center" | "right" | "left" | "justify";
	fontCase?: "uppercase" | "lowercase" | "normal-case";
}

const Text = ({
	asChild = true,
	children,
	fontColor = "text-black-900",
	fontSize,
	fontWeight = "font-normal",
	lineHeight,
	textAlign = "justify",
	fontCase = "normal-case",
}: dataText) => {
	const Comp = asChild ? Slot : "span";
	return (
		<Comp
			className={clsx(
				"font-sans",
				fontColor,
				fontSize,
				fontWeight,
				lineHeight,
				fontCase,
				{
					"text-center": textAlign == "center",
					"text-justify": textAlign == "justify",
					"text-left": textAlign == "left",
					"text-right": textAlign == "right",
				}
			)}
		>
			{children}
		</Comp>
	);
};

export default Text;
