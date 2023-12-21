import React from "react";

import "../../../styles/product-card.css";

// import productImg from "../../../assets/images/product_2.1.jpg";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const {  strCategory, strCategoryThumb
  } = props.item;

  return (
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img w-50" src={strCategoryThumb} alt="meal" />
        <h5>
          <Link to={`/pizzas/${strCategory}`}>{strCategory}</Link>
        </h5>
      </div>
    </div>
  );
};

export default ProductCard;
