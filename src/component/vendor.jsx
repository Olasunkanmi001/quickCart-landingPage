import React from "react";
import avatar1 from '../assets/Avatar (2).png';
import avatar3 from '../assets/Avatar (3).png';
import avatar2 from '../assets/Avatar (1).png';
import deal1 from '../assets/Rectangle 4671 (10).png';
import deal2 from '../assets/Rectangle 4671 (11).png';
import deal3 from '../assets/Rectangle 4671 (12).png';
import deal4 from '../assets/Rectangle 4671 (13).png';
import deal5 from '../assets/Rectangle 4671 (14).png';
import deal6 from '../assets/Rectangle 4671 (15).png';
import deal7 from '../assets/Rectangle 4671 (16).png';
import deal8 from '../assets/Rectangle 4671 (17).png';
import deal9 from '../assets/Rectangle 4671 (18).png';
import deal10 from '../assets/Rectangle 4671 (19).png';




const FeaturedVendorsAndDeals = () => {
  const vendors = [
    {
      id: 1,
      name: "Brace Electronics",
      rating: 4.8,
      reviews: 194,
      distance: "0.9 km • VI",
      image: avatar1, // replace with real image
    },
    {
      id: 2,
      name: "Zainab Jewellery & Gifts",
      rating: 4.8,
      reviews: 200,
      distance: "1.2 km • Eligbo",
      image: avatar2,
    },
    {
      id: 3,
      name: "Alan Thrift Store",
      rating: 4.8,
      reviews: 94,
      distance: "0.9 km • VI",
      image: avatar3,
    },
  ];

  const deals = [
    {
      id: 1,
      name: "Classic Leather Loafers",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal1,
    },
    {
      id: 2,
      name: "Ankara Midi Dress",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal2,
    },
    {
      id: 3,
      name: "Everyday Leather Tote",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal3,
    },
    {
      id: 4,
      name: "Gold-tone Pendant Necklace",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal4,
    },
    {
      id: 5,
      name: "Clean White Sneakers",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal5,
    },
    {
      id: 6,
      name: "Leather Bag",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal6,
    },
    {
      id: 7,
      name: "Clean White Sneakers",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal7,
    },
    {
      id: 8,
      name: "Ankara midi Dress",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal8,
    },
    {
      id: 9,
      name: "Classic Leather Loafers",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal9,
    },
    {
      id: 10,
      name: "Gold-tone Pendant Necklace",
      price: "₦24,500",
      oldPrice: "₦28,900",
      image: deal10,
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-6 md:px-12 font-sans">
      {/* Featured Vendors */}
      <div className="mb-10">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Featured Vendors Nearby
        </h2>
        <div className="flex flex-wrap gap-4">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="flex items-center justify-between border rounded-xl p-4 w-full md:w-[30%] shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{vendor.name}</p>
                  <p className="text-sm text-gray-500">
                    ⭐ {vendor.rating} ({vendor.reviews}) • {vendor.distance}
                  </p>
                </div>
              </div>
              <button className="bg-black text-white text-sm px-4 py-1 rounded-lg hover:bg-gray-800">
                View Store
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Deals Today */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold">Deals today</h2>
        <p className="text-gray-500 text-sm mb-5">
          Bestsellers and discounts to grab now.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {deals.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden hover:shadow-md transition-all"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <p className="font-medium text-sm md:text-base">{item.name}</p>
                <p className="text-gray-600 text-sm">
                  {item.price}{" "}
                  <span className="line-through text-gray-400">
                    {item.oldPrice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendorsAndDeals;
