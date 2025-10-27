import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./hero";
import Marketplace from "./marketPlace";
import Howitworks from "./howitworks";
import Swiper from "./swiper";
import Vendor from "./vendor";
import Info from "./infoSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Small delay to ensure the DOM is ready
      setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          const headerHeight =
            document.querySelector("header")?.offsetHeight || 80;
          const targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <section id="how-it-works">
        <Howitworks />
      </section>
      <section id="marketplace">
        <Marketplace />
      </section>
      <section id="vendors">
        <Vendor />
      </section>
      <section id="pricing">
        <Info />
      </section>
      <section id="faqs">
        <Swiper />
      </section>
    </div>
  );
};

export default Home;
