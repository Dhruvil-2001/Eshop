/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import NoProduct from "../assets/Images/no-product.jpg";

function FilterData() {
  const filterProducts = useSelector((state) => state.products.filteredData);

  return (
    <div>
      {filterProducts.length > 0 ? (
        <motion.div className="container mx-auto py-12 px-4">
          <motion.h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            🛍️ Filtered Products
          </motion.h2>

          {/* Show max 10 products */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filterProducts.slice(0, 10).map((product) => (
              <motion.div key={product.id}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ) : (
        <div className="flex justify-center">
          <img src={NoProduct} alt="No Products Available" />
        </div>
      )}
    </div>
  );
}

export default FilterData;
