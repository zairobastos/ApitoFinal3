import Image from "next/image";
import Text from "../../../components/Text";
import Logo from "../../../assets/images/logo.svg";
import { CaretDown, UserCircle } from "phosphor-react";
const Home = () => {
	return (
		<div className="bg-gray-300">
			<header className="h-20 px-16 border-gray-300 border divide-solid shadow-3xl bg-white flex justify-between">
				<nav className="flex flex-wrap h-full gap-8">
					<figure className="h-full flex items-center">
						<Image src={Logo} alt="logo" width={50} height={50} />
					</figure>
					<div>
						<ul className="flex flex-wrap gap-7 h-12 items-end">
							<Text
								fontSize="text-1xl"
								fontCase="uppercase"
								fontWeight="font-light"
								fontColor="text-black-900"
							>
								<div className="flex flex-col h-full justify-between">
									<div className="ativo1 rounded-full"></div>
									<li>início</li>
								</div>
							</Text>
							<Text
								fontSize="text-1xl"
								fontCase="uppercase"
								fontWeight="font-light"
								fontColor="text-gray-650"
							>
								<li>campeonatos</li>
							</Text>
							<Text
								fontSize="text-1xl"
								fontCase="uppercase"
								fontWeight="font-light"
								fontColor="text-gray-650"
							>
								<li>times</li>
							</Text>
							<Text
								fontSize="text-1xl"
								fontCase="uppercase"
								fontWeight="font-light"
								fontColor="text-gray-650"
							>
								<li>jogadores</li>
							</Text>
						</ul>
					</div>
				</nav>
				<div className="flex justify-center items-center flex-row flex-wrap gap-2">
					<UserCircle size={50} color={"#959FA8"} />
					<div className="flex flex-wrap flex-row items-center gap-1">
						<Text
							fontSize="text-xl"
							fontColor="text-gray-650"
							fontWeight="font-medium"
						>
							<h3>Zairo Bastos</h3>
						</Text>
						<CaretDown size={20} color={"#959FA8"} />
					</div>
				</div>
			</header>
		</div>
	);
};
export default Home;
