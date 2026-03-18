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
  GiBrain,
  GiHeartPlus,
  GiConversation,
} from "react-icons/gi";
import { 
  FaHeart, 
  FaStar, 
  FaSun, 
  FaMoon, 
  FaCloud, 
  FaLeaf,
  FaRocket,
  FaMagic 
} from "react-icons/fa";
import { MdVerified, MdAutoAwesome } from "react-icons/md";
import { BsStars } from "react-icons/bs";
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
    icon3: <GiConversation />,
    position: 0,
    glowColor: "blue-500",
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
    icon3: <GiHeartPlus />,
    position: 60,
    glowColor: "pink-500",
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
    icon3: <GiBrain />,
    position: 120,
    glowColor: "emerald-500",
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
    icon3: <FaMagic />,
    position: 180,
    glowColor: "orange-500",
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
    icon3: <MdAutoAwesome />,
    position: 240,
    glowColor: "purple-500",
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
    icon3: <BsStars />,
    position: 300,
    glowColor: "indigo-500",
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
        whileHover={{ y: -8, scale: 1.02 }}
        className={`w-full max-w-md mx-auto rounded-2xl p-6 bg-gradient-to-br ${stage.color} text-white shadow-2xl relative overflow-hidden group cursor-pointer border border-white/20`}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 bg-white/10 rounded-full blur-xl"
              animate={{
                x: [Math.random() * 300 - 150, Math.random() * 300 - 150],
                y: [Math.random() * 300 - 150, Math.random() * 300 - 150],
              }}
              transition={{
                duration: 10 + i * 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Glow Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className={`absolute -inset-10 bg-${stage.glowColor}-500/20 rounded-full blur-3xl`}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-5xl"
            >
              {stage.icon}
            </motion.div>
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-3xl"
            >
              {stage.icon2}
            </motion.div>
          </div>
          
          <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">{stage.title}</h3>
          <p className="text-sm opacity-90 mb-3 leading-relaxed">{stage.desc}</p>
          <p className="text-xs opacity-80 italic border-l-2 border-white/30 pl-3">{stage.fullDesc}</p>
          
          {/* Progress Indicator */}
          <div className="mt-4 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            ))}
          </div>

          {/* Corner Number */}
          <div className="absolute top-2 right-2 text-4xl font-black opacity-20 text-white">
            {stage.num}
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
        whileHover={{ scale: 1.2, rotate: 5 }}
        className={`relative w-48 h-48 rounded-2xl p-4 bg-gradient-to-br ${stage.color} shadow-2xl text-white flex flex-col items-center justify-center text-center backdrop-blur-sm cursor-pointer group border-2 border-white/20`}
      >
        {/* Glow Ring */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute -inset-2 bg-${stage.glowColor}-500/30 rounded-2xl blur-xl`}
        />

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
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: Math.random() * 60 - 30,
                  y: Math.random() * 60 - 30,
                }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
              />
            ))}
          </>
        )}

        {/* Icon Container */}
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-2"
        >
          <div className="text-4xl mb-1 group-hover:scale-110 transition-transform">
            {stage.icon}
          </div>
          
          {/* Secondary Icon */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-2 -right-2 text-lg"
          >
            {stage.icon2}
          </motion.div>

          {/* Third Icon */}
          <motion.div
            animate={{
              y: [0, -5, 0],
              x: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-2 -left-2 text-sm opacity-60"
          >
            {stage.icon3}
          </motion.div>
        </motion.div>

        {/* Title with Underline */}
        <h3 className="text-sm font-bold mb-1 relative">
          {stage.title}
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/70 rounded-full"
            initial={{ width: 0, left: "50%" }}
            whileHover={{ width: "100%", left: 0 }}
            transition={{ duration: 0.3 }}
          />
        </h3>
        
        <p className="text-xs opacity-90 px-2 leading-relaxed">{stage.desc}</p>
        
        {/* Number Badge with Animation */}
        <motion.div
          animate={{ scale: isHovered ? 1.3 : 1, rotate: isHovered ? 10 : 0 }}
          className="absolute -top-2 -right-2 w-7 h-7 bg-white text-gray-800 rounded-full flex items-center justify-center text-xs font-bold shadow-xl border-2 border-white"
        >
          {stage.num}
        </motion.div>

        {/* Connecting Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="absolute inset-0">
            <line
              x1="50%"
              y1="50%"
              x2={Math.cos((stage.position * Math.PI) / 180) * 90}
              y2={Math.sin((stage.position * Math.PI) / 180) * 90}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/30 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};

export default function LearningProcess() {
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 50);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, []);

  const radius = isMobile ? 0 : 220;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center py-20 px-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
    >
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/98 via-[#1E293B]/95 to-[#020617]/98"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.1,
            }}
            animate={{
              y: [null, Math.random() * 120 - 60],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 12,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 70, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.4, 1, 1.4],
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1.5, 1.2],
            x: [0, 40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/20"
              />
              <span className="relative px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/30 shadow-2xl">
                ✦ SIX STAGES OF GROWTH ✦
              </span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            How We Nurture
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Learning
            </span>
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
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
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl"
          />
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-10 py-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-3xl text-yellow-300"
              >
                ⭐
              </motion.div>
              <p className="text-white text-xl md:text-3xl font-light tracking-wide">
                Learning through{" "}
                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 8px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 8px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                >
                  Play
                </motion.span>
              </p>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-3xl text-purple-300"
              >
                ✦
              </motion.div>
            </div>
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
          <div className="relative w-full max-w-4xl aspect-square mx-auto">
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {/* Outer Dashed Circle */}
              <svg width="100%" height="100%" viewBox="0 0 600 600">
                <circle
                  cx="300"
                  cy="300"
                  r="250"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                  strokeDasharray="12 12"
                />
              </svg>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {/* Inner Dashed Circle */}
              <svg width="100%" height="100%" viewBox="0 0 600 600">
                <circle
                  cx="300"
                  cy="300"
                  r="180"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.5"
                  strokeDasharray="8 8"
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
                    onHover={() => setActiveCard(i)}
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
                  "0 40px 60px -10px rgba(139,92,246,0.6)",
                  "0 20px 40px -10px rgba(59,130,246,0.5)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-44 h-44">
                {/* Rotating Outer Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border border-white/10 border-dashed"
                />
                
                {/* Inner Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl"
                />
                
                {/* Main Center */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-center p-4 shadow-2xl border-4 border-white/30">
                  <div>
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity },
                      }}
                      className="text-4xl mb-2"
                    >
                      🎯
                    </motion.div>
                    <div className="text-xs font-bold tracking-wider">
                      <div className="text-yellow-300">PLAY</div>
                      <div className="my-1 text-white/70">✦</div>
                      <div>LEARN</div>
                      <div className="my-1 text-white/70">✦</div>
                      <div className="text-pink-300">GROW</div>
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
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/60 text-sm flex items-center gap-2"
            >
              <span>↓</span>
              Swipe to explore the stages
              <span>↓</span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}