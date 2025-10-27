import React from "react";

const VendorHero = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Title */}
            <h1 className="font-inter font-bold text-[76px] leading-tight">
              <span className="text-black">Sell Smarter, </span>
              <span className="bg-gradient-to-r from-[#01AC74] to-[#08A420] bg-clip-text text-transparent">
                Grow Faster
              </span>
            </h1>

            {/* Paragraph */}
            <p className="font-inter font-semibold text-[24px] text-gray-700 leading-relaxed">
              The all-in-one platform for vendors. Manage products, track sales,
              and scale your business with powerful tools and AI-powered
              insights.
            </p>

            {/* Buttons */}
            <div className="flex gap-[11.43px] items-center">
              {/* Start Selling Now Button */}
              <button
                className="bg-gradient-to-r from-[#01AC74] to-[#08A420] text-white font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                style={{
                  width: "302.57px",
                  height: "56px",
                  padding: "22.86px 34.29px",
                }}
              >
                Start Selling Now
              </button>

              {/* Watch Demo Button */}
              <button
                className="bg-white border-2 font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                style={{
                  width: "215.57px",
                  height: "56px",
                  padding: "22.86px 34.29px",
                  borderImage:
                    "linear-gradient(0deg, #01AC74 0%, #08A420 80%) 1",
                  background: "linear-gradient(0deg, #01AC74 0%, #08A420 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span className="bg-gradient-to-r from-[#01AC74] to-[#08A420] bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Fine Print */}
            <p className="text-gray-600 font-inter text-sm">
              ✓ Free for 14 days • No credit card required • Cancel anytime
            </p>
          </div>

          {/* Right Side - Image Rectangle */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="bg-gray-100 rounded-lg relative"
              style={{
                width: "674px",
                height: "307px",
                border: "20px solid transparent",
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(0deg, #01AC74 0%, #08A420 80%)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                boxShadow: "0 26px 52px 7px rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Placeholder content - you can replace this with an actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 font-inter">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-lg">Vendor Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorHero;
