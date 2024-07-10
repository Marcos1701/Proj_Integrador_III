
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../services/api";

interface ProductGridProps {
  title: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, []);

  return (
    <section className="mt-16 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-2xl font-semibold leading-8 text-zinc-900 mb-6">
        {title}
      </h2>
      <div className="flex gap-2 justify-center max-md:flex-wrap">
        <div className="flex flex-col justify-center p-0.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-wrap">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
        <img
          loading="lazy"
          src="http://b.io/ext_86-"
          alt="Navigation arrow"
          className="shrink-0 my-auto w-10 shadow-sm aspect-square"
        />
      </div>
    </section>
  );
};

export default ProductGrid;
