import React from "react";

const RiderHero = () => {
  return (
    <section className="bg-[#D9D9D9] px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Title */}
            <h1
              className="font-nunito font-extrabold text-[52px] text-black text-left"
              style={{ lineHeight: "71px" }}
            >
              Your time. Your goals.
              <br />
              You're the boss.
            </h1>

            {/* Subtitle */}
            <p
              className="font-nunito font-semibold text-[32px] text-black text-left"
              style={{ lineHeight: "24px" }}
            >
              Drive, deliver and earn with Quickcart
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-[11.43px] items-center justify-center lg:justify-start">
              {/* Become a Driver Button */}
              <button className="bg-[#0B4863] text-white font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                Become a Driver
              </button>
            </div>
          </div>

          {/* Right Side - White Rectangle */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="bg-white rounded-[12px] flex items-center justify-center"
              style={{
                width: "548px",
                height: "381px",
                boxShadow:
                  "0 15px 30px 4px rgba(0, 0, 0, 0.15), 0 26px 52px 7px rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Placeholder content - you can replace this with an actual image */}
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🚗</div>
                <p className="text-lg">Rider Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiderHero;
