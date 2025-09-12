import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authUser } from "./Api";
import { toast } from "react-toastify";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await authUser(data, "signup");
      if (res.success) {
        toast.success("Signup successful!");
        navigate("/loginpage");
      } else {
        toast.error(res.message || "Signup failed");
      }
    } catch (err) {
      toast.error("Server error");
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
            Create Account
          </legend>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              {...register("username", {
                required: "Username required",
                minLength: { value: 3, message: "Min 3 chars" },
              })}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password required",
                minLength: { value: 5, message: "Min 5 chars" },
              })}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
          >
            Sign Up
          </button>

          {/* Extra link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/loginpage")}
              className="text-purple-600 font-medium cursor-pointer hover:underline"
            >
              Log in
            </span>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
