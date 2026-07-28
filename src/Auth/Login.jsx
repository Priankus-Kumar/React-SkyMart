import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [Users, setUsers] = useState("");

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const formSubmit = (data) => {
    // console.log(data);
    const storedUser = JSON.parse(localStorage.getItem("signupUser"));
    if (!storedUser) {
      toast.error("No account found. Please sign up first.");
      return;
    }

    if (
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      localStorage.setItem("auth", "true");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-5">
      <div className="w-full sm:max-w-lg md:max-w-xl backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl hover:border-[#72B01D] hover:shadow-[0_0_40px_#72B01D40] transition-all duration-500">
        {/* Logo */}

        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#72B01D]/20 flex items-center justify-center text-[#72B01D] text-5xl">
            <i className="ri-shopping-bag-3-fill"></i>
          </div>

          <h1 className="text-4xl font-black text-white mt-5">Welcome Back</h1>

          <p className="text-[#94A3B8] mt-3">
            Login to continue shopping with
            <span className="text-[#72B01D] font-semibold"> SkyMart</span>
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(formSubmit)} className="mt-10 space-y-6">
          {/* Email */}

          <div>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 focus-within:border-[#72B01D] transition">
              <i className="ri-mail-line text-[#72B01D] text-xl"></i>

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-transparent px-4 py-4 text-white placeholder:text-[#94A3B8] outline-none"
              />
              {errors.email && (
                <p className="text-red-700"> {errors.email.message} </p>
              )}
            </div>
          </div>

          {/* Password */}

          <div>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 focus-within:border-[#72B01D] transition">
              <i className="ri-lock-line text-[#72B01D] text-xl"></i>

              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "minimum length of password 6",
                  },
                  maxLength: {
                    value: 16,
                    message: "maximum length of password 16",
                  },
                })}
                type="password"
                placeholder="Enter Your Password"
                className="w-full bg-transparent px-4 py-4 text-white placeholder:text-[#94A3B8] outline-none"
              />
              {errors.password && (
                <p className="text-red-700"> {errors.password.message} </p>
              )}
            </div>
          </div>

          {/* Login */}

          <button
            type="submit"
            className="w-full bg-[#72B01D] text-black font-bold py-4 rounded-2xl hover:scale-105 hover:shadow-[0_0_35px_#72B01D] transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup */}

        <p className="text-center text-[#94A3B8] mt-8">
          Don't have an account?
          <NavLink to="/signup">
            <span className="text-[#72B01D] cursor-pointer font-semibold hover:underline ml-2">
              Create Account
            </span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
