"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  GiBabyFace,
  GiBookAura,
  GiPencilBrush,
  GiRocket,
  GiHeartInside,
  GiBrain,
  GiPaintBrush,
  GiPublicSpeaker,
  GiWorld,
  GiLotus,
  GiSparkles,
  GiButterfly,
} from "react-icons/gi";
import { MdChildCare } from "react-icons/md";
import assets from "../assets/assets";

/* ---------- SCROLL TO HASH FIX ---------- */
const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

/* ---------- Floating Sparkles ---------- */
const FloatingSparkles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(16)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-yellow-400 opacity-70"
        initial={{ y: -100, x: `${Math.random() * 100}%` }}
        animate={{ y: "120vh", x: `${Math.random() * 100}%`, rotate: 360 }}
        transition={{
          duration: 12 + Math.random() * 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <GiSparkles className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" />
      </motion.div>
    ))}
  </div>
);

/* ---------- Program Data --------- - */
const programs = [
  {
    level: "Level 0",
    title: "Play Group",
    age: "1.5 - 2 Years",
    icon: <GiBabyFace className="w-14 h-14 sm:w-20 sm:h-20 text-white drop-shadow-md" />,
    gradient: "from-pink-300 to-rose-400",
    bg: "bg-pink-50",
    foundation: "Building early sensory awareness and basic motor coordination through playful exploration.",
    physical: "Develops basic muscle control, begins walking steadily, and improves fine motor skills like grasping and holding objects.",
    socioEmotional: "Recognizes familiar faces, responds to simple instructions, and begins expressing basic emotions.",
    cognitive: [
      { icon: <GiBrain className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, title: "Sensorial", text: "Explores textures, shapes, and colors through hands-on activities and sensory play." },
      { icon: <GiPaintBrush className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" />, title: "Early Math", text: "Introduced to numbers through counting objects, rhymes, and visual recognition." },
      { icon: <GiPublicSpeaker className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />, title: "Vocabulary", text: "Learns basic words related to daily life like family members, toys, and surroundings." },
      { icon: <GiPencilBrush className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />, title: "Art & Craft", text: "Engages in scribbling, coloring, and simple creative activities to build expression." },
    ],
    language: "Listens to rhymes and stories, responds to sounds, and begins speaking simple words or short phrases.",
  },

  {
    level: "Level 1",
    title: "Toddler",
    age: "2 – 3 Years",
    icon: <GiBookAura className="w-14 h-14 sm:w-20 sm:h-20" />,
    gradient: "from-purple-300 to-indigo-400",
    bg: "bg-purple-50",
    foundation: "Developing independence, focus, and early communication through structured play.",
    physical: "Improves balance and coordination, performs simple actions like jumping, catching, and controlled hand movements.",
    socioEmotional: "Begins social interaction, shares with peers, and follows basic routines with growing independence.",
    cognitive: [
      { icon: <GiBrain className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, title: "Sensorial", text: "Identifies shapes, sizes, and patterns while solving simple puzzles and sorting objects." },
      { icon: <GiPaintBrush className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" />, title: "Math", text: "Counts objects up to 20 and begins understanding order, comparison, and grouping." },
      { icon: <GiWorld className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />, title: "EVS", text: "Learns about body parts, animals, fruits, and everyday surroundings." },
    ],
    language: "Speaks in short sentences, understands instructions, and begins recognizing letters and simple words.",
  },

  {
    level: "Level 2",
    title: "Nursery",
    age: "3 – 4 Years",
    icon: <GiPencilBrush className="w-14 h-14 sm:w-20 sm:h-20" />,
    gradient: "from-orange-300 to-amber-400",
    bg: "bg-amber-50",
    foundation: "Strengthening early literacy, numeracy, and creative thinking through structured learning.",
    physical: "Enhances coordination with activities like drawing, tracing, and performing tasks requiring hand control.",
    socioEmotional: "Becomes more independent, expresses thoughts clearly, and understands roles of people around them.",
    cognitive: [
      { icon: <GiBrain className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, title: "Sensorial", text: "Recognizes patterns, sequences, and relationships between objects and shapes." },
      { icon: <GiPaintBrush className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" />, title: "Math", text: "Counts beyond 100 and understands basic addition and number relationships." },
      { icon: <GiWorld className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />, title: "EVS", text: "Explores topics like transport, food, nature, and basic cultural awareness." },
    ],
    language: "Reads and writes simple words, forms sentences, and communicates ideas more clearly.",
    hindi: "Recognizes and writes basic Hindi alphabets and simple words.",
  },

  {
    level: "Level 3",
    title: "LKG/UKG",
    age: "4 - 6 Years",
    icon: <GiRocket className="w-14 h-14 sm:w-20 sm:h-20" />,
    gradient: "from-sky-300 to-cyan-400",
    bg: "bg-cyan-50",
    foundation: "Preparing children for primary school with advanced thinking, reasoning, and academic readiness.",
    physical: "Performs coordinated physical tasks with precision and participates actively in sports and activities.",
    socioEmotional: "Understands emotions, builds friendships, and learns values like responsibility and discipline.",
    cognitive: [
      { icon: <GiBrain className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, title: "Sensorial", text: "Solves logical puzzles, identifies patterns, and applies reasoning skills." },
      { icon: <GiPaintBrush className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" />, title: "Math", text: "Works with numbers up to 1000, performs addition/subtraction, and solves simple problems." },
      { icon: <GiWorld className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />, title: "EVS", text: "Understands continents, oceans, environment, and basic geography concepts." },
    ],
    language: "Reads fluently, writes sentences, and understands grammar basics like nouns and verbs.",
    hindi: "Achieves reading and writing fluency with strong foundational Hindi skills.",
  },

  {
    level: "Level 4",
    title: "Daycare Facility",
    age: "2 - 6 Years",
    icon: <MdChildCare className="w-14 h-14 sm:w-20 sm:h-20" />,
    gradient: "from-green-300 to-emerald-400",
    bg: "bg-green-50",
    foundation: "Providing a safe, nurturing, and engaging environment for holistic child development beyond school hours.",
    physical: "Encourages active play, rest routines, and healthy physical development through daily activities.",
    socioEmotional: "Creates a caring environment where children feel secure, valued, and socially connected.",
    cognitive: [
      { icon: <GiBrain className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, title: "Activities", text: "Includes storytelling, games, and creative play to keep children engaged and learning." },
      { icon: <GiPaintBrush className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" />, title: "Routine", text: "Follows structured daily routines including meals, rest, and playtime." },
      { icon: <GiWorld className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />, title: "Environment", text: "Provides a safe, hygienic, and child-friendly environment with proper care." },
    ],
    language: "Encourages communication through interaction, storytelling, and guided activities.",
  },
];

/* ---------- Program Section ---------- */
const ProgramSection = ({ prog, idx }) => {
  const sectionId = prog.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      id={sectionId}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className={`rounded-3xl ${prog.bg} p-6 sm:p-10 shadow-2xl border-4 border-white mb-10 sm:mb-12`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className={`bg-gradient-to-r ${prog.gradient} p-4 sm:p-6 rounded-full shadow-lg`}>
            {prog.icon}
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">{prog.title}</h2>
            <p className="text-lg sm:text-xl font-semibold text-purple-600">{prog.level}</p>
            <p className="text-base sm:text-lg text-gray-600">({prog.age})</p>
          </div>
        </div>
      </div>

      {/* Foundation */}
      <div className="bg-white bg-opacity-80 rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-inner">
        <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed">
          {prog.foundation}
        </p>
      </div>

      {/* Physical */}
      <div className="bg-pink-50 rounded-3xl p-4 sm:p-6 mb-5 sm:mb-6 flex gap-3 sm:gap-4">
        <GiHeartInside className="w-10 h-10 sm:w-12 sm:h-12 text-pink-600 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-pink-600 text-lg sm:text-xl mb-2">Physical (Gross & Fine Motor)</h4>
          <p className="text-gray-700 text-sm sm:text-base">{prog.physical}</p>
        </div>
      </div>

      {/* Socio-Emotional */}
      <div className="bg-purple-50 rounded-3xl p-4 sm:p-6 mb-5 sm:mb-6 flex gap-3 sm:gap-4">
        <GiHeartInside className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-purple-600 text-lg sm:text-xl mb-2">Socio-Emotional</h4>
          <p className="text-gray-700 text-sm sm:text-base">{prog.socioEmotional}</p>
        </div>
      </div>

      {/* Cognitive */}
      <div className="bg-blue-50 rounded-3xl p-4 sm:p-6 mb-5 sm:mb-6">
        <h4 className="font-bold text-blue-600 text-lg sm:text-xl mb-3 sm:mb-4">
          Cognitive (Sensorial, Math, Creative, Environment)
        </h4>
        <div className="space-y-3 sm:space-y-4">
          {prog.cognitive.map((c, i) => (
            <div key={i} className="flex gap-3 sm:gap-4 items-start">
              {c.icon}
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{c.title}:</p>
                <p className="text-gray-700 text-xs sm:text-sm">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="bg-green-50 rounded-3xl p-4 sm:p-6 mb-5 sm:mb-6 flex gap-3 sm:gap-4">
        <GiPublicSpeaker className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-green-600 text-lg sm:text-xl mb-2">Language (English)</h4>
          <p className="text-gray-700 text-sm sm:text-base">{prog.language}</p>
        </div>
      </div>

      {/* Hindi */}
      {prog.hindi && (
        <div className="bg-orange-50 rounded-3xl p-4 sm:p-6 flex gap-3 sm:gap-4">
          <GiLotus className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-orange-600 text-lg sm:text-xl mb-2">Hindi Language</h4>
            <p className="text-gray-700 text-sm sm:text-base">{prog.hindi}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

/* ---------- Main Component ---------- */
export default function Programs() {
  return (
    <div className="overflow-hidden">

      {/* ==================== HERO BANNER - PROGRAMS ==================== */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-700 mt-20">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={assets.programs}
            alt="Children learning and playing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3"
          >
            Our Programs
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3"
          >
            Full curriculum details - every milestone, every skill
          </motion.h1>

        </div>

        {/* Wavy Bottom Shape */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 md:h-24 text-white"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C360,100 1080,20 1440,60 L1440,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>
      {/* ================================================================== */}

      {/* Main Content */}
      <section className=" bg-gradient-to-b from-yellow-50 via-pink-50 to-cyan-50 relative overflow-hidden">
        <ScrollToHashElement />
        <FloatingSparkles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div className="text-center mb-12 sm:mb-16">
            

            
          </motion.div>

          {/* All Programs */}
          <div className="space-y-10 sm:space-y-12">
            {programs.map((prog, idx) => (
              <ProgramSection key={prog.title} prog={prog} idx={idx} />
            ))}
          </div>

          {/* Enroll Button */}
          <motion.div className="text-center mt-16 sm:mt-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 sm:px-14 py-4 sm:py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg sm:text-2xl rounded-full shadow-2xl flex items-center gap-3 sm:gap-4 mx-auto hover:shadow-pink-400/50"
            >
              <GiRocket className="w-8 h-8 sm:w-10 sm:h-10" />
              Enroll Now & Spark Joy!
              <GiSparkles className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

