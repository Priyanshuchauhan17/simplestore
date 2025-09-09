import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-purple-300">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            SimpleStore
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mb-6">
            Discover the latest trends in fashion, electronics, and more.
            Shop your favorite products at the best prices with fast delivery.
          </p>

          <Link
            to="/products"
            className="text-white bg-purple-500 hover:bg-purple-400 focus:ring-4 focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <img
          src="/first.png"
          alt="store"
          className="w-full max-w-sm md:max-h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default MainPage;
