/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.png";
import cartIcon from "../assets/shopping-cart.png";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { motion, AnimatePresence } from "framer-motion";
import { setSearchTerm } from "../redux/productSlice";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("users");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-pink-600 shadow-lg">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex flex-wrap justify-between items-center">

        {/* Logo */}
        <motion.div
          className="text-lg font-bold text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" className="flex items-center">
            <span className="text-2xl">🛍️</span>
            <span className="ml-2">E-shop</span>
          </Link>
        </motion.div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/shop" className="hover:text-gray-200 transition">Shop</Link>
          <Link to="/about" className="hover:text-gray-200 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
          

        </div>

        {/* Search Bar */}
        <motion.div className="relative flex-1 mx-4 max-w-md w-full hidden md:block">
          <form onSubmit={handleSearch} className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full py-2 px-4 outline-none bg-transparent text-white placeholder-white"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="p-2" aria-label="Search">
              <img src={searchIcon} alt="Search" className="w-6 filter invert" />
            </button>
          </form>
        </motion.div>

        {/* Right Side: Cart + Login/Logout */}
        <div className="flex items-center space-x-4 relative">
          {/* Cart Icon */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/cart" className="relative" aria-label="Cart">
              <img src={cartIcon} alt="Cart" className="w-8 filter invert" />
              {Products?.length > 0 && (
                <motion.span
                  className="absolute top-0 right-0 bg-pink-500 text-white text-xs rounded-full px-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {Products.length}
                </motion.span>
              )}
            </Link>
          </motion.div>

          {/* Login / Logout Button */}
          {isAuthenticated ? (
            <motion.button
              className="hidden md:flex items-center bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-700 transition-all"
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
            >
              Logout
            </motion.button>
          ) : (
            <motion.button
              className="hidden md:flex items-center bg-pink-500 px-4 py-2 rounded-full text-white hover:bg-pink-600 transition-all"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
            >
              Login | Register
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 text-white space-y-2">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block">Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="block">Shop</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block">About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block">Contact</Link>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex items-center mt-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full py-2 px-4 outline-none bg-transparent text-white placeholder-white"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="p-2" aria-label="Search">
              <img src={searchIcon} alt="Search" className="w-6 filter invert" />
            </button>
          </form>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="mt-3 w-full bg-red-600 py-2 rounded-full hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="mt-3 w-full bg-pink-500 py-2 rounded-full hover:bg-pink-600"
            >
              Login | Register
            </button>
          )}
        </div>
      )}

      {/* Modal for Login/Register */}
      <AnimatePresence>
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <motion.div className="bg-white rounded-lg p-6 shadow-xl">
              {isLogin ? <Login /> : <Register />}
              <div className="text-center mt-4">
                <button
                  className="text-pink-500 underline"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                </button>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
