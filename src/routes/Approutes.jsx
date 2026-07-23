import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Cart from "../components/Cart";

const Approutes = () => {
  return (
    <div className="py-7 max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        
      </Routes>
    </div>
  );
};

export default Approutes;
