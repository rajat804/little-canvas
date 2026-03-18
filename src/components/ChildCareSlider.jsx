import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSmile, FaHeart, FaStar, FaChild, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import PopupForm from "./PopupForm";

const BACKGROUND_IMAGE = assets.heroInnerImage;

const ChildCareSlider = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-28 overflow-hidden mt-16"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-[10%] w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-[10%] w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, -20, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl"
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, -30, 30, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
            />
          ))}
        </div>

        {/* Content Wrapper */}
        <div className="relative z-20 max-w-6xl mx-auto text-center w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-block"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-white/20"
                />
                <span className="relative px-6 py-2.5 bg-white/10 backdrop-blur-md text-white text-sm font-medium tracking-[0.2em] rounded-full border border-white/30 inline-block shadow-2xl">
                  ✦ EST. 2010 ✦
                </span>
              </div>
            </motion.div>

            {/* Main Heading with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block"
                >
                  Where Little
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block"
                >
                  Minds{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 relative">
                    Grow Big
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-6 -right-8 text-3xl"
                    >
                      ✦
                    </motion.span>
                  </span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Description with Fade */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-12 drop-shadow-lg"
            >
              Where curiosity meets care, and every day brings new adventures in learning.
            </motion.p>

            {/* Buttons with Elegant Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center gap-5"
            >
              <Link to="/learning-process">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-white text-[#1E293B] font-semibold text-lg rounded-xl shadow-2xl overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Your child's journey
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </Link>

              <motion.button
                onClick={openPopup}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold text-lg rounded-xl overflow-hidden backdrop-blur-sm w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaHeart className="text-pink-300" />
                  Book a visit
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </motion.div>

            {/* Stats with Counter Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 mt-16"
            >
              {[
                { icon: <FaStar />, value: "15+", label: "Years" },
                { icon: <FaChild />, value: "500+", label: "Children" },
                { icon: <FaLeaf />, value: "1:8", label: "Ratio" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-2xl text-white/80 mb-2">{stat.icon}</div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={heroInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                    className="text-2xl font-bold text-white"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="rgba(255,255,255,0.1)"
              fillOpacity="0.2"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                values="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z;
                        M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,80C1120,75,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z;
                        M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default ChildCareSlider;