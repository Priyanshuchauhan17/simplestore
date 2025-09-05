import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Proteced = () => {
  const isAuth = localStorage.getItem("authToken");
    
  return isAuth ? <Outlet /> : <Navigate to="/loginpage" />;
};
export default Proteced;
