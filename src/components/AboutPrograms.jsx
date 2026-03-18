import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GiBabyBottle,
  GiBookshelf,
  GiPencilRuler,
  GiGraduateCap,
} from "react-icons/gi";
import { FaBaby } from "react-icons/fa";

const programs = [
  {
    color: "from-[#FF9A8B] to-[#FF6B6B]",
    icon: <GiBabyBottle className="text-6xl text-white" />,
    title: "Play Group",
    age: "1.5 - 2 Years",
    text: "Activity learning, music & movement, sensory play",
  },
  {
    color: "from-[#A8E6CF] to-[#3BB08B]",
    icon: <FaBaby className="text-6xl text-white" />,
    title: "Toddler",
    age: "2 - 3 Years",
    text: "Social Development, Motor Skills, Creative Expression",
  },
  {
    color: "from-[#FFD3B5] to-[#FF8C42]",
    icon: <GiBookshelf className="text-6xl text-white" />,
    title: "Nursery",
    age: "3 – 4 Years",
    text: "Language development, storytelling, creative art & craft",
  },
  {
    color: "from-[#B5C9FF] to-[#4A6FA5]",
    icon: <GiPencilRuler className="text-6xl text-white" />,
    title: "LKG/UKG",
    age: "4 - 6 Years",
    text: "Pre-reading & writing skills, numbers, confidence building.",
  },
  {
    color: "from-[#FFB6C1] to-[#FF69B4]",
    icon: <GiGraduateCap className="text-6xl text-white" />,
    title: "Daycare Facility",
    age: "5 - 6 Years",
    text: "Flexible times, Hygienic meals & nap time indoor & outdoor activities.",
  },
];

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const AboutPrograms = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FF] via-[#FFF0F5] to-[#F0F7FF] overflow-hidden relative">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF9A8B]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4A6FA5]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        <motion.h2
          className="text-[#2C3E50] font-extrabold text-4xl sm:text-5xl mb-3 relative inline-block"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp(0)}
          viewport={{ once: true }}
        >
          Our Programs
          <motion.div 
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9A8B] via-[#4A6FA5] to-[#FFB6C1] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.h2>
        
        <motion.p
          className="text-[#4A5568] mb-14 text-base sm:text-lg font-medium max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp(0.1)}
          viewport={{ once: true }}
        >
          Discover our nurturing and creative learning programs designed for every stage of early childhood.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {programs.map((prog, idx) => {
            const sectionId = prog.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <motion.div
                key={prog.title}
                className="relative w-full bg-white/90 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group border border-white/50 cursor-pointer"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp(idx * 0.15)}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* 3D Tilt Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transform: "perspective(1000px)" }}
                />
                
                {/* Animated Border Gradient */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(45deg, #FF9A8B, #4A6FA5, #FFB6C1)",
                    padding: "2px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                
                {/* Icon container with 3D Flip Effect */}
                <motion.div
                  className={`w-28 h-28 mb-6 flex items-center justify-center rounded-3xl bg-gradient-to-br ${prog.color} shadow-xl relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.2,
                    rotateY: 180,
                    rotateX: 10,
                    transition: { duration: 0.6, type: "spring", stiffness: 200 }
                  }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    initial={{ x: "-100%", skewX: "-20deg" }}
                    whileHover={{ x: "200%", skewX: "-20deg" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  
                  {/* Icon with bounce on hover */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {prog.icon}
                  </motion.div>

                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{ 
                          x: "50%", 
                          y: "50%",
                          opacity: 0,
                          scale: 0
                        }}
                        whileHover={{ 
                          x: ["50%", `${20 + i * 30}%`],
                          y: ["50%", `${10 + i * 20}%`],
                          opacity: [0, 1, 0],
                          scale: [0, 2, 0]
                        }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                {/* Title with underline animation */}
                <motion.h3 
                  className="text-2xl font-extrabold text-[#2C3E50] mb-1 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {prog.title}
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF9A8B] to-[#4A6FA5]"
                    initial={{ width: 0, left: "50%" }}
                    whileHover={{ width: "100%", left: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h3>

                {/* Age badge with pulse effect */}
                <motion.p 
                  className="text-sm font-bold text-[#FF6B6B] mb-5 bg-[#FF6B6B]/10 px-4 py-1 rounded-full"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "#FF6B6B",
                    color: "white",
                    transition: { duration: 0.2 }
                  }}
                >
                  {prog.age}
                </motion.p>

                {/* Description with slide up effect */}
                <motion.p 
                  className="text-[#4A5568] text-base leading-relaxed mb-7 font-medium"
                  whileHover={{ y: -5 }}
                >
                  {prog.text}
                </motion.p>

                {/* Button with multiple effects */}
                <Link to={`/programs#${sectionId}`} className="mt-auto w-full">
                  <motion.button
                    className="relative w-full px-6 py-3.5 bg-gradient-to-r from-[#2C3E50] to-[#4A6FA5] text-white font-semibold text-base rounded-xl shadow-md overflow-hidden group/btn"
                    whileHover={{ 
                      scale: 1.08,
                      y: -5,
                      boxShadow: "0 20px 30px -10px rgba(74, 111, 165, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button text with icon */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Explore Program
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </motion.svg>
                    </span>
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    {/* Ripple effect on hover */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ 
                        scale: 2,
                        opacity: [0, 0.2, 0],
                      }}
                      transition={{ duration: 0.8 }}
                      style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </motion.button>
                </Link>

                {/* Floating particles on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#FF9A8B] to-transparent rounded-full blur-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: 0.6, 
                    scale: 1.5,
                    x: [0, -10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-[#4A6FA5] to-transparent rounded-full blur-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: 0.6, 
                    scale: 1.5,
                    x: [0, 10, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Confetti effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: i % 2 === 0 ? "#FF9A8B" : "#4A6FA5",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, (i % 2 === 0 ? 15 : -15), 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPrograms;