import React, { useState, useEffect, useRef } from "react";
import bannerImage from "../assets/Group 1000004579.png";

const RiderBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when section is 30% visible
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-50px 0px", // Start animation slightly before the section is fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "500px",
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Black overlay that fades out to reveal the image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: isVisible ? 0 : 1,
          transition: "opacity 1.5s ease-in-out",
          zIndex: 1,
        }}
      />

      {/* Just a simple text to see if section is visible */}
      <div
        style={{
          padding: "20px",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.5s ease-in-out 0.5s", // Delay text fade-in
          position: "relative",
          zIndex: 2,
        }}
      >
        RiderBanner Section
      </div>
    </section>
  );
};

export default RiderBanner;
