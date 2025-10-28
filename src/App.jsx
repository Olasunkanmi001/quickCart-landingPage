import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import VendorLanding from "./component/vendorLanding";
import RiderLanding from "./component/riderLanding";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendorLanding" element={<VendorLanding />} />
          <Route path="/riderLanding" element={<RiderLanding />} />
        </Routes>
      </Layout>
    </Router>
  );
}
