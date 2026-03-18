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
  GiMagicLamp,
  GiButterfly,
  GiSparkles,
  GiStarShuriken,
  GiFlowerPot,
  GiBubbles,
  GiFeather,
} from "react-icons/gi";
import assets from "../assets/assets";

const BACKGROUND_IMAGE = assets.learning2;

const stages = [
  {
    num: "01",
    title: "COMMUNICATION",
    desc: "Builds clear expression of thoughts and ideas.",
    color: "from-[#3B82F6] to-[#1E3A8A]", // Blue
    lightColor: "from-blue-400/30 to-blue-600/30",
    icon: <GiWorld />,
  },
  {
    num: "02",
    title: "COMPASSION",
    desc: "Encourages empathy, kindness, and respect for others.",
    color: "from-[#EC4899] to-[#9D174D]", // Pink
    lightColor: "from-pink-400/30 to-rose-600/30",
    icon: <GiTeacher />,
  },
  {
    num: "03",
    title: "COLLABORATION",
    desc: "Promotes teamwork and sharing through group activities.",
    color: "from-[#10B981] to-[#065F46]", // Green
    lightColor: "from-emerald-400/30 to-green-600/30",
    icon: <GiMagnifyingGlass />,
  },
  {
    num: "04",
    title: "CREATIVITY",
    desc: "Inspires imagination and creative self-expression.",
    color: "from-[#F59E0B] to-[#B45309]", // Orange
    lightColor: "from-amber-400/30 to-orange-600/30",
    icon: <GiLightBulb />,
  },
  {
    num: "05",
    title: "CRITICAL THINKING",
    desc: "Develops problem-solving and decision-making skills.",
    color: "from-[#8B5CF6] to-[#5B21B6]", // Purple
    lightColor: "from-purple-400/30 to-violet-600/30",
    icon: <GiCycle />,
  },
  {
    num: "06",
    title: "CONFIDENCE",
    desc: "Builds self-belief through practice and growth.",
    color: "from-[#6366F1] to-[#3730A3]", // Indigo
    lightColor: "from-indigo-400/30 to-blue-600/30",
    icon: <GiTrophy />,
  },
];

const Card = ({ stage, angle, radius, isMobile }) => {
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
        className={`w-full max-w-xs mx-auto rounded-3xl p-6 bg-gradient-to-br ${stage.color} shadow-2xl text-white border-4 border-white/40 backdrop-blur-md relative overflow-hidden group`}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
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

        <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          {stage.icon}
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">{stage.title}</h3>
        <p className="text-sm opacity-90 leading-relaxed">{stage.desc}</p>
        <div className="mt-5 w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center font-bold text-xl border-2 border-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          {stage.num}
        </div>
      </motion.div>
    );
  }

  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className={`w-48 h-56 rounded-3xl p-5 bg-gradient-to-br ${stage.color} shadow-2xl text-white text-center border-4 border-white/40 flex flex-col justify-center items-center backdrop-blur-sm relative overflow-hidden group`}
      >
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-white/30"
          initial={{ x: "-100%", skewX: "-20deg" }}
          whileHover={{ x: "200%", skewX: "-20deg" }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Floating Particles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="text-3xl mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
          {stage.icon}
        </div>
        <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors">{stage.title}</h3>
        <p className="text-sm mt-2 px-3 leading-tight">{stage.desc}</p>
        <div className="mt-4 w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          {stage.num}
        </div>
      </motion.div>
    </div>
  );
};

export default function LearningProcess() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const radius = isMobile ? 0 : 250;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center overflow-hidden py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE})`,
      }}
    >
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#1E293B]/90 via-[#0F172A]/85 to-[#020617]/90"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.9) 50%, rgba(2,6,23,0.95) 100%)",
            "linear-gradient(225deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.9) 50%, rgba(2,6,23,0.95) 100%)",
            "linear-gradient(135deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.9) 50%, rgba(2,6,23,0.95) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Animated Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Side Icons */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-[5%] top-[15%] text-blue-300/30"
        >
          <GiButterfly className="text-8xl" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            x: [0, 30, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute left-[10%] top-[40%] text-purple-300/30"
        >
          <GiSparkles className="text-7xl" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -30, 30, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute left-[15%] bottom-[20%] text-pink-300/30"
        >
          <GiStarShuriken className="text-8xl" />
        </motion.div>

        {/* Right Side Icons */}
        <motion.div
          animate={{ 
            y: [0, 40, -20, 0],
            rotate: [0, -20, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute right-[8%] top-[25%] text-green-300/30"
        >
          <GiBubbles className="text-8xl" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -50, 20, 0],
            x: [0, -30, 30, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute right-[12%] top-[60%] text-yellow-300/30"
        >
          <GiFeather className="text-7xl" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 30, -40, 0],
            rotate: [0, 25, -25, 0],
          }}
          transition={{ duration: 11, repeat: Infinity }}
          className="absolute right-[5%] bottom-[15%] text-indigo-300/30"
        >
          <GiFlowerPot className="text-8xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-black text-white mb-16 text-center leading-tight drop-shadow-xl"
        >
          Our Learning Process
        </motion.h1>

        {/* Circular / Mobile Layout */}
        {isMobile ? (
          <div className="w-full max-w-md space-y-8">
            {stages.map((stage, i) => (
              <Card
                key={i}
                stage={stage}
                angle={0}
                radius={0}
                isMobile={true}
              />
            ))}
          </div>
        ) : (
          <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
                  />
                );
              })}
            </motion.div>

            {/* Center Circle */}
            <motion.div 
              className="absolute w-64 h-64 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex flex-col items-center justify-center shadow-2xl text-white border-8 border-white/30 z-10 backdrop-blur-sm"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 20px 40px -10px rgba(59,130,246,0.5)",
                  "0 30px 60px -10px rgba(139,92,246,0.6)",
                  "0 20px 40px -10px rgba(59,130,246,0.5)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-white/20"
              />
              <GiMagicLamp className="text-6xl mb-3 text-yellow-300 animate-pulse" />
              <p className="text-sm font-bold tracking-wider">CURIOSITY</p>
              <h2 className="text-2xl font-bold mt-1">iNteLLic</h2>
              <p className="text-sm font-bold tracking-wider mt-1">CONSCIOUSNESS</p>
            </motion.div>
          </div>
        )}

        {isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-center text-white/90 font-medium text-lg px-6 drop-shadow"
          >
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              👇
            </motion.span>{" "}
            Swipe up to explore the full learning journey{" "}
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="inline-block"
            >
              👇
            </motion.span>
          </motion.p>
        )}

        {/* Detailed Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mt-24 px-6 sm:px-10 lg:px-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-10 drop-shadow-lg">
            The Golden Step Learning Process: Six Stages of Mastery
          </h2>

          <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-center mb-16 max-w-3xl mx-auto drop-shadow">
            The learning process at{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              Golden Step
            </span>{" "}
            is a continuous, six-stage cycle designed to foster independence and
            deep conceptual understanding, moving the child toward mastery of a
            skill.
          </p>

          <div className="grid gap-6 md:gap-8">
            {[
              {
                num: "1",
                title: "COMMUNICATION",
                desc: "Builds strong verbal and non-verbal skills, helping children express ideas, thoughts, and emotions clearly.",
                color: "from-[#3B82F6] to-[#1E3A8A]",
              },
              {
                num: "2",
                title: "COMPASSION",
                desc: "Encourages empathy and kindness, teaching children to understand others and build meaningful relationships.",
                color: "from-[#EC4899] to-[#9D174D]",
              },
              {
                num: "3",
                title: "COLLABORATION",
                desc: "Promotes teamwork and cooperation, allowing children to share ideas and work together effectively.",
                color: "from-[#10B981] to-[#065F46]",
              },
              {
                num: "4",
                title: "CREATIVITY",
                desc: "Inspires imagination and innovation, enabling children to express themselves through creative activities.",
                color: "from-[#F59E0B] to-[#B45309]",
              },
              {
                num: "5",
                title: "CRITICAL THINKING",
                desc: "Develops problem-solving abilities, helping children analyze situations and make thoughtful decisions.",
                color: "from-[#8B5CF6] to-[#5B21B6]",
              },
              {
                num: "6",
                title: "CONFIDENCE",
                desc: "Builds self-belief and independence, empowering children to face challenges with confidence.",
                color: "from-[#6366F1] to-[#3730A3]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${item.color}`}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl border-4 border-white/50`}
                  >
                    {item.num}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      whileHover={{ x: 5 }}
                      className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-200 transition-all duration-300 drop-shadow"
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-tl-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}