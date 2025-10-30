import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // 🌙☀️ icons for dark mode toggle
import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { checkAuthStatus } from "../utils/auth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [authStatus, setAuthStatus] = useState({
    isLoggedIn: false,
    user: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const status = checkAuthStatus();
      setAuthStatus(status);
    };

    checkAuth();
    // Listen for storage changes to update auth status
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  // Check if we're on the vendor landing page
  const isVendorLandingPage = location.pathname === "/vendorLanding";
  // Check if we're on the rider landing page
  const isRiderLandingPage = location.pathname === "/riderLanding";

  const navLinks = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Marketplace", href: "#marketplace" },
    { name: "Vendors", href: "#vendors" },
    { name: "Info Section", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();

    // Check if we're on the home page
    const isHomePage = location.pathname === "/";

    if (!isHomePage) {
      // If not on home page, navigate to home with the section hash
      navigate(`/${href}`);
      // Close mobile menu if open
      setIsOpen(false);
      return;
    }

    // If on home page, scroll to the section
    const target = document.querySelector(href);

    if (target) {
      // Get header height to offset scroll position
      const headerHeight = document.querySelector("header")?.offsetHeight || 80;
      const targetPosition = target.offsetTop - headerHeight;

      // Use window.scrollTo as primary method
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      // Fallback: try without the hash
      const elementId = href.replace("#", "");
      const fallbackTarget = document.getElementById(elementId);
      if (fallbackTarget) {
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 80;
        const targetPosition = fallbackTarget.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
        console.log("Fallback scroll successful"); // Debug log
      }
    }

    // Close mobile menu if open
    setIsOpen(false);
  };

  // Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // TODO: Implement actual search functionality
      console.log("Searching for:", searchQuery);
      // You can navigate to a search results page or perform the search
    }
  };

  return (
    <header
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } shadow-md px-6 py-4 flex items-center justify-between relative transition-colors duration-300`}
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={logo} className="w-32" />
        </Link>
      </div>

      {/* Navigation Links - only show when NOT logged in */}
      {!authStatus.isLoggedIn && (
        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}

      {/* Search bar - only show when logged in */}
      {authStatus.isLoggedIn && (
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <form onSubmit={handleSearch} className="flex w-full">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full px-4 py-2 pr-10 border border-[#D5D5D5] bg-white text-black placeholder-[#D5D5D5] rounded-l-md focus:outline-none focus:border-[#D5D5D5]"
              />
              {/* Magnifying glass icon */}
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#D5D5D5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              type="submit"
              className="bg-gradient-green text-white font-nunito font-normal text-[15.56px] leading-[15.56px] text-center px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Old search bar (hidden on mobile) - only show when NOT logged in */}
      {!authStatus.isLoggedIn && (
        <div className="hidden md:flex items-center w-1/3 mx-6">
          <input
            type="text"
            placeholder="Try 'Ankara Gown', 'Men's Loafers'"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-300 placeholder:text-gray-300"
          />
        </div>
      )}

      <div className="flex items-center space-x-4">
        {/* Cart button - only show when logged in */}
        {authStatus.isLoggedIn && (
          <button
            onClick={() => navigate("/cart")}
            className="flex items-center space-x-2 bg-white border border-[#D5D5D5] text-black font-inter font-medium text-[16px] leading-[20px] px-4 py-2 rounded hover:bg-gray-50 transition-colors"
          >
            {/* Cart icon */}
            <svg
              className="w-4 h-4 text-[#374957]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l1.1-5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            <span className="text-right">Cart</span>
          </button>
        )}

        {/* Conditionally show Login and Get Started Free only on vendor landing page and NOT logged in */}
        {isVendorLandingPage && !authStatus.isLoggedIn && (
          <>
            {/* Login Link */}
            <Link
              to="/login"
              className="text-gray-700 hover:text-black font-medium transition-colors duration-300"
            >
              Login
            </Link>

            {/* Get Started Free button */}
            <button className="bg-gradient-to-r from-[#01AC74] to-[#08A420] text-white font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center px-4 py-2 text-sm">
              Get Started Free
            </button>
          </>
        )}

        {/* Conditionally show Login and Get Started Free only on rider landing page and NOT logged in */}
        {isRiderLandingPage && !authStatus.isLoggedIn && (
          <>
            {/* Login Link */}
            <Link
              to="/login"
              className="text-gray-700 hover:text-black font-medium transition-colors duration-300"
            >
              Login
            </Link>

            {/* Get Started Free button */}
            <button className="bg-[#0B4863] text-white font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center px-4 py-2 text-sm">
              Get Started Free
            </button>
          </>
        )}

        {/* Show Get App button when NOT on vendor or rider landing page and NOT logged in */}
        {!isVendorLandingPage &&
          !isRiderLandingPage &&
          !authStatus.isLoggedIn && (
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Get App
            </button>
          )}

        {/* Dark mode toggle - always visible */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" size={20} />
          ) : (
            <FaMoon className="text-gray-700" size={20} />
          )}
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
          } shadow-md flex flex-col items-start px-6 py-4 space-y-4 md:hidden`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search items..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-300 placeholder:text-gray-300"
            />
          </div>

          {/* Conditionally show Login and Get Started Free based on current page */}
          {isVendorLandingPage ? (
            <>
              {/* Login Link */}
              <Link
                to="/login"
                className="text-gray-700 hover:text-black font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>

              {/* Get Started Free button - Vendor */}
              <button
                className="w-full bg-gradient-to-r from-[#01AC74] to-[#08A420] text-white font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center py-3"
                onClick={() => setIsOpen(false)}
              >
                Get Started Free
              </button>
            </>
          ) : isRiderLandingPage ? (
            <>
              {/* Login Link */}
              <Link
                to="/login"
                className="text-gray-700 hover:text-black font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>

              {/* Get Started Free button - Rider */}
              <button
                className="w-full bg-[#0B4863] text-white font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center py-3"
                onClick={() => setIsOpen(false)}
              >
                Get Started Free
              </button>
            </>
          ) : (
            /* Show Get App button when NOT on vendor or rider landing page */
            <button
              className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Get App
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
