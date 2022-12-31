import Image from "next/image";
import Trofeu from "../../../assets/images/paginaInicial/trofeu.svg";
import Text from "../../Text";
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
				<Text
					asChild={true}
					fontSize="text-1xl"
					fontWeight="font-light"
					textAlign="left"
				>
					<p>{description}</p>
				</Text>
			</div>
		</>
	);
};

export default Card;
