import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 8%, transparent 8%)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Animated Welcome Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-xl shadow-2xl max-w-2xl w-full"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="text-6xl font-light tracking-tight text-stone-800 mb-6"
        >
          Welcome to
          <br />
          <span className="font-bold">Printing Press Calculator</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="text-xl text-stone-600 max-w-xl mx-auto"
        >
          Simplify your printing calculations with precision and ease
        </motion.p>
      </motion.div>

      {/* Subtle Background Animations */}
      <motion.div
        className="absolute w-64 h-64 bg-stone-300 rounded-full opacity-10 blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />

      <motion.div
        className="absolute w-48 h-48 bg-stone-400 rounded-full opacity-10 blur-2xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 25, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "15%", right: "10%" }}
      />
    </div>
  );
};

export default Home;
