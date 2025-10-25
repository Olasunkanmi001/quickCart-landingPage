import React from "react";
import {
  FiMapPin,
  FiCreditCard,
  FiTruck,
  FiShield,
  FiTool,
  FiStar,
  FiSmartphone,
  FiShoppingCart,
  FiDollarSign,
  FiEye,
  FiBox,
} from "react-icons/fi";

const QuickCartFeatures = () => {
  const features = [
    {
      icon: <FiMapPin size={22} className="text-gray-700" />,
      title: "Nearby Discovery",
      desc: "Browse what's in stock from verified shops around you.",
    },
    {
      icon: <FiCreditCard size={22} className="text-gray-700" />,
      title: "Checkout & Payments",
      desc: "Card, Bank, USSD — clear fees and instant confirmations.",
    },
    {
      icon: <FiTruck size={22} className="text-gray-700" />,
      title: "Live Tracking & Delivery",
      desc: "Vendor confirms, rider picks up, you track ETA end-to-end.",
    },
    {
      icon: <FiShield size={22} className="text-gray-700" />,
      title: "Order Confirmation & Escrow",
      desc: "OTP + photo proof. Funds auto-release after delivery.",
    },
    {
      icon: <FiTool size={22} className="text-gray-700" />,
      title: "Vendor Tools",
      desc: "Easy onboarding, listings, inventory, and same-day payouts.",
    },
    {
      icon: <FiStar size={22} className="text-gray-700" />,
      title: "Loyalty & Rewards",
      desc: "Earn points and vouchers with every order.",
    },
  ];

  const steps = [
    {
      icon: <FiSmartphone size={24} className="text-gray-700" />,
      title: "Browse nearby",
      desc: "See nearby inventory with distance & ETA.",
    },
    {
      icon: <FiShoppingCart size={24} className="text-gray-700" />,
      title: "Add to cart",
      desc: "Pick sizes/colours and confirm availability.",
    },
    {
      icon: <FiDollarSign size={24} className="text-gray-700" />,
      title: "Pay securely",
      desc: "Card/Bank/USSD. Fees shown upfront.",
    },
    {
      icon: <FiEye size={24} className="text-gray-700" />,
      title: "Track live",
      desc: "Follow your rider on the map in real time.",
    },
    {
      icon: <FiBox size={24} className="text-gray-700" />,
      title: "Receive & rate",
      desc: "OTP + photo proof. Leave a review.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-16 py-12 font-sans">
      {/* What QuickCart does */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          What QuickCart does
        </h2>
        <p className="text-gray-600 mt-2">
          Six core services that make buying from nearby vendors simple, fast, and trusted.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center space-x-3 mb-3">
                {feature.icon}
                <h3 className="font-medium text-gray-900 text-lg">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
          How it works
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg py-8 px-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-center mb-3">{step.icon}</div>
              <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCartFeatures;