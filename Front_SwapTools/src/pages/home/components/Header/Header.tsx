
import React from "react";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import UserActions from "./UserActions";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center px-6 py-5 w-full bg-teal-400 border-b border-gray-300 border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1794px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="http://b.io/ext_70-"
          alt="Company logo"
          className="shrink-0 my-auto w-6 border-4 border-solid aspect-[1.33] border-neutral-900 stroke-[4px] stroke-neutral-900"
        />
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <SearchBar />
          <nav className="flex gap-5 justify-center my-auto text-sm font-semibold leading-5 text-neutral-900 max-md:flex-wrap">
            <NavItem icon="http://b.io/ext_71-" text="Trocas em andamento" />
            <NavItem icon="http://b.io/ext_72-" text="Meus Anúncios" />
            <NavItem icon="http://b.io/ext_73-" text="Notificações" />
            <NavItem icon="http://b.io/ext_74-" text="Favoritos" />
          </nav>
        </div>
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
