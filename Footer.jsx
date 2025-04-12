/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8 px-6 md:px-16 lg:px-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */} 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold">e-Shop</h3>
          <p className="mt-4 text-gray-300">
            Your one-stop shop for all your needs. Experience the best online
            shopping journey with us.
          </p>  
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-col md:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4 relative inline-block">
            Quick Links
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
          </h4>
          <ul className="space-y-3 text-gray-400">
            {["Home", "Shop", "Contact", "About"].map((item, index) => (
              <motion.li
                key={index}
                className="group transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="relative inline-block text-gray-300 hover:text-red-500 transition-all ease-in-out duration-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social & Subscription Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h4 className="text-lg font-semibold">Follow us</h4>    
          <div className="flex space-x-4 text-3xl mt-4">
            {[FaFacebook, FaTwitterSquare, FaGithubSquare, FaLinkedin].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-red-500 transition-all"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>

          {/* Subscription Form */}
          <form className="flex flex-col mt-6 space-y-3">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-500"
            />
            <motion.button
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="mt-8 border-t border-gray-700 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2025 e-Shop. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Terms & Conditions", "Privacy Policy"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:text-red-500 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
