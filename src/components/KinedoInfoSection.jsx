import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Heart, 
  Shield, 
  Users, 
  Calendar, 
  MessageCircle,
  HelpCircle,
  Star,
  ChevronRight
} from "lucide-react";

const faqs = [
  { 
    q: "What makes Golden Step different?", 
    a: "We combine Montessori independence with structured, hands-on learning for deeper understanding. Our unique approach ensures children develop both independence and academic readiness.", 
    icon: <Sparkles className="w-5 h-5" />,
    icon2: "✨",
    color: "from-blue-500 to-indigo-600",
    lightColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
  },
  { 
    q: "What is the Golden Step Lab?", 
    a: "A hands-on learning zone with materials for math, language, and life skills exploration. Children work independently with scientifically designed materials that make learning concrete and engaging.", 
    icon: <Heart className="w-5 h-5" />,
    icon2: "🔬",
    color: "from-emerald-500 to-teal-600",
    lightColor: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-200",
  },
  { 
    q: "What's the Montessori principle?", 
    a: "Children learn naturally in a prepared environment, fostering independence and self-discipline. The teacher acts as a guide, observing and supporting each child's unique learning journey.", 
    icon: <Shield className="w-5 h-5" />,
    icon2: "🎓",
    color: "from-purple-500 to-violet-600",
    lightColor: "from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
  },
  { 
    q: "Is it pure Montessori?", 
    a: "Montessori-inspired with modern adaptations for today's educational standards. We blend timeless Montessori principles with contemporary research in early childhood development.", 
    icon: <Users className="w-5 h-5" />,
    icon2: "🔄",
    color: "from-pink-500 to-rose-600",
    lightColor: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200",
  },
  { 
    q: "What's a typical day?", 
    a: "Circle time, Montessori work, outdoor play, creative activities, and Lab exploration. Each day balances structured learning with free play, ensuring holistic development.", 
    icon: <Calendar className="w-5 h-5" />,
    icon2: "📅",
    color: "from-orange-500 to-amber-600",
    lightColor: "from-orange-50 to-amber-50",
    borderColor: "border-orange-200",
  },
];

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.5, ease: "easeOut" } },
});

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredFAQ, setHoveredFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 md:px-8 overflow-hidden relative">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
        />
        
        {/* Floating Question Marks */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.1,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: [null, Math.random() * 50 - 25],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute text-blue-300/20 text-2xl"
          >
            ?
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-4 shadow-lg"
          >
            ✦ GOT QUESTIONS? ✦
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4">
            Frequently Asked Questions
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"
          />
          
          <p className="text-[#64748B] text-lg mt-6 max-w-2xl mx-auto">
            Everything you need to know about Golden Step Preschool
          </p>
        </motion.div>

        {/* FAQ List with Enhanced Cards */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onHoverStart={() => setHoveredFAQ(i)}
              onHoverEnd={() => setHoveredFAQ(null)}
              className="relative group"
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${faq.color.split(' ')[1]}, ${faq.color.split(' ')[3]})`,
                  padding: "2px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* FAQ Card */}
              <div className={`relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 ${faq.borderColor}`}>
                {/* Question Button */}
                <motion.button
                  onClick={() => toggleFAQ(i)}
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative w-12 h-12 rounded-xl bg-gradient-to-r ${faq.color} text-white flex items-center justify-center shadow-lg group/icon`}
                    >
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/30 rounded-xl"
                        initial={{ x: "-100%", skewX: "-20deg" }}
                        whileHover={{ x: "200%", skewX: "-20deg" }}
                        transition={{ duration: 0.8 }}
                      />
                      {faq.icon}
                      
                      {/* Floating Secondary Icon */}
                      <motion.span
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-1 -right-1 text-xs bg-white rounded-full w-4 h-4 flex items-center justify-center shadow-md"
                      >
                        {faq.icon2}
                      </motion.span>
                    </motion.div>
                    
                    <div>
                      <span className="font-semibold text-[#1E293B] text-lg">{faq.q}</span>
                      {/* Question Number */}
                      <span className="block text-xs text-[#64748B] mt-1">
                        Question {i + 1} of {faqs.length}
                      </span>
                    </div>
                  </div>
                  
                  {/* Toggle Icon with Animation */}
                  <motion.div
                    animate={{ rotate: activeFAQ === i ? 180 : 0 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${faq.color} text-white flex items-center justify-center text-xl font-bold shadow-md`}
                  >
                    {activeFAQ === i ? "−" : "+"}
                  </motion.div>
                </motion.button>

                {/* Answer Section */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeFAQ === i ? "auto" : 0,
                    opacity: activeFAQ === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className={`px-6 pb-6 pl-20 pr-6 bg-gradient-to-r ${faq.lightColor}`}>
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      {/* Decorative Quote Mark */}
                      <span className="absolute -left-4 top-0 text-4xl text-gray-300/50">"</span>
                      <p className="text-[#475569] leading-relaxed relative z-10">
                        {faq.a}
                      </p>
                      
                      {/* Helpful Section */}
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200/50">
                        <span className="text-xs text-[#64748B]">Was this helpful?</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="text-xs bg-white px-3 py-1 rounded-full shadow-sm text-[#3B82F6]"
                        >
                          Yes
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="text-xs bg-white px-3 py-1 rounded-full shadow-sm text-[#64748B]"
                        >
                          No
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Corner Decorations */}
                <motion.div
                  animate={{ scale: hoveredFAQ === i ? 1.5 : 1 }}
                  className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-gray-200"
                />
                <motion.div
                  animate={{ scale: hoveredFAQ === i ? 1.5 : 1 }}
                  className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-gray-200"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Read More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="relative inline-block">
            {/* Animated Background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
            />
            
            <Link to="/faq">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View All FAQs
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
          
          {/* Contact Option */}
          <p className="text-[#64748B] text-sm mt-6 flex items-center justify-center gap-2">
            <span>Still have questions?</span>
            <Link to="/contact" className="text-[#3B82F6] font-medium hover:underline inline-flex items-center gap-1">
              Contact us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </p>
        </motion.div>

        {/* FAQ Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-8 mt-12 text-sm text-[#64748B]"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            5 Common Questions
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Quick Answers
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            24/7 Support
          </span>
        </motion.div>
      </div>
    </div>
  );
}