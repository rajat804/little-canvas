import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaHeart, FaStar, FaRegEye } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const borderColors = [
  "border-[#3B82F6]",
  "border-[#10B981]",
  "border-[#8B5CF6]",
  "border-[#EC4899]",
  "border-[#F59E0B]",
  "border-[#6366F1]",
];

const bgGradients = [
  "from-blue-50 to-indigo-50",
  "from-emerald-50 to-green-50",
  "from-purple-50 to-violet-50",
  "from-pink-50 to-rose-50",
  "from-amber-50 to-orange-50",
  "from-indigo-50 to-blue-50",
];

const SkeletonCard = ({ borderColor, bgGradient }) => (
  <div
    className={`border-2 border-dashed ${borderColor} rounded-2xl p-4 bg-gradient-to-br ${bgGradient} shadow-lg w-[340px] sm:w-[400px] animate-pulse`}
  >
    <div className="rounded-xl w-full h-[220px] sm:h-[260px] bg-gradient-to-r from-gray-200/50 via-gray-300/50 to-gray-200/50"></div>
    <div className="h-6 w-3/4 mx-auto mt-6 bg-gray-200/50 rounded"></div>
  </div>
);

export default function GalleryOfClasses() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/gallery`)
      .then((res) => {
        const latestSix = (res.data || []).slice(0, 6);
        setImages(latestSix);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 2) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 2 + images.length) % images.length);

  const visibleImages = images.length
    ? [images[index], images[(index + 1) % images.length]]
    : [];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      
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
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
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
        {[...Array(15)].map((_, i) => (
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
            className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-4 shadow-lg"
          >
            ✦ MEMORIES IN MOTION ✦
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4">
            Inside Our Classroom
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"
          />
          
          <p className="text-[#64748B] text-lg mt-6 max-w-2xl mx-auto">
            A glimpse into our vibrant learning spaces where every moment is a memory
          </p>
        </motion.div>

        {/* Gallery Counter */}
        {!loading && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
              <FaCamera className="text-blue-500" />
              <span className="text-sm font-medium text-[#1E293B]">
                {index + 1}-{Math.min(index + 2, images.length)} of {images.length} moments
              </span>
            </span>
          </motion.div>
        )}

        {/* Slider with Enhanced Cards */}
        <div className="flex justify-center gap-8 flex-wrap md:flex-nowrap mb-12">
          <AnimatePresence mode="wait">
            {loading &&
              [0, 1].map((i) => (
                <SkeletonCard
                  key={i}
                  borderColor={borderColors[i % borderColors.length]}
                  bgGradient={bgGradients[i % bgGradients.length]}
                />
              ))}

            {!loading &&
              visibleImages.map((img, i) => {
                const borderColor = borderColors[(index + i) % borderColors.length];
                const bgGradient = bgGradients[(index + i) % bgGradients.length];
                const isHovered = hoveredImage === img._id;

                return (
                  <motion.div
                    key={img._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    onHoverStart={() => setHoveredImage(img._id)}
                    onHoverEnd={() => setHoveredImage(null)}
                    className="group relative"
                  >
                    {/* Main Card */}
                    <div
                      className={`relative border-2 border-dashed ${borderColor} rounded-2xl p-5 bg-gradient-to-br ${bgGradient} shadow-xl w-[340px] sm:w-[400px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer`}
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-xl">
                        <motion.img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-[220px] sm:h-[260px] object-cover"
                          animate={{ scale: isHovered ? 1.1 : 1 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Overlay with Icons */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                        >
                          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <motion.div
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
                              transition={{ delay: 0.1 }}
                              className="flex items-center gap-1 text-white text-sm"
                            >
                              <FaHeart className="text-pink-400" />
                              <span>24</span>
                            </motion.div>
                            <motion.div
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                              transition={{ delay: 0.2 }}
                              className="flex items-center gap-1 text-white text-sm"
                            >
                              <FaRegEye className="text-blue-400" />
                              <span>156</span>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Image Number Badge */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1E293B] shadow-lg">
                          #{index + i + 1}
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-3 right-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg bg-gradient-to-r ${borderColor.replace('border-', 'from-').replace(']', '/90]')}`}>
                            {img.category || "Classroom"}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-4 text-center">
                        <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {img.title}
                        </h3>
                        
                        {/* Date */}
                        <p className="text-xs text-[#64748B] mt-1">
                          {new Date(img.createdAt || Date.now()).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>

                      {/* Corner Decoration */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-2 -right-2 w-6 h-6"
                      >
                        <FaStar className="text-yellow-400 drop-shadow-lg" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>

        {/* Enhanced Controls */}
        {!loading && images.length > 2 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-6"
            >
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.15, x: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-1 rounded-full bg-white/20 backdrop-blur-sm"></div>
                <span className="relative text-white text-2xl font-light">←</span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/30"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.15, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-1 rounded-full bg-white/20 backdrop-blur-sm"></div>
                <span className="relative text-white text-2xl font-light">→</span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/30"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </motion.div>

            {/* Enhanced Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {Array.from({ length: Math.ceil(images.length / 2) }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setIndex(i * 2)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                >
                  <div
                    className={`transition-all duration-300 ${
                      Math.floor(index / 2) === i
                        ? "w-10 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                        : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
                    }`}
                  />
                  {Math.floor(index / 2) === i && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-0 rounded-full bg-blue-400/30 blur-md"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              View Full Gallery
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}