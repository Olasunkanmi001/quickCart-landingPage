import React, { useState, useEffect, useRef } from "react";
import bannerImage from "../assets/Group 1000004579.png";
import profileImage from "../assets/rider-banner-profile.png";

const RiderBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showSubText, setShowSubText] = useState(false);
  const sectionRef = useRef(null);

  const titleText = "Your time. Your goals.\nYou're the boss.";
  const subText = "Drive, deliver and earn with Quickcart";

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

  // Typewriter effect
  useEffect(() => {
    if (isVisible) {
      // Start typewriter after profile image animation (2.3s delay)
      const startDelay = 2300;
      const typingSpeed = 80; // milliseconds per character

      const startTypewriter = setTimeout(() => {
        let currentIndex = 0;
        const typewriterInterval = setInterval(() => {
          if (currentIndex <= titleText.length) {
            setDisplayedText(titleText.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typewriterInterval);
            // Show subtitle after typewriter finishes
            setShowSubText(true);
          }
        }, typingSpeed);

        return () => clearInterval(typewriterInterval);
      }, startDelay);

      return () => clearTimeout(startDelay);
    }
  }, [isVisible, titleText]);

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

      {/* Profile Image on the left side */}
      <div
        style={{
          position: "absolute",
          left: "300px",
          top: "50%",
          transform: isVisible ? "translateY(-50%)" : "translate(-350px, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "all 1.5s ease-out 0.8s",
          zIndex: 3,
        }}
      >
        <img
          src={profileImage}
          alt="Rider Profile"
          style={{
            width: "300px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {/* Title and Subtitle Text on the right side */}
      <div
        style={{
          position: "absolute",
          left: "650px", // Position to the right of profile image (300px + 300px width + 50px gap)
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          maxWidth: "700px",
        }}
      >
        {/* Main Title with Typewriter Effect */}
        <h1
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontWeight: "800", // extrabold
            fontSize: "52px",
            lineHeight: "71px",
            color: "white",
            textAlign: "left",
            margin: "0 0 20px 0",
            whiteSpace: "pre-line", // Allows \n to create line breaks
          }}
        >
          {displayedText}
          <span
            style={{
              opacity: displayedText.length < titleText.length ? 1 : 0,
              animation:
                displayedText.length < titleText.length
                  ? "blink 1s infinite"
                  : "none",
            }}
          >
            |
          </span>
        </h1>

        {/* Subtitle Text */}
        <p
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontWeight: "600", // semibold
            fontSize: "32px",
            lineHeight: "24px",
            color: "white",
            textAlign: "left",
            margin: "0",
            opacity: showSubText ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {subText}
        </p>
      </div>

      {/* CSS for blinking cursor */}
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default RiderBanner;
