import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import cartImage from "../assets/cart-image.png";
import shopImage from "../assets/Shop 1.png";

const BuyerLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
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
      const result = await login(formData.email, formData.password);

      if (result.success) {
        // Successful login, redirect to dashboard
        navigate("/buyerDashboard");
      } else {
        // Login failed, show error
        setErrors({
          general: result.error || "Login failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ general: "Network error. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Here you would integrate with Google OAuth
      // For now, we'll simulate the process
      console.log("Initiating Google Sign-In...");

      // Example Google OAuth integration:
      // const googleResult = await signInWithGoogle();
      // if (googleResult.success) {
      //   navigate("/buyerDashboard");
      // }

      // Temporary alert for demonstration
      alert(
        "Google Sign-In functionality would be implemented here with Google OAuth integration"
      );
    } catch (error) {
      console.error("Google Sign-In error:", error);
      setErrors({ general: "Google Sign-In failed. Please try again." });
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
              Buyer
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
                Welcome back to QuickCart
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Sign in to your account
              </p>
            </div>

            <div className="mt-8">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* General Error Message */}
                  {errors.general && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                      {errors.general}
                    </div>
                  )}

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
                        placeholder="Enter your password"
                      />
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded"
                        style={{
                          accentColor: "#0B4863",
                        }}
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        to="/forgot-password"
                        className="hover:underline"
                        style={{ color: "#0B4863" }}
                      >
                        Forgot your password?
                      </Link>
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
                      {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                  </div>
                </form>

                {/* Signup Link */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Don't have an account?
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <Link
                      to="/buyerSignUp"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Create Account
                    </Link>
                  </div>

                  {/* Google Sign In Button */}
                  <div className="mt-3">
                    <button
                      onClick={handleGoogleSignIn}
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
            Welcome back to QuickCart
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* General Error Message */}
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                {errors.general}
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="mobile-email"
                className="block text-sm font-medium text-gray-700"
              >
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

            {/* Password */}
            <div>
              <label
                htmlFor="mobile-password"
                className="block text-sm font-medium text-gray-700"
              >
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
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
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
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

            {/* Signup Link */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                Don't have an account?{" "}
              </span>
              <Link
                to="/buyerSignUp"
                className="text-sm"
                style={{ color: "#0B4863" }}
              >
                Create Account
              </Link>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
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

export default BuyerLogin;
