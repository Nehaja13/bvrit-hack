import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import PlaceOrder from "./pages/PlaceOrder";
import Verify from "./pages/Verify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppDownload from "./components/AppDownload";
import ExploreMenu from "./components/ExploreMenu";
import FoodDisplay from "./components/FoodDisplay";
import FoodItem from "./components/FoodItem";
import VendorStore from "./components/VendorStore";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/explore-menu" element={<ExploreMenu />} />
        <Route path="/food-display" element={<FoodDisplay />} />
        <Route path="/food-item" element={<FoodItem />} />
        <Route path="/vendor-store" element={<VendorStore />} />
      </Routes>
      <AppDownload />
      <Footer />
    </Router>
  );
}

export default App;
