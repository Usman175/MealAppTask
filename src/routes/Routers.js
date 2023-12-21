import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Pizzas from "../pages/Pizzas";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import AboutMe from "../pages/AboutMe"
import Checkout from "../pages/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Pizzas />} />
      <Route path="/myfavourites" element={<Cart />} />
      <Route path="/mealgenerator" element={<Checkout />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
    </Routes>
  );
};

export default Routers;
