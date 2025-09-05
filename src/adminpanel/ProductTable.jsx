import React from "react";
export default function ProductTable() {
  const data = [
    { id: 1, name: "iPhone 16", price: "$1200", stock: "Available" },
    { id: 2, name: "Samsung S24", price: "$999", stock: "Out of Stock" },
    { id: 3, name: "OnePlus 12", price: "$799", stock: "Available" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 divide-y divide-gray-200 shadow-lg rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Stock</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">{item.id}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{item.price}</td>
              <td
                className={`px-6 py-4 text-sm font-medium ${
                  item.stock === "Available" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
