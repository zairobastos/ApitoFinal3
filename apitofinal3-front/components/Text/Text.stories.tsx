import Text from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { dataText } from "./index";
export default {
	title: "Components/GlobalComponents/Text",
	component: Text,
	args: {
		children: "",
	},
	argTypes: {
		fontSize: {
			options: [
				"text-sm",
				"text-base",
				"text-1xl",
				"text-xl",
				"text-2xl",
				"text-3xl",
				"text-42xl",
				"text-4xl",
				"text-42px",
				"text-5xl",
			],
			control: {
				type: "inline-radio",
			},
		},
		fontWeight: {
			options: [
				"font-thin",
				"font-extralight",
				"font-light",
				"font-normal",
				"font-medium",
				"font-semibold",
				"font-bold",
				"font-black",
			],
			control: {
				type: "inline-radio",
			},
		},
	},
} as Meta<dataText>;
export const Primary: StoryObj<dataText> = {
	args: {
		asChild: false,
		children: "<h2>Apito Final</h2>",
	},
};
