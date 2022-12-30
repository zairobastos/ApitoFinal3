import Text from "../../Text";

const Sobre = () => {
	return (
		<footer className="flex flex-col flex-wrap gap-3">
			<Text
				asChild={true}
				fontSize="text-5xl"
				lineHeight="leading-12"
				fontCase="uppercase"
			>
				<h1>Sobre</h1>
			</Text>
			<Text asChild={true} fontSize="text-42xl" lineHeight="leading-7">
				<h2>Para os apaixonados por futebol!</h2>
			</Text>
			<div>
				<Text asChild={true} fontSize="text-xl" lineHeight="leading-7">
					<p>
						Essa paixão nos moveu para desenvolver uma ferramenta
						indispensável para quem adora futebol. Com ela é
						possível organizar e participar de campeonatos
						desportivos de forma justa.
					</p>
				</Text>
				<Text asChild={true} fontSize="text-xl" lineHeight="leading-7">
					<p>
						Com o Apito Final é possível otimizar e automatizar
						processos de classificação, estatísticas e cumprir as
						normas de organização dos campeonatos criados, além de
						ter todo o processo tratado com imparcialidade.
					</p>
				</Text>
				<Text asChild={true} fontSize="text-xl" lineHeight="leading-7">
					<p>
						Traga o seu campeonato para o Apito Final e se livre de
						papeis, estresse e cobranças de organização. Seja livre
						para disfrutar o melhor do futebol, com ousadia e
						alegria.
					</p>
				</Text>
			</div>
			<Text asChild={true} fontSize="text-xl" lineHeight="leading-7">
				<p>Feito com 💚 pela equipe Apito Final - 2022.</p>
			</Text>
		</footer>
	);
};

export default Sobre;
