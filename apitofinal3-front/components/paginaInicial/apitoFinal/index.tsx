import Gratuidade from "../../../assets/images/paginaInicial/gratuito.svg";
import Flexivel from "../../../assets/images/paginaInicial/flexivel.svg";
import Classificacao from "../../../assets/images/paginaInicial/classificacao.svg";
import Card from "./card";
import Text from "../../Text";
const ApitoFinal = () => {
	return (
		<main className="flex flex-col flex-wrap gap-14" id="apitofinal">
			<Text
				asChild={true}
				fontColor="text-green-100"
				fontSize="text-5xl"
				textAlign="center"
				lineHeight="leading-12"
				fontCase="uppercase"
			>
				<h1>apito Final</h1>
			</Text>
			<div className="flex flex-wrap flex-row w-full justify-between items-start">
				<Card
					image={Gratuidade}
					title="Gratuito"
					description="Pronto para usar! Você pode começar a usar imediatamente,
					sem a necessidade de cadastrar dados financeiros."
				/>
				<Card
					image={Classificacao}
					title="Classificação e Ranking"
					description="Tabelas de classificação,
					artilharia e rankings calculados
					automaticamente."
				/>
				<Card
					image={Flexivel}
					title="Aplicação Flexível"
					description="Interface simples e prática para
					criar campeonatos de
					categorias e com diferente
					número de fases e rodadas."
				/>
			</div>
		</main>
	);
};

export default ApitoFinal;
