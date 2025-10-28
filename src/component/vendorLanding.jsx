import React from "react";
import { Link } from "react-router-dom";
import VendorHero from "./vendorHero";
import VendorFeatures from "./vendorFeatures";
import Testimonial from "./Testimonial";
import VendorPricing from "./vendorPricing";
import {
  FaArrowLeft,
  FaStore,
  FaChartLine,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";

const VendorLanding = () => {
  return (
    <div className="bg-white">
      {/* Optional: Back to Home link */}
      <div className="bg-gray-50 px-6 py-3 border-b">
        <Link
          to="/"
          className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors w-fit"
        >
          <FaArrowLeft size={16} />
          <span className="text-sm">Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <VendorHero />

      {/* Features Section */}
      <VendorFeatures />

      {/* Testimonials Section */}
      <Testimonial />
      {/* Vendor Pricing Section */}
      <VendorPricing />
      {/* CTA Section */}
      <section className="px-6 md:px-16 py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Selling?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join QuickCart today and start reaching more customers in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorLanding;
