
import React from "react";
import FooterColumn from "./FooterColumn";

const Footer: React.FC = () => {
  const footerColumns = [
    {
      items: [
        "Celulares e Telefonia",
        "Carros Usados e Seminovos",
        "Motos",
        "Computadores e Acessórios",
        "Casas",
      ],
    },
    {
      items: [
        "Móveis",
        "Eletromésticos",
        "Videogames",
        "Áudio, TV, Vídeo e Fotografia",
        "Cachorros e Acessórios",
      ],
    },
    {
      items: [
        "Apartamentos",
        "Peças Auto",
        "Vagas de Emprego",
        "Serviços",
        "Materiais de construção e jardim",
      ],
    },
    {
      items: [
        "Artigos infantis",
        "Terrenos e sítios",
        "Roupas e calçados",
        "Esportes e ginástica",
        "Beleza e saúde",
      ],
    },
    {
      items: [
        "Bijouterias, relógios e acessórios",
        "Utilidades domésticas",
        "Instrumentos musicais",
        "Peças de moto",
        "Objetos de decoração",
      ],
    },
  ];

  return (
    <footer className="self-center mt-64 w-full max-w-[1515px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {footerColumns.map((column, index) => (
                <FooterColumn key={index} items={column.items} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="self-start mt-20 ml-8 text-sm leading-5 text-zinc-900 max-md:mt-10 max-md:max-w-full">
        © Brazino, o Jogo da Galera Ltda. - Praça da Liberdade, 1597, Centro -
        64000-040 - Teresina, PI
      </div>
    </footer>
  );
};

export default Footer;
