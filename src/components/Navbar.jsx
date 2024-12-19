// this is the comment added to check for git hub pushed code time : 8.44am, date : 19-12-2024

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-6 py-2 shadow-lg z-50 rounded-">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <div className="text-xl font-bold tracking-wider">Printing Press</div>
//         <div className="space-x-6">
//           <Link
//             to="/"
//             className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
//           >
//             Home
//           </Link>
//           <Link
//             to="/printing"
//             className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
//           >
//             Printing
//           </Link>
//           <Link
//             to="/multicolor"
//             className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
//           >
//             Multicolor
//           </Link>
//           <Link
//             to="/admin"
//             className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
//           >
//             Admin Panel
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Adding lucide icons for mobile menu

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Add scroll effect to navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white shadow-md py-3"
//           : "bg-white/80 backdrop-blur-sm py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         {/* Logo with Subtle Animation */}
//         <div className="text-3xl font-bold text-gray-800">
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div
//               className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
//               group-hover:animate-pulse transition-all duration-300"
//             ></div>
//             <span className="tracking-tight group-hover:text-blue-600 transition-colors">
//               Printing<span className="text-blue-500">Press</span>
//             </span>
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-8 text-lg font-medium">
//           {[
//             { to: "/", label: "Home" },
//             { to: "/printing", label: "Printing" },
//             { to: "/multicolor", label: "Multicolor" },
//             { to: "/admin", label: "Admin Panel" },
//           ].map(({ to, label }) => (
//             <Link
//               key={to}
//               to={to}
//               className="text-gray-600 relative
//                 before:absolute before:bottom-0 before:left-0
//                 before:w-0 before:h-0.5 before:bg-blue-500
//                 before:transition-all before:duration-300
//                 hover:before:w-full
//                 hover:text-blue-500
//                 transition-colors"
//             >
//               {label}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-gray-800 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle Mobile Menu"
//         >
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu with Slide Animation */}
//       <div
//         className={`md:hidden fixed inset-x-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
//           isMenuOpen
//             ? "translate-y-0 top-16 opacity-100"
//             : "-translate-y-full opacity-0"
//         }`}
//       >
//         {[
//           { to: "/", label: "Home" },
//           { to: "/printing", label: "Printing" },
//           { to: "/multicolor", label: "Multicolor" },
//           { to: "/admin", label: "Admin Panel" },
//         ].map(({ to, label }) => (
//           <Link
//             key={to}
//             to={to}
//             className="block py-3 px-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {label}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Add scroll effect to navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
//       ${isScrolled ? "py-3 shadow-2xl" : "py-4"}
//       rounded-b-[40px] overflow-hidden`}
//     >
//       {/* Subtle Animated Background */}
//       <div
//         className="absolute inset-0 bg-white/90 backdrop-blur-sm
//       opacity-90 transition-all duration-500 ease-in-out"
//       >
//         {/* Animated Gradient Overlay */}
//         <div
//           className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30
//         animate-gradient-x opacity-50"
//         ></div>
//       </div>

//       {/* Navbar Content */}
//       <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center">
//         {/* Logo with Enhanced Animation */}
//         <div className="text-3xl font-bold text-gray-800">
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div
//               className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
//             group-hover:scale-110 group-hover:rotate-6
//             transition-all duration-500 ease-out
//             shadow-lg group-hover:shadow-xl"
//             />
//             <span
//               className="tracking-tight transition-all duration-500
//             group-hover:tracking-wider group-hover:text-blue-600"
//             >
//               Printing<span className="text-blue-500">Press</span>
//             </span>
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-8 text-lg font-medium">
//           {[
//             { to: "/", label: "Home" },
//             { to: "/printing", label: "Printing" },
//             { to: "/multicolor", label: "Multicolor" },
//             { to: "/admin", label: "Admin Panel" },
//           ].map(({ to, label }) => (
//             <Link key={to} to={to} className="text-gray-600 relative group">
//               {label}
//               <span
//                 className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500
//               transition-all duration-500 group-hover:w-full"
//               />
//               <div
//                 className="absolute bottom-0 left-0 h-0.5 bg-blue-500
//               transform origin-left scale-x-0 group-hover:scale-x-100
//               transition-transform duration-500"
//               />
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-gray-800 focus:outline-none group"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle Mobile Menu"
//         >
//           {isMenuOpen ? (
//             <X
//               size={28}
//               className="group-hover:rotate-180 transition-transform duration-500"
//             />
//           ) : (
//             <Menu
//               size={28}
//               className="group-hover:scale-110 transition-transform duration-500"
//             />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu with Enhanced Animation */}
//       <div
//         className={`md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-sm shadow-2xl
//       transition-all duration-500 ease-in-out transform
//       rounded-b-[40px] overflow-hidden ${
//         isMenuOpen
//           ? "translate-y-0 top-16 opacity-100"
//           : "-translate-y-full opacity-0"
//       }`}
//       >
//         {[
//           { to: "/", label: "Home" },
//           { to: "/printing", label: "Printing" },
//           { to: "/multicolor", label: "Multicolor" },
//           { to: "/admin", label: "Admin Panel" },
//         ].map(({ to, label }) => (
//           <Link
//             key={to}
//             to={to}
//             className="block py-3 px-6 text-gray-600
//           hover:bg-blue-50 hover:text-blue-600
//           transition-all duration-300
//           group relative"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {label}
//             <span
//               className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500
//             transition-all duration-500 group-hover:w-full"
//             />
//           </Link>
//         ))}
//       </div>

//       {/* Decorative Line */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-1
//       bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
//       opacity-50"
//       />
//     </nav>
//   );
// };

// export default Navbar;

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
