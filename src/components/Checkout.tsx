import React from "react";

import { useNavigate } from "react-router-dom";
import CartItemsList from "./CartItemsList";

import { useAppDispatch, useAppSelector } from "../Redux/hooks/hooks";
import { clearCart } from "../Redux/cartSlice";

import { setCompletedOrder, clearCompletedOrder } from "../Redux/completedOrderSlice";

import ProductsList from "./ProductsList";

const Checkout = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function calculateTotal(): number | string {
    const total = cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    return priceFormat(total);
  }

  function priceFormat(price: number): number | string {
    if (Number.isInteger(price)) {
      return price;
    } else {
      return price.toFixed(2);
    }
  }

  function placeOrderHandler(){
    dispatch(setCompletedOrder(cart))
    dispatch(clearCart())
    navigate("/order-submit");
  }


  return (
    <div className="productsSection checkout-page">
      <h2>Checkout</h2>

      <div className="checkoutContent">
        <div className="checkoutCart">
          <CartItemsList />
          <p className="checkoutTotal">Total: ${calculateTotal()}</p>

          <div className="checkoutBtnsContainer">
            <button
              className="btnMain"
              onClick={placeOrderHandler}
              
            >
              Place Order
            </button>
            <button className="btnSecond" onClick={() => dispatch(clearCart())}>
              Clear
            </button>
          </div>
        </div>

        <div className="checkoutListHeadingContainer">
          <h3>You may also like</h3>
          <ProductsList className="checkout" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
