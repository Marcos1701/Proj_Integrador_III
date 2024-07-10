
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="flex flex-col items-start px-20 py-7 w-full font-semibold bg-teal-400 shadow-sm max-md:px-5 max-md:max-w-full max-sm:pt-2">
      <h1 className="text-4xl tracking-widest leading-8 text-neutral-900 max-md:max-w-full max-sm:text-2xl">
        SwapTools
      </h1>
      <p className="text-xl tracking-wider leading-8 text-lime-400 max-md:max-w-full max-sm:pt-2.5 max-sm:text-sm max-sm:leading-4">
        Construa conexões, troque ferramentas: juntos, criamos um futuro{" "}
        <span className="text-lime-400">sustentável</span>.
      </p>
    </section>
  );
};

export default Banner;
