import React, { useState, useEffect } from "react";
import { fetchProducts } from "../Api";
import { Link } from "react-router-dom";
const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(); 
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);

  return (

    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Dashboard / Products</h1>
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between mb-6">
  <h2 className="text-xl font-bold">Product List</h2>
 <Link
  to="/adminpage/addproduct"
  className="px-4 py-2 text-white rounded-lg shadow hover:opacity-90 transition"
  style={{ backgroundColor: "#C16FFC" }}
>
  ➕ Add New Product
</Link>

</div>

        <table className="min-w-full border border-gray-300 divide-y divide-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Title</th>

                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price (INR)</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                                           <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{item.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.title}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{(item.price*83).toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-gray-600 truncate max-w-xs">
                  {item.description}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.category}</td>
                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded object-cover border"
                  />
                </td>
                {/* <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:underline mr-3">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td> */}
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
