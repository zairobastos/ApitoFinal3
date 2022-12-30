import Image from "next/image";
interface dateCards {
	image: string;
	title: string;
	description: string;
}

const Card = ({ image, title, description }: dateCards) => {
	return (
		<>
			<div className="flex flex-col flex-wrap gap-3 w-1/4 justify-center">
				<figure className="flex justify-center">
					<Image src={image} alt="Gratuidade" />
				</figure>
				<h4 className="font-sans font-normal text-black-900 text-2xl leading-8 text-center">
					{title}
				</h4>
				<p className="font-sans font-light text-black-100 text-2xl leading-8 text-center">
					{description}
				</p>
			</div>
		</>
	);
};

export default Card;
