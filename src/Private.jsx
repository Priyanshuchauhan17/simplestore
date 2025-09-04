import MainPage from "./MainPage";
import ProductsPage from "./ProductsPage";
import Protected from "./Proteced"; 
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Private = () => {
  return (
    <div>
      <Route element={<Protected />}>
  <Route path="/mainpage" element={<MainPage />} />  
  <Route path="/products" element={<ProductsPage />} />
</Route>
    </div>
  )
}

export default Private
