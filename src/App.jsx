import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Hero from "./component/hero";
import Marketplace from "./component/marketPlace";
import Howitworks from "./component/howitworks";
import Swiper from "./component/swiper";
import Vendor from "./component/vendor";
import Info from "./component/infoSection";
import Footer from "./component/footer";

export default function App() {
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
}
