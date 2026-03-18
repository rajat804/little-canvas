import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import assets from "../assets/assets";
import { FaClock, FaGamepad, FaPaintBrush, FaMusic } from "react-icons/fa";

const AfterSchoolPoster = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full bg-gradient-to-b from-[#FFF9F5] to-[#F0F7FF] py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Small Tagline */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] text-white text-sm font-semibold rounded-full mb-4 shadow-lg"
          >
            ⭐ BEYOND SCHOOL HOURS ⭐
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2C3E50] to-[#4A6FA5] mb-4"
          >
            After School Programs
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-[#4A5568] max-w-2xl mx-auto"
          >
            Where learning continues with fun, creativity, and friendship!
          </motion.p>

          {/* Features Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            {[
              { icon: <FaClock />, text: "Flexible Timing" },
              { icon: <FaGamepad />, text: "Fun Activities" },
              { icon: <FaPaintBrush />, text: "Creative Arts" },
              { icon: <FaMusic />, text: "Music & Dance" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md text-[#4A6FA5] font-medium border border-[#4A6FA5]/20"
              >
                <span className="text-[#FF6B6B]">{item.icon}</span>
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Poster Image with Enhanced Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative group"
        >
          {/* Decorative Background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B6B]/20 via-[#4A6FA5]/20 to-[#FF8C42]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Main Poster Container */}
          <div className="flex justify-center px-4">
            <div className="group relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
              {/* Image Wrapper */}
              <div className="w-full h-[320px] sm:h-[360px] md:h-[420px] lg:h-[500px]">
                <img
                  src={assets.afterSchool}
                  alt="After School Poster"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl flex items-center gap-2 border-2 border-[#FF6B6B]"
              >
                <span className="text-lg sm:text-2xl">🎨</span>
                <span className="text-sm sm:text-base font-bold text-[#2C3E50]">
                  Limited Seats!
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Enroll Now 🚀
          </motion.button>
          <p className="text-sm text-[#4A5568] mt-3">
            *Limited spots available for each program
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AfterSchoolPoster;
