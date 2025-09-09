import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signupUser } from "./Api";
import { toast } from "react-toastify";

const Signup = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const navigate = useNavigate();  

  const onSubmit = async (data) => {
    try {
      const res = await signupUser(data);
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full bg-white p-6 shadow-lg rounded-2xl"
      >
        <fieldset className="space-y-4">
          <legend className="text-2xl font-semibold text-gray-700 mb-4">
            Signup
          </legend>

          <div>
            <label className="block text-sm">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username required", minLength: { value: 3, message: "Min 3 chars" } })}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              placeholder="Enter username"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password required", minLength: { value: 5, message: "Min 5 chars" } })}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              placeholder="Enter password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg cursor-pointer"
          >
            Signup
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export default Signup;
