import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Cart from "../components/Cart";
import SingleProduct from "../pages/SingleProduct";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

const Approutes = () => {
  
  const ProtectRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    return isAuthenticated ? element : <Navigate to="/signup" />;
  };

  return (
    <div className="py-7 max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<ProtectRoute element={<Home />} />} />
        <Route path="/shop" element={<ProtectRoute element={<Shop />} />} />
        <Route path="/about" element={<ProtectRoute element={<About />} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Approutes;
