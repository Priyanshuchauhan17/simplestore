import React, { useState, useEffect, useMemo } from "react";
import { fetchProducts } from "./Api";
export default function ProductsPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const [loading,setloading] = useState(true)
  const limit = 8;
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      finally{
        setloading(false)
      }
    };
    loadProducts();
  }, []);

  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))).sort(),
  ];

  const filtered = useMemo(() => {
    return products
      .filter((p) => (category === "all" ? true : p.category === category))
      .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
  }, [products, category, query]);

  const paginated = useMemo(() => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return filtered.slice(start, end);
  }, [page, filtered]);
  if (loading) {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p>Loading...........</p>
    </div>
  );
}

  const totalPages = Math.ceil(filtered.length / limit);
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
  <input
    value={query}
    onChange={(e) => {
      setQuery(e.target.value);
      setPage(1);
    }}
    placeholder="Search products..."
    className="px-3 py-2 border rounded-md flex-1"
  />
  <select
    value={category}
    onChange={(e) => {
      setCategory(e.target.value);
      setPage(1);
    }}
    className="px-3 py-2 border rounded-md bg-white sm:w-48"
  >
    {categories.map((c) => (
      <option key={c} value={c}>
        {c}
      </option>
    ))}
  </select>
</div>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginated.map((p) => (
          <article
            key={p.id}
            className="bg-purple-200 rounded-xl shadow p-4 flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center p-4">
              <img
                src={p.image}
                alt={p.title}
                className="max-h-36 object-contain"
              />
            </div>
            <h3 className="mt-4 font-medium text-sm line-clamp-2">
              {p.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{p.category}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-lg font-semibold">
                ₹{(p.price * 83).toFixed(0)}
              </div>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 border rounded-md text-sm cursor-pointer"
                  onClick={() => setSelected(p)}
                >
                  View
                </button>
                <button
                  className="px-3 py-1 bg-purple-400 text-white rounded-md text-sm cursor-pointer"
                  onClick={() => addToCart(p)}
                >
                  Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
        >
          Prev
        </button>
        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>

      {/* Product Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6">
            <div className="flex items-start gap-6">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-40 h-40 object-contain"
              />
              <div className="flex-1">
                <h4 className="text-xl font-semibold">{selected.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{selected.category}</p>
                <p className="mt-3 text-gray-700">{selected.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-2xl font-bold">
                    ₹{(selected.price * 83).toFixed(0)}
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 border rounded"
                      onClick={() => setSelected(null)}
                    >
                      Close
                    </button>
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded"
                      onClick={() => {
                        addToCart(selected);
                        setSelected(null);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );

}
