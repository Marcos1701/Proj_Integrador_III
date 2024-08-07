
import React from "react";

type NavItemProps = {
  icon: string;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-2.5 justify-center my-auto">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="shrink-0 mx-auto w-5 border border-black border-none aspect-square stroke-[2px] stroke-black"
      />
      <div>{text}</div>
    </div>
  );
};

export default NavItem;
