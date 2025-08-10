import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import DanaMojo from "./components/DanaMojo";
import ContactPage from "./components/ContactPage";
import Locations from "./components/Locations";

const App = () => {
  return (
    <Router basename="/connectingSmiles">
      <Routes>
        <Route path="/" element={<Home />} />       {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/donateNow" element={<DanaMojo />}  /> {/* donation page */}
        <Route path="/contactus" element={<ContactPage />} /> {/* contact page */}
        <Route path="/locations" element={<Locations />} /> {/* locations page */}
      </Routes>
    </Router>
  );
};

export default App;
