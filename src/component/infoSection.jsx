import React from "react";
import { Link, useNavigate } from "react-router-dom";
import qrCode from "../assets/layer_1.png"; // replace with your actual QR image
import vendorImg from "../assets/Rectangle 4672.png";
import riderImg from "../assets/Rectangle 4672 (1).png";
import avatar1 from "../assets/Avatar (6).png";
import avatar2 from "../assets/Avatar (4).png";
import avatar3 from "../assets/Avatar (5).png";

const QuickCartInfoSection = () => {
  const navigate = useNavigate();

  const handleRiderClick = () => {
    navigate("/riderLanding");
    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 100);
  };

  const handleVendorClick = () => {
    navigate("/vendorLanding");
    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 100);
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 font-sans text-gray-800 space-y-20">
      {/* Confidence Built In */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Confidence built in</h2>
        <p className="text-gray-600 mb-6">
          Digital receipts, OTP + photo proof, escrow, and optional
          blockchain-based logs.
        </p>

        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-1 border rounded-xl p-6 bg-gray-50">
            <p className="text-gray-700">
              Order timeline and live route tracking on a map
            </p>
          </div>
          <div className="flex-1 border rounded-xl p-6 space-y-3 text-sm">
            <p>
              ✅ Every step logged: order created → confirmed → picked up →
              delivered.
            </p>
            <p>✅ Proof of delivery: OTP + photo confirmation before payout.</p>
            <p>
              ✅ Buyer protection: funds held in escrow until you receive your
              item.
            </p>
            <p>
              ✅ Private by design: personal data stays off-chain; profits only.
            </p>
          </div>
        </div>
      </div>

      {/* Loved by Buyers and Sellers */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Loved by buyers and sellers
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              name: "Chidera, Buyer",
              feedback:
                "I ordered shoes from a shop 8km away and got them in 25 minutes. The OTP delivery was smooth and the receipt was in my email.",
              avatar: avatar1,
            },
            {
              name: "Tunde, Vendor (Ikotun)",
              feedback:
                "Listing takes minutes and same-day payouts help my cash flow. Reviews boosted my visibility!",
              avatar: avatar2,
            },
            {
              name: "Malik, Rider",
              feedback:
                "Clear pick-ups + drop-off logs and instant payouts after delivery. Easy navigation too!",
              avatar: avatar3,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-gray-50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="font-medium text-sm">{review.name}</p>
              </div>
              <p className="text-sm text-gray-700">{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sell More / Become Vendor */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3">
            Sell more — without another shop
          </h2>
          <ul className="list-disc ml-5 text-gray-700 text-sm mb-6 space-y-2">
            <li>KYC in minutes, get the “Verified” badge</li>
            <li>Simple catalog & inventory tools</li>
            <li>Escrow & digital receipts reduce disputes</li>
          </ul>
          <button
            onClick={handleVendorClick}
            className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800"
          >
            Become a Vendor
          </button>
        </div>
        <img
          src={vendorImg}
          alt="Vendor"
          className="flex-1 rounded-xl w-full md:w-[45%] object-cover"
        />
      </div>

      {/* Ride / Become a Rider */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3">
            Ride. Deliver. Get paid instantly.
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Flexible hours, in-app navigation, and instant payouts after
            delivery completion.
          </p>
          <button
            onClick={handleRiderClick}
            className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800"
          >
            Become a Rider
          </button>
        </div>
        <img
          src={riderImg}
          alt="Rider"
          className="flex-1 rounded-xl w-full md:w-[45%] object-cover"
        />
      </div>

      {/* Simple Transparent Pricing */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">
          Simple, transparent pricing
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          Flexible hours, in-app navigation, and instant pay-outs after delivery
          completion.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="border rounded-xl p-4">
            <h4 className="font-semibold mb-2">For Buyers</h4>
            <p className="text-gray-600">
              Delivery fee based on distance. No hidden charges.
            </p>
          </div>
          <div className="border rounded-xl p-4">
            <h4 className="font-semibold mb-2">For Vendors</h4>
            <p className="text-gray-600">
              3–10% per successful order. No listing fees.
            </p>
          </div>
          <div className="border rounded-xl p-4">
            <h4 className="font-semibold mb-2">For Riders</h4>
            <p className="text-gray-600">
              Earn per delivery. Bonuses for high ratings and completion rate.
            </p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-3">Download QuickCart now</h2>
        <p className="text-sm text-gray-700 mb-6">
          Flexible hours, in-app navigation, and instant payouts after delivery
          completion.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img src={qrCode} alt="QR Code" className="w-32 h-32" />
          <div className="flex flex-col md:flex-row gap-4">
            <button className="border border-gray-400 px-6 py-2 rounded-lg text-sm hover:bg-gray-100">
              App Store
            </button>
            <button className="border border-gray-400 px-6 py-2 rounded-lg text-sm hover:bg-gray-100">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickCartInfoSection;
