
import React from "react";

interface NavItemProps {
  icon: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-2.5 justify-center my-auto">
      <img
        loading="lazy"
        src={icon}
        alt={`${text} icon`}
        className="shrink-0 w-5 border-2 border-black border-solid aspect-square stroke-[2px] stroke-black"
      />
      <div>{text}</div>
    </div>
  );
};

export default NavItem;
