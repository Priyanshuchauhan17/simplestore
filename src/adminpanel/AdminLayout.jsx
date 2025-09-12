import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
function AdminLayout() {
  
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-64 bg-[#0d1b2a] text-white">
        <AdminSidebar />
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 blur-sm bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          />
          {/* Sidebar Panel */}
          <div className="relative w-64 bg-[#0d1b2a] text-white z-50">
            <AdminSidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 overflow-auto">
        
        {/* Mobile toggle button */}
        <button
          className="md:hidden mb-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰ Menu
        </button>

      

        <Outlet />
      </div>
      
    </div>
    
  );
}

export default AdminLayout;
