import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const links = [
    { to: "/admin/dashboard", label: "📊 Dashboard" },
    { to: "/admin/users", label: "👥 Users" },
    { to: "/admin/products", label: "📦 Products" },
    { to: "/admin/profile", label: "⚙️ Profile" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-8 tracking-wide">Admin Panel</h2>

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 rounded-lg transition-colors 
              ${
                location.pathname === link.to
                  ? "bg-gray-700 text-white font-semibold"
                  : "hover:bg-gray-800 hover:text-gray-300"
              }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
