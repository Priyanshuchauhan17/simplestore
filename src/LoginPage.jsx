import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "./Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const navigate = useNavigate();
const onSubmit = async (data) => {
  try {
    const res = await loginUser(data);
    if (res.success) {
      // Save token to localStorage
      localStorage.setItem("authToken", res.token); // Make sure your backend returns a token
      toast.success(res.message);
      navigate("/main"); 
    } else {
      toast.error(res.message);
    }
  } catch (err) {
    toast.error("Server error");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full bg-white p-6 shadow-lg rounded-2xl"
      >
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <input
          type="text"
          {...register("username", { required: "Username required" })}
          placeholder="Username"
          className="w-full mb-3 px-3 py-2 border rounded-lg"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

        <input
          type="password"
          {...register("password", { required: "Password required" })}
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 border rounded-lg"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-lg cursor-pointer"
          
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
