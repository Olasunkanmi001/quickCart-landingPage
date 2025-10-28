import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VendorHero from "./vendorHero";
import VendorFeatures from "./vendorFeatures";
import Testimonial from "./Testimonial";
import VendorPricing from "./vendorPricing";
import VendorWaitlist from "./vendorWaitlist";
import {
  FaArrowLeft,
  FaStore,
  FaChartLine,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";

const VendorLanding = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* Vendor Waitlist Section */}
      <VendorWaitlist />
    </div>
  );
};

export default VendorLanding;
