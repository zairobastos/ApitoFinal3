import Image from "next/image";

import Jogador from "../../../assets/images/paginaInicial/229515_soccer-png(1) 1.svg";

import Trofeu from "../../../assets/images/paginaInicial/trofeu.svg";
import Uniforme from "../../../assets/images/paginaInicial/uniforme.svg";
import Campo from "../../../assets/images/paginaInicial/campo.svg";
import Escudo from "../../../assets/images/paginaInicial/escudo.svg";

import Card from "./card";
import Text from "../../Text";
const Servicos = () => {
	return (
		<section className="flex flex-row flex-wrap justify-between items-start">
			<div className="flex flex-col flex-wrap gap-5 w-7/12">
				<Text
					asChild={true}
					fontSize="text-5xl"
					lineHeight="leading-12"
					fontCase="uppercase"
				>
					<h1>Serviços</h1>
				</Text>
				<div className="flex flex-wrap flex-col gap-4">
					<Card
						image={Trofeu}
						widthImage={120}
						description="Crie, edite e organize campeonatos de futebol. Com o Apito
					Final, você tem a liberdade de gerenciar seus campeonatos da
					forma que achar melhor."
					/>
					<Card
						image={Uniforme}
						widthImage={120}
						description="Cadastre, edite e gerencie os jogadores do campeonato. Com o Apito Final,
						você tem a liberdade de adicionar estatísticas e dados dos jogadores."
					/>
					<Card
						image={Campo}
						widthImage={110}
						description="Defina a data, horário e local de cada partida. Com o Apito Final, você pode 
						gerenciar todas as informações de cada partida."
					/>
					<Card
						image={Escudo}
						widthImage={120}
						description="Cadastre, edite e gerencie os times do campeonato. Com o Apito Final, você
						tem a liberdade de adicionar estatísticas e dados dos times."
					/>
				</div>
			</div>
			<figure>
				<Image src={Jogador} alt="Jogador de Futebol" />
			</figure>
		</section>
	);
};

export default Servicos;
