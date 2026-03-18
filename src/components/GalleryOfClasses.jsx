import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

// Professional color palette
const borderColors = [
  "border-[#3B82F6]", // Blue
  "border-[#10B981]", // Green
  "border-[#F59E0B]", // Orange
  "border-[#8B5CF6]", // Purple
  "border-[#EC4899]", // Pink
  "border-[#6366F1]", // Indigo
];

const bgGradients = [
  "from-blue-50 to-indigo-50",
  "from-emerald-50 to-teal-50",
  "from-amber-50 to-orange-50",
  "from-purple-50 to-violet-50",
  "from-pink-50 to-rose-50",
  "from-indigo-50 to-blue-50",
];

/* Professional Skeleton Loader */
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

  const nextSlide = () =>
    setIndex((prev) => (prev + 2) % images.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 2 + images.length) % images.length);

  const visibleImages = images.length
    ? [images[index], images[(index + 1) % images.length]]
    : [];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white text-center overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute left-0 top-20 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute right-0 bottom-20 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Heading with Underline */}
        <div className="inline-block mb-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-3">
            Gallery of Our Classes
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full mx-auto"></div>
        </div>

        <p className="text-lg sm:text-xl text-[#64748B] mb-12 max-w-2xl mx-auto">
          Explore our colorful classrooms where learning meets creativity, fun,
          and imagination!
        </p>

        {/* SLIDER */}
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

                return (
                  <motion.div
                    key={img._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`border-2 border-dashed ${borderColor} rounded-2xl p-4 bg-gradient-to-br ${bgGradient} shadow-xl w-[340px] sm:w-[400px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <motion.img
                        src={img.url}
                        alt={img.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {/* Image Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#1E293B]">
                      {img.title}
                    </h3>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        {!loading && images.length > 2 && (
          <>
            <div className="flex items-center justify-center space-x-8">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-[#3B82F6]/20"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-[#3B82F6] mx-auto group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-[#3B82F6]/20"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-[#3B82F6] mx-auto group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* DOTS */}
            <div className="flex justify-center mt-10 space-x-2">
              {Array.from({ length: Math.ceil(images.length / 2) }).map(
                (_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setIndex(i * 2)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`transition-all duration-300 ${
                      Math.floor(index / 2) === i
                        ? "w-8 h-2.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full"
                        : "w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400"
                    }`}
                  />
                )
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}