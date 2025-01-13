/* eslint-disable react/prop-types */
import { useContext } from "react";

import { ProductContext } from "../Components/ProductContext";

//Css
import "bootstrap-icons/font/bootstrap-icons.css";
import "../scss/home.scss";
import { Link } from "react-router-dom";

function ProductCard({ imgUrl, name, price, rating, id }) {
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
    <Link to={`/product/${id}`} className=" text-decoration-none">
      <div className="card h-100 d-flex justify-content-between">
        <div>
          <img src={imgUrl} alt={name} className={`card-img-top card-image `} />
          <div className="card-body pb-0">
            <p className="m-0">
              {name.length > 40 ? name.slice(0, 32) + `...` : name}
            </p>
            <p>{price}$</p>
          </div>
        </div>
        <span className="p-3 pt-1 star">{starRating(rating)}</span>
      </div>
    </Link>
  );
}
function SkeletonCard() {
  return (
    <div className="card h-100 d-flex justify-content-between">
      <div>
        <div className="placeholder card-img-top card-image"></div>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const { products, isLoad } = useContext(ProductContext);

  if (isLoad) {
    return (
      <div className="d-flex justify-content-center product-container">
        <div className="container row row-cols-5 gx-3 gy-2">
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index}>
              <SkeletonCard />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center product-container">
      <div className="container row row-cols-5 gx-3 gy-2">
        {products.map(({ title, price, image, rating, id }, index) => (
          <div className="col" key={index}>
            <ProductCard
              name={title}
              imgUrl={image}
              price={price}
              rating={rating.rate}
              id={id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
