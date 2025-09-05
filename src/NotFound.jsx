import React from "react";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis
        corrupti quod quas vel eveniet sunt esse harum laboriosam! Odit eum,
        natus est quidem a veniam eveniet. Optio, libero hic?
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
};
export default NotFound;
