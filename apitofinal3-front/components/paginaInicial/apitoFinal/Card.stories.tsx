import Card from "./card";
import { Meta, StoryObj } from "@storybook/react";
import { dateCards } from "./card";
export default {
	title: "Components/TelaPrincipal/Card-ApitoFinal",
	component: Card,
	args: {
		image: "",
		title: "Gratuito",
		description:
			"Pronto para usar! Você pode começar a usar imediatamente,sem a necessidade de cadastrar dados financeiros.",
	},
} as Meta<dateCards>;
export const Primary: StoryObj<dateCards> = {};
