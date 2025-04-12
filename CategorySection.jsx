/* eslint-disable no-unused-vars */
import React from "react";
import ManCategory from "../assets/Images/men.png";
import WomanCategory from "../assets/Images/Women.jpg";
import KidsCategory from "../assets/Images/Kids.jpg";

const categories = [
  {
    title: "Men",
    imageUrl: ManCategory,
  },
  {
    title: "Women",
    imageUrl: WomanCategory,
  },
  {
    title: "Kids",
    imageUrl: KidsCategory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto flex flex-col  sm:flex-row justify-around gap-6 px-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-[315px] w-full max-w-[420px] transition-transform duration-300 hover:scale-105 cursor-pointer flex-shrink-0"
        >
          <img
            src={category.imageUrl}
            alt={`Category: ${category.title}`}
            loading="lazy"
            className="w-full h-full rounded-lg shadow-md "
          />
          {/* ✅ Corrected: Ensured "View all" stays within the overlay */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center bg-white bg-opacity-70 backdrop-blur-sm p-2 rounded">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View all</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
