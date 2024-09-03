import type React from "react";

type NavItemProps = {
	icon: React.ReactNode | string;
	text: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon, text }) => {
	return (
		<div className="flex gap-2.5 justify-center my-auto">
			{typeof icon === "string" ? (
				<img
					loading="lazy"
					src={icon}
					alt=""
					className="shrink-0 mx-auto w-5 border border-black border-none aspect-square stroke-[2px] stroke-black"
				/>
			) : (
				icon
			)}
			<div>{text}</div>
		</div>
	);
};

export default NavItem;
