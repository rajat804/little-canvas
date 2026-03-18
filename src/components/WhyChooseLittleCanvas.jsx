import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiDiamondHard, GiBrain, GiHeartInside, GiStarSwirl } from "react-icons/gi";
import { FaRegGem, FaRocket, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import PopupForm from "./PopupForm";

// New High-quality images
const IMAGES = [
  assets.why1, // Curriculum - Kids learning
  assets.why4, // 6T Tech - Kids with technology
  assets.why3, // Child-Centric - Happy kids
];

const sections = [
  {
    num: "01",
    icon: <GiDiamondHard />,
    icon2: <FaRegGem />,
    title: "Superior, Outcome-Driven Curriculum",
    desc: "Our curriculum is designed to go beyond simple play, focusing on delivering measurable academic outcomes:",
    points: [
      "Montessori-Inspired & Modernized: We follow the Montessori way with modern updates to provide a scientifically backed learning environment.",
      "Structured Excellence: We go beyond nursery rhymes and toy play by using a full, well-planned program for development where all materials match our clear educational goals.",
      "Optimal Learning Ratio (1:15): We maintain a low 1:15 teacher-student ratio to ensure personalized attention, care, and quality educational guidance for every child.",
      "Future Readiness: We aim to raise children who are academically equipped and socially adaptive for the future, committed to preparing them to educate themselves throughout their lives."
    ],
    gradient: "from-[#3B82F6] to-[#1E3A8A]", // Blue
    lightGradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
  },
  {
    num: "02",
    icon: <GiBrain />,
    icon2: <FaRocket />,
    title: "Integrated Methodology: The 6T Approach & Mobile App",
    desc: "Our systematic 6T approach ensures consistent growth and skill mastery through the effective use of technology:",
    points: [
      <>
        The <span className="relative group inline-block">
          <span className="font-semibold text-[#3B82F6] cursor-help border-b-2 border-dotted border-[#3B82F6]">6T Learning Approach</span>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#1E293B] text-white text-sm rounded-xl py-3 px-4 pointer-events-none z-50 shadow-2xl border border-white/10">
            <span className="font-bold block mb-2 text-[#F59E0B]">✨ 6T Learning Approach ✨</span>
            <span className="block mb-1">🎮 <span className="font-semibold">Toys & Games</span> – fun tools to support learning</span>
            <span className="block mb-1">📚 <span className="font-semibold">Theory</span> – what children need to know</span>
            <span className="block mb-1">⏰ <span className="font-semibold">Timetable</span> – a planned daily routine</span>
            <span className="block mb-1">👩‍🏫 <span className="font-semibold">Training</span> – our teachers are well-trained</span>
            <span className="block mb-1">📱 <span className="font-semibold">Technology</span> – we use app and tools to help learning</span>
            <span className="block">🤝 <span className="font-semibold">Teamwork</span> – we teach children to work and learn together</span>
            <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-[#1E293B]"></span>
          </span>
        </span>: Our 6T Learning Approach uses play to teach big ideas and includes rigorous Training for our teachers.
      </>,
      "Digital Skill Building: The 6T model integrates Technology through the Mobile App. This app helps children aged 2–6 build crucial skills in mathematics, reading, writing, phonics, and thinking, making daily learning fun and simple.",
      "Traceable Growth: We use smart ways to track how children grow through daily observation and short assessments, ensuring progress is tracked consistently and accurately."
    ],
    gradient: "from-[#10B981] to-[#065F46]", // Green
    lightGradient: "from-emerald-50 to-green-50",
    iconColor: "text-emerald-600",
  },
  {
    num: "03",
    icon: <GiHeartInside />,
    icon2: <FaHeart />,
    title: "Child-Centric Development",
    desc: "We put the child at the center of the learning process, maximizing development during the critical early years:",
    points: [
      "Focus on the Child: We consciously focus on the child, not just the teacher, recognizing that the capacity to learn is highest between ages 2 to 6.",
      "Independence and Confidence: Children learn to work hard with joy and purpose by being encouraged to explore and develop independence.",
      "Character: We foster individuality and holistic growth, aspiring to empower every child with confidence and kindness.",
      "Guided Discovery: Teachers act as guides, observing and supporting children daily, and only interfering when needed, to allow children to learn and explore by themselves."
    ],
    gradient: "from-[#EC4899] to-[#9D174D]", // Pink
    lightGradient: "from-pink-50 to-rose-50",
    iconColor: "text-pink-600",
  }
];

export default function WhyChooseGoldenStep() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] py-24 px-4 overflow-hidden">
        
        {/* Professional Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-[#1E293B] text-white text-sm font-semibold rounded-full mb-4"
            >
              ⭐ Why Parents Love Us ⭐
            </motion.span>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-[#1E293B] via-[#3B82F6] to-[#1E293B] bg-clip-text leading-tight">
              Why Choose Golden Step?
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full mx-auto mt-4"></div>
            
            <p className="mt-8 text-lg sm:text-xl text-[#475569] max-w-5xl mx-auto leading-relaxed px-4">
              Choosing Golden Step means investing in a structured, future-focused educational foundation built on a proven philosophy and integrated with modern technology.
            </p>
          </motion.div>

          {/* Responsive Cards with Images & Icons */}
          <div className="grid gap-12 md:gap-16">
            {sections.map((sec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/80"
              >
                <div className="grid md:grid-cols-2">
                  {/* Conditional Rendering: Reverse only for 2nd card (idx === 1) */}
                  {idx === 1 ? (
                    <>
                      {/* Content (Left) */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center order-1 md:order-1 relative overflow-hidden">
                        
                        {/* Hover Background Effect */}
                        <motion.div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${sec.lightGradient} transition-opacity duration-500`}
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        <div className="relative z-10">
                          {/* Header with Icon */}
                          <motion.div 
                            whileHover={{ x: 10 }}
                            className={`flex items-center gap-4 mb-6 p-4 rounded-2xl bg-gradient-to-r ${sec.gradient} text-white shadow-xl w-fit`}
                          >
                            <motion.div 
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              className="text-4xl"
                            >
                              {sec.icon}
                            </motion.div>
                            <div>
                              <span className="text-sm font-semibold opacity-90">Section {sec.num}</span>
                              <h3 className="text-2xl font-bold">{sec.title}</h3>
                            </div>
                            
                            {/* Floating Icon */}
                            <motion.div
                              className="absolute -right-2 -top-2 text-2xl opacity-30"
                              animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{ duration: 10, repeat: Infinity }}
                            >
                              {sec.icon2}
                            </motion.div>
                          </motion.div>

                          {/* Description */}
                          <p className="text-base text-[#475569] mb-6 leading-relaxed">
                            {sec.desc}
                          </p>

                          {/* Points */}
                          <div className="space-y-4">
                            {sec.points.map((point, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-3 group/item"
                              >
                                <motion.span 
                                  whileHover={{ scale: 1.2, rotate: 10 }}
                                  className={`text-xl mt-0.5 ${sec.iconColor} flex-shrink-0`}
                                >
                                  ✦
                                </motion.span>
                                <p className="text-[#334155] leading-relaxed flex-1 group-hover/item:text-[#1E293B] transition-colors">
                                  {point}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Image (Right) with Enhanced Hover */}
                      <div className="relative h-80 md:h-full overflow-hidden group/image">
                        <motion.img
                          src={IMAGES[idx]}
                          alt={sec.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover/image:opacity-80 transition-opacity duration-500"></div>
                        
                        {/* Number Badge */}
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-2xl"
                        >
                          <span className={`text-2xl font-black bg-gradient-to-r ${sec.gradient} bg-clip-text text-transparent`}>
                            {sec.num}
                          </span>
                        </motion.div>
                        
                        {/* Floating Icons on Image */}
                        <motion.div
                          className="absolute bottom-6 right-6 text-white text-3xl"
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          {sec.icon2}
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image (Left) with Enhanced Hover */}
                      <div className="relative h-80 md:h-full overflow-hidden group/image">
                        <motion.img
                          src={IMAGES[idx]}
                          alt={sec.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover/image:opacity-80 transition-opacity duration-500"></div>
                        
                        {/* Number Badge */}
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-2xl"
                        >
                          <span className={`text-2xl font-black bg-gradient-to-r ${sec.gradient} bg-clip-text text-transparent`}>
                            {sec.num}
                          </span>
                        </motion.div>
                        
                        {/* Floating Icons on Image */}
                        <motion.div
                          className="absolute bottom-6 left-6 text-white text-3xl"
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, -10, 10, 0],
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          {sec.icon2}
                        </motion.div>
                      </div>

                      {/* Content (Right) */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
                        
                        {/* Hover Background Effect */}
                        <motion.div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${sec.lightGradient} transition-opacity duration-500`}
                          initial={{ x: "100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        <div className="relative z-10">
                          {/* Header with Icon */}
                          <motion.div 
                            whileHover={{ x: -10 }}
                            className={`flex items-center gap-4 mb-6 p-4 rounded-2xl bg-gradient-to-r ${sec.gradient} text-white shadow-xl w-fit`}
                          >
                            <motion.div 
                              whileHover={{ scale: 1.2, rotate: -10 }}
                              className="text-4xl"
                            >
                              {sec.icon}
                            </motion.div>
                            <div>
                              <span className="text-sm font-semibold opacity-90">Section {sec.num}</span>
                              <h3 className="text-2xl font-bold">{sec.title}</h3>
                            </div>
                            
                            {/* Floating Icon */}
                            <motion.div
                              className="absolute -left-2 -top-2 text-2xl opacity-30"
                              animate={{
                                rotate: [0, -360],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{ duration: 10, repeat: Infinity }}
                            >
                              {sec.icon2}
                            </motion.div>
                          </motion.div>

                          {/* Description */}
                          <p className="text-base text-[#475569] mb-6 leading-relaxed">
                            {sec.desc}
                          </p>

                          {/* Points */}
                          <div className="space-y-4">
                            {sec.points.map((point, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ x: -5 }}
                                className="flex items-start gap-3 group/item"
                              >
                                <motion.span 
                                  whileHover={{ scale: 1.2, rotate: -10 }}
                                  className={`text-xl mt-0.5 ${sec.iconColor} flex-shrink-0`}
                                >
                                  ✦
                                </motion.span>
                                <p className="text-[#334155] leading-relaxed flex-1 group-hover/item:text-[#1E293B] transition-colors">
                                  {point}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-block bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl p-12 shadow-2xl border border-gray-800 relative overflow-hidden group"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#10B981]/20"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 relative z-10">
                Ready to Give Your Child the Best Start?
              </h4>
              
              <motion.button
                onClick={openPopup}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-full font-bold text-xl shadow-2xl relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Book a Tour Today 🚀</span>
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: "-100%", skewX: "-20deg" }}
                  whileHover={{ x: "200%", skewX: "-20deg" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}