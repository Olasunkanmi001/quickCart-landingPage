import React from "react";

const VendorHero = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Title */}
            <h1 className="font-inter font-bold text-[32px] md:text-[48px] lg:text-[64px] xl:text-[76px] leading-tight">
              <span className="text-black">Sell Smarter, </span>
              <span className="bg-gradient-to-r from-[#01AC74] to-[#08A420] bg-clip-text text-transparent">
                Grow Faster
              </span>
            </h1>

            {/* Paragraph */}
            <p className="font-inter font-semibold text-[16px] md:text-[20px] lg:text-[24px] text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The all-in-one platform for vendors. Manage products, track sales,
              and scale your business with powerful tools and AI-powered
              insights.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-[11.43px] items-center justify-center lg:justify-start">
              {/* Start Selling Now Button */}
              <button className="bg-gradient-to-r from-[#01AC74] to-[#08A420] text-white font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                Start Selling Now
              </button>

              {/* Watch Demo Button */}
              <button className="bg-white border-2 border-[#01AC74] font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                <span className="bg-gradient-to-r from-[#01AC74] to-[#08A420] bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Fine Print */}
            <p className="text-gray-600 font-inter text-xs md:text-sm">
              ✓ Free for 14 days • No credit card required • Cancel anytime
            </p>
          </div>

          {/* Right Side - Image Rectangle */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div
              className="bg-gray-100 rounded-lg relative w-full max-w-[320px] h-[180px] sm:max-w-[400px] sm:h-[220px] md:max-w-[500px] md:h-[260px] lg:max-w-[600px] lg:h-[280px] xl:max-w-[674px] xl:h-[307px] border-8 md:border-[12px] lg:border-[16px] xl:border-[20px] border-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(0deg, #01AC74 0%, #08A420 80%)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                boxShadow:
                  "0 15px 30px 4px rgba(0, 0, 0, 0.15), 0 26px 52px 7px rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Placeholder content - you can replace this with an actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 font-inter">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl mb-2">
                    📊
                  </div>
                  <p className="text-sm md:text-base lg:text-lg">
                    Vendor Dashboard Preview
                  </p>
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
