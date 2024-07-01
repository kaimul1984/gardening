import React from "react";
import { Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar/Navbar";
import "./app.scss";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Projects from './pages/Projects/Projects';
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
