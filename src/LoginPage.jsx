import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authUser } from "./Api";
import { toast, ToastContainer } from "react-toastify";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await authUser(data, "login");
      console.log("Login response:", res);

      if (res && res.success) {
        const userData = { role: res.role };
        localStorage.setItem("authToken", res.token);
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success("Login successful!");

        // Role-based navigation (can expand later if needed)
        navigate("/main");
      } else {
        toast.error(res?.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Server error, please try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 sm:p-8 shadow-lg rounded-2xl"
      >
        <fieldset className="space-y-5">
          <legend className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4 text-center">
            Login
          </legend>

          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: "Username required" })}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password required" })}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-purple-600 font-medium cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        </fieldset>
      </form>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
