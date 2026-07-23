import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto  flex items-center justify-between   py-4">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-11 h-11 rounded-full bg-[#72B01D] flex items-center justify-center text-white text-xl font-bold group-hover:rotate-12 transition-all duration-300">
              <i className="ri-shopping-bag-3-fill"></i>
            </div>

            <h1 className="text-3xl font-extrabold tracking-wide">
              Sky <span className="text-[#72B01D]">Mart</span>
            </h1>
          </div>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-10 font-medium text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative transition-all duration-300 hover:text-[#72B01D] ${
                isActive ? "text-[#72B01D]" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `relative transition-all duration-300 hover:text-[#72B01D] ${
                isActive ? "text-[#72B01D]" : ""
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative transition-all duration-300 hover:text-[#72B01D] ${
                isActive ? "text-[#72B01D]" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Profile */}
          <button className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full hover:bg-[#72B01D] hover:text-white hover:border-[#72B01D] transition-all duration-300 hover:shadow-lg hover:scale-105">
            <i className="ri-user-3-fill text-lg"></i>
            <span>Priankus</span>
          </button>

          {/* Cart */}
          <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#72B01D] hover:text-white hover:border-[#72B01D] transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg">
            <NavLink to={"/cart"}>
              {" "}
              <i className="ri-shopping-cart-2-line text-xl"></i>{" "}
            </NavLink>
          </button>

          {/* Logout */}
          <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <i className="ri-logout-box-r-line text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
