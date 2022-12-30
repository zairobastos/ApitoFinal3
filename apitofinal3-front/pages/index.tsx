import ApitoFinal from "../components/paginaInicial/apitoFinal";
import Header from "../components/paginaInicial/header";
import Inicio from "../components/paginaInicial/inicio";
import Servicos from "../components/paginaInicial/servicos";

const Home = () => {
	return (
		<div className="bg-gray-900 flex flex-col">
			<Header />
			<div className="flex flex-col gap-14 px-16">
				<Inicio />
				<ApitoFinal />
				<Servicos />
			</div>
		</div>
	);
};
export default Home;
