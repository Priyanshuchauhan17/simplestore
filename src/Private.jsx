import MainPage from "./MainPage";
import ProductsPage from "./ProductsPage";
import Protected from "./Protected";
import React from 'react'
import { Routes, Route } from "react-router-dom";
const Private = () => {
  return (
    <Routes>
      <Route element={<Protected />}>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  )
}
export default Private
