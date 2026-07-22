import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";

const Approutes = () => {
  return (
    <div className="py-7 max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default Approutes;
