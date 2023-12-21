import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import { Link } from "react-router-dom";
import "../styles/hero-section.css";

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', { method: 'GET' })
        .then(response => response.json())
        .then(data => { return (data) })
        .catch(error => console.error(error));
      setCategoryList(response.categories)
    }
    fetchData();

  }, [])
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Meals
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/pizzas">
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={'https://static.vecteezy.com/system/resources/previews/008/449/511/original/the-delivery-driver-drives-through-a-mobile-phone-with-a-map-screen-online-food-delivery-concept-vector.jpg'} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
          <Row>
                {categoryList.length > 0 &&
                  categoryList.map((item) => (
                    <Col lg="6" md="6" className="mb-12" key={item.id}>
                      <ProductCard item={item} />
                    </Col>
                  ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
