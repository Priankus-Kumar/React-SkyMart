import React, { useContext } from 'react';
import { Store } from '../context/MyStore';

const Productcard = () => {
let {productData, setProductData}=  useContext(Store)
    return (
    <div className="min-h-screen bg-[#020617] px-8 py-12">
      <h1 className="text-5xl font-black text-center text-white mb-12">
        Trending <span className="text-[#72B01D]">Products</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productData.map((item) => (
          <div
            key={item.id}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#72B01D] hover:shadow-[0_0_35px_#72B01D50] transition-all duration-500 hover:-translate-y-3"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-72 bg-white p-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain transition duration-500 group-hover:scale-110"
              />

              {/* Wishlist */}
              <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#72B01D] hover:text-black transition">
                <i className="ri-heart-line"></i>
              </button>

              {/* Rating */}
              <div className="absolute bottom-4 left-4 bg-[#72B01D] text-black px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
                <i className="ri-star-fill"></i>
                {item.rating.rate}
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <p className="inline-block text-xs uppercase tracking-widest text-[#72B01D] bg-[#72B01D]/10 px-3 py-1 rounded-full">
                {item.category}
              </p>

              <h2 className="text-white font-bold text-lg mt-4 line-clamp-2 h-14">
                {item.title}
              </h2>

              <p className="text-[#94A3B8] text-sm mt-3 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-6">
                <div>
                  <h3 className="text-3xl font-black text-white">
                    ${item.price}
                  </h3>
                </div>

                <button className="bg-[#72B01D] text-black px-5 py-3 rounded-2xl font-bold hover:scale-105 hover:shadow-[0_0_25px_#72B01D] transition-all duration-300">
                  <i className="ri-shopping-cart-line mr-2"></i>
                  Add
                </button>
              </div>

              <div className="flex justify-between items-center mt-5 text-[#94A3B8] text-sm border-t border-white/10 pt-4">
                <span>
                  <i className="ri-eye-line mr-1"></i>
                  {item.rating.count} Reviews
                </span>

                <span className="text-[#72B01D] font-semibold cursor-pointer hover:underline">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Productcard
