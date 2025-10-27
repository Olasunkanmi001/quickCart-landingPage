import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "VendorPro helped us increase sales by 45% in just 3 months. Best investment ever!",
      name: "Sarah Johnson",
      job: "Electronics Seller",
    },
    {
      quote:
        "The analytics tools are incredible. I finally understand my customers better.",
      name: "Marcus Chen",
      job: "Fashion Retailer",
    },
    {
      quote:
        "Customer support is outstanding and the platform is so easy to use.",
      name: "Priya Patel",
      job: "Jewelry Store Owner",
    },
  ];

  const renderStars = () => {
    return (
      <div className="flex mb-3 md:mb-4 gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-[#FFB800] text-lg md:text-xl" />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-[#F9FAFB] px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 font-inter">
      <div className="max-w-8xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-inter font-semibold text-[28px] md:text-[36px] lg:text-[43.2px] text-[#010101] mb-4 md:mb-6 leading-tight">
            Loved by Vendors Worldwide
          </h2>
          <p className="font-inter font-medium text-[18px] md:text-[20px] lg:text-[24.69px] text-[#010101] opacity-60 px-4">
            Join thousands of successful sellers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 lg:p-8 py-6 md:py-8 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col min-h-[280px] md:min-h-[320px] lg:min-h-[220px]"
            >
              {/* 5 Stars */}
              {renderStars()}

              {/* Quote */}
              <p className="font-inter font-normal text-[15px] md:text-[16px] lg:text-[17.74px] text-[#3D3D3D] leading-relaxed mb-3 md:mb-4 lg:mb-2 text-left flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Name and Job Container */}
              <div className="text-left">
                {/* Name */}
                <h3 className="font-inter font-bold text-[17px] md:text-[18px] lg:text-[19.95px] text-[#3D3D3D] mb-1 md:mb-2">
                  {testimonial.name}
                </h3>

                {/* Job Description */}
                <p className="font-inter font-normal text-[14px] md:text-[16px] lg:text-[17.74px] text-[#3D3D3D]">
                  {testimonial.job}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
