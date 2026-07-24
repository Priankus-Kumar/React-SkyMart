import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Store } from "../context/MyStore";
import axios from "axios";

const SingleProduct = () => {
  const { productData } = useContext(Store);
  let { id } = useParams();
  const [SingleData, setSingleData] = useState({});

  const singleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("error==>>", error);
    }
  };
  useEffect(() => {
    singleProductData();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white px-10 py-14">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
        {/* Image */}

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 hover:border-[#72B01D] transition">
          <img
            src={SingleData.image}
            alt={SingleData.title}
            className="w-full h-125 object-contain"
          />
        </div>

        {/* Details */}

        <div className="space-y-6">
          <span className="bg-[#72B01D]/20 text-[#72B01D] px-4 py-2 rounded-full">
            {SingleData.category}
          </span>

          <h1 className="text-5xl font-black">{SingleData.title}</h1>

          <h2 className="text-5xl font-bold text-[#72B01D]">
            ${SingleData.price}
          </h2>

          <p className="text-[#94A3B8] leading-8 text-lg">
            {SingleData.description}
          </p>

          <div className="flex gap-5 pt-6">
            <button className="bg-[#72B01D] text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-[0_0_35px_#72B01D] transition">
              <i className="ri-shopping-cart-line mr-2"></i>
              Add To Cart
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5 pt-8">
            <div className="bg-white/5 rounded-2xl p-5 text-center">
              <i className="ri-truck-line text-3xl text-[#72B01D]"></i>
              <p className="mt-3 text-sm">Free Delivery</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 text-center">
              <i className="ri-shield-check-line text-3xl text-[#72B01D]"></i>
              <p className="mt-3 text-sm">Secure Payment</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 text-center">
              <i className="ri-arrow-go-back-line text-3xl text-[#72B01D]"></i>
              <p className="mt-3 text-sm">7 Days Return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
