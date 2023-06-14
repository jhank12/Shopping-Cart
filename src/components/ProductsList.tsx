import React from "react";

import Product from "./Product/Product";

import { useAppSelector } from "../Redux/hooks/hooks";

const ProductsList = ({ className }: React.HTMLAttributes<T>) => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <div className={`productsContainer ${className}`}>
      {products.map((product) => {
        return (
          <Product
            key={product.productId}
            product={product}
            className={className}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
