import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartImage from "../assets/cart-image.png";

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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-12">
        <div className="max-w-md">
          <img
            src={cartImage}
            alt="Shopping Cart Illustration"
            className="w-full h-auto object-contain"
          />
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Start Your Shopping Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discover amazing fashion finds from verified vendors near you.
              Join thousands of happy shoppers today!
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSignUp;
