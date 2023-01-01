import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

interface inputRootProps {
	children: ReactNode;
}

const InputRoot = ({ children }: inputRootProps) => {
	return (
		<div className="flex items-center gap-3 bg-gray-900 border-solid border border-gray-600 rounded px-3 py-3 focus-within:ring-2">
			{children}
		</div>
	);
};

export interface dataInput extends InputHTMLAttributes<HTMLInputElement> {}
const Input = (props: dataInput) => {
	return (
		<>
			<div className="flex flex-col flex-wrap w-full gap-1">
				<input
					{...props}
					className={clsx(
						"bg-transparent flex-1 font-sans font-normal text-base placeholder:text-gray-700 outline-none border-none px-0 py-0"
					)}
				/>
			</div>
		</>
	);
};

interface dataInputIcons {
	children: ReactNode;
	asChild?: boolean;
}
const inputIcons = ({ children, asChild = true }: dataInputIcons) => {
	const Comp = asChild ? Slot : "span";
	return <Comp className="w-6 h-6 text-gray-700">{children}</Comp>;
};

export const Input2 = {
	Root: InputRoot,
	Input: Input,
	Icon: inputIcons,
};
