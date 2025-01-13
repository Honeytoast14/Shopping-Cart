/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((respon) => {
          setProducts(respon.data);
        })
        .catch((err) => console.error("Error fetching data: ", err))
        .finally(() => setIsLoad(false));
    };

    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoad }}>
      {children}
    </ProductContext.Provider>
  );
};
