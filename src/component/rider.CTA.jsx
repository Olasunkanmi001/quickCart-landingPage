import React from "react";
import { FaArrowRight } from "react-icons/fa";

const RiderCTA = () => {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Responsive Grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {/* Card 1 */}
          <div
            className="rounded-lg overflow-hidden relative w-full max-w-md mx-auto"
            style={{ height: "380px" }}
          >
            {/* Top half - E78E86 */}
            <div
              className="absolute top-0 left-0 w-full h-1/2"
              style={{ backgroundColor: "#E78E86" }}
            ></div>
            {/* Bottom half - 17181A */}
            <div
              className="absolute bottom-0 left-0 w-full h-1/2"
              style={{ backgroundColor: "#17181A" }}
            ></div>
            {/* Content overlay - positioned in bottom half only */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 p-6 md:p-8 flex flex-col justify-center items-start">
              <div className="text-left text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  Need a meal fast?
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-12">
                  Skip the wait,{" "}
                  <span style={{ color: "#E78E86" }}>Quickcart</span> deliver
                  your cravings right to your doorsteps.
                </p>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="font-nunito font-normal text-sm md:text-base mr-2 hover:text-white transition-colors duration-300"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    Learn More
                  </a>
                  <FaArrowRight size={14} style={{ color: "#E78E86" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-lg overflow-hidden relative w-full max-w-md mx-auto"
            style={{ height: "380px" }}
          >
            {/* Top half - E78E86 */}
            <div
              className="absolute top-0 left-0 w-full h-1/2"
              style={{ backgroundColor: "#8BB7FE" }}
            ></div>
            {/* Bottom half - 17181A */}
            <div
              className="absolute bottom-0 left-0 w-full h-1/2"
              style={{ backgroundColor: "#17181A" }}
            ></div>
            {/* Content overlay - positioned in bottom half only */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 p-6 md:p-8 flex flex-col justify-center items-start">
              <div className="text-left text-white space-y-3">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  Own a Business?
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  Grow your business while we handle the deliveries. with
                  <span style={{ color: "#8BB7FE" }}> Quickcart</span>, your
                  customer get it right on time.
                </p>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="font-nunito font-normal text-sm md:text-base mr-2 hover:text-white transition-colors duration-300"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    Learn More
                  </a>
                  <FaArrowRight size={14} style={{ color: "#8BB7FE" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-lg overflow-hidden relative w-full max-w-md mx-auto"
            style={{ height: "380px" }}
          >
            {/* Top half - E78E86 */}
            <div
              className="absolute top-0 left-0 w-full h-1/2"
              style={{ backgroundColor: "#00C695" }}
            ></div>
            {/* Bottom half - 17181A */}
            <div
              className="absolute bottom-0 left-0 w-full h-1/2"
              style={{ backgroundColor: "#17181A" }}
            ></div>
            {/* Content overlay - positioned in bottom half only */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 p-6 md:p-8 flex flex-col justify-center items-start">
              <div className="text-left text-white space-y-3">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  Card Title 3
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Card content goes here. Add your description or features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiderCTA;
