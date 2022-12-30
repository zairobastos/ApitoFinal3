import Image from "next/image";
import Jogador from "../../../assets/images/paginaInicial/jogador.svg";
import Text from "../../Text";
const Inicio = () => {
	return (
		<section className="flex flex-wrap flex-row justify-between mt-181">
			<main className="w-2/4 flex flex-col flex-wrap justify-center gap-4">
				<Text asChild={true} fontSize="text-42px">
					<h2>
						Bem-vindo ao{" "}
						<Text
							asChild={false}
							fontSize="text-42px"
							fontColor="text-green-100"
						>
							APITO FINAL
						</Text>
						!
					</h2>
				</Text>
				<Text
					asChild={true}
					fontWeight="font-light"
					fontSize="text-2xl"
				>
					<p>
						Gerencie os melhores campeonatos de futebol, times
						esportivos, e jogadores incríveis sem sair de casa.
					</p>
				</Text>
				<button className="bg-green-800 w-1/3 py-2 rounded text-white text-2xl">
					<Text
						asChild={false}
						fontSize="text-2xl"
						fontColor="text-white"
					>
						Cadastre-se
					</Text>
				</button>
			</main>
			<figure>
				<Image src={Jogador} alt="jogador" />
			</figure>
		</section>
	);
};

export default Inicio;
