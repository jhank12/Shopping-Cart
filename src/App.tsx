import "./App.css";

import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Products from "./components/Products/Products";
import OrderSubmit from "./components/OrderSubmit";

import { Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {


  return (
    <main>
      <header>
        <div className="headerContent">
          <Link to="/">
            <h1>Shopping Cart</h1>
          </Link>
          <ShoppingCart />
        </div>
      </header>

      <Routes>
        <Route  path="/" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-submit" element={<OrderSubmit />} />

      </Routes>
    </main>
  );
}

export default App;
