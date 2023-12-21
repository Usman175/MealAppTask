import React, { useState ,useEffect} from "react";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";

const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [categoryList, setCategoryList] = useState([]);

  const searchedProduct = categoryList;

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


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
    <Helmet title="All Meals">
      <Container>
        <Row>
          {displayPage.map((item) => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              key={item.id}
              className="mb-4 mt-4"
            >
              <ProductCard item={item} />
            </Col>
          ))}
          <div className="d-flex justify-content-center mt-4 mb-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Pizzas;
