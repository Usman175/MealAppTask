import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/product-details.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { toast } from 'react-toastify';

const PizzaDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [mealList, setMealList] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        .then(response => response.json())
        .then(data => { return (data) })
        .catch(error => console.error(error));
      setMealList(response.meals)
    }
    fetchData();

  }, [mealList]);

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
  };

  const removeFavourite = (data) => {
    const { idMeal, strMeal } = data
      dispatch(cartActions.deleteItem(idMeal));
    toast(`${strMeal} remove from favourite list.`, { position: "bottom-right", })
  };

  const renderButtonFavourite = (data) => {
    const { idMeal } = data
    let findMealInFavourite = cartItems.find((data) => data.id === idMeal)
    if (typeof findMealInFavourite !== 'undefined') {
      return true
    } else {
      return false
    }
  }

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  Add your <span>Favourite</span>  meal
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            {mealList.length > 0 && mealList !== null ?
              mealList.map((item) => (
                <Col lg="6" md="6" className="mb-12" key={item.idMeal}>
                  <div className="product__item d-flex flex-column justify-content-between">
                    <div className="product__content">
                      <img className="product__img w-50" src={item.strMealThumb} alt="meal" />
                      <h5>
                        {item.strMeal}
                      </h5>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-between">
                      {renderButtonFavourite(item) === true ?
                        <button className="addTOCART__btn" onClick={() => removeFavourite(item)}>
                          Remove from Favourite
                        </button>
                        :
                        <button className="addTOCART__btn" onClick={() => addToCart(item)}>
                          Add to Favourite
                        </button>
                      }
                    </div>
                  </div>
                </Col>
              ))
              : null}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PizzaDetails;
