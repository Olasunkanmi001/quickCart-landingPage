import React from "react";
import {
  FiShoppingCart,
  FiBarChart2,
  FiTrendingUp,
  FiLock,
  FiZap,
  FiGlobe,
} from "react-icons/fi";

const VendorFeatures = () => {
  const features = [
    {
      icon: <FiShoppingCart size={32} className="text-[#3D3D3D]" />,
      title: "Easy Product Management",
      description:
        "Add, edit, and organize your products with our intuitive dashboard.",
    },
    {
      icon: <FiBarChart2 size={32} className="text-[#3D3D3D]" />,
      title: "Real-Time Analytics",
      description: "Track sales, revenue, and customer insights in real-time.",
    },
    {
      icon: <FiTrendingUp size={32} className="text-[#3D3D3D]" />,
      title: "Growth Tools",
      description:
        "AI-powered descriptions and marketing tools to boost your sales.",
    },
    {
      icon: <FiLock size={32} className="text-[#3D3D3D]" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security to protect your business data.",
    },
    {
      icon: <FiZap size={32} className="text-[#3D3D3D]" />,
      title: "Fast & Efficient",
      description: "Lightning-fast performance for seamless operations.",
    },
    {
      icon: <FiGlobe size={32} className="text-[#3D3D3D]" />,
      title: "Global Reach",
      description: "Connect with customers worldwide on one platform.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-16 py-16 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <h2
            className="font-inter font-extrabold text-[43.2px] text-[#010101] mb-4"
            style={{ lineHeight: "74.1px" }}
          >
            Powerful Features Built for Vendors
          </h2>
          <p
            className="font-inter font-medium text-[24.69px] text-[#010101] opacity-60"
            style={{ lineHeight: "32.9px" }}
          >
            Everything you need to succeed on one platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-400 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6">{feature.icon}</div>

              {/* Title */}
              <h3 className="font-inter font-bold text-[22px] text-[#3D3D3D] mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-inter font-normal text-[16px] text-[#3D3D3D] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorFeatures;
