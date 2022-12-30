import Gratuidade from "../../../assets/images/paginaInicial/gratuito.svg";
import Flexivel from "../../../assets/images/paginaInicial/flexivel.svg";
import Classificacao from "../../../assets/images/paginaInicial/classificacao.svg";
import Card from "./card";
const ApitoFinal = () => {
	return (
		<main className="flex flex-col flex-wrap gap-14">
			<h1 className="text-green-100 uppercase text-5xl leading-12 font-sans font-normal text-center">
				apito Final
			</h1>
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
