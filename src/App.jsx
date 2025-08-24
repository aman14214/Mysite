import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import JobCareers from "./pages/JobCareers";
import ProductFinder from "./pages/ProductFinder";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Seeds from "./context/Seeds";
import Innovation from "./context/Innovation";
import Contact from "./context/Contact";
import About from "./context/About";
import Production from "./components/Production";
import "./App.css";

function App() {
  return (
    <>
      {/* Always visible on top */}
      <Header />

      {/* Page content */}
      <Routes>
        {/* ✅ Only one Home route */}
        <Route path="/" element={<Home />} />

        <Route path="/job-careers" element={<JobCareers />} />
        <Route path="/product-finder" element={<ProductFinder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/product" element={<Production />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/production" element={<Production />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* ✅ Footer appears once for all pages */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
