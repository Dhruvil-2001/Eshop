/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forgot() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex((user) => user.email === email);
    
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Password updated successfully ✅");
      navigate("/");
    } else {
      alert("Email not found ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full px-3 py-2 border mb-2"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          className="w-full bg-green-600 text-white py-2"
          onClick={handleForgotPassword}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default Forgot;
