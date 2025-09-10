import { Navigate, Outlet } from "react-router-dom";

export default function Protected({ role }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/loginpage" replace />;
  }

  // If role is 'admin', only allow admin
  if (role === "admin" && user.role !== "admin") {
    return <Navigate to="/main" replace />;
  }

  // If role is 'user', allow both user and admin
  if (role === "user" && user.role !== "user" && user.role !== "admin") {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
}
