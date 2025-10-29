import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import VendorLanding from "./component/vendorLanding";
import RiderLanding from "./component/riderLanding";
import BuyerSignUp from "./component/buyerSignUp";
import BuyerLogin from "./component/buyerLogin";
import BuyerDashboard from "./component/buyerDashboard";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendorLanding" element={<VendorLanding />} />
          <Route path="/riderLanding" element={<RiderLanding />} />
          <Route path="/buyerSignUp" element={<BuyerSignUp />} />
          <Route path="/buyerLogin" element={<BuyerLogin />} />
          <Route path="/buyerDashboard" element={<BuyerDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
