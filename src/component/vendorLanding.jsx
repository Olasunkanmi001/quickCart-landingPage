import React from "react";
import { Link } from "react-router-dom";
import VendorHero from "./vendorHero";
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

      {/* Benefits Section */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose QuickCart?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDollarSign className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Higher Earnings</h3>
              <p className="text-gray-600">
                Keep more of what you earn with our competitive commission rates
                and transparent pricing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Customers</h3>
              <p className="text-gray-600">
                Connect with customers in your neighborhood and build lasting
                relationships.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
              <p className="text-gray-600">
                Access analytics and tools to help grow your business and
                increase sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-6 md:px-16 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-gray-600">
                  Create your vendor account and verify your business
                  information.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Add Products</h3>
                <p className="text-gray-600">
                  Upload your product catalog with photos, descriptions, and
                  pricing.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Start Selling</h3>
                <p className="text-gray-600">
                  Receive orders, fulfill them, and get paid automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
