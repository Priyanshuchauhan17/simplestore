import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "./Api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await loginUser({
        username: data.username,  
        password: data.password,
      });
      console.log("Login success:", res);
      localStorage.setItem("authToken", res.token);
      navigate("/main"); 
    } catch (err) {
      console.error(err);
      alert("Invalid credentials! (Use FakeStore ke usernames)");
    }
//     const handleSignin = ()=>{
// navigate
//     }
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
          {...register("username", { required: true })}
          placeholder="Username"
          className="w-full mb-3 px-3 py-2 border rounded-lg"
        />

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-lg cursor-pointer"
        >
          Login
        </button>
        {/* <button onClick={handleSignin()}></button> */}
      </form>
    </div>
  );
};
export default LoginPage;
