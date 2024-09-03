
import React from "react";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/330f2d1a0d025449a4d3dd255df816d23c778b401cab299d9ff39ae32caa648d?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    name: "Ferramentas Manuais",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/55cc292390a4c2d42dd6470c0241685a9a466b89d1af800c1c77de44b53e5d2b?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    name: "Ferramentas Elétricas",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6b0579d23e9f3703d7576517c1e467241484fa1b5325f2364a83c10390f27159?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    name: "EPIs",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/530e7e790c06c26fd9c27299d496b9b711889d2cb03ac1cdf867eecd47c32820?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    name: "Instrumentos de Medição",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/55cc292390a4c2d42dd6470c0241685a9a466b89d1af800c1c77de44b53e5d2b?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    name: "Equipamentos de Soldagem e Corte",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aa58561825ab105a68f39f4b1c4d6fc7edafc4a35ee1c1e9ba837657d93822d1?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    name: "Ferramentas de Fixação",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aa58561825ab105a68f39f4b1c4d6fc7edafc4a35ee1c1e9ba837657d93822d1?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    name: "Equipamentos de Limpeza e Preparação de Superfícies",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aa58561825ab105a68f39f4b1c4d6fc7edafc4a35ee1c1e9ba837657d93822d1?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    name: "Ferramentas de Demolição",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0bb1104f4c2a512210378bc871c849ebf5879405a8d3d8f4efa9c3d6cb195557?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    name: "Geral",
  },
];

const CategoryList: React.FC = () => {
  return (
    <div className="cursor-pointer flex gap-5 justify-between items-start self-center text-sm font-semibold leading-5 text-center text-zinc-900 max-md:flex max-md:overflow-auto max-md:flex-row max-md:justify-start max-md:self-start max-md:-ml-0.5 max-sm:flex max-sm:overflow-auto max-sm:flex-row max-sm:gap-1.5">
      {categories.map((category, index) => (
        <CategoryItem key={index} image={category.image} name={category.name} />
      ))}
    </div>
  );
};

export default CategoryList;
