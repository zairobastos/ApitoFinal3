import { Input2 } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { dataInput } from "./index";
import { Envelope } from "phosphor-react";
export default {
	title: "Components/GlobalComponents/Input",
	component: Input2.Root,
	args: {
		children: (
			<>
				<Input2.Icon>
					<Envelope />
				</Input2.Icon>
				<Input2.Input placeholder="@email" id="Email" type={"email"} />
			</>
		),
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
} as Meta<dataInput>;
export const Primary: StoryObj<dataInput> = {};
