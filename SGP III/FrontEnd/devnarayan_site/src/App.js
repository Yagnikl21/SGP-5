import React from "react";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Signup from "./Page/Login/Signup";
import { Route, Routes } from "react-router-dom";
import About from "./Page/About/About";
import Forgot from "./Page/Login/Forgot";
import Order from './Page/Order/order'
import Products from "./Page/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Forgot" element={<Forgot />} />
      <Route path="/orders" element={<Order/>} />
    </Routes>
  );
}

export default App;
