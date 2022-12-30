import Card from "./card";
import { Meta, StoryObj } from "@storybook/react";
import { dataCard } from "./card";
export default {
	title: "Components/TelaPrincipal/Card2-ApitoFinal",
	component: Card,
	args: {
		description:
			"Crie, edite e organize campeonatos de futebol. Com o Apito Final, você tem a liberdade de gerenciar seus campeonatos da forma que achar melhor.",
		image: "",
		widthImage: 120,
	},
} as Meta<dataCard>;
export const Primary: StoryObj<dataCard> = {};
