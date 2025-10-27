import React from "react";
import Hero from "./hero";
import Marketplace from "./marketPlace";
import Howitworks from "./howitworks";
import Swiper from "./swiper";
import Vendor from "./vendor";
import Info from "./infoSection";

const Home = () => {
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
