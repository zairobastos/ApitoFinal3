import Image from "next/image";
import Trofeu from "../../../assets/images/paginaInicial/trofeu.svg";
export interface dataCard {
	image: string;
	description: string;
	widthImage: number;
}
const Card = ({ image, description, widthImage }: dataCard) => {
	return (
		<>
			<div className="flex flex-row gap-4 items-center bg-gray-500 px-3 py-3 rounded-2xl">
				<figure>
					{image == "" ? (
						<Image src={Trofeu} alt="Icone" width={widthImage} />
					) : (
						<Image src={image} alt="Icone" width={widthImage} />
					)}
				</figure>
				<p className="font-sans text-black-900 text-1xl font-light">
					{description}
				</p>
			</div>
		</>
	);
};

export default Card;
