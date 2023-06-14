import { useState } from "react";

import { useAppDispatch } from "../../Redux/hooks/hooks";

import { addToCart } from "../../Redux/cartSlice";

import { useId } from "react";

type PropTypes = {
  product: { productId: number; name: string; price: number; image: string };
};

const Product = ({ product }: PropTypes) => {
  const dispatch = useAppDispatch();
  const id = useId();

  const [quantityCounter, setQuantityCounter] = useState(1);

  function addToCartHandler() {
    const productObj = {
      productId: product.productId,
      name: product.name,
      price: product.price,
      quantity: quantityCounter,
      id: id,
      image: product.image,
    };
    dispatch(addToCart(productObj));
  }

  function priceFormat(price: number): number | string {
    if (Number.isInteger(price)) {
      return price;
    } else {
      return price.toFixed(2);
    }
  }

  return (
    <div className="card">
      <div className="productImg">
        <img src='/images/dumbbell.png' alt={product.image} />
      </div>
      <div className="productInfo">
        <h3>{product.name}</h3>
        <p>${priceFormat(product.price)}</p>
      </div>

      <div className="addToCartActions">
        <select
          onChange={(e) => setQuantityCounter(parseInt(e.currentTarget.value))}
        >
          {new Array(10).fill(" ").map((_, idx) => (
            <option key={idx}>{idx + 1}</option>
          ))}
        </select>

        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
