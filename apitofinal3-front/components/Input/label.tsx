import Text from "../Text";
export interface dataLabel {
	label: string;
}

const Label = ({ label }: dataLabel) => {
	return (
		<>
			<Text
				fontSize="text-base"
				fontColor="text-gray-700"
				lineHeight="leading-4"
			>
				<label htmlFor={label}>{label}</label>
			</Text>
		</>
	);
};

export default Label;
