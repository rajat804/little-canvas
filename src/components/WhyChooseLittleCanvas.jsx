import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GiDiamondHard, 
  GiBrain, 
  GiHeartInside,
  GiSparkles,
  GiStarSwirl,
  GiFlowerTwirl,
  GiPencil,
  GiPaintBrush,
  GiBalloons
} from "react-icons/gi";
import { 
  FaRegGem, 
  FaRocket, 
  FaHeart, 
  FaStar, 
  FaLeaf,
  FaSun,
  FaChild,
  FaPaintBrush,
  FaBookOpen
} from "react-icons/fa";
import { MdVerified, MdSchool } from "react-icons/md";
import { RiPlayCircleFill } from "react-icons/ri";
import PopupForm from "./PopupForm";

// Unique child images - study, drawing, play karte hue
// Sabki height-width same hai aur aspect ratio consistent
const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1000&q=80", // Child studying with book - square crop
    alt: "Child studying with book"
  },
  {
    url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1000&q=80", // Child drawing/coloring - square crop
    alt: "Child drawing with colors"
  },
  {
    url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1000&q=80", // Child playing with toys - square crop
    alt: "Child playing with toys"
  },
];

const sections = [
  {
    num: "01",
    icon: <GiDiamondHard />,
    icon2: <FaRegGem />,
    icon3: <GiSparkles />,
    icon4: <FaBookOpen />,
    title: "Superior Curriculum",
    desc: "Montessori-inspired with modern updates for measurable outcomes.",
    points: [
      "Montessori-Inspired & Modernized",
      "Structured Excellence",
      "Optimal 1:15 Teacher Ratio",
      "Future Readiness Focus"
    ],
    gradient: "from-blue-500 to-indigo-600",
    lightGradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
    bgPattern: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent",
    stats: "15+ Years",
    imageIcon: "📚",
    imageCaption: "Little learners exploring books",
  },
  {
    num: "02",
    icon: <GiBrain />,
    icon2: <FaRocket />,
    icon3: <GiStarSwirl />,
    icon4: <FaPaintBrush />,
    title: "6T Learning Approach",
    desc: "Systematic methodology with integrated technology.",
    points: [
      "Toys & Games based learning",
      "Structured Theory & Timetable",
      "Well-trained Teachers",
      "Technology Integration"
    ],
    gradient: "from-emerald-500 to-teal-600",
    lightGradient: "from-emerald-50 to-green-50",
    iconColor: "text-emerald-600",
    bgPattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100 via-transparent to-transparent",
    stats: "6D Method",
    imageIcon: "🎨",
    imageCaption: "Creative minds at work",
  },
  {
    num: "03",
    icon: <GiHeartInside />,
    icon2: <FaHeart />,
    icon3: <GiFlowerTwirl />,
    icon4: <RiPlayCircleFill />,
    title: "Child-Centric Development",
    desc: "Every child learns at their own pace with guided discovery.",
    points: [
      "Focus on Individual Child",
      "Build Independence & Confidence",
      "Character Development",
      "Guided Discovery Approach"
    ],
    gradient: "from-pink-500 to-rose-600",
    lightGradient: "from-pink-50 to-rose-50",
    iconColor: "text-pink-600",
    bgPattern: "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-100 via-transparent to-transparent",
    stats: "100% Individual",
    imageIcon: "🧸",
    imageCaption: "Joyful play and discovery",
  }
];

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

export default function WhyChooseGoldenStep() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <section className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        
        {/* Premium Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute top-20 left-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.4, 1, 1.4],
              x: [0, -60, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
          />
          
          {/* Floating Child Icons */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-40 left-[15%] text-blue-300/20 text-4xl"
          >
            <FaChild />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute bottom-40 right-[15%] text-pink-300/20 text-4xl"
          >
            <GiPaintBrush />
          </motion.div>
          
          {/* Floating Particles */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0.1,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [null, Math.random() * 60 - 30],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{ 
                duration: 8 + Math.random() * 8, 
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
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
              ✦ WHY FAMILIES TRUST US ✦
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4">
              Why Choose Us
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"
            />
            
            <p className="text-[#64748B] text-lg mt-6 max-w-2xl mx-auto">
              Three powerful reasons why parents trust us with their child's early years
            </p>
          </motion.div>

          {/* Enhanced Cards - With Perfectly Sized Images */}
          <div className="grid gap-10">
            {sections.map((sec, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp(idx * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/80"
              >
                {/* Animated Gradient Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${sec.gradient.split(' ')[1]}, ${sec.gradient.split(' ')[3]})`,
                    padding: "2px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Top Accent Line */}
                <motion.div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${sec.gradient} rounded-full`}
                  whileHover={{ width: "80px" }}
                  transition={{ duration: 0.3 }}
                />

                <div className="grid md:grid-cols-2">
                  {/* Image Side - Perfect Square Aspect Ratio */}
                  <div className={`relative aspect-square md:h-full overflow-hidden group/image ${idx === 1 ? 'md:order-2' : ''}`}>
                    <motion.img
                      src={IMAGES[idx].url}
                      alt={IMAGES[idx].alt}
                      className="w-full h-full object-cover"
                      animate={{ scale: hoveredCard === idx ? 1.15 : 1 }}
                      transition={{ duration: 0.7 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                      animate={{ opacity: hoveredCard === idx ? 0.9 : 0.6 }}
                    />
                    
                    {/* Number Badge with Animation */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="absolute top-6 left-6"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full border border-white/30"
                        />
                        <div className="relative w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-black shadow-2xl">
                          <span className={`bg-gradient-to-r ${sec.gradient} bg-clip-text text-transparent`}>
                            {sec.num}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating Activity Icons - Matching the image activity */}
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-6 right-6 text-white text-5xl drop-shadow-2xl"
                    >
                      {idx === 0 && "📚"}
                      {idx === 1 && "🎨"}
                      {idx === 2 && "🧸"}
                    </motion.div>

                    {/* Stats Badge with Activity Tag */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
                    >
                      <span className="text-white text-sm font-semibold flex items-center gap-2">
                        <span>{sec.imageIcon}</span>
                        {sec.stats}
                      </span>
                    </motion.div>

                    {/* Image Caption */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl"
                    >
                      <span className="text-xs font-medium text-[#1E293B]">
                        {sec.imageCaption}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content Side with Enhanced Design */}
                  <div className={`p-8 lg:p-10 ${idx === 1 ? 'md:order-1' : ''}`}>
                    {/* Header with Icon */}
                    <motion.div
                      whileHover={{ x: idx === 1 ? -10 : 10 }}
                      className={`inline-flex items-center gap-4 mb-6 p-4 rounded-2xl bg-gradient-to-r ${sec.gradient} text-white shadow-xl relative overflow-hidden group/header`}
                    >
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        initial={{ x: "-100%", skewX: "-20deg" }}
                        whileHover={{ x: "200%", skewX: "-20deg" }}
                        transition={{ duration: 0.8 }}
                      />
                      
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-3xl relative z-10"
                      >
                        {sec.icon}
                      </motion.div>
                      <div className="relative z-10">
                        <span className="text-sm font-semibold opacity-90 block">Section {sec.num}</span>
                        <h3 className="text-2xl font-bold">{sec.title}</h3>
                      </div>
                      
                      {/* Floating Secondary Icon */}
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute -right-2 -top-2 text-2xl opacity-50"
                      >
                        {sec.icon4}
                      </motion.div>
                    </motion.div>

                    {/* Description with Verified Icon */}
                    <div className="flex items-start gap-3 mb-6">
                      <MdVerified className={`text-2xl ${sec.iconColor} flex-shrink-0 mt-1`} />
                      <p className="text-[#475569] text-lg leading-relaxed">{sec.desc}</p>
                    </div>

                    {/* Points with Numbered Badges */}
                    <div className="space-y-4 mb-8">
                      {sec.points.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: idx === 1 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ x: idx === 1 ? -5 : 5 }}
                          className="flex items-start gap-3 group/point"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className={`w-6 h-6 rounded-full bg-gradient-to-r ${sec.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5 shadow-md`}
                          >
                            {i + 1}
                          </motion.div>
                          <span className="text-[#334155] group-hover/point:text-[#1E293B] transition-colors">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Activity Tags - Matching Images */}
                    <div className="flex flex-wrap gap-2">
                      {idx === 0 && ["Reading", "Learning", "Discovery"].map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${sec.lightGradient} text-[#475569] border border-gray-200`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {idx === 1 && ["Creative", "Artistic", "Imagination"].map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${sec.lightGradient} text-[#475569] border border-gray-200`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {idx === 2 && ["Playful", "Social", "Happy"].map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${sec.lightGradient} text-[#475569] border border-gray-200`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Corner Dots */}
                    <motion.div
                      className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-200"
                      whileHover={{ scale: 1.5, backgroundColor: sec.iconColor }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gray-200"
                      whileHover={{ scale: 1.5, backgroundColor: sec.iconColor }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="relative inline-block">
              {/* Animated Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"
              />
              
              <motion.button
                onClick={openPopup}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-10 py-5 bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white font-semibold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaStar className="text-yellow-400 group-hover:rotate-12 transition-transform" />
                  Book a Tour Today
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </div>
            
            <p className="text-[#64748B] text-sm mt-4">
              ✦ Limited seats available for the upcoming session ✦
            </p>
          </motion.div>
        </div>
      </section>
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}