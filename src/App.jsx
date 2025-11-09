import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Home";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import AboutUs from "./pages/AboutUs";
import Aarambh from "./pages/Aarambh";
import Aaroh from "./pages/Aaroh";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={window.location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/programs/aarambh" element={<Aarambh />} />
            <Route path="/programs/aaroh" element={<Aaroh />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
