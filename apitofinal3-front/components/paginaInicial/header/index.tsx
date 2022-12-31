import Logo from "../../../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="fixed bg-white w-full flex flex-wrap flex-row justify-between px-16 items-center py-3 shadow-md">
			<figure>
				<Image src={Logo} alt="Logo Apito Final" />
			</figure>
			<nav>
				<ul className="uppercase flex flex-row flex-wrap justify-center items-center gap-8 text-2xl font-light font-sans ">
					<li className="cursor-pointer">
						<Link href={"/#inicio"} scroll={false}>
							inicio
						</Link>
					</li>
					<li className="cursor-pointer">
						<Link href="/#apitofinal" scroll={false}>
							apito final
						</Link>
					</li>
					<li className="cursor-pointer">
						<Link href="/#sobre" scroll={false}>
							sobre
						</Link>
					</li>
					<li className="cursor-pointer">
						<Link href={"./login"}>login</Link>
					</li>
					<li className="cursor-pointer">cadastre-se</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
