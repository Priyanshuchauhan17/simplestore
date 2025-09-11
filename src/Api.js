import axios from "axios";

const AUTH_API = "http://localhost:5000/api/auth";   
const PRODUCTS_API = "http://localhost:5000/api/products";

// ✅ Fetch Products
export const fetchProducts = async (page = 1, limit = 20) => {
  try {
    const response = await axios.get(PRODUCTS_API);
    const allProducts = response.data;

    // pagination
    const skip = (page - 1) * limit;
    return allProducts.slice(skip, skip + limit);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// ✅ Signup/Login
export async function authUser(userData, type) {
  const res = await axios.post(`${AUTH_API}/${type}`, userData);
  return res.data;
}

// ✅ Dynamic Post to Auth (login/signup or other auth endpoints)
export const PostdataAuth = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${AUTH_API}/${endpoint}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error posting auth data:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Post Product (with optional token)
export const postProduct = async (payload, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.post(PRODUCTS_API, payload, { headers });
    return response.data;
  } catch (error) {
    console.error("Error posting product:", error.response?.data || error.message);
    throw error;
  }
};