import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] px-8 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* LEFT HERO */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl hover:border-[#72B01D] hover:shadow-[0_0_40px_#72B01D30] transition-all duration-500">
          <p className="text-[#72B01D] text-lg font-semibold flex items-center gap-2">
            GooD Morning 🫡
          </p>

          <h1 className="text-6xl font-black mt-4 leading-tight">
            Welcome back,
            <br />
            <span className="text-[#72B01D]">Priankus</span>
          </h1>

          <p className="text-[#94A3B8] text-lg leading-8 mt-8 max-w-2xl">
            Discover today's hand-picked collection of premium electronics,
            fashion, accessories and everyday essentials. Experience shopping
            that's faster, smarter and made just for you.
          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-10">
            <NavLink to="/shop">
              <button className="bg-[#72B01D] text-black font-bold px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-all duration-300">
                Shop Now
                <i className="ri-arrow-right-line text-xl"></i>
              </button>
            </NavLink>
            <NavLink to="/shop">
              <button className="border border-[#72B01D] text-[#72B01D] px-8 py-4 rounded-2xl   hover:shadow-[0_0_30px_#72B01D] transition-all duration-300">
                View All Products
              </button>
            </NavLink>
          </div>

          {/* Bottom Cards */}

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-6 hover:shadow-[0_0_30px_#72B01D40] hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#72B01D]/20 flex items-center justify-center text-[#72B01D] text-2xl">
                <i className="ri-shopping-bag-3-fill"></i>
              </div>

              <h2 className="text-4xl font-bold mt-5">60+</h2>

              <p className="text-[#94A3B8] mt-2">Products Available</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-6 hover:shadow-[0_0_30px_#72B01D40] hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#72B01D]/20 flex items-center justify-center text-[#72B01D] text-2xl">
                <i className="ri-truck-line"></i>
              </div>

              <h2 className="text-4xl font-bold mt-5">Free</h2>

              <p className="text-[#94A3B8] mt-2">Delivery above ₹599</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex flex-col gap-8">
          {/* Cart */}

          <NavLink to="/cart">
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#72B01D] hover:shadow-[0_0_35px_#72B01D30] transition-all duration-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#94A3B8]">Cart Items</p>
                  <h2 className="text-6xl font-black mt-3">0</h2>
                  <p className="text-[#94A3B8] mt-2">In your shopping bag</p>
                </div>

                <div className="w-20 h-20 rounded-full bg-[#72B01D]/20 flex items-center justify-center text-[#72B01D] text-4xl">
                  <i className="ri-shopping-cart-2-fill"></i>
                </div>
              </div>
            </div>
          </NavLink>

          {/* Total */}

          <NavLink to="/cart">
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#72B01D] hover:shadow-[0_0_35px_#72B01D30] transition-all duration-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#94A3B8]">Total Value</p>
                  <h2 className="text-5xl font-black mt-3">₹0</h2>
                  <p className="text-[#94A3B8] mt-2">Ready to checkout</p>
                </div>

                <div className="w-20 h-20 rounded-full bg-[#72B01D]/20 flex items-center justify-center text-[#72B01D] text-4xl">
                  <i className="ri-wallet-3-fill"></i>
                </div>
              </div>
            </div>
          </NavLink>

          {/* Offer Card */}

          <div className="rounded-3xl p-8 bg-linear-to-br from-[#72B01D]/20 via-transparent to-[#72B01D]/10 border border-[#72B01D]/30 hover:shadow-[0_0_40px_#72B01D40] transition-all duration-500">
            <p className="text-[#72B01D] font-semibold">Today's Offer</p>

            <h2 className="text-3xl font-bold mt-3">25% OFF</h2>

            <p className="text-[#94A3B8] mt-4 leading-7">
              Shop electronics worth ₹2999 and unlock exclusive discounts with
              free express delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
