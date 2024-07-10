
import React from "react";

const Header: React.FC = () => {
  return (
    // fica sempre na parte superior, no canto superior esquerdo da tela
    <header className="absolute z-10 top-0 left-0 flex items-center justify-start p-5">
      SWAPTOOLS
    </header>
  );
};

export default Header;
