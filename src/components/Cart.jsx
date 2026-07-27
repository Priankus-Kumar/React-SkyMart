import React, { useContext } from "react";
import { Store } from "../context/MyStore";
import { NavLink } from "react-router";

const Cart = () => {
  const {
    cart,
    AddCart,
    productData,
    increaseQuantity,
    DecreaseQuantity,
    RemoveProduct,
    totalPrice,
  } = useContext(Store);

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-5xl font-black">
          Shopping <span className="text-[#72B01D]">Cart</span>
        </h1>
        <p className="text-[#94A3B8] mt-3">
          Review your items before checkout.
        </p>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left: products */}
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-[#72B01D] hover:shadow-[0_0_35px_#72B01D40] transition"
              onClick={() => AddCart(item)}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <div className="w-full sm:w-44 h-44 bg-white rounded-2xl p-5 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>
                {/* Details */}
                <div className="flex-1">
                  <p className="text-[#72B01D] text-sm uppercase">
                    {item.category}
                  </p>
                  <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
                  <p className="text-[#94A3B8] mt-3">{item.description}</p>
                  <h3 className="text-3xl font-black mt-5 text-[#72B01D]">
                    {`$${item.price}`}
                  </h3>
                  {/* Quantity adjustment UI */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mt-4 space-x-2">
                      <button
                        className="px-3 py-1 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
                        onClick={() => DecreaseQuantity(item.id)}
                      >
                        –
                      </button>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-white">
                        {item.quantity}
                      </span>
                      <button
                        className="px-3 py-1 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    {/* Remove button */}
                    <div className="mt-3">
                      <button
                        className="text-lg bg-red-600 px-4 py-2 rounded-2xl font-bold cursor-pointer"
                        onClick={(e) => {
                          RemoveProduct(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: order summary */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-fit sticky top-24">
          <h2 className="text-3xl font-bold mb-8">Order Summary</h2>
          <div className="space-y-5 text-lg">
            <div className="flex justify-between">
              <span className="text-[#94A3B8]">Total Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#94A3B8]">Subtotal</span>
              <span className="text-[#72B01D]">
                {`$${totalPrice().toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#94A3B8]">Shipping</span>
              <span className="text-[#72B01D]">Free</span>
            </div>
            <hr className="border-white/10" />
            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span className="text-[#72B01D]">${totalPrice().toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full mt-10 bg-[#72B01D] text-black py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_35px_#72B01D] hover:scale-105 transition-all duration-300">
            Proceed to Checkout
          </button>
          <button className="w-full mt-4 border border-[#72B01D] text-[#72B01D] py-4 rounded-2xl ">
            <NavLink to="/shop"> Continue Shopping</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
