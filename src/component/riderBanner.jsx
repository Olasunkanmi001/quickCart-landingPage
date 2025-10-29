import React from "react";
import bannerImage from "../assets/Group 1000004579.png";

const RiderBanner = () => {
  return (
    <section
      style={{
        height: "500px",
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Just a simple text to see if section is visible */}
      <div
        style={{
          padding: "20px",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        RiderBanner Section
      </div>
    </section>
  );
};

export default RiderBanner;
