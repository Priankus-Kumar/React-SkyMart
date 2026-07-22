import React from "react";
import { NavLink } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold mb-5">
            About <span className="text-[#72B01D]">SkyMart</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-[0_0_35px_#72B01D50] transition duration-500">
            <i className="ri-archive-fill text-5xl text-[#72B01D]"></i>
            <h2 className="text-3xl font-bold mt-5">20K+</h2>
            <p className="text-gray-300 mt-2">Products</p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-[0_0_35px_#72B01D50] transition duration-500">
            <i className="ri-group-line text-5xl text-[#72B01D]"></i>
            <h2 className="text-3xl font-bold mt-5">50K+</h2>
            <p className="text-gray-300 mt-2">Happy Customers</p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-[0_0_35px_#72B01D50] transition duration-500">
            <i className="ri-star-line text-5xl text-[#72B01D]"></i>
            <h2 className="text-3xl font-bold mt-5">4.9</h2>
            <p className="text-gray-300 mt-2">Average Rating</p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-[0_0_35px_#72B01D50] transition duration-500">
            <i className="ri-truck-line text-5xl text-[#72B01D]"></i>
            <h2 className="text-3xl font-bold mt-5">99%</h2>
            <p className="text-gray-300 mt-2">On-Time Delivery</p>
          </div>
        </section>

        {/* Story */}
        <section className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-[#72B01D] mb-8">Our Story</h2>

          <div className="space-y-6 text-gray-300 leading-8 text-lg">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked ourselves:
              what if shopping online was actually enjoyable?
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across the
              country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase.
            </p>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">
            What We <span className="text-[#72B01D]">Stand For</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:border-[#72B01D] transition">
              <h3 className="text-2xl font-bold text-[#72B01D] mb-4">Trust</h3>
              <p className="text-gray-300">
                Every product is verified for quality and authenticity before
                listing.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:border-[#72B01D] transition">
              <h3 className="text-2xl font-bold text-[#72B01D] mb-4">
                Community
              </h3>
              <p className="text-gray-300">
                Built around real customer feedback, not just business metrics.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:border-[#72B01D] transition">
              <h3 className="text-2xl font-bold text-[#72B01D] mb-4">Speed</h3>
              <p className="text-gray-300">
                We obsess over delivery times so your orders arrive when
                promised.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:border-[#72B01D] transition">
              <h3 className="text-2xl font-bold text-[#72B01D] mb-4">
                Quality
              </h3>
              <p className="text-gray-300">
                We curate only the best products — no filler, no junk.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}

        <section>
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet The <span className="text-[#72B01D]">Team</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Member 1 */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-3 hover:shadow-[0_0_30px_#72B01D50] transition-all duration-500">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#72B01D] flex items-center justify-center text-3xl font-bold text-black mb-5">
                J
              </div>
              <h3 className="text-2xl font-bold">John Doe</h3>
              <p className="text-gray-300 mt-2">Founder & CEO</p>
            </div>

            {/* Member 2 */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-3 hover:shadow-[0_0_30px_#72B01D50] transition-all duration-500">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#72B01D] flex items-center justify-center text-3xl font-bold text-black mb-5">
                P
              </div>
              <h3 className="text-2xl font-bold">Panku Singh</h3>
              <p className="text-gray-300 mt-2">Head of Product</p>
            </div>

            {/* Member 3 */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-3 hover:shadow-[0_0_30px_#72B01D50] transition-all duration-500">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#72B01D] flex items-center justify-center text-3xl font-bold text-black mb-5">
                M
              </div>
              <h3 className="text-2xl font-bold">Mamta Never</h3>
              <p className="text-gray-300 mt-2">Lead Engineer</p>
            </div>

            {/* Member 4 */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-3 hover:shadow-[0_0_30px_#72B01D50] transition-all duration-500">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#72B01D] flex items-center justify-center text-3xl font-bold text-black mb-5">
                P
              </div>
              <h3 className="text-2xl font-bold">Priankus Kumar</h3>
              <p className="text-gray-300 mt-2">Designer</p>
            </div>
          </div>
        </section>
        {/* CTA */}

        <section className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-14 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Shopping?</h2>

          <p className="text-gray-300 text-lg mb-8">
            Explore thousands of premium products at unbeatable prices.
          </p>

          <button className="bg-[#72B01D] text-black font-bold px-10 py-4 rounded-full text-lg hover:scale-105 hover:shadow-[0_0_40px_#72B01D] transition duration-300">
            <NavLink to="/shop" > Browse Products</NavLink>
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
