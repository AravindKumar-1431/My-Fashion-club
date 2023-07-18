import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Cart from "./routes/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/ccart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
