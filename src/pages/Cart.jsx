import { useContext } from "react";
import { CartContext } from "../Components/CartContext";
import "../scss/cart.scss";

export default function Cart() {
  const { cart, increaseAmount, decreaseAmount } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart">
      <div className="container">
        <h1>Cart</h1>
        {cart.map(({ id, image, title, totalPrice, amount }, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="d-flex name">
              <img src={image} alt={title} />
              <p>{title}</p>
            </div>
            <p>{totalPrice.toFixed(2)}$</p>
            <div className="amount d-flex align-items-center">
              <button onClick={() => decreaseAmount(id)}>-</button>
              <p>{amount}</p>
              <button onClick={() => increaseAmount(id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
