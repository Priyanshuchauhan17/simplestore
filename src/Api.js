import axios from 'axios';
const API_URL = 'https://fakestoreapi.com';
const fetchProducts = async (page = 1, limit = 20) => {
  try {
    const skip = (page - 1) * limit;
    const response = await axios(`${API_URL}/products`);
    const allProducts = response.data;
    const paginated = allProducts.slice(skip, skip + limit);
    return paginated;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Signup 
export async function signupUser(userData) {
  const res = await axios.post("https://fakestoreapi.com/users", userData);
  return res.data;
}

// Login API

// Login API
export async function loginUser(userData) {
  const res = await axios.post("https://fakestoreapi.com/auth/login", userData);
  return res.data;
}

export { fetchProducts };
