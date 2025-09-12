import React, { useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Header({ cart = [] }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAuth = Boolean(localStorage.getItem("authToken"));

  const cartCount = useMemo(
    () => cart.reduce((s, i) => s + (i.qty || 0), 0),
    [cart]
  );

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const linkBase =
    "px-3 py-2 rounded-xl transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/60";
  const activeClass = "bg-white/30 text-white shadow-inner";
  const idleClass = "text-white/90";

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/loginpage");
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-purple-600/60 bg-purple-700/90 shadow-lg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lg sm:text-xl font-extrabold tracking-tight text-white"
          >
            <span className="inline-grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl bg-white/20">
              🛍️
            </span>
            <span>SimpleStore</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 text-sm sm:text-base">
            {!isAuth ? (
              <NavLink
                to="/loginpage"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : idleClass}`
                }
              >
                Login
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/main"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : idleClass}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/adminpage"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : idleClass}`
                  }
                >
                  Admin
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : idleClass}`
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive ? activeClass : idleClass
                    } relative inline-flex items-center gap-2`
                  }
                >
                  Cart
                  <span className="absolute -top-1 -right-2 min-w-[1.1rem] rounded-full bg-white text-purple-700 text-[10px] sm:text-xs font-bold px-1.5 py-0.5 text-center">
                    {cartCount}
                  </span>
                </NavLink>
                <button
                  onClick={logout}
                  className={`${linkBase} ${idleClass} !px-3 sm:!px-4 border border-white/30 hover:border-white/60`}
                >
                  Logout
                </button>
              </>
            )}
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {isAuth && (
              <Link
                to="/cart"
                aria-label="Open cart"
                className="relative rounded-xl p-2 text-white/90 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                🛒
                <span className="absolute -top-1 -right-1 rounded-full bg-white text-purple-700 text-[10px] font-bold px-1 py-0.5">
                  {cartCount}
                </span>
              </Link>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="rounded-xl p-2 text-white/90 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <svg
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sheet */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 pb-4 pt-2 grid gap-2 text-sm sm:text-base">
          {!isAuth ? (
            <Link
              to="/loginpage"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/20"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/main"
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-white/90 hover:bg-white/20 ${
                  location.pathname === "/main" ? "bg-white/20" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/adminpage"
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-white/90 hover:bg-white/20 ${
                  location.pathname === "/adminpage" ? "bg-white/20" : ""
                }`}
              >
                Admin
              </Link>
              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-white/90 hover:bg-white/20 ${
                  location.pathname.startsWith("/products") ? "bg-white/20" : ""
                }`}
              >
                Products
              </Link>
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-white/90 hover:bg-white/20 ${
                  location.pathname === "/cart" ? "bg-white/20" : ""
                }`}
              >
                Cart ({cartCount})
              </Link>
              <button
                onClick={() => {
                  setOpen(false);
                  logout();
                }}
                className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/20 text-left"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
