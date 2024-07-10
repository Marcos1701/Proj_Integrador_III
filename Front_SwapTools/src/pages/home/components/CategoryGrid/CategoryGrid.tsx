
import React from "react";
import CategoryItem from "./CategoryItem";

const categories = [
  { icon: "http://b.io/ext_76-", name: "Ferramentas Manuais" },
  { icon: "http://b.io/ext_77-", name: "Ferramentas Elétricas" },
  { icon: "http://b.io/ext_78-", name: "EPIs" },
  { icon: "http://b.io/ext_79-", name: "Instrumentos de Medição" },
  { icon: "http://b.io/ext_80-", name: "Equipamentos de Soldagem e Corte" },
  { icon: "http://b.io/ext_81-", name: "Ferramentas de Fixação" },
  {
    icon: "http://b.io/ext_82-",
    name: "Equipamentos de Elevação e Movimentação",
  },
  {
    icon: "http://b.io/ext_83-",
    name: "Equipamentos de Limpeza e Preparação de Superfícies",
  },
  { icon: "http://b.io/ext_84-", name: "Ferramentas de Demolição" },
  { icon: "http://b.io/ext_85-", name: "Geral" },
];

const CategoryGrid: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between items-start self-center text-sm font-semibold leading-5 text-center text-zinc-900 max-md:flex-wrap">
      {categories.map((category, index) => (
        <CategoryItem key={index} icon={category.icon} name={category.name} />
      ))}
    </div>
  );
};

export default CategoryGrid;
