import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ProductsPage from "./ProductsPage";
import Protected from "./Protected";
import Header from "./Header";
import AdminLayout from "./adminpanel/AdminLayout";
import LoginPage from "./LoginPage";
import AddProduct from "./adminpanel/AddProduct";
import ProductTable from "./adminpanel/ProductTable";
import NotFound from "./NotFound";
import Signup from "./signup";
import CartPage from "./CartPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        toast.info("Quantity increased!");
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      toast.success("Item added to cart!");
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((i) => i.id !== productId));
    toast.error("Item removed from cart!");
  }

  function changeQty(productId, delta) {
    setCart((prev) =>
      prev.map((i) =>
        i.id === productId ? { ...i, qty: Math.max(1, i.qty + delta) } : i
      )
    );
  }

  const publicRoutes = [
    { path: "/", element: <Signup /> },
    { path: "/loginpage", element: <LoginPage /> },
    { path: "*", element: <NotFound /> },
  ];

  return (
    <>
      <Header cart={cart} />
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        <Route element={<Protected />}>
          <Route path="/main" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductsPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                changeQty={changeQty}
                removeFromCart={removeFromCart}
              />
            }
          />

          {/* Admin Layout with nested routes */}
         <Route path="/adminpage" element={<AdminLayout />}>
  <Route path="dashboard" element={<ProductTable />} />   {/* 👈 Dashboard = Table */}
  <Route path="addproduct" element={<AddProduct />} />
</Route>
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
