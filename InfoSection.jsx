/* eslint-disable no-unused-vars */
import React from "react";
import { FaHeadset, FaShippingFast, FaLock } from "react-icons/fa";
import { TbRosetteDiscount } from "react-icons/tb";
import { motion } from "framer-motion";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-teal-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-pink-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <TbRosetteDiscount className="text-3xl text-purple-600" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
    {
      icon: <FaLock className="text-3xl text-indigo-600" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for each child
      },
    },
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white pb-8 pt-12">
      <div className="container mx-auto px-4">
        {/* Flexbox for Row Layout */}
        <motion.div
          className="flex flex-wrap justify-around gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Only animate once
        >
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 border rounded-lg shadow-lg
                          transition-all duration-300 cursor-pointer w-64 bg-white"
              variants={itemVariants}
              whileHover="hover"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfoSection;