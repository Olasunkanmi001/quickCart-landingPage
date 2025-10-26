import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("English");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  // Add styles for placeholder color
  const inputStyles = `
    .newsletter-input::placeholder {
      color: #01AC74 !important;
      opacity: 0.7;
    }
  `;

  return (
    <footer className="bg-black text-white">
      <style>{inputStyles}</style>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          {/* Logo and Message Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">QuickCart</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Empowering vendors world wide.
            </p>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-white font-inter font-bold text-2xl mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company Categories */}
          <div>
            <h3 className="text-white font-inter font-bold text-2xl mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Categories */}
          <div>
            <h3 className="text-white font-inter font-bold text-2xl mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-inter font-bold text-2xl mb-4">
              Newsletter
            </h3>
            <form
              onSubmit={handleEmailSubmit}
              className="flex gap-2 items-center max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="newsletter-input flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none"
                style={{
                  color: "#01AC74",
                  borderColor: email ? "#01AC74" : undefined,
                }}
                required
              />
              <button
                type="submit"
                className="px-3 py-2 bg-white hover:bg-gray-50 active:bg-gray-200 active:scale-95 rounded-lg font-medium transition-all duration-150 transform text-xs"
                style={{ color: "#01AC74" }}
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left Side - Web Icon, Language, Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Web Icon and Language */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  />
                </svg>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-gray-300 text-sm border-none outline-none cursor-pointer"
                >
                  <option value="English" className="bg-black">
                    English
                  </option>
                  <option value="Spanish" className="bg-black">
                    Spanish
                  </option>
                  <option value="French" className="bg-black">
                    French
                  </option>
                </select>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms & Privacy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Security
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Status
              </a>
            </div>
          </div>

          {/* Right Side - Copyright and Social Icons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-gray-300 text-sm">
              © 2025 QuickCart. All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
