
import React from 'react';
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  const categories = [
    ["Celulares e Telefonia", "Carros Usados e Seminovos", "Motos", "Computadores e Acessórios", "Casas"],
    ["Móveis", "Eletromésticos", "Videogames", "Áudio, TV, Vídeo e Fotografia", "Cachorros e Acessórios"],
    ["Apartamentos", "Peças Auto", "Vagas de Emprego", "Serviços", "Materiais de construção e jardim"],
    ["Artigos infantis", "Terrenos e sítios", "Roupas e calçados", "Esportes e ginástica", "Beleza e saúde"],
    ["Bijouterias, relógios e acessórios", "Utilidades domésticas", "Instrumentos musicais", "Peças de moto", "Objetos de decoração"]
  ];

  return (
    <footer   className={`bg-white py-6 self-center mt-64 w-full max-w-[1515px] max-md:hidden max-md:mt-10 max-md:max-w-full`}>
      <div className={`flex justify-center flex gap-5 max-md:flex-col max-md:gap-0`}>
        <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:hidden max-md:mt-10 max-md:max-w-[132%] max-md:w-[553px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {categories.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base font-semibold text-zinc-900 max-md:mt-10 max-md:w-[117px]">
                    {column.map((category, index) => (
                      <div key={index} className={`${index > 0 ? 'mt-6' : ''} leading-[160%] max-md:w-[117px]`}>
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full`} />
    <div className={`flex flex-row justify-between items-center content-center  box-border flex relative flex-row justify-evenly shrink-0 mt-5 h-[200px] max-md:hidden max-md:flex-row max-md:justify-center max-md:items-center max-md:h-[62px]`}>
        <div className="max-md:mr-6 max-md:font-semibold max-md:w-[142.5px]">
          Bijouterias, relógios e acessórios
        </div>
        <div className="mt-5 max-md:font-semibold">Utilidades domésticas</div>
        <div className="mt-6 leading-[163%] max-md:font-semibold">
          Instrumentos musicais
        </div>
        <div className="mt-6 max-md:font-semibold">Peças de moto</div>
      <div className="mt-6 leading-[163%]">Objetos de decoração</div>
      </div>
      <div className="flex flex-col grow text-base font-semibold leading-6 text-zinc-900 max-md:flex max-md:flex-row max-md:mt-10 max-md:w-[124px]" /><div className="self-start mt-20 ml-8 text-sm leading-5 text-zinc-900 max-md:mt-10 max-md:max-w-full">
        © Brazino, o Jogo da Galera Ltda. - Praça da Liberdade, 1597, Centro - 64000-040 - Teresina, PI
      </div>
  </footer>
);
};

export default Footer;