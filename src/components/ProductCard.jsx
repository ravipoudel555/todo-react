import React from "react";

import "./ProductCard.css";

const ProductCard = (props) => {
  const {id, title, description, price, image} = props.product;
  console.log();
  return (
    <div className="card" key={id}>
      <img src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
