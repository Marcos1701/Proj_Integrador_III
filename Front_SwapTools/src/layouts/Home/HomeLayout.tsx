
import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import CategoryList from "./Components/CategoryList/CategoryList";
import ProductSection from "./Components/ProductSection/ProductSection";
import Footer from "./Components/Footer/Footer";

const recentlyAddedProducts = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2b51a3fe5862912f4996357f008467a2a02264045d1642ee2aa87d0ca704c371?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    title: "Furadeira Makita 16mm",
    description: "Furadeira Martelete Elétrica De 16mm Makita 50hz...",
    userType: "Bronze",
    requests: 2,
    location: "Cidade Monções - SP",
    date: "11/03/2024, 11:52",
  },
];

const relatedProducts = [
  {
  image:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/2b51a3fe5862912f4996357f008467a2a02264045d1642ee2aa87d0ca704c371?apiKey=e659b181c3ec4be580186cc59fea34e1&",
  title: "Furadeira Makita 16mm",
  description: "Furadeira Martelete Elétrica De 16mm Makita 50hz...",
  userType: "Bronze",
  requests: 2,
  location: "Cidade Monções - SP",
  date: "11/03/2024, 11:52",
},
];

const mostSearchedProducts = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2b51a3fe5862912f4996357f008467a2a02264045d1642ee2aa87d0ca704c371?apiKey=e659b181c3ec4be580186cc59fea34e1&",
    title: "Furadeira Makita 16mm",
    description: "Furadeira Martelete Elétrica De 16mm Makita 50hz...",
    userType: "Bronze",
    requests: 2,
    location: "Cidade Monções - SP",
    date: "11/03/2024, 11:52",
  },
];

const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col pb-20 bg-stone-50">
      <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c7ad4489376a071963fa305ab7afae1d67d70f37a22ff5030603ddc3bd048155?apiKey=e659b181c3ec4be580186cc59fea34e1&" />
      <Banner />
      <main className="flex flex-col self-center px-5 mt-16 w-full max-w-[1680px] max-md:mt-10 max-md:max-w-full">
        <CategoryList />
        <ProductSection 
          title="Adicionados Recentemente"
          products={recentlyAddedProducts}
        />
        <ProductSection title="Itens Relacionados" products={relatedProducts} />
        <ProductSection
          title="Mais Procurados"
          products={mostSearchedProducts}
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
