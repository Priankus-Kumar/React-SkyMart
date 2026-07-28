import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("auth") === "true";
  const storedName = JSON.parse(localStorage.getItem("signupUser"));

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("signupUser");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-full bg-[#72B01D] flex items-center justify-center text-white text-xl font-bold group-hover:rotate-12 transition duration-300">
              <i className="ri-shopping-bag-3-fill"></i>
            </div>

            <h1 className="text-3xl font-extrabold text-white">
              Sky <span className="text-[#72B01D]">Mart</span>
            </h1>
          </div>
        </NavLink>

        {/* Navigation */}
        {isAuthenticated && (
          <div className="flex items-center gap-10 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition hover:text-[#72B01D] ${
                  isActive ? "text-[#72B01D]" : "text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `transition hover:text-[#72B01D] ${
                  isActive ? "text-[#72B01D]" : "text-white"
                }`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition hover:text-[#72B01D] ${
                  isActive ? "text-[#72B01D]" : "text-white"
                }`
              }
            >
              About
            </NavLink>
          </div>
        )}

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              {/* Profile */}
              <button className="flex items-center gap-2 border border-gray-600 px-5 py-2 rounded-full text-white hover:bg-[#72B01D] hover:text-black hover:border-[#72B01D] transition duration-300">
                <i className="ri-user-3-fill"></i>
                {storedName.name}
              </button>

              {/* Cart */}
              <NavLink
                to="/cart"
                className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full text-white hover:bg-[#72B01D] hover:text-black hover:border-[#72B01D] hover:scale-110 transition duration-300"
              >
                <i className="ri-shopping-cart-2-line text-xl"></i>
              </NavLink>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full text-white hover:bg-red-500 hover:border-red-500 hover:scale-110 transition duration-300"
              >
                <i className="ri-logout-box-r-line text-xl"></i>
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-xl border-2 border-[#72B01D] ${isActive ? "bg-[#72B01D] text-white" : "bg-transparent text-[#72B01D]"} transition duration-300 hover:bg-[#72B01D] hover:text-white`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-xl border-2 border-[#72B01D] ${isActive ? "bg-[#72B01D] text-white" : "bg-transparent text-[#72B01D]"} transition duration-300 hover:bg-[#72B01D] hover:text-white`
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
