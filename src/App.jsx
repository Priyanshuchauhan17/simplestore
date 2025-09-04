import React, { useState } from "react";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ProductsPage from "./ProductsPage";
import Proteced from "./Proteced";
import Header from "./Header";
import AdminLayout from "./adminpanel/AdminLayout";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";
import Signup from "./signup";
import CartPage from "./CartPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
 
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

  //Public Routes
  const publicRoutes = [
    { path: "/",
       element: <Signup
        /> },

    { path: "/loginpage",
       element: <LoginPage 
       /> },
    { 
      path: "*",
       element: <NotFound 

       /> },
  ];

  // Protected Routes
  const protectedRoutes = [
    { path: "/main", element: <MainPage /> },
    { path: "/products",
       element: <ProductsPage cart={cart} 
       addToCart={addToCart} /> },
    {
      path: "/cart",
      element: (
        <CartPage
          cart={cart}
          changeQty={changeQty}
          removeFromCart={removeFromCart}
        />
      ),
    },
    {
      path:"/adminpage",
      element:<AdminLayout />
    }
  ];
  return (
    
    <>
      <Header cart={cart} />
  <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        <Route element={<Proteced />}>
          {protectedRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
            
      </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
