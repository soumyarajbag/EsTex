import React from "react";
import Header from "../common/Header";
import Footer from "../common/footer/Footer";
import Home from "../home/Home";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Contact from "../contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Pages = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/pricing" element={<Pricing />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Pages;
