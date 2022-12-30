import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import clsx from "clsx";
export interface dataText {
	children: ReactNode;
	asChild: boolean;
	fontColor?: string;
	fontSize: string;
	lineHeight?: string;
	fontWeight?: string;
	textAlign?: "center" | "right" | "left" | "justify";
	fontCase?: "uppercase" | "lowercase" | "normal-case";
}

const Text = ({
	asChild,
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
