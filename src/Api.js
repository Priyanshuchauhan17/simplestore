import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";   a
const FAKE_API = "https://fakestoreapi.com";

// ✅ Fetch Products (Fake Store)
export const fetchProducts = async (page = 1, limit = 20) => {
  try {
    const skip = (page - 1) * limit;
    const response = await axios(`${FAKE_API}/products`);
    const allProducts = response.data;
    const paginated = allProducts.slice(skip, skip + limit);
    return paginated;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// ✅ Signup (MySQL via Node backend)
export async function signupUser(userData) {
  const res = await axios.post(`${API_URL}/signup`, userData);
  return res.data;
}

// ✅ Login (MySQL via Node backend)
export async function loginUser(userData) {
  const res = await axios.post(`${API_URL}/login`, userData);
  return res.data;
}

// ✅ Dynamic Post (if needed for other APIs)
export const Postdata = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
