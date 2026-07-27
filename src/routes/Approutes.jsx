import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Cart from "../components/Cart";
import SingleProduct from "../pages/SingleProduct";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

const Approutes = () => {
  return (
    <div className="py-7 max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
};

export default Approutes;
