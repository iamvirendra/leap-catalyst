import React, { useEffect, useState } from "react";
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

function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      const newRoute = window.location.hash;
      setRoute(newRoute);

      // Scroll to top whenever route changes OR even if same route is clicked again
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Also handle clicks on same route (no hashchange event)
    const onLinkClick = (e) => {
      const href = e.target.closest("a")?.getAttribute("href");
      if (href && href.startsWith("#") && href === window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onLinkClick);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onLinkClick);
    };
  }, []);

 const getPage = () => {
    if (route.startsWith("#/blog/")) return <BlogDetail />;
    switch (route) {
      case "#/blog":
        return <BlogList />;
      case "#/apply":
        return <Apply />;
      case "#/contact":
        return <Contact />;
      case "#/faq":
        return <Faq />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {getPage()}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
