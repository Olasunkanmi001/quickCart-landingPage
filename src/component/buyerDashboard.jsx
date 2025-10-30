import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBell,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const BuyerDashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: null,
  });

  const [recentOrders, setRecentOrders] = useState([
    {
      id: "ORD-001",
      date: "2024-10-28",
      status: "Delivered",
      total: "₦15,500",
      items: ["Ankara Dress", "Gold Earrings"],
    },
    {
      id: "ORD-002",
      date: "2024-10-25",
      status: "In Transit",
      total: "₦8,200",
      items: ["Men's Loafers"],
    },
  ]);

  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      name: "Traditional Ankara Dress",
      price: "₦12,000",
      image: "/api/placeholder/300/300",
      vendor: "Fashion Hub",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Gold Chain Necklace",
      price: "₦25,000",
      image: "/api/placeholder/300/300",
      vendor: "Jewelry Palace",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Leather Sneakers",
      price: "₦18,500",
      image: "/api/placeholder/300/300",
      vendor: "Shoe Store",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Designer Handbag",
      price: "₦22,000",
      image: "/api/placeholder/300/300",
      vendor: "Luxury Bags",
      rating: 4.6,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-black">
                QuickCart
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products, vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <FaFilter className="text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="relative">
                <FaBell className="text-gray-600 hover:text-black" size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>

              <button className="relative">
                <FaHeart className="text-gray-600 hover:text-black" size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  5
                </span>
              </button>

              <button className="relative">
                <FaShoppingCart
                  className="text-gray-600 hover:text-black"
                  size={20}
                />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <FaUser className="text-gray-600" size={16} />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {user.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Discover amazing fashion finds from verified vendors near you
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <FaShoppingCart className="text-black mb-3" size={24} />
            <h3 className="font-semibold text-gray-900 mb-1">Shop Now</h3>
            <p className="text-sm text-gray-600">Browse latest collections</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <FaHeart className="text-red-500 mb-3" size={24} />
            <h3 className="font-semibold text-gray-900 mb-1">Wishlist</h3>
            <p className="text-sm text-gray-600">View saved items</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <FaBell className="text-blue-500 mb-3" size={24} />
            <h3 className="font-semibold text-gray-900 mb-1">Notifications</h3>
            <p className="text-sm text-gray-600">Stay updated</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <FaUser className="text-green-500 mb-3" size={24} />
            <h3 className="font-semibold text-gray-900 mb-1">Profile</h3>
            <p className="text-sm text-gray-600">Manage account</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Orders
                </h2>
              </div>
              <div className="p-6">
                {recentOrders.map((order) => (
                  <div key={order.id} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {order.items.join(", ")}
                    </p>
                    <p className="font-semibold text-black">{order.total}</p>
                  </div>
                ))}
                <Link
                  to="/orders"
                  className="text-sm text-black hover:underline mt-4 inline-block"
                >
                  View all orders →
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Products */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  Featured Products
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="w-full h-32 bg-gray-200 rounded-md mb-3 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Product Image
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        by {product.vendor}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-black">
                          {product.price}
                        </span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-gray-600 ml-1">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <button className="w-full mt-3 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Link
                    to="/products"
                    className="inline-flex items-center px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors rounded-md"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyerDashboard;
