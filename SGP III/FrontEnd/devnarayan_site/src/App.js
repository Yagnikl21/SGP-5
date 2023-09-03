import React from "react";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Signup from "./Page/Login/Signup";
import Change from "./Page/Login/Change";
import { Route, Routes } from "react-router-dom";
import About from "./Page/About/About";
import Forgot from "./Page/Login/Forgot";
import Order from "./Page/Order/order";
import Products from "./Page/Products/Products";
import Error from "./Page/Error/error";
import PrivateRoutes from "./feature/PrivateRoutes";
import Cart from './Components/Cart/cart';
import Changepassword from "./Page/Login/Change";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Forgot" element={<Forgot />} />
      <Route path="/changepassword" element={<Changepassword />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/order" element={<Order />} />
      </Route >
      <Route path="/cart" element={<Cart />} />
      <Route path="/Change" element={<Change />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
