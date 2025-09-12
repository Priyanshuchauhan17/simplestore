import React, { useState, useEffect } from "react";
import { fetchProducts } from "../Api";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setloading(false);
      }
    };

    loadProducts();
  }, []);

  const handleDelet = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 flex-col">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        📊 Dashboard / Products
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3">
        <h2 className="text-lg md:text-xl font-bold">Product List</h2>
        <Link
          to="/adminpage/addproduct"
          className="px-3 md:px-4 py-2 text-white rounded-lg shadow hover:opacity-90 transition text-sm md:text-base text-center"
          style={{ backgroundColor: "#C16FFC" }}
        >
          ➕ Add New Product
        </Link>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200 shadow-md rounded-lg text-xs sm:text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 md:px-4 py-2 text-left font-semibold text-gray-700">ID</th>
              <th className="px-2 md:px-4 py-2 text-left font-semibold text-gray-700">Title</th>
              <th className="px-2 md:px-4 py-2 text-left font-semibold text-gray-700">Price (INR)</th>
              <th className="hidden md:table-cell px-2 md:px-4 py-2 text-left font-semibold text-gray-700">Description</th>
              <th className="hidden lg:table-cell px-2 md:px-4 py-2 text-left font-semibold text-gray-700">Category</th>
              <th className="px-2 md:px-4 py-2 text-left font-semibold text-gray-700">Image</th>
              <th className="px-2 md:px-4 py-2 text-left font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-2 md:px-4 py-3 text-gray-900">{item.id}</td>
                <td className="px-2 md:px-4 py-3 text-gray-900 truncate max-w-[120px] md:max-w-[200px]">{item.title}</td>
                <td className="px-2 md:px-4 py-3 text-gray-900">{(item.price * 83).toFixed(2)}</td>
                <td className="hidden md:table-cell px-2 md:px-4 py-3 text-gray-600 truncate max-w-[200px]">{item.description}</td>
                <td className="hidden lg:table-cell px-2 md:px-4 py-3 text-gray-900">{item.category}</td>
                <td className="px-2 md:px-4 py-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 md:w-12 md:h-12 rounded object-cover border"
                  />
                </td>
                <td className="px-2 md:px-4 py-3 flex flex-col sm:flex-row gap-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button
                    onClick={() => handleDelet(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
