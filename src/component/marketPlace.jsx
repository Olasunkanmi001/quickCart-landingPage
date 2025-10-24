import React from "react";
import pic1 from '../assets/Rectangle 4671.png';
import pic2 from '../assets/Rectangle 4671 (8).png';
import pic3 from '../assets/Rectangle 4671 (2).png';
import pic4 from '../assets/Rectangle 4671 (3).png';
import pic5 from '../assets/Rectangle 4671 (9).png';
import pic6 from '../assets/Rectangle 4671 (5).png';
import pic7 from '../assets/Rectangle 4671 (6).png';
import pic8 from '../assets/Rectangle 4671 (7).png';

const categories = [
  { name: "Women", image: pic1 },
  { name: "Men", image: pic2 },
  { name: "Footwear", image: pic3 },
  { name: "Jewelry", image: pic4 },
  { name: "Bags", image: pic5 },
  { name: "Kids", image: pic6 },
  { name: "Vintage/Thrift", image: pic7 },
  { name: "Deals Today", image: pic8 },
];

const Marketplace = () => {
  return (
    <section
      id="categories"
      className="w-full bg-white px-6 md:px-16 py-12"
    >
      {/* Section header */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Shop popular categories near you
        </h2>
        <p className="text-gray-600 mt-2">
          Updated daily from nearby vendors.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 text-left">
              <p className="text-gray-900 font-medium">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;