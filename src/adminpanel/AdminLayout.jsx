import { Outlet } from "react-router-dom";
 
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
 
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