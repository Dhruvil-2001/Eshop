/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Successfully!");
  };

  if (!product) {
    return <div className="text-red-500">Error: Product data is missing!</div>;
  }

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-4 relative overflow-hidden transition-all duration-300 border-2 border-black"
      whileHover={{
        scale: 1.05,
        rotate: 1,
        borderColor: "black",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)", // Black glow effect
      }}
      whileTap={{ scale: 0.97 }}
      style={{
        borderRadius: "12px",
        position: "relative",
      }}
    >
      {/* Animated Border Overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          borderColor: "black",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.8)", // Darker glow effect
        }}
        transition={{ duration: 0.4 }}
      ></motion.div>

      {/* Image Container with Subtle Animation */}
      <motion.div
        className="overflow-hidden rounded-lg p-4 border border-black"
        whileHover={{
          borderColor: "black",
        }}
        style={{
          background: "linear-gradient(135deg, #f8f8f8, #e0e0e0)", // Soft gray gradient
          borderRadius: "12px",
        }}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.15, rotate: 3 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-500 text-lg font-bold">
        ₹{product.price?.toFixed(2)}
      </p>

      <div className="flex items-center mt-2 space-x-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-yellow-500 ${
              index < product.rating ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Add to Cart Button */}
      <motion.button
        className="absolute bottom-4 right-2 flex items-center justify-center w-10 h-10 bg-black text-white text-sm rounded-full transition-all duration-300 hover:w-32 hover:bg-gray-900 group shadow-lg"
        onClick={(e) => handleAddToCart(e, product)}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.8)", // Black glow effect on hover
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FaShoppingCart className="group-hover:hidden" />
        <span className="hidden group-hover:block px-2">Add to Cart</span>
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
