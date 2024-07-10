
import React from "react";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";

type HeaderProps = {
  logoSrc: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <header className="flex justify-center items-center px-6 py-5 w-full bg-teal-400 border-b border-gray-300 border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1794px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src={logoSrc}
          alt="Logo"
          className="shrink-0 my-auto w-6 border-4 border-solid aspect-[1.33] border-neutral-900 stroke-[4px] stroke-neutral-900 max-md:border-none max-sm:w-6"
        />
        <div className="flex gap-5 justify-between font-semibold">
          <button className="justify-center px-14 py-3 text-lg leading-5 whitespace-nowrap border border-teal-100 border-solid rounded-[500px] text-neutral-900 max-md:px-5 max-sm:text-xs max-sm:text-center max-sm:h-[31.4px] max-sm:w-[80.2px]">
            Entrar
          </button>
          <button className="justify-center items-start self-start px-6 py-2.5 text-base leading-5 text-white bg-yellow-500 border border-orange-500 border-solid rounded-[500px] max-md:justify-center max-md:items-center max-md:pl-4 max-sm:justify-center max-sm:items-center max-sm:text-xs max-sm:text-center max-sm:h-[31.4px] max-sm:w-[100.6px]">
            Crie sua conta
          </button>
        </div>
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <SearchBar />
          <nav className="flex gap-5 justify-center my-auto text-sm font-semibold leading-5 text-neutral-900 max-md:flex-wrap">
            <NavItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cd6d9b9e43cf980d4bb3d658681f20e46925d105710da9e764e98ed593689157?apiKey=e659b181c3ec4be580186cc59fea34e1&"
              text="Trocas em andamento"
            />
            <NavItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0bb1104f4c2a512210378bc871c849ebf5879405a8d3d8f4efa9c3d6cb195557?apiKey=e659b181c3ec4be580186cc59fea34e1&"
              text="Meus Anúncios"
            />
            <NavItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8b0f0125ec953439860efa406db12d66682edf84900cc317ec39a05334a266ef?apiKey=e659b181c3ec4be580186cc59fea34e1&"
              text="Notificações"
            />
            <NavItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a47a8eb2a713539291f27afcdc152861d0380ac90d541ee5c5da78a1235218?apiKey=e659b181c3ec4be580186cc59fea34e1&"
              text="Favoritos"
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
