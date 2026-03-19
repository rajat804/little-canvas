import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import assets from "../assets/assets";
import { 
  FaClock, 
  FaGamepad, 
  FaPaintBrush, 
  FaMusic,
  FaUserNinja,
  FaGuitar,
  FaPenFancy,
  FaRunning,
  FaChess,
  FaRobot
} from "react-icons/fa";
import { GiBlackBelt, GiBrutalHelm, GiMusicalNotes, GiPaintRoller } from "react-icons/gi";
import { MdSportsMartialArts, MdScience } from "react-icons/md";

const AfterSchoolPoster = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Exciting activities for children
  const activities = [
    { icon: <GiBlackBelt  className="text-2xl" />, name: "Karate", color: "from-orange-400 to-red-500", bgColor: "bg-orange-50", textColor: "text-orange-600" },
    { icon: <FaPaintBrush className="text-2xl" />, name: "Art & Craft", color: "from-pink-400 to-rose-500", bgColor: "bg-pink-50", textColor: "text-pink-600" },
    { icon: <FaPenFancy className="text-2xl" />, name: "Tuition", color: "from-blue-400 to-indigo-500", bgColor: "bg-blue-50", textColor: "text-blue-600" },
    { icon: <FaMusic className="text-2xl" />, name: "Dance", color: "from-purple-400 to-violet-500", bgColor: "bg-purple-50", textColor: "text-purple-600" },
    { icon: <FaGuitar className="text-2xl" />, name: "Guitar", color: "from-amber-400 to-orange-500", bgColor: "bg-amber-50", textColor: "text-amber-600" },
    { icon: <FaRobot className="text-2xl" />, name: "Robotics", color: "from-cyan-400 to-teal-500", bgColor: "bg-cyan-50", textColor: "text-cyan-600" },
    { icon: <FaChess className="text-2xl" />, name: "Chess", color: "from-emerald-400 to-green-500", bgColor: "bg-emerald-50", textColor: "text-emerald-600" },
    { icon: <FaRunning className="text-2xl" />, name: "Sports", color: "from-red-400 to-rose-500", bgColor: "bg-red-50", textColor: "text-red-600" },
  ];

  // Program highlights
  const highlights = [
    { icon: <FaClock />, text: "3:00 PM - 6:00 PM", subtext: "Flexible pickup" },
    { icon: <FaGamepad />, text: "Fun Learning", subtext: "Activity based" },
    { icon: <GiMusicalNotes />, text: "Creative Arts", subtext: "Music & Dance" },
    { icon: <FaUserNinja />, text: "Skill Building", subtext: "Karate & Sports" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 px-4 overflow-hidden relative">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 8 + Math.random() * 8, 
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400/30 to-purple-400/30 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading Section - More Dynamic */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Small Tagline with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-orange-400/30"
              />
              <span className="relative px-6 py-2.5 bg-gradient-to-r from-orange-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-2xl inline-block">
                ⭐ BEYOND SCHOOL HOURS ⭐
              </span>
            </div>
          </motion.div>

          {/* Main Heading - Three Options (Choose one) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600">
              After School
            </span>
            <br />
            <span className="text-[#1E293B]">Adventures</span>
          </motion.h2>

          {/* Alternative Headings - Uncomment to use */}
          {/* <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-[#1E293B]">Extended</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600">
              Care Program
            </span>
          </h2> */}
          
          {/* <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Beyond School
            </span>
            <br />
            <span className="text-[#1E293B]">Program</span>
          </h2> */}

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "120px" } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 rounded-full mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-[#475569] max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Where learning meets excitement! Discover, create, and grow with our exciting after school activities.
          </motion.p>
        </motion.div>

        {/* Program Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-400"
            >
              <span className="text-2xl text-orange-500">{item.icon}</span>
              <div className="text-left">
                <p className="font-bold text-[#1E293B]">{item.text}</p>
                <p className="text-xs text-[#64748B]">{item.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[#1E293B] mb-8">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Adventure</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                {/* Gradient Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${activity.color.split(' ')[1]}, ${activity.color.split(' ')[3]})`,
                    padding: "2px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                >
                  {activity.icon}
                </motion.div>

                <h4 className="text-lg font-bold text-[#1E293B] text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1E293B] group-hover:to-[#4A5568] transition-all duration-300">
                  {activity.name}
                </h4>

                {/* Small Indicator */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-orange-400 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Poster Image with Enhanced Container - More Prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative group"
        >
          {/* Decorative Background */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-6 bg-gradient-to-r from-orange-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl blur-3xl"
          />

          {/* Main Poster Container */}
          <div className="flex justify-center px-4">
            <div className="group relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
              {/* Image Wrapper */}
              <div className="w-full h-[350px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
                <img
                  src={assets.afterSchool}
                  alt="After School Adventures"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Floating Activity Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[70%]">
                {activities.slice(0, 4).map((activity, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg bg-gradient-to-r ${activity.color}`}
                  >
                    {activity.name}
                  </motion.span>
                ))}
              </div>

              {/* Main Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-orange-400"
              >
                <span className="text-2xl animate-bounce">🚀</span>
                <div className="text-left">
                  <p className="text-xs text-[#64748B]">Limited Time</p>
                  <p className="font-bold text-[#1E293B]">Early Bird Discount</p>
                </div>
              </motion.div>

              {/* Bottom Info Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    <div className="text-white">
                      <p className="text-sm font-semibold">Ages 5-12 Years</p>
                      <p className="text-xs opacity-80">Monday - Friday</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full shadow-xl text-sm"
                  >
                    Join Now →
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA with Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white p-4 rounded-2xl shadow-xl">
            <span className="text-[#1E293B] font-semibold">Next Session Starts:</span>
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold">
              April 15, 2026
            </span>
            <span className="text-[#64748B]">|</span>
            <span className="text-[#1E293B]">Limited to 15 spots</span>
          </div>
          <p className="text-sm text-[#64748B] mt-4">
            ✦ Karate • Art & Craft • Tuition • Dance • Guitar • Robotics ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AfterSchoolPoster;