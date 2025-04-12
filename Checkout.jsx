/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";



const Checkout = ({setorder}) => {
   const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm();
        const submitHandler = async (data) => {
          console.log(data);
          try {
            // data.roleId = "67c68ccb957e608ef47a4203";
            // const res = await axios.post("/user", data);
      
            // if (res.status === 201) {
              alert("Ordered Successfully ✅");
            // }
          } catch (error) {
            if (error.response && error.response.data) {
              alert(error.response.data.message || "Something went wrong ! ❌");
            } else {
              alert("Network error or server is down.");
            }
          } 
            const newOrder ={
              products: cart.products,
              orderNumber :'1234',
              shippingInformation: shippingInfo,
              totalPrice: cart.totalPrice
            }
            setorder(newOrder)
            navigate('/order-conformation')
            
          
        
        };

  const validationSchema = {
    nameValidator: { required: { value: true, message: 'Name is required' } },
    emailValidator: {
        required: { value: true, message: 'Email is required' },
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Enter valid email'
        }
    },
    passwordValidator: {
        required: { value: true, message: 'Enter your password' },
        pattern: {
            value: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{5,}$/,
            message: 'Password must be at least 5 characters long and include uppercase, lowercase, a number, and a special character'
        }
    },
    
    contactValidator: {
        required: { value: true, message: "Enter your contact number" },
        pattern: { value: /^[6-9]{1}[0-9]{9}$/, message: "Enter valid contact number" }
    },
    zipValidator: {
      required: { value: true, message: "Enter your Zip number" },
      pattern: { value: /^[0-9]{6}$/, message: "Enter valid Zip number" }
  },
    cityValidator: {
        required: { value: true, message: 'City is required' }
}
}

  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const[shippingInfo ,setShippingInfo] =useState({
    address: '',
    city:'',
    zip:''
  })

  const cart = useSelector((state) => state.cart);
  const  navigate =useNavigate()


  
  return (
    <>
      <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        <form onSubmit={handleSubmit(submitHandler)}>

        <h3 className="text-2xl font-semibold mb-4"> Checkout</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mb-8">
          {/* Left Section - Billing, Shipping, and Payment */}
          <div className="md:w-2/3">
            <div className="border p-4 mb-6 rounded-lg">
              {/* Billing Information */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setBillingToggle(!billingToggle)}
              >
                <h3 className="text-lg font-semibold">Billing Information</h3>
                {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border rounded"
                    {...register("name", validationSchema.nameValidator)}/>
             {errors.password && <p className="text-red-500">{errors.name.message}</p>}
                  
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border rounded"
                    {...register("email", validationSchema.emailValidator)}/>
             {errors.password && <p className="text-red-500">{errors.email.message}</p>}
                
                </div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="number"
                    placeholder="Enter Phone"
                    className="w-full px-3 py-2 border rounded"
                    {...register("phone", validationSchema.phoneValidator)}/>
             {errors.password && <p className="text-red-500">{errors.phone.message}</p>}

                
                </div>
              </div>

              {/* Shipping Information */}
              <div
                className="flex items-center justify-between cursor-pointer mt-4"
                onClick={() => setShippingToggle(!shippingToggle)}
              >
                <h3 className="text-lg font-semibold">Shipping Information</h3>
                {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    className="w-full px-3 py-2 border rounded"
                    onClick={(e)=> setShippingInfo({...shippingInfo, address:e.target.value})}
                    {...register("name", validationSchema.nameValidator)}/>
                
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="w-full px-3 py-2 border rounded"
                    onClick={(e)=> setShippingInfo({...shippingInfo, city:e.target.value})}
                    {...register("city", validationSchema.cityValidator)}/>
             {errors.password && <p className="text-red-500">{errors.city.message}</p>}

                
                </div>
                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Enter Zip code"
                    className="w-full px-3 py-2 border rounded"
                    onClick={(e)=> setShippingInfo({...shippingInfo, zip: e.target.value})}
                    {...register("zip", validationSchema.zipValidator)}/>

                
                </div>
              </div>

              {/* Payment Method */}
              <div
                className="flex items-center justify-between cursor-pointer mt-4"
                onClick={() => setPaymentToggle(!paymentToggle)}
              >
                <h3 className="text-lg font-semibold">Payment Method</h3>
                {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="block text-gray-700 ml-2">
                    Cash on Delivery
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className="block text-gray-700 ml-2">Debit Card</label>
                </div>

                {paymentMethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Debit Card Information
                    </h3>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Card Number"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter card holder name"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div className="flex justify-between mb-4">
                      <div className="w-1/2 mr-2">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Expire Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="border p-2 w-full rounded"
                          required
                        />
                      </div>
                      <div className="w-1/2 ml-2">
                        <label className="block text-gray-700 font-semibold mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="CVV"
                          className="border p-2 w-full rounded"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.products.map((product, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{product.name}</h4>
                    <p>
                    ₹{product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between text-lg font-semibold">
              <span>Total Price:</span>
              <span>₹{cart.totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
          >
              Place Order
            </button>
          </div>
        </div>
        </form>

      </div>
    </>
  );
};

export default Checkout;
