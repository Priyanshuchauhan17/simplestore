import { useState } from "react";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const links = [
    { to: "/adminpage/dashboard", label: "📊 Product Table" },
    { to: "/adminpage/addproduct", label: "📦 Add Product" },
    { to: "/adminpage/users", label: "👥 Users" },
    { to: "/adminpage/profile", label: "⚙️ Profile" },
  ];

  return (
    <aside
      className={`bg-[#0d1b2a] text-white min-h-screen p-3 transition-all duration-300
        ${isOpen ? "w-56" : "w-16"}`}
    >
      {/* Sidebar Header */}
      <h4 className="text-white mb-4">Admin Panel</h4>

      {/* Toggle Button (Admin Panel ke niche) */}
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 rounded-md p-2 cursor-pointer"
      > */}
        {/* Hamburger Icon */}
        {/* <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div> */}
      {/* </button> */}

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-2">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-purple-700 ${
                isActive ? "bg-purple-800" : ""
              }`
            }
          >
            {/* Agar sidebar open hai to pura text dikhao, warna sirf emoji */}
            {isOpen ? link.label : link.label.split(" ")[0]}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
