import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GiBabyBottle,
  GiBookshelf,
  GiPencilRuler,
  GiGraduateCap,
  GiTwirlyFlower,
  GiStarSwirl,
  GiSparkles,
} from "react-icons/gi";
import { FaBaby, FaHeart, FaSmile } from "react-icons/fa";

const programs = [
  {
    color: "from-blue-500 to-indigo-600",
    lightColor: "from-blue-50 to-indigo-50",
    icon: <GiBabyBottle className="text-5xl text-white" />,
    icon2: <FaHeart className="text-pink-400" />,
    title: "Play Group",
    age: "1.5 - 2 Years",
    text: "Activity learning, music & movement, sensory play",
    features: ["Music", "Sensory", "Movement"],
  },
  {
    color: "from-emerald-500 to-teal-600",
    lightColor: "from-emerald-50 to-teal-50",
    icon: <FaBaby className="text-5xl text-white" />,
    icon2: <FaSmile className="text-yellow-400" />,
    title: "Toddler",
    age: "2 - 3 Years",
    text: "Social Development, Motor Skills, Creative Expression",
    features: ["Social", "Motor", "Creative"],
  },
  {
    color: "from-purple-500 to-violet-600",
    lightColor: "from-purple-50 to-violet-50",
    icon: <GiBookshelf className="text-5xl text-white" />,
    icon2: <GiStarSwirl className="text-purple-400" />,
    title: "Nursery",
    age: "3 – 4 Years",
    text: "Language development, storytelling, creative art & craft",
    features: ["Language", "Storytelling", "Art"],
  },
  {
    color: "from-pink-500 to-rose-600",
    lightColor: "from-pink-50 to-rose-50",
    icon: <GiPencilRuler className="text-5xl text-white" />,
    icon2: <GiTwirlyFlower className="text-pink-400" />,
    title: "LKG/UKG",
    age: "4 - 6 Years",
    text: "Pre-reading & writing skills, numbers, confidence building.",
    features: ["Reading", "Writing", "Numbers"],
  },
  {
    color: "from-orange-500 to-amber-600",
    lightColor: "from-orange-50 to-amber-50",
    icon: <GiGraduateCap className="text-5xl text-white" />,
    icon2: <GiSparkles className="text-orange-400" />,
    title: "Daycare",
    age: "2 - 14 Years", // Updated age range
    text: "Flexible hours, hygienic meals, indoor & outdoor activities, homework assistance.",
    features: ["Flexible", "Meals", "Activities", "Homework Help"],
  },
];

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const AboutPrograms = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.1 
            }}
            animate={{ 
              y: [null, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        
        {/* Enhanced Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp(0)}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-4 shadow-lg"
          >
            ✦ OUR PROGRAMS ✦
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4">
            Play & Learn Programs
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
          />
          
          <p className="text-[#64748B] text-lg mt-6 max-w-2xl mx-auto">
            Discover our nurturing programs designed for every stage of your child's development
          </p>
        </motion.div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => {
            const sectionId = prog.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <motion.div
                key={prog.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp(idx * 0.1)}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/80 cursor-pointer"
              >
                {/* Animated Gradient Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${prog.color.split(' ')[1]}, ${prog.color.split(' ')[3]})`,
                    padding: "2px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Top Decorative Accent */}
                <motion.div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${prog.color} rounded-full`}
                  whileHover={{ width: "60px" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon Container with 3D Effect */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`relative w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${prog.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/30 rounded-3xl"
                      initial={{ x: "-100%", skewX: "-20deg" }}
                      whileHover={{ x: "200%", skewX: "-20deg" }}
                      transition={{ duration: 0.8 }}
                    />
                    {prog.icon}
                    
                    {/* Floating Icon 2 */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -right-2 -top-2 text-2xl"
                    >
                      {prog.icon2}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#1E293B] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1E293B] group-hover:to-[#4A5568] transition-all duration-300">
                  {prog.title}
                </h3>

                {/* Age Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${prog.color} text-white shadow-md`}
                >
                  {prog.age}
                </motion.div>

                {/* Description */}
                <p className="text-[#475569] text-base leading-relaxed mb-6">
                  {prog.text}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {prog.features.map((feature, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${prog.lightColor} text-[#475569] border border-gray-200`}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Learn More Button */}
                <Link to={`/programs#${sectionId}`}>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn relative px-6 py-3 bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white font-medium text-sm rounded-xl shadow-lg overflow-hidden w-full"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Explore Program
                      <motion.svg
                        className="w-4 h-4"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                    
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.button>
                </Link>

                {/* Corner Dots */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-blue-400 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-purple-400 transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link to="/programs">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              View All Programs
              <span className="ml-2">→</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPrograms;