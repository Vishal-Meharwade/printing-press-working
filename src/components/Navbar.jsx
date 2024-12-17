import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-6 py-2 shadow-lg z-50 rounded-">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">Printing Press</div>
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/printing"
            className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Printing
          </Link>
          <Link
            to="/multicolor"
            className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Multicolor
          </Link>
          <Link
            to="/admin"
            className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Admin Panel
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;