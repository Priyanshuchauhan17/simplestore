import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const links = [
    { to: "/adminpage/dashboard", label: "📊 Product Table" }, 
    { to: "/adminpage/addproduct", label: "📦 Add Product" },
    { to: "/adminpage/users", label: "👥 Users" },
    { to: "/adminpage/profile", label: "📌 Profile" },
  ];

  
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-8 tracking-wide">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-gray-700 text-white font-semibold"
                  : "hover:bg-gray-800 hover:text-gray-300"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
