
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { Categories, mockData } from "../assets/mockData";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import { useNavigate } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const images = [
  "src/assets/Images/Hero.jpg",
  "src/assets/Images/Hero_2.jpg",
  "src/assets/Images/H_3.jpg",
];

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white mt-2 pl-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5 rounded-t-lg">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border rounded-b-lg">
            {Categories.map((category, index) => (
              <motion.li
                key={index}
                className="flex items-center text-sm font-medium hover:text-red-600 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hero Image Section */}
        <div className="w-full md:w-10/12 mt-8 md:mt-0 h-96   relative overflow-hidden rounded-lg shadow-xl bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              className="h-full w-full object-fill"
              alt="Hero Section"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <motion.div
            className="absolute top-16 left-8 text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h2
              className="text-3xl font-bold"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              WELCOME TO E-SHOP
            </motion.h2>
            <motion.p
              className="text-xl mt-2.5 font-bold text-gray-200"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              MILLIONS OF PRODUCTS
            </motion.p>
            <div className="mt-[50px]">
              <motion.button
                className="bg-red-600 px-10 py-2 text-white font-bold rounded-md shadow-lg hover:bg-red-700 transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                onClick={() => navigate("/shop")} // Redirect to Shop page

              >
                SHOP NOW
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <InfoSection />
      <CategorySection />

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {products.slice(0, 5).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
