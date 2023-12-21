import React, { useState, useEffect } from "react";
import "../styles/checkout.css";
import { Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { toast } from 'react-toastify';


const Checkout = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(response => response.json())
      .then(data => { return data })
      .catch(error => console.error(error));
    setRandomMeal(response.meals[0])
  }
  const addToCart = (data) => {
    const { idMeal, strMeal, strMealThumb } = data
    dispatch(
      cartActions.addItem({
        idMeal,
        strMeal,
        strMealThumb,
      })
    );
    toast(`${strMeal} Added in your favourite list.`, { position: "bottom-right", })
    fetchData()
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <h3>Random Meal generate please add to your favourite list</h3>
        </div>
        <Row>
          <Col className="mb-12" key={randomMeal.idMeal}>
            <div className="product__item d-flex flex-column justify-content-between">
              <div className="product__content">
                <img className="product__img w-50" src={randomMeal.strMealThumb} alt="meal" />
                <h5>
                  {randomMeal.strMeal}
                </h5>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-between">
                <Row>
                  <Col lg="6" md="6">
                    <button className="addTOCART__btn" onClick={() => addToCart(randomMeal)}>
                      Favourite
                    </button>
                  </Col>
                  <Col lg="6" md="6">
                    <button className="addTOCART__btn" onClick={() => fetchData()}>
                      Next
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Checkout;
