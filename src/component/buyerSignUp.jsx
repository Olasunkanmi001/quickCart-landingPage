import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartImage from "../assets/cart-image.png";
import shopImage from "../assets/Shop 1.png";

const BuyerSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement actual signup API call here
      console.log("Signup data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // On successful signup, redirect to dashboard or login
      // For now, we'll just show a success message
      alert("Account created successfully! Please log in.");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      // Here you would integrate with Google OAuth for signup
      console.log("Initiating Google Sign-Up...");

      // Example Google OAuth integration:
      // const googleResult = await signUpWithGoogle();
      // if (googleResult.success) {
      //   navigate("/buyerDashboard");
      // }

      // Temporary alert for demonstration
      alert(
        "Google Sign-Up functionality would be implemented here with Google OAuth integration"
      );
    } catch (error) {
      console.error("Google Sign-Up error:", error);
      alert("Google Sign-Up failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left side - Title, Subtitle, Button */}
        <div className="lg:w-1/3 bg-white flex items-center justify-center p-12">
          <div className="max-w-md">
            <h1
              className="text-left text-black mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "bold",
                fontSize: "64px",
                lineHeight: "74px",
                letterSpacing: "-1px",
              }}
              dangerouslySetInnerHTML={{
                __html: "Shop local.<br/>Get it fast.",
              }}
            />

            <p
              className="text-left text-black mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "30px",
              }}
            >
              Browse, pay, and track—plus loyalty rewards on every order.
            </p>

            <button
              className="text-black text-center"
              style={{
                backgroundColor: "#B4DAFF",
                width: "337.69px",
                height: "54.52px",
                gap: "10px",
                padding: "17px 146px",
                borderRadius: "20px",
                border: "none",
                fontFamily: "Inter, sans-serif",
                cursor: "pointer",
              }}
            >
              Vendor
            </button>
          </div>
        </div>

        {/* Middle - Shop Image */}
        <div className="lg:w-1/3 bg-white flex items-center justify-center p-8">
          <img
            src={shopImage}
            alt="Shop Illustration"
            className="w-full h-auto object-contain max-w-md"
          />
        </div>

        {/* Right side - Form */}
        <div className="lg:w-1/3 flex flex-col justify-center py-12 px-8">
          <div className="mx-auto w-full max-w-sm">
            <div>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Create your QuickCart account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Join thousands of happy shoppers
              </p>
            </div>

            <div className="mt-8">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                          errors.firstName ? "border-red-300" : "border-gray-300"
                        }`}
                        style={{
                          "--focus-ring-color": "#0B4863",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#0B4863";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(11, 72, 99, 0.1)";
                        }}
                        onBlur={(e) => {
                          if (!errors.firstName) {
                            e.target.style.borderColor = "#d1d5db";
                            e.target.style.boxShadow = "none";
                          }
                        }}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                          errors.lastName ? "border-red-300" : "border-gray-300"
                        }`}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#0B4863";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(11, 72, 99, 0.1)";
                        }}
                        onBlur={(e) => {
                          if (!errors.lastName) {
                            e.target.style.borderColor = "#d1d5db";
                            e.target.style.boxShadow = "none";
                          }
                        }}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                          errors.email ? "border-red-300" : "border-gray-300"
                        }`}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#0B4863";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(11, 72, 99, 0.1)";
                        }}
                        onBlur={(e) => {
                          if (!errors.email) {
                            e.target.style.borderColor = "#d1d5db";
                            e.target.style.boxShadow = "none";
                          }
                        }}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                          errors.phoneNumber
                            ? "border-red-300"
                            : "border-gray-300"
                        }`}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#0B4863";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(11, 72, 99, 0.1)";
                        }}
                        onBlur={(e) => {
                          if (!errors.phoneNumber) {
                            e.target.style.borderColor = "#d1d5db";
                            e.target.style.boxShadow = "none";
                          }
                        }}
                        placeholder="Enter your phone number"
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                          errors.password ? "border-red-300" : "border-gray-300"
                        }`}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#0B4863";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(11, 72, 99, 0.1)";
                        }}
                        onBlur={(e) => {
                          if (!errors.password) {
                            e.target.style.borderColor = "#d1d5db";
                            e.target.style.boxShadow = "none";
                          }
                        }}
                        placeholder="Create a password"
                      />
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                          errors.confirmPassword
                            ? "border-red-300"
                            : "border-gray-300"
                        }`}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#0B4863";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(11, 72, 99, 0.1)";
                        }}
                        onBlur={(e) => {
                          if (!errors.confirmPassword) {
                            e.target.style.borderColor = "#d1d5db";
                            e.target.style.boxShadow = "none";
                          }
                        }}
                        placeholder="Confirm your password"
                      />
                      {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      style={{
                        backgroundColor: "#0B4863",
                        focusRingColor: "#0B4863",
                      }}
                      onMouseEnter={(e) => {
                        if (!isLoading) {
                          e.target.style.backgroundColor = "#0a3e56";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isLoading) {
                          e.target.style.backgroundColor = "#0B4863";
                        }
                      }}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                  </div>

                  {/* Terms and Privacy */}
                  <div className="text-xs text-gray-500 text-center">
                    By creating an account, you agree to our{" "}
                    <Link to="/terms" className="text-black hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-black hover:underline">
                      Privacy Policy
                    </Link>
                  </div>
                </form>

                {/* Login Link */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Already have an account?
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <Link
                      to="/buyerLogin"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Sign In
                    </Link>
                  </div>

                  {/* Google Sign Up Button */}
                  <div className="mt-3">
                    <button
                      onClick={handleGoogleSignUp}
                      className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Continue with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden flex flex-col p-6">
        {/* Mobile Title Section */}
        <div className="text-center mb-8">
          <h1
            className="text-black mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: "32px",
              lineHeight: "38px",
              letterSpacing: "-0.5px",
            }}
            dangerouslySetInnerHTML={{
              __html: "Shop local.<br/>Get it fast.",
            }}
          />

          <p
            className="text-black mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "normal",
              fontSize: "18px",
            }}
          >
            Browse, pay, and track—plus loyalty rewards on every order.
          </p>

          <button
            className="text-black mx-auto block mb-6"
            style={{
              backgroundColor: "#B4DAFF",
              width: "200px",
              height: "45px",
              borderRadius: "20px",
              border: "none",
              fontFamily: "Inter, sans-serif",
              cursor: "pointer",
            }}
          >
            Vendor
          </button>

          {/* Mobile Shop Image */}
          <div className="mb-8">
            <img
              src={shopImage}
              alt="Shop Illustration"
              className="w-full h-auto object-contain max-w-xs mx-auto"
            />
          </div>
        </div>

        {/* Mobile Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Create your QuickCart account
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Join thousands of happy shoppers
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label htmlFor="mobile-firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="mobile-firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                  errors.firstName ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="mobile-lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="mobile-lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                  errors.lastName ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="mobile-email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="mobile-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                  errors.email ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="mobile-phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="mobile-phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                  errors.phoneNumber ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="mobile-password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="mobile-password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                  errors.password ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="mobile-confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="mobile-confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                  errors.confirmPassword ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
              style={{
                backgroundColor: "#0B4863",
              }}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>

            {/* Terms and Privacy */}
            <div className="text-xs text-gray-500 text-center">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="text-black hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-black hover:underline">
                Privacy Policy
              </Link>
            </div>

            {/* Login Link */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
              </span>
              <Link
                to="/buyerLogin"
                className="text-sm"
                style={{ color: "#0B4863" }}
              >
                Sign In
              </Link>
            </div>

            {/* Google Sign Up Button */}
            <button
              onClick={handleGoogleSignUp}
              className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mt-4"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyerSignUp;
