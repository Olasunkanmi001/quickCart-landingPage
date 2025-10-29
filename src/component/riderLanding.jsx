import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RiderHero from "./riderHero";
import RiderInfo from "./riderInfo";
import {
  FaArrowLeft,
  FaBiking,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";
import RiderWhyWorkWithUs from "./riderWhyWorkWithUs";
import RiderCTA from "./rider.CTA";

const RiderLanding = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-gray-50 px-6 py-3 border-b">
        <Link
          to="/"
          className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors w-fit"
        >
          <FaArrowLeft size={16} />
          <span className="text-sm">Back to Home</span>
        </Link>
      </div>

      <RiderHero />
      <RiderInfo />
      <RiderWhyWorkWithUs />

      {/* CTA Section */}
      <RiderCTA />
      {/* Rider Banner */}
    </div>
  );
};

export default RiderLanding;
