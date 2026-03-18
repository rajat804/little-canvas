import { motion } from "framer-motion";
import { FaHeart, FaStar, FaLeaf, FaSun, FaMoon, FaCloud } from "react-icons/fa";

const values = [
  {
    number: "01",
    title: "Nurturing the Whole Child",
    text: "We focus on overall development - cultivating life skills, critical thinking, and social abilities.",
    color: "from-blue-500 to-indigo-600",
    lightColor: "from-blue-50 to-indigo-50",
    icon: "🌱",
    icon2: <FaLeaf className="text-green-400" />,
    description: "Holistic growth in every aspect"
  },
  {
    number: "02",
    title: "Joyful Exploration",
    text: "Children discover and learn naturally in a stimulating, happy environment.",
    color: "from-emerald-500 to-teal-600",
    lightColor: "from-emerald-50 to-teal-50",
    icon: "🔍",
    icon2: <FaSun className="text-yellow-400" />,
    description: "Learning through curiosity"
  },
  {
    number: "03",
    title: "Independent Mastery",
    text: "Building self-reliance through practice, allowing children to learn at their own pace.",
    color: "from-purple-500 to-violet-600",
    lightColor: "from-purple-50 to-violet-50",
    icon: "🌟",
    icon2: <FaStar className="text-yellow-400" />,
    description: "Confidence through practice"
  },
  {
    number: "04",
    title: "Child-Centric Learning",
    text: "Teachers guide, observe, and support - children lead their learning journey.",
    color: "from-pink-500 to-rose-600",
    lightColor: "from-pink-50 to-rose-50",
    icon: "👧",
    icon2: <FaHeart className="text-pink-400" />,
    description: "Every child leads their path"
  },
  {
    number: "05",
    title: "Confidence & Individuality",
    text: "Celebrating unique talents and building self-belief in every child.",
    color: "from-orange-500 to-amber-600",
    lightColor: "from-orange-50 to-amber-50",
    icon: "🦋",
    icon2: <FaCloud className="text-blue-300" />,
    description: "Unique talents shine bright"
  },
  {
    number: "06",
    title: "Future Readiness",
    text: "Preparing children academically and socially for lifelong success.",
    color: "from-indigo-500 to-blue-600",
    lightColor: "from-indigo-50 to-blue-50",
    icon: "📚",
    icon2: <FaMoon className="text-indigo-400" />,
    description: "Prepared for tomorrow"
  },
];

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

export default function ValuesAndMotto() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      
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
          className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.4, 1, 1.4],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
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
            ✦ GUIDING PRINCIPLES ✦
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4">
            What We Believe
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"
          />
          
          <p className="text-[#64748B] text-lg mt-6 max-w-2xl mx-auto">
            Six core values that shape every moment of your child's journey with us
          </p>
        </motion.div>

        {/* Values Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <motion.div
              key={item.number}
              variants={fadeInUp(idx * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/80 cursor-pointer"
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`,
                  padding: "2px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Top Accent Line */}
              <motion.div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                whileHover={{ width: "60px" }}
                transition={{ duration: 0.3 }}
              />

              {/* Header with Number and Icon */}
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} text-white font-bold text-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-xl"
                    initial={{ x: "-100%", skewX: "-20deg" }}
                    whileHover={{ x: "200%", skewX: "-20deg" }}
                    transition={{ duration: 0.8 }}
                  />
                  {item.number}
                </motion.div>
                
                {/* Floating Secondary Icon */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-3xl"
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* Title with Gradient Hover */}
              <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1E293B] group-hover:to-[#4A5568] transition-all duration-300">
                {item.title}
              </h3>

              {/* Description Tagline */}
              <p className="text-sm font-medium text-[#3B82F6] mb-3 opacity-80">
                {item.description}
              </p>

              {/* Main Text */}
              <p className="text-[#475569] text-base leading-relaxed mb-6">
                {item.text}
              </p>

              {/* Decorative Elements */}
              <div className="flex items-center justify-between">
                {/* Small Icons Row */}
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  ))}
                </div>

                {/* Secondary Icon with Animation */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="text-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {item.icon2}
                </motion.div>
              </div>

              {/* Corner Accents */}
              <motion.div
                className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-200"
                whileHover={{ scale: 1.5, backgroundColor: "#3B82F6" }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gray-200"
                whileHover={{ scale: 1.5, backgroundColor: "#8B5CF6" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
            />
            <p className="relative text-lg text-[#475569] italic max-w-2xl mx-auto px-8">
              "These values aren't just words on a wall — they're lived every day in our classrooms."
            </p>
          </div>
          
          {/* Signature Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
          />
        </motion.div>
      </div>
    </section>
  );
}