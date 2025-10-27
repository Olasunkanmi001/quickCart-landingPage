import React from "react";
import Header from "./header";
import Hero from "./hero";
import Marketplace from "./marketPlace";
import Howitworks from "./howitworks";
import Swiper from "./swiper";
import Vendor from "./vendor";
import Info from "./infoSection";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default Home;