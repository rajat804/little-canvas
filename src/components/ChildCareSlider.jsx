// ChildCareSlider.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBrain, FaBookOpen, FaSmile, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import PopupForm from "./PopupForm";

const BACKGROUND_IMAGE = assets.banner;

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
        className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-24 overflow-hidden mt-16"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Colorful Floating Blobs */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#FF6B6B] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#4ECDC4] rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#FFE66D] rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-40 right-40 w-36 h-36 bg-[#FF8C42] rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-40 left-20 w-48 h-48 bg-[#A06AB4] rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        {/* Content Wrapper with Brighter Background */}
        <div className="relative z-10 max-w-6xl mx-auto text-center w-full px-4">
          <div className="inline-block rounded-3xl px-6 sm:px-10 py-10 sm:py-14 bg-white/20 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-white/30">
            
            {/* Small Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#FF8C42] to-[#FF6B6B] text-white font-semibold rounded-full text-sm sm:text-base shadow-lg">
                ✨ Where Learning Feels Like Play ✨
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#2D4059] mb-6 leading-tight"
            >
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FF8C42] to-[#4ECDC4]">
                Golden Step
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#2D4059]">
                Preschool & Daycare
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-[#2D4059] mb-10 max-w-4xl mx-auto leading-relaxed font-medium bg-white/30 backdrop-blur-sm p-6 rounded-2xl"
            >
              <span className="block mb-2">🎨 Little hands. Bright beginnings. Big discoveries. 🎨</span>
              Through thoughtfully designed, activity-based learning, we nurture curious
              minds, confident hearts, and joyful learners—helping every child
              color their own story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/learning-process">
                <button className="px-8 py-4 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                  <span>🔬</span>
                  Discover Our Scientific Curriculum
                  <span>✨</span>
                </button>
              </Link>

              <button
                onClick={openPopup}
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>📝</span>
                Admission Enquiry
                <span>🎈</span>
              </button>
            </motion.div>

            {/* Features Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              {[
                { icon: "🧸", text: "Play-Based Learning" },
                { icon: "🎨", text: "Creative Arts" },
                { icon: "📚", text: "Early Literacy" },
                { icon: "🧮", text: "Math Skills" },
                { icon: "🌱", text: "Social Growth" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-[#2D4059] font-medium text-sm shadow-lg border border-white/40"
                >
                  {item.icon} {item.text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Fun Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-1/4 left-4 md:left-10 text-[#FF6B6B] text-5xl md:text-6xl opacity-80 drop-shadow-lg"
        >
          🧸
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ repeat: Infinity, duration: 5, delay: 1 }}
          className="absolute bottom-1/3 right-4 md:right-10 text-[#4ECDC4] text-5xl md:text-6xl opacity-80 drop-shadow-lg"
        >
          🎨
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ repeat: Infinity, duration: 6, delay: 2 }}
          className="absolute top-1/3 right-20 text-[#FFE66D] text-4xl md:text-5xl opacity-80 drop-shadow-lg"
        >
          ⭐
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, -20, 0],
            rotate: [0, 360, 360]
          }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute bottom-1/4 left-20 text-[#A06AB4] text-4xl md:text-5xl opacity-80 drop-shadow-lg"
        >
          🦄
        </motion.div>
      </section>

      {/* Popup */}
      {/* <PopupForm isOpen={isPopupOpen} onClose={closePopup} /> */}
    </>
  );
};

export default ChildCareSlider;