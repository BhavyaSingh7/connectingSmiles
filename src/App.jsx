import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import DanaMojo from "./components/DanaMojo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/connectingSmiles" element={<Home />} />       {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/donateNow" element={<DanaMojo />}  /> {/* donation page */}
      </Routes>
    </Router>
  );
};

export default App;
