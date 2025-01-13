import { useContext, useEffect } from "react";
import { ProductContext } from "../Components/ProductContext";
import { useParams } from "react-router-dom";
import { CartContext } from "../Components/CartContext";
import { useState } from "react";

import "../scss/productDetail.scss";

function ProductDetails() {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [amount, setAmount] = useState();

  useEffect(() => {
    setAmount(1);
  }, [id]);

  const product = products.find((data) => data.id === Number(id));
  if (!product) {
    return <p>Loading...</p>;
  }

  const starRating = (rating) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      star.push(
        <i
          key={i}
          className={`bi ${
            i < Math.floor(rating)
              ? `bi-star-fill`
              : i + 0.5 < rating
              ? `bi-star-half`
              : `bi-star`
          }`}
        ></i>
      );
    }
    return star;
  };

  return (
    <div className="container product-detail d-flex flex-column">
      <div className="d-flex">
        <img src={product.image} alt={product.title} className=" p-3" />
        <div className="product-info d-flex flex-column justify-content-between">
          <div className="name-description">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
          <div>
            <h3>{product.price}$</h3>
            <div className="d-flex">
              <button
                onClick={() =>
                  setAmount((prev) => (prev <= 1 ? prev : prev - 1))
                }
              >
                -
              </button>
              <p className="amount-text">{amount}</p>
              <button onClick={() => setAmount((prev) => prev + 1)}>+</button>
              <button
                onClick={() => addToCart(product, product.id, amount)}
                className="add-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews p-3 pt-0">
        <p className="h5">Customer Reviews</p>
        <span className="star">{starRating(product.rating.rate)}</span>
        <span className="rating-text">{product.rating.rate} out of 5</span>
        <p>{product.rating.count} ratings</p>
      </div>
      <div>
        <p>Reccomend Product</p>
      </div>
    </div>
  );
}

export default ProductDetails;
