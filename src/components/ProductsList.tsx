
import Product from "./Product/Product";

import { useAppSelector } from "../Redux/hooks/hooks";

const ProductsList = () => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <div className={`productsContainer`}>
      {products.map((product) => {
        return (
          <Product
            key={product.productId}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
