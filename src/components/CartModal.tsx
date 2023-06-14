import React from "react";

import CartItemsList from "./CartItemsList";

import { useAppSelector, useAppDispatch } from "../Redux/hooks/hooks";

import { clearCart } from "../Redux/cartSlice";

import { useNavigate } from "react-router-dom";

const CartModal = ({ setModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cart);

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

  function buttonActions(action: string): void {
    switch (action) {
      case "navigate":
        navigate("/checkout");
        break;
      case "clearCart":
        dispatch(clearCart());
    }
    setModalOpen(false);
  }

  return (
    <div className="card cartModal">
      {cart.length > 0 ? (
        <>
          <h2>Your Cart</h2>

          <CartItemsList />

          <div>
            <div className="cartTotal">
              <p>
                <span>Total: ${calculateTotal()}</span>
              </p>
              <p>
                <span></span>
              </p>
            </div>

            <button
              className="btnMain"
              onClick={() => buttonActions("navigate")}
            >
              Checkout
            </button>

            <button
              className="btnSecond"
              onClick={() => buttonActions("clearCart")}
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartModal;
