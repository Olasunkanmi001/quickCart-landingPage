import React, { useEffect } from "react";
import {
  FaBolt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCogs,
  FaAdjust,
  FaMobile,
} from "react-icons/fa";

const RiderWhyWorkWithUs = () => {
  return (
    <section className="bg-[#E5E5E5] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl font-extrabold text-[32] text-left mb-6"
          style={{ lineHeight: "71%" }}
        >
          Why deliver with Quickcart?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Speed That Sets Us Apart */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaBolt size={48} className="text-gray-600" />
            </div>
            <h3 className="font-nunito font-bold text-[22px] text-black text-left mb-2">
              Speed That Sets Us Apart
            </h3>
            <p
              className="font-nunito font-normal text-[16.2px] text-left"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              QuickCart is built for speed. From pickup to delivery, every step
              is carefully optimized to save time and improve efficiency. Your
              packages always arrive faster, every single time.
            </p>
          </div>

          {/* Real-Time Tracking & Transparency */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaMapMarkerAlt size={48} className="text-gray-600" />
            </div>
            <h3 className="font-nunito font-bold text-[22px] text-black text-left mb-2">
              Real-Time Tracking & Transparency
            </h3>
            <p
              className="font-nunito font-normal text-[16.2px] text-left"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              You always know where your package is. Our live tracking system
              keeps you informed at every step of the delivery process. There
              are no delays or surprises — just clear, real-time updates.
            </p>
          </div>

          {/* Reliability You Can Trust */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaShieldAlt size={48} className="text-gray-600" />
            </div>
            <h3 className="font-nunito font-bold text-[22px] text-black text-left mb-2">
              Reliability You Can Trust
            </h3>
            <p
              className="font-nunito font-normal text-[16.2px] text-left"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              We deliver with care and consistency. Every QuickCart rider is
              properly trained and verified to ensure safety and
              professionalism. Your items are always handled and delivered
              securely.
            </p>
          </div>

          {/* Technology-Driven Efficiency*/}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaCogs size={48} className="text-gray-600" />
            </div>
            <h3 className="font-nunito font-bold text-[22px] text-black text-left mb-2">
              Technology-Driven Efficiency
            </h3>
            <p
              className="font-nunito font-normal text-[16.2px] text-left"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              QuickCart uses smart systems to manage every delivery seamlessly.
              You can track, analyze, and control all your deliveries from one
              easy-to-use dashboard. This means faster service, lower costs, and
              a better experience overall.
            </p>
          </div>

          {/* Customized Delivery Solutions */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaAdjust size={48} className="text-gray-600" />
            </div>
            <h3 className="font-nunito font-bold text-[22px] text-black text-left mb-2">
              Customized Delivery Solutions
            </h3>
            <p
              className="font-nunito font-normal text-[16.2px] text-left"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              We understand that every business is different. That’s why
              QuickCart offers flexible delivery options designed to fit your
              specific needs. We adapt to your workflow, not the other way
              around.
            </p>
          </div>

          {/* Mobile App */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaMobile size={48} className="text-gray-600" />
            </div>
            <h3 className="font-nunito font-bold text-[22px] text-black text-left mb-2">
              Mobile App
            </h3>
            <p
              className="font-nunito font-normal text-[16.2px] text-left"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              User-friendly mobile app with real-time tracking and instant
              notifications for seamless operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiderWhyWorkWithUs;
