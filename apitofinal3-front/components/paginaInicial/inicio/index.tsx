import Image from "next/image";
import Jogador from "../../../assets/images/paginaInicial/jogador.svg";
const Inicio = () => {
	return (
		<section className="flex flex-wrap flex-row justify-between mt-181">
			<main className="w-2/4 flex flex-col flex-wrap justify-center gap-4">
				<h2 className="font-sans font-normal text-42px text-black-900">
					Bem-vindo ao{" "}
					<span className="text-green-100">APITO FINAL</span>!
				</h2>
				<p className="font-sans font-light text-2xl">
					Gerencie os melhores campeonatos de futebol, times
					esportivos, e jogadores incríveis sem sair de casa.
				</p>
				<button className="bg-green-800 w-1/3 py-2 rounded text-white font-normal font-sans text-2xl">
					Cadastre-se
				</button>
			</main>
			<figure>
				<Image src={Jogador} alt="jogador" />
			</figure>
		</section>
	);
};

export default Inicio;
