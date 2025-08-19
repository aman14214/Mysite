import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/TopBar";
import Header from "./components/Header";
import JobCareers from "./pages/JobCareers";
import ProductFinder from "./pages/ProductFinder";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Brochures from "./components/Brochure";
import Hero from "./components/Hero";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Footer from "./components/Footer";
import Seeds from "./context/Seeds";
import News from "./context/News";
import Innovation from "./context/Innovation";
import Contact from "./context/Contact";
import About from "./context/About";




function App() {
  return (
    <>
      {/* Always visible on top */}
      <Topbar />
      <Header />

      {/* Page content below */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Brochures />
              <Card2 />
              <Card3 />
              <Footer />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/job-careers" element={<JobCareers />} />
        <Route path="/product-finder" element={<ProductFinder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Seeds" element={<Seeds />} />
        <Route path="/News" element={<News />} />
        <Route path="/innovation" element={<Innovation />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
 <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </>
  );
}

export default App;
