/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

/* eslint-disable react/prop-types */
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id, amount) => {
    const newItem = {
      ...product,
      amount: amount,
      totalPrice: product.price * amount,
    };

    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id
          ? {
              ...item,
              amount: item.amount + amount,
              totalPrice: item.price + product.price * amount,
            }
          : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const increaseAmount = (id) => {
    const newCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            amount: item.amount + 1,
            totalPrice: item.totalPrice + item.price,
          }
        : item
    );
    setCart(newCart);
  };

  const decreaseAmount = (id) => {
    const newCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              amount: item.amount - 1,
              totalPrice: item.totalPrice - item.price,
            }
          : item
      )
      .filter((item) => item.amount > 0);

    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        increaseAmount,
        decreaseAmount,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
