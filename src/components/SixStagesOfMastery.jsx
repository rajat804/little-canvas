"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GiWorld,
  GiTeacher,
  GiMagnifyingGlass,
  GiLightBulb,
  GiCycle,
  GiTrophy,
  GiSparkles,
  GiStarSwirl,
  GiFlowerTwirl,
} from "react-icons/gi";
import { FaHeart, FaStar, FaSun, FaMoon, FaCloud, FaLeaf } from "react-icons/fa";
import assets from "../assets/assets";

const BACKGROUND_IMAGE = assets.learning2;

const stages = [
  {
    num: "01",
    title: "COMMUNICATION",
    desc: "Expressing thoughts and ideas clearly",
    fullDesc: "Children learn to express themselves with confidence and clarity",
    color: "from-blue-500 to-indigo-600",
    lightColor: "from-blue-400/30 to-indigo-400/30",
    icon: <GiWorld className="text-3xl" />,
    icon2: <FaSun className="text-yellow-300" />,
    position: 0,
  },
  {
    num: "02",
    title: "COMPASSION",
    desc: "Building empathy and kindness",
    fullDesc: "Understanding others and building meaningful relationships",
    color: "from-pink-500 to-rose-600",
    lightColor: "from-pink-400/30 to-rose-400/30",
    icon: <GiTeacher className="text-3xl" />,
    icon2: <FaHeart className="text-pink-300" />,
    position: 60,
  },
  {
    num: "03",
    title: "COLLABORATION",
    desc: "Working together and sharing",
    fullDesc: "Teamwork and cooperation through group activities",
    color: "from-emerald-500 to-teal-600",
    lightColor: "from-emerald-400/30 to-teal-400/30",
    icon: <GiMagnifyingGlass className="text-3xl" />,
    icon2: <FaLeaf className="text-green-300" />,
    position: 120,
  },
  {
    num: "04",
    title: "CREATIVITY",
    desc: "Imagination and self-expression",
    fullDesc: "Inspiring imagination through creative activities",
    color: "from-orange-500 to-amber-600",
    lightColor: "from-orange-400/30 to-amber-400/30",
    icon: <GiLightBulb className="text-3xl" />,
    icon2: <GiStarSwirl className="text-yellow-300" />,
    position: 180,
  },
  {
    num: "05",
    title: "CRITICAL THINKING",
    desc: "Problem-solving and decision making",
    fullDesc: "Developing analytical skills and thoughtful decisions",
    color: "from-purple-500 to-violet-600",
    lightColor: "from-purple-400/30 to-violet-400/30",
    icon: <GiCycle className="text-3xl" />,
    icon2: <GiFlowerTwirl className="text-purple-300" />,
    position: 240,
  },
  {
    num: "06",
    title: "CONFIDENCE",
    desc: "Self-belief through achievement",
    fullDesc: "Building self-esteem and independence",
    color: "from-indigo-500 to-blue-600",
    lightColor: "from-indigo-400/30 to-blue-400/30",
    icon: <GiTrophy className="text-3xl" />,
    icon2: <FaStar className="text-yellow-300" />,
    position: 300,
  },
];

const Card = ({ stage, angle, radius, isMobile, index, total }) => {
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);
  const [isHovered, setIsHovered] = useState(false);

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
        className={`w-full max-w-md mx-auto rounded-2xl p-6 bg-gradient-to-br ${stage.color} text-white shadow-xl relative overflow-hidden group cursor-pointer`}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 bg-white/10 rounded-full blur-xl"
              animate={{
                x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-4xl"
            >
              {stage.icon}
            </motion.div>
            <span className="text-2xl">{stage.icon2}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">{stage.title}</h3>
          <p className="text-sm opacity-90 mb-3">{stage.desc}</p>
          <p className="text-xs opacity-80 italic">{stage.fullDesc}</p>
          
          {/* Progress Indicator */}
          <div className="mt-4 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-1 h-1 bg-white rounded-full"
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(-50%, -50%)`,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        className={`relative w-44 h-44 rounded-2xl p-4 bg-gradient-to-br ${stage.color} shadow-2xl text-white flex flex-col items-center justify-center text-center backdrop-blur-sm cursor-pointer group`}
      >
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-white/30 rounded-2xl"
          initial={{ x: "-100%", skewX: "-20deg" }}
          whileHover={{ x: "200%", skewX: "-20deg" }}
          transition={{ duration: 0.8 }}
        />

        {/* Floating Particles on Hover */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 40 - 20,
                  y: Math.random() * 40 - 20,
                }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="absolute w-1 h-1 bg-white rounded-full"
              />
            ))}
          </>
        )}

        {/* Icon Container */}
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
            {stage.icon}
          </div>
          
          {/* Secondary Icon */}
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-3 -right-3 text-sm"
          >
            {stage.icon2}
          </motion.div>
        </motion.div>

        {/* Title with Underline */}
        <h3 className="text-sm font-bold mb-1 relative">
          {stage.title}
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </h3>
        
        <p className="text-xs opacity-90 px-2">{stage.desc}</p>
        
        {/* Number Badge */}
        <motion.div
          animate={{ scale: isHovered ? 1.2 : 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white text-gray-800 rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
        >
          {stage.num}
        </motion.div>

        {/* Connecting Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="absolute inset-0">
            <line
              x1="50%"
              y1="50%"
              x2={Math.cos((stage.position * Math.PI) / 180) * 80}
              y2={Math.sin((stage.position * Math.PI) / 180) * 80}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function LearningProcess() {
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, []);

  const radius = isMobile ? 0 : 200;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center py-20 px-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
    >
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.1,
            }}
            animate={{
              y: [null, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg"
          >
            ✦ OUR APPROACH ✦
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            How We Nurture Learning
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mx-auto"
          />
        </motion.div>

        {/* Learning Through Play Banner with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Animated Border */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl"
          />
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-5 shadow-2xl">
            <p className="text-white text-xl md:text-3xl font-light tracking-wide">
              Learning through{" "}
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                  textShadow: [
                    "0 0 8px rgba(255,255,255,0.5)",
                    "0 0 16px rgba(255,255,255,0.8)",
                    "0 0 8px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
              >
                Play
              </motion.span>
            </p>
          </div>
        </motion.div>

        {/* Circle Layout with Enhanced Cards */}
        {isMobile ? (
          <div className="w-full max-w-md space-y-4">
            {stages.map((stage, i) => (
              <Card 
                key={i} 
                stage={stage} 
                angle={0} 
                radius={0} 
                isMobile={true} 
                index={i}
                total={stages.length}
              />
            ))}
          </div>
        ) : (
          <div className="relative w-full max-w-3xl aspect-square mx-auto">
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {/* Dashed Circle */}
              <svg width="100%" height="100%" viewBox="0 0 500 500">
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                />
              </svg>
            </motion.div>

            {/* Cards */}
            <motion.div
              animate={{ rotate: rotation }}
              className="absolute inset-0"
            >
              {stages.map((stage, i) => {
                const angle = (i * 360) / stages.length;
                return (
                  <Card
                    key={i}
                    stage={stage}
                    angle={angle}
                    radius={radius}
                    isMobile={false}
                    index={i}
                    total={stages.length}
                  />
                );
              })}
            </motion.div>

            {/* Center with Enhanced Design */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 20px 40px -10px rgba(59,130,246,0.5)",
                  "0 30px 60px -10px rgba(139,92,246,0.6)",
                  "0 20px 40px -10px rgba(59,130,246,0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-40 h-40">
                {/* Rotating Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                />
                
                {/* Inner Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl"
                />
                
                {/* Main Center */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-center p-4 shadow-2xl border-4 border-white/30">
                  <div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="text-3xl mb-2"
                    >
                      🎯
                    </motion.div>
                    <div className="text-xs font-bold tracking-wider">
                      <div>PLAY</div>
                      <div className="my-1">•</div>
                      <div>LEARN</div>
                      <div className="my-1">•</div>
                      <div>GROW</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Mobile Swipe Indicator */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/60 text-sm"
            >
              ↓ Swipe to explore ↓
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}