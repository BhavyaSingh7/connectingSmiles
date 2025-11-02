import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SkipLink from "./components/SkipLink";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import DanaMojo from "./components/DanaMojo";
import ContactPage from "./components/ContactPage";
import Locations from "./components/Locations";

const App = () => {
  return (
    <Router basename="/connectingSmiles">
      <SkipLink />
      <ScrollToTop />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />       {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/donateNow" element={<DanaMojo />}  /> {/* donation page */}
          <Route path="/contactus" element={<ContactPage />} /> {/* contact page */}
          <Route path="/locations" element={<Locations />} /> {/* locations page */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
