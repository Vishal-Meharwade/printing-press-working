import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/printing", label: "Printing" },
    { to: "/multicolor", label: "Multicolor" },
    { to: "/admin", label: "Admin Panel" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? "py-3 shadow-xl" : "py-4"}
        bg-white/90 backdrop-blur-md`}
    >
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-100/30 via-purple-100/30 to-pink-100/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.div
            className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            whileHover={{
              scale: 1.1,
              rotate: 15,
              transition: { duration: 0.3 },
            }}
          />
          <span className="text-2xl font-bold">
            <span className="text-indigo-600">Printing</span>
            <span className="text-pink-500">Press</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ to, label }) => (
            <motion.div
              key={to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={to}
                className="text-gray-700 hover:text-indigo-600 
                  relative group font-medium transition-colors"
              >
                {label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 
                  bg-gradient-to-r from-indigo-500 to-pink-500 
                  group-hover:w-full transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: 0 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                exit={{ scale: 1 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden absolute inset-x-0 top-full bg-white/95 backdrop-blur-md shadow-xl"
          >
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block px-6 py-4 border-b border-gray-100 
                  hover:bg-indigo-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gradient Underline */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        opacity-70"
      />
    </nav>
  );
};

export default Navbar;
