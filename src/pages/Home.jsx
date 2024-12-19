import React from "react";
import { motion } from "framer-motion";
import {
  Printer,
  Calculator,
  PenTool,
  Clock,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#a8a29e 3%, transparent 3%)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 top-10 grid lg:grid-cols-2 md:grid-cols-1 gap-12 items-center max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Content Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Animated Title */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Calculate Printing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                with ease
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-sm sm:text-lg text-stone-600 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Streamline your printing workflow with intelligent cost
              estimation in just minutes.
            </motion.p>
          </motion.div>

          {/* Action Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 
              text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
              group font-semibold text-base"
            >
              Get Started Now
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-1 md:grid-cols-2"
          >
            {[
              {
                icon: Printer,
                title: "Calculate Printing",
                description: "Advanced calculations for print accuracy",
              },
              {
                icon: Calculator,
                title: "Smart Estimates",
                description: "Real-time pricing and cost analysis",
              },
              {
                icon: PenTool,
                title: "Quick MultiColor Estimation",
                description: "Quick and ease of use",
              },
              {
                icon: Clock,
                title: "Efficient Calculation",
                description: "Efficiency at every print stage",
              },
            ].map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 
                  shadow-md hover:shadow-lg transition-all duration-300 
                  flex items-center space-x-4 group"
              >
                <div
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                    text-white p-3 rounded-xl group-hover:scale-105 transition-transform"
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 text-base">
                    {title}
                  </h3>
                  <p className="text-xs text-stone-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Illustration Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="hidden lg:block relative"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 
            rounded-2xl -rotate-6 opacity-50 blur-2xl"
          />
          <div
            className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 
            transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 300"
              className="w-full h-auto"
            >
              {/* <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                fill="none"
                stroke="url(#gradientStroke)"
                strokeWidth="3"
                d="M50 150 Q200 50 350 150 T650 150"
              /> */}
              <defs>
                <linearGradient id="gradientStroke">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="50%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#db2777" />
                </linearGradient>
              </defs>
              <motion.circle
                cx="200"
                cy="150"
                r="20"
                fill="#2563eb"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
              {/* <motion.rect
                x="250"
                y="100"
                width="50"
                height="100"
                fill="#7c3aed"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              /> */}
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Animations */}
      <motion.div
        className="absolute w-48 h-48 bg-blue-100 rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />

      <motion.div
        className="absolute w-48 h-48 bg-purple-100 rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 25, 0],
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
