/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Changeaddress({ setAddress, setIsModalopen }) {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    setIsModalopen(false); // Ensure modal closes first
    if (newAddress.trim()) {
      setAddress(newAddress);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Change Address</h2>
      <input
        type="text"
        placeholder="Enter new address"
        className="border border-gray-400 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end gap-2">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all"
          onClick={() => setIsModalopen(false)} // Close modal on cancel
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
}

export default Changeaddress;
