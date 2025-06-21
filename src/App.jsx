// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Home from "./components/Home"; // You'll create this now

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/connectingSmiles" element={<Home />} />       {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
      </Routes>
    </Router>
  );
};

export default App;
