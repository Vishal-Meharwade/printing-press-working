import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PrintingSection from "./sections/PrintingSection.jsx";
import MulticolorSection from "./sections/MulticolorSection.jsx";
import AdminPanel from "./admin/AdminPanel.jsx";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/printing" element={<PrintingSection />} />
            <Route path="/multicolor" element={<MulticolorSection />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
