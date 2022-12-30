import Image from "next/image";
import Gratuidade from "../../../assets/images/paginaInicial/gratuito.svg";
import Text from "../../Text";
export interface dateCards {
	image: string;
	title: string;
	description: string;
}

const Card = ({ image, title, description }: dateCards) => {
	return (
		<>
			<div className="flex flex-col flex-wrap gap-3 w-1/4 justify-center bg-gray-900">
				<figure className="flex justify-center">
					{image == "" ? (
						<Image src={Gratuidade} alt="Gratuidade" />
					) : (
						<Image src={image} alt="Gratuidade" />
					)}
				</figure>
				<Text
					asChild={true}
					fontSize="text-2xl"
					textAlign="center"
					lineHeight="leading-8"
				>
					<h4>{title}</h4>
				</Text>
				<Text
					asChild={true}
					fontSize="text-2xl"
					textAlign="center"
					lineHeight="leading-8"
					fontColor="text-black-100"
					fontWeight="font-light"
				>
					<p>{description}</p>
				</Text>
			</div>
		</>
	);
};

export default Card;
