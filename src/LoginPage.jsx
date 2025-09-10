import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authUser } from "./Api";
import { toast, ToastContainer } from "react-toastify";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await authUser((data),"login");   
      console.log("Login response:", res);
if (res && res.success) {
  const userData = { role: res.role };
  localStorage.setItem("authToken", res.token);
  localStorage.setItem("user", JSON.stringify(userData));
  toast.success("Login successful!");
  if (res.role === "admin") {
    navigate("/main");
  } else {
    navigate("/main");
  }
} else {
  toast.error(res?.message || "Login failed");
}

    } catch (err) {
      console.error("Login error:", err);
      toast.error("Server error, please try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full bg-white p-6 shadow-lg rounded-2xl"
      >
        <fieldset className="space-y-4">
          <legend className="text-2xl font-semibold text-gray-700 mb-4">
            Login
          </legend>

        
          <div>
            <label className="block text-sm">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username required" })}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password required" })}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg cursor-pointer"
          >
            Login
          </button>
        </fieldset>
      </form>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
