import { Outlet, Route, Routes } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AddProduct from "../adminpanel/AddProduct";
function AdminLayout() {
  return (
    <div className="flex">  
     <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AdminLayout;