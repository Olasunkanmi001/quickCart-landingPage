import React from "react";
import { FaCheck } from "react-icons/fa";

const VendorPricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for new vendors",
      price: "$29",
      period: "/month",
      buttonText: "Get Started",
      features: [
        "Up to 100 products",
        "Basic analytics",
        "Email support",
        "2% transaction fee",
      ],
      isPopular: false,
      isEnterprise: false,
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: "$79",
      period: "/month",
      buttonText: "Start Free Trial",
      features: [
        "Unlimited products",
        "Advanced analytics",
        "Priority support",
        "1.5% transaction fee",
        "AI product descriptions",
      ],
      isPopular: true,
      isEnterprise: false,
    },
    {
      name: "Enterprise",
      description: "For large operations",
      price: "$Custom",
      period: "",
      buttonText: "Contact Sales",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "Custom rates",
        "API access",
      ],
      isPopular: false,
      isEnterprise: true,
    },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 bg-white">
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="font-inter font-semibold text-[28px] md:text-[36px] lg:text-[43.2px] text-[#010101] mb-4 md:mb-6 leading-tight">
          Simple Plans, Powerful Results
        </h2>
        <p className="font-inter font-medium text-[18px] md:text-[20px] lg:text-[24.69px] text-[#010101] opacity-60 px-4">
          We've got flexible options to help your business grow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-end gap-6 lg:gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-[14.4px] transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              plan.isPopular
                ? "shadow-[0_6px_24px_0_rgba(0,0,0,0.25)] w-full max-w-[444px] h-auto lg:h-[620px]"
                : "border border-black border-opacity-20 w-full max-w-[444px] h-auto lg:h-[567.6px]"
            }`}
            style={{
              borderWidth: plan.isPopular ? "0" : "1.2px",
              padding: plan.isPopular ? "37.2px 26.4px" : "37.2px 26.4px",
            }}
          >
            {/* Gradient border for popular card */}
            {plan.isPopular && (
              <div
                className="absolute inset-0 rounded-[14.4px] p-[1.2px] bg-gradient-to-r from-[#01AC74] to-[#08A420]"
                style={{ zIndex: -1 }}
              >
                <div className="w-full h-full bg-white rounded-[13.2px]"></div>
              </div>
            )}
            {/* Most Popular Badge - Only for Professional plan */}
            {plan.isPopular && (
              /*I replaced the borderImage approach with a pseudo-border technique using absolute positioning:
                No longer using the conflicting borderImage property*/
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div
                  className="bg-gradient-to-r from-[#01AC74] to-[#08A420] rounded-[14.4px] flex items-center justify-center"
                  style={{ width: "154.8px", height: "31.2px" }}
                >
                  <span className="text-white font-nunito font-extrabold text-[16.8px] leading-[28.8px] text-center">
                    Most Popular
                  </span>
                </div>
              </div>
            )}

            {/* Package Name */}
            <h3 className="font-nunito font-extrabold text-[26.4px] leading-[28.8px] text-black text-left mb-4">
              {plan.name}
            </h3>

            {/* Description */}
            <p className="font-nunito font-medium text-[19.2px] leading-[39.5px] text-[#010101] opacity-60 text-left mb-6">
              {plan.description}
            </p>

            {/* Price */}
            <div className="mb-8">
              <span className="font-nunito font-extrabold text-[56.4px] leading-[28.8px] text-black opacity-80">
                {plan.price}
              </span>
              {plan.period && (
                <span className="font-nunito font-normal text-[19.2px] leading-[28.8px] text-black opacity-50">
                  {plan.period}
                </span>
              )}
            </div>

            {/* CTA Button */}
            <button
              className={`w-full max-w-[369.6px] h-[52.8px] rounded-[14.4px] font-nunito font-bold text-center transition-all duration-300 hover:scale-105 active:scale-95 active:shadow-inner transform mb-8 flex items-center justify-center ${
                plan.isPopular
                  ? "bg-gradient-to-r from-[#01AC74] to-[#08A420] text-white text-[19.2px] leading-[39.5px] hover:from-[#019963] hover:to-[#078a1c] active:from-[#018754] active:to-[#067a18] hover:shadow-lg"
                  : "bg-white border border-black border-opacity-20 text-[#010101] opacity-60 text-[16px] leading-[20px] px-4 hover:bg-gray-50 hover:opacity-80 hover:shadow-md active:bg-gray-100 active:shadow-inner"
              }`}
              style={{
                borderWidth: plan.isPopular ? "0" : "1.2px",
              }}
            >
              {plan.buttonText}
            </button>

            {/* Features */}
            <div className="space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <FaCheck className="text-[#01AC74] text-sm mt-1 flex-shrink-0" />
                  <span className="font-nunito font-normal text-[16px] leading-relaxed text-[#010101] opacity-80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VendorPricing;
