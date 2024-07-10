import React from 'react';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import ProductGrid from './components/ProductGrid/ProductGrid';
import HomeLayout from '../../layouts/Home/HomeLayout';

/**
 * HomePage component representing the main landing page of the application.
 * Displays category grid and multiple product grids.
 */
const HomePage: React.FC = () => {
  return (
    <HomeLayout>
      <CategoryGrid />
      <ProductGrid title="Adicionados Recentemente" />
      <ProductGrid title="Itens Relacionados" />
      <ProductGrid title="Mais Procurados" />
    </HomeLayout>
  );
};

export default HomePage;