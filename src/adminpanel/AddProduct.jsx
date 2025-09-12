import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { postProduct } from "../Api";

function AddProduct() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  // console.log(formData);
  
  function handNewreset(e){
         setFormData("")
  }
  
  const handleSubmit = async (e) => {
  e.preventDefault();
    setFormData("")
  try {
    const payload = {
      title: formData.title,
      price: parseFloat(formData.price),
      description: formData.description,
      category: formData.category,
      image: formData.image,
    };
    // console.log(payload);
    
    const token = localStorage.getItem("authToken"); // store token at login
    const result = await postProduct(payload, token);

    console.log("Product saved:", result);
      toast.success("Product saved ✅");
  } catch (error) {
    console.error("Error saving product:", error);
    toast.error("❌ Failed to save product.");
  }
}
  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Add / Edit Product
        </h3>

        <form className="space-y-5" onSubmit={handleSubmit} onReset={() => setFormData({
          id: "",
          title: "",
          price: "",
          description: "",
          category: "",
          image: "",
        })}>
          {/* ID */}
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
              ID
            </label>  
            <input
              type="number"
              id="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Enter product ID"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              id="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter product description"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Image */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

      
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition"
            >
              Save
            </button>
            <button
            onClick={handNewreset}
              type="reset"
              className="px-4 py-2 bg-gray-300 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-400 transition"
            >
              
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddProduct;
