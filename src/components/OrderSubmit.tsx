import { useAppSelector, useAppDispatch } from "../Redux/hooks/hooks";
import { clearCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

import { clearCompletedOrder } from "../Redux/completedOrderSlice";

const OrderSubmit = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const { order } = useAppSelector((state) => state.order);


  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function calculateTotal(): number | string {
    const total = order.reduce(
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

  function totalPerItem(price: number, quantity: number): number {
    return price * quantity;
  }

  function buttonHandler() {
    dispatch(clearCompletedOrder());

    navigate("/");
  }

  return (
    <div className="productsSection">
      <h2>Thanks for your order</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {order.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${priceFormat(item.price)}</td>
                <td>x{item.quantity}</td>
                <td>${priceFormat(totalPerItem(item.price, item.quantity))}</td>
              </tr>
            );
          })}

          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>

      <button className="btnMain" onClick={buttonHandler}>
        Back to Home Page
      </button>
    </div>
  );
};

export default OrderSubmit;
