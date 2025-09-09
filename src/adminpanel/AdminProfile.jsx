import React from "react";
import { Link } from "react-router-dom";
// import { loginUser } from "../Api";

function AdminProfile() {
  const user = {
    name: "Priyanshu",
    role: "Frontend Dev ",
    avatar: ""
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-purple-400 to-black h-45 rounded-3xl relative">
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          {user.avatar ? (
  <img
    src={user.avatar}
    alt="User Avatar"
    className="w-28 h-28 rounded-full border-4 border-white shadow-md mb-12"
  />
) : (
  <div className="w-28 h-28 rounded-full border-4 border-white shadow-md mb-12 bg-gray-200 flex items-center justify-center text-4xl">
    👤
  </div>
)}

          <h2 className="mt-2 text-xl font-semibold text-gray-800">
            {user.name}
          </h2>
          <p className="text-gray-500 text-sm">{user.role}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-20 w-full max-w-4xl px-6">
        {/* My Orders */}
        <h3 className="text-lg font-semibold text-gray-700 mb-4">My Orders</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <span className="text-3xl mb-2">💳</span>
            <span className="text-sm text-gray-700">Pending Payment</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <span className="text-3xl mb-2">📦</span>
            <span className="text-sm text-gray-700">Delivered</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <span className="text-3xl mb-2">🚚</span>
            <span className="text-sm text-gray-700">Processing</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <span className="text-3xl mb-2">❌</span>
            <span className="text-sm text-gray-700">Cancelled</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <span className="text-3xl mb-2">❤️</span>
            <span className="text-sm text-gray-700">Wishlist</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <span className="text-3xl mb-2">🎧</span>
            <span className="text-sm text-gray-700">Customer Care</span>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-8 bg-white rounded-xl shadow divide-y">
          <button className="flex items-center w-full px-4 py-3 hover:bg-gray-50">
            <span className="mr-3">✏️</span>
            <span className="text-gray-700">Edit Profile</span>
          </button>
          <button className="flex items-center w-full px-4 py-3 hover:bg-gray-50">
            <span className="mr-3">📍</span>
            <span className="text-gray-700">Shipping Address</span>
          </button>
        </div>

        {/* Logout */}
        <div className="mt-6 flex justify-center">
          <button className="flex items-center px-6 py-2 text-red-600 font-medium bg-red-50 rounded-lg hover:bg-red-100 transition">
            <span className="mr-2">🚪</span> Logout
          </button>
        </div>
      </div>
    </div>
  );
}






export default AdminProfile;
