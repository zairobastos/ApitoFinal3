import Image from "next/image";
import Text from "../../components/Text";
import Logo from "../../assets/images/logo.svg";
import { Input2 } from "../../components/Input";
import Label from "../../components/Input/label";
import { Eye, EyeSlash, Envelope } from "phosphor-react";
import { useState } from "react";
const Login = () => {
	const [click, setClick] = useState(true);
	return (
		<>
			<div className="w-full flex flex-row flex-wrap">
				<div className="w-1/2 bg-white h-screen px-8 flex flex-col flex-wrap gap-8">
					<header className="mt-14 flex flex-col flex-wrap gap-5">
						<figure className="flex flex-row flex-wrap items-center gap-6">
							<Image src={Logo} alt="logo do apito final" />
							<Text
								fontSize="text-6xl"
								fontColor="text-green-100"
								fontWeight="font-bold"
								lineHeight="leading-12"
							>
								<h1>Apito Final</h1>
							</Text>
						</figure>
						<div>
							<Text fontSize="text-42xl" lineHeight="leading-10">
								<h3>Bem-vindo ao Apito Final</h3>
							</Text>
							<Text
								fontSize="text-base"
								lineHeight="leading-6"
								fontColor="text-gray-400"
							>
								<p>Faça o login para acessar sua conta.</p>
							</Text>
						</div>
					</header>
					<form className="flex flex-col flex-wrap gap-6">
						<div>
							<Label label="E-mail"></Label>
							<Input2.Root>
								<Input2.Icon>
									<Envelope />
								</Input2.Icon>
								<Input2.Input
									type={"email"}
									id="E-mail"
									placeholder="@email.com"
								></Input2.Input>
							</Input2.Root>
						</div>
						<div>
							<Label label="Senha"></Label>
							<Input2.Root>
								<Input2.Input
									id="Senha"
									placeholder="Senha"
									type={click ? "password" : "text"}
								></Input2.Input>
								<div
									onClick={() => {
										setClick(!click);
									}}
								>
									<Input2.Icon>
										{click ? <Eye /> : <EyeSlash />}
									</Input2.Icon>
								</div>
							</Input2.Root>
						</div>
					</form>
				</div>
				<figure className="w-1/2 fixed right-0 h-screen fundo"></figure>
			</div>
		</>
	);
};
export default Login;
