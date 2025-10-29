import React, { useState, useEffect, useRef } from "react";
import bannerImage from "../assets/Group 1000004579.png";
import profileImage from "../assets/rider-banner-profile.png";

const RiderBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showSubText, setShowSubText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const titleText = "Your time. Your goals.\nYou're the boss.";
  const subText = "Drive, deliver and earn with Quickcart";

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <>
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
      <section
        ref={sectionRef}
        style={{
          height: "500px",
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Black overlay */}
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

        {/* Responsive container */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "space-between",
            flexDirection: isMobile ? "column" : "row", // Stack on tablet/mobile
            gap: isMobile ? "2rem" : "0", // Add gap when stacked
            zIndex: 2,
          }}
        >
          {/* Profile Image */}
          <div
            style={{
              transform: isVisible
                ? "translateX(0)"
                : isMobile
                ? "translateY(-50px)"
                : "translateX(-350px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 1.5s ease-out 0.8s",
              zIndex: 3,
              flexShrink: 0,
              paddingLeft: isMobile ? "0" : "40px", // Remove padding on mobile
            }}
          >
            <img
              src={profileImage}
              alt="Rider Profile"
              style={{
                width: "clamp(200px, 25vw, 300px)",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            />
          </div>

          {/* Text Content */}
          <div
            style={{
              zIndex: 3,
              maxWidth: isMobile ? "90%" : "50%", // Full width on mobile
              marginLeft: isMobile ? "0" : "2rem", // No margin on mobile
              textAlign: isMobile ? "center" : "left", // Center text on mobile
            }}
          >
            <h1
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: "800",
                fontSize: "clamp(28px, 4vw, 52px)",
                lineHeight: "1.4",
                color: "white",
                textAlign: isMobile ? "center" : "left",
                margin: "0 0 20px 0",
                whiteSpace: "pre-line",
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

            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: "600",
                fontSize: "clamp(18px, 2.5vw, 32px)",
                lineHeight: "1.2",
                color: "white",
                textAlign: isMobile ? "center" : "left",
                margin: "0",
                opacity: showSubText ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            >
              {subText}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RiderBanner;
