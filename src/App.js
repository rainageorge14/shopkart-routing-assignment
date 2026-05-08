import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// TODO: Import About
// TODO: Import Contact
// TODO: Import React Router
import { BrowserRouter, Route,Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      
      
      {/* TODO: Implement Routing Here */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  
    </div>
    
  );
}

export default App;
