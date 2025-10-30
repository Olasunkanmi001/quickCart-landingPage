import React from "react";
import { FaBiking, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import productImage from "../assets/Group 1000004565.png";

const ProductLanding = () => {
  return (
    <div>
      {/* Top Links Section */}
      <div className="w-full bg-[#E6F2FF] flex justify-end items-center space-x-8 text-base text-gray-800 h-16 px-6 md:px-16">
        <Link
          to="/vendorLanding"
          className="flex items-center space-x-2 hover:text-gray-600 active:scale-95 transition-all duration-150"
        >
          <FaStore size={22} />
          <span>Become a Vendor</span>
        </Link>
        <Link
          to="/riderLanding"
          className="flex items-center space-x-2 hover:text-gray-600 active:scale-95 transition-all duration-150"
        >
          <FaBiking size={22} />
          <span>Become a Rider</span>
        </Link>
      </div>

      {/* Product Image Section */}
      <div className="w-full bg-white">
        <img
          src={productImage}
          alt="Product Landing"
          className="w-full h-auto object-cover"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default ProductLanding;
