/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import EmptyCart from "../assets/Images/EmptyCart.png.webp";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import Changeaddress from "../components/Changeaddress";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Street, 0012");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <motion.div 
      className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {cart.products.length > 0 ? (
        <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">SHOPPING CART</h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Cart Items Section */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg border-2 border-gray-600">
              <div className="grid grid-cols-6 text-sm font-bold border-b-2 border-gray-600 pb-2 text-gray-700">
                <p className="col-span-2">PRODUCTS</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
                <p>REMOVE</p>
              </div>

              {/* Product List */}
              <div>
                {cart.products.map((product) => (
                  <motion.div
                    key={product.id}
                    className="grid grid-cols-6 items-center gap-4 p-4 border-b-2 border-gray-600 bg-gray-50 rounded-lg hover:shadow-md transition"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="col-span-2 flex items-center space-x-4">
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-contain rounded-lg" />
                      <h3 className="text-gray-800 font-medium">{product.name}</h3>
                    </div>
                    <p className="text-gray-800">₹{product.price.toFixed(2)}</p>
                    <div className="flex items-center border-2 border-gray-600 bg-white rounded-md shadow-sm">
                      <button className="px-3 py-1 border-r-2 border-gray-600 hover:bg-gray-200" onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                      <p className="px-4">{product.quantity}</p>
                      <button className="px-3 py-1 border-l-2 border-gray-600 hover:bg-gray-200" onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                    </div>
                    <p className="text-gray-800">₹{(product.quantity * product.price).toFixed(2)}</p>
                    <motion.button className="text-red-500 hover:text-red-700" onClick={() => dispatch(removeFromCart(product.id))} whileTap={{ scale: 0.9 }}>
                      <FaTrashAlt />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cart Total Section */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-600 flex flex-col justify-center" 
              initial={{ x: 20, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-sm font-semibold mb-5 text-gray-800 text-center">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b-2 border-gray-600 pb-1 text-gray-700">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b-2 border-gray-600 pb-2 text-gray-700">
                <p>Shipping</p>
                <p className="ml-2">Shipping To: <span className="text-xs font-bold">{address}</span></p>
                <button className="text-blue-500 hover:underline mt-1 ml-2" onClick={() => setIsModalOpen(true)}>Change Address</button>
              </div>

              <div className="flex justify-between mb-4 text-gray-800">
                <span>Total Price:</span>
                <span>₹{cart.totalPrice ? cart.totalPrice.toFixed(2) : "0.00"}</span>
              </div>

              <motion.button
                className="w-full bg-red-600 text-white py-2 rounded-lg shadow-md hover:bg-red-800 transition"
                onClick={() => navigate("/Checkout")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Proceed to Checkout
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Modal for Changing Address */}
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
  <Changeaddress setAddress={setAddress} setIsModalopen={setIsModalOpen} />
</Modal>
        </motion.div>
      ) : (
        <motion.div 
        className="flex justify-center items-center border-4 border-gray-300 rounded-lg p-4 shadow-lg bg-gray-100"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img 
          src={EmptyCart} 
          alt="Empty Cart" 
          className="h-96 w-auto border-2 border-gray-800 rounded-lg"
          initial={{ rotate: -100, opacity: 10 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>
      )}
    </motion.div>
  );
};

export default Cart;
