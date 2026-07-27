import React from "react";
import { NavLink } from "react-router";

const Signup = () => {
  return (
    <div className="bg-[#020617] flex items-center justify-center min-h-screen px-5">
      {/* Background Blur */}
      <div className="hidden md:block absolute w-72 h-72 bg-[#72B01D]/20 rounded-full blur-[120px] top-20 left-20"></div>
      <div className="hidden md:block absolute w-72 h-72 bg-[#72B01D]/10 rounded-full blur-[120px] bottom-20 right-20"></div>

      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl hover:border-[#72B01D] hover:shadow-[0_0_40px_#72B01D30] transition-all duration-500">
        {/* Logo */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#72B01D] flex items-center justify-center text-4xl text-black font-bold mb-5">
            <i className="ri-shopping-bag-3-fill"></i>
          </div>

          <h1 className="text-4xl font-black text-white">Create Account</h1>

          <p className="text-[#94A3B8] mt-3">
            Join SkyMart and start shopping today.
          </p>
        </div>

        {/* Form */}

        <form className="mt-10 space-y-6">
          <div className="relative">
            <i className="ri-user-3-line absolute left-4 top-4 text-[#72B01D] text-xl"></i>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-[#94A3B8] outline-none focus:border-[#72B01D] transition"
            />
          </div>

          <div className="relative">
            <i className="ri-mail-line absolute left-4 top-4 text-[#72B01D] text-xl"></i>

            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-[#94A3B8] outline-none focus:border-[#72B01D] transition"
            />
          </div>

          <div className="relative">
            <i className="ri-lock-password-line absolute left-4 top-4 text-[#72B01D] text-xl"></i>

            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-[#94A3B8] outline-none focus:border-[#72B01D] transition"
            />
          </div>

          <button className="w-full bg-[#72B01D] text-black font-bold py-4 rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_#72B01D] transition-all duration-300">
            Create Account
          </button>
        </form>

        {/* Footer */}

        <p className="text-center text-[#94A3B8] mt-8">
          Already have an account?
          <NavLink
            to="/login"
            className="text-[#72B01D] ml-2 font-semibold hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default Signup;
