import React, { useState } from "react";

const VendorWaitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle waitlist submission
    console.log("Joining waitlist:", formData);
    // Reset form
    setFormData({ name: "", email: "" });
  };

  // Add styles for placeholder color similar to footer
  const inputStyles = `
    .waitlist-input::placeholder {
      color: #6B7280;
      opacity: 0.8;
    }
    .waitlist-input:focus::placeholder {
      color: #01AC74;
      opacity: 0.7;
    }
  `;

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#01AC74] via-[#05B177] to-[#08A420] relative overflow-hidden">
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      <style>{inputStyles}</style>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
          Be First to Know
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-white max-w-xl md:max-w-2xl mx-auto px-4">
          Join the waitlist for new cities, features and offers
        </p>

        {/* Waitlist Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center max-w-xs sm:max-w-2xl mx-auto px-4 sm:px-0"
        >
          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="waitlist-input flex-1 px-3 md:px-4 py-2.5 md:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-sm md:text-base"
            style={{ color: "#01AC74" }}
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="waitlist-input flex-1 px-3 md:px-4 py-2.5 md:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-sm md:text-base"
            style={{ color: "#01AC74" }}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 md:px-8 py-2.5 md:py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 active:bg-gray-900 active:scale-95 transform transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 whitespace-nowrap text-sm md:text-base w-full sm:w-auto"
          >
            Start Free
          </button>
        </form>

        {/* Fine Print */}
        <p className="font-nunito font-medium text-[14px] md:text-[16px] lg:text-[18px] text-white opacity-80 mt-4 md:mt-6 px-4" style={{ lineHeight: '1.6' }}>
          No credit card required. 14-day free trial.
        </p>
      </div>
    </section>
  );
};

export default VendorWaitlist;
