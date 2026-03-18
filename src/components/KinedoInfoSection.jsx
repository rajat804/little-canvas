import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Shield, Users, Calendar, MessageCircle, Star, Award } from "lucide-react";

const faqs = [
  { 
    q: "What makes Golden Step different from other preschools?", 
    a: "Golden Step integrates the independence-focused Montessori Curriculum with the structured, hands-on learning of the Golden Step Lab. This unique combination ensures children move from concrete practice to abstract mastery, delivering deep conceptual understanding far superior to standard rote learning.", 
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-[#3B82F6] to-[#1E3A8A]",
    lightColor: "from-blue-50 to-indigo-50",
  },
  { 
    q: "What exactly is the Golden Step Lab, and how does my child use it?", 
    a: "The Golden Step Lab is a specialized, hands-on learning zone filled with hundreds of scientifically designed materials. Here, children work independently at their own pace, using the materials to physically discover and master core concepts in math, language, and life skills.", 
    icon: <Award className="w-6 h-6" />,
    color: "from-[#10B981] to-[#065F46]",
    lightColor: "from-emerald-50 to-green-50",
  },
  { 
    q: "What is the fundamental principle of Montessori education?", 
    a: "The core principle of Montessori education, based on the work of Dr. Maria Montessori, is to facilitate the child's natural desire to learn within a \"prepared environment,\" fostering independence, concentration, and self-discipline.", 
    icon: <Shield className="w-6 h-6" />,
    color: "from-[#8B5CF6] to-[#5B21B6]",
    lightColor: "from-purple-50 to-violet-50",
  },
  { 
    q: "Is the Golden Step curriculum the same as the pure Montessori method?", 
    a: "No. Golden Step curriculum is Montessori-inspired but is an evolved, practical curriculum. It combines Montessori's independence principles with the structure and assessments needed to align with modern educational standards and ensure seamless readiness for primary school.", 
    icon: <Users className="w-6 h-6" />,
    color: "from-[#EC4899] to-[#9D174D]",
    lightColor: "from-pink-50 to-rose-50",
  },
  { 
    q: "What does a typical day look like?", 
    a: "Our daily routine blends structured classroom work, free play, and a dedicated hour of hands-on Canvas Lab exploration. Children engage in circle time, Montessori work periods, outdoor play, and creative activities, all designed to foster holistic development.", 
    icon: <Calendar className="w-6 h-6" />,
    color: "from-[#F59E0B] to-[#B45309]",
    lightColor: "from-amber-50 to-orange-50",
  },
];

export default function KinedoInfoSection() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] min-h-screen p-6 md:p-12 overflow-hidden relative">
      
      {/* Professional Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* FAQ Section - Professional Cards */}
      <div className="max-w-4xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-[#1E293B] text-white text-sm font-semibold rounded-full mb-4"
          >
            ❓ Frequently Asked Questions
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E293B] mb-3">
            Know More About Golden Step
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.button
                onClick={() => toggleFAQ(i)}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`
                  w-full flex items-center justify-between p-6 text-left
                  rounded-xl transition-all duration-300
                  bg-white shadow-md hover:shadow-xl
                  border-l-4 border-[#3B82F6] hover:border-l-8
                  ${activeFAQ === i ? "rounded-b-none border-l-[#8B5CF6]" : ""}
                `}
                style={{
                  borderLeftColor: activeFAQ === i ? "#8B5CF6" : faq.color.split(" ")[1].replace("to-", ""),
                }}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`p-2 rounded-lg bg-gradient-to-r ${faq.color} text-white shadow-lg`}
                  >
                    {faq.icon}
                  </motion.div>
                  <span className="font-bold text-[#1E293B] text-lg sm:text-xl">
                    {faq.q}
                  </span>
                </div>
                
                <motion.div
                  animate={{ rotate: activeFAQ === i ? 180 : 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${faq.color} text-white flex items-center justify-center text-xl font-bold shadow-md`}
                >
                  {activeFAQ === i ? "−" : "+"}
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: activeFAQ === i ? "auto" : 0,
                  opacity: activeFAQ === i ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className={`px-6 py-5 ml-16 bg-gradient-to-r ${faq.lightColor} rounded-b-xl text-[#334155] font-medium text-base sm:text-lg leading-relaxed border-l-4 border-[#3B82F6]/30`}>
                  <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.a}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Professional Read More Button */}
        <div className="flex justify-center mt-10">
          <Link to="/faq">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Read More FAQs
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
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
              
              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* === PROFESSIONAL ANIMATED CIRCULAR IMAGE === */}
      <div className="flex justify-center items-center -mt-10 relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Professional Outer Rings */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3B82F6]/30 to-[#8B5CF6]/30 blur-xl"
          />
          
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#3B82F6]/30"
          />

          {/* Floating Container */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative p-3 bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full shadow-2xl"
            style={{
              filter: "drop-shadow(0 20px 30px rgba(59,130,246,0.3))",
            }}
          >
            {/* Inner Border */}
            <motion.div 
              className="p-1 bg-white rounded-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="relative overflow-hidden rounded-full"
                style={{
                  width: "320px",
                  height: "320px",
                }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Happy children learning"
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Professional Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Floating Icons */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${20 + i * 25}%`,
                        left: `${10 + i * 20}%`,
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        className="w-2 h-2 bg-yellow-300 rounded-full blur-[1px]"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Corner Stars */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-2 -left-2"
                >
                  <Star className="w-6 h-6 text-purple-300 fill-purple-300" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Floating Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl border border-white/10"
          >
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Joyful Learning Every Day
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </motion.span>
          </motion.div>

          {/* Side Badges */}
          <motion.div
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -right-12 top-1/4 bg-white p-3 rounded-xl shadow-xl border border-[#3B82F6]/20"
          >
            <Heart className="w-5 h-5 text-[#EC4899]" />
          </motion.div>
          
          <motion.div
            animate={{
              x: [0, -10, 0],
              y: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -left-12 bottom-1/4 bg-white p-3 rounded-xl shadow-xl border border-[#10B981]/20"
          >
            <Users className="w-5 h-5 text-[#10B981]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}