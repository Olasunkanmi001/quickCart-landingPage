import React from "react";

const RiderCTA = () => {
  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Responsive Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="rounded-lg overflow-hidden relative"
            style={{ width: "386px", height: "229px" }}
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
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 p-6 flex flex-col justify-center items-start">
              <div className="text-left text-white">
                <h3 className="text-xl font-bold mb-4">Card Title 1</h3>
                <p className="text-gray-300">
                  Card content goes here. Add your description or features.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-lg overflow-hidden relative"
            style={{ width: "386px", height: "229px" }}
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
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 p-6 flex flex-col justify-center items-start">
              <div className="text-left text-white">
                <h3 className="text-xl font-bold mb-4">Card Title 2</h3>
                <p className="text-gray-300">
                  Card content goes here. Add your description or features.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-lg overflow-hidden relative"
            style={{ width: "386px", height: "229px" }}
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
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 p-6 flex flex-col justify-center items-start">
              <div className="text-left text-white">
                <h3 className="text-xl font-bold mb-4">Card Title 3</h3>
                <p className="text-gray-300">
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
