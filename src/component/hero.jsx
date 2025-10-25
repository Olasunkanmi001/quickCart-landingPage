import React from "react";
import { FaStore, FaBiking } from "react-icons/fa";
import picture from "../assets/front-view-woman-wearing-hat (1) 1.png";
import pic from "../assets/layer_1.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white font-sans pt-5">
      {/* Top bar: Become Vendor / Rider */}
      <div className="w-full bg-[#E6F2FF] flex justify-end items-center space-x-8 text-base text-gray-800 h-16 px-6 md:px-16">
        <a href="#vendor" className="flex items-center space-x-2">
          <FaStore size={22} />
          <span>Become a Vendor</span>
        </a>
        <a href="#rider" className="flex items-center space-x-2">
          <FaBiking size={22} />
          <span>Become a Rider</span>
        </a>
      </div>

      {/* Main hero area */}
      <div className="px-6 md:px-16 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left side */}
        <div className="md:w-1/2 space-y-6 pt-5">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Shop nearby fashion. <br /> Delivered in minutes.
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Discover in-stock clothes, shoes, and jewellery from verified vendors
            around you. Pay securely by Card/Bank/USSD and track your rider live —
            every order step is recorded for peace of mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4 pt-2">
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium border border-black transition-colors hover:bg-white hover:text-black">
              Get App
            </button>
            <button className="border border-black text-black px-6 py-3 rounded-md font-medium transition-colors hover:bg-black hover:text-white">
              Start Shopping
            </button>
          </div>

          {/* Search bar */}
          <div className="flex items-center mt-5 w-full md:w-4/5">
            <input
              type="text"
              placeholder="Try 'Ankara Gown', 'Men’s Loafers'"
              className="w-full px-4 py-3 border border-gray-300 rounded-l-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-300"
            />
            <button className="bg-black text-white px-5 py-3 rounded-r-md hover:bg-gray-800 transition-colors">
              Search
            </button>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 text-sm text-gray-500 mt-3">
            <span>No hidden fees</span> •
            <span>Real-time updates</span> •
            <span>Loyalty rewards</span>
          </div>
        </div>

        {/* Right side image */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-4">
          <img
            src={picture}
            alt="Model showcasing clothes"
            className="w-full md:w-5/2 rounded-lg object-cover"
          />

          {/* QR Section (aligned to left) */}
          <div className="flex items-center justify-start space-x-3 mt-2 w-full md:w-auto">
            <img
              src={pic}
              alt="QR code"
              className="w-16 h-16 object-contain"
            />
            <p className="text-sm text-gray-700 font-medium">
              Scan to download App
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;