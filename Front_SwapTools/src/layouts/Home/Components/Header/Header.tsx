import type { FC } from "react";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import {
	FiUser,
	FiClipboard,
	FiActivity,
	FiStar,
	FiBell,
	FiMessageCircle,
} from "react-icons/fi";

import { CiBoxes, CiShuffle } from "react-icons/ci";

type HeaderProps = {
	logoSrc: string;
};

const Header: FC<HeaderProps> = ({ logoSrc }) => {
	const navigate = useNavigate();
	const handleSignUp = () => {
		navigate("/cadastro");
	};

	return (
		<header
			// className={`${styles.header} flex justify-center items-center px-3 py-5 w-full bg-teal-400 border-b border-gray-300 border-solid max-md:px-5 max-md:max-w-full`}
			className={`${styles.header} flex justify-center items-center px-3 py-5 w-full bg-[#47A8BD] border-b border-[#47A8BD] border-solid max-md:px-5 max-md:max-w-full`}
		>
			<div className="flex gap-5 justify-between w-full max-w-[1794px] max-md:flex-wrap max-md:max-w-full">
				<img
					loading="lazy"
					src={logoSrc}
					alt="Logo"
					className="shrink-0 h-6 w-6 max-md:h-5 max-md:w-5"
				/>
				<div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
					<SearchBar />
					<nav className="flex gap-5 justify-center my-auto text-sm font-semibold leading-5 text-neutral-900 max-md:flex-wrap">
						<NavItem
							icon={
								<CiShuffle
									className="my-auto text-neutral-900 w-6 h-6"
									aria-hidden="true"
								/>
							}
							text="Trocas em andamento"
						/>
						<NavItem
							icon={
								<CiBoxes
									className="my-auto text-neutral-900 w-6 h-6"
									aria-hidden="true"
								/>
							}
							text="Meus Anúncios"
						/>
						<NavItem
							icon={
								<FiBell
									className="my-auto text-neutral-900 w-6 h-6"
									aria-hidden="true"
								/>
							}
							text="Notificações"
						/>
						<NavItem
							icon={
								<FiStar
									className="my-auto text-neutral-900 w-6 h-6"
									aria-hidden="true"
								/>
							}
							text="Favoritos"
						/>
					</nav>
				</div>
				<div className="flex gap-5 justify-between font-semibold">
					<button
						className="justify-center px-7 py-3 text-lg leading-5 whitespace-nowrap border border-teal-100 border-solid rounded-full text-neutral-900 max-md:px-5 max-sm:text-xs max-sm:text-center max-sm:h-[31.4px] max-sm:w-[80.2px]"
						type="button"
					>
						Entrar
					</button>
					<button
						className="justify-center items-start self-start px-6 py-2.5 text-base leading-5 text-neutral-900 bg-teal-100 border border-slate-700 border-solid rounded-full max-md:px-5 max-sm:text-xs max-sm:text-center max-sm:h-[31.4px] max-sm:w-[80.2px]"
						onClick={handleSignUp}
						type="button"
					>
						Crie sua conta
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
