import { useAppDispatch, useAppSelector } from "../Redux/hooks/hooks";

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../Redux/cartSlice";

const CartItemsList = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function priceFormat(price: number): number | string {
    if (Number.isInteger(price)) {
      return price;
    } else {
      return price.toFixed(2);
    }
  }

  return (
    <div className="cartItemsList">
      {cart.map((item) => {
        const { name, price, quantity, id, image } = item;

        return (
          <div className="cartItem" key={item.id}>
            <div className="cartProductInfo">
              <img src={image} alt="" />
              <div>
                <p>{name}</p>
                <p>
                  <span>${priceFormat(price)}</span>
                </p>
              </div>
            </div>

            <div className="quantityCounter">
              {quantity > 1 ? (
                <div
                  className="counterCircle"
                  onClick={() => dispatch(decrementQuantity(id))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </div>
              ) : (
                <div
                  className="counterCircle"
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                </div>
              )}

              <p>{quantity}</p>

              <div
                className="counterCircle"
                onClick={() => dispatch(incrementQuantity(id))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItemsList;
