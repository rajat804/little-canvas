import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Nurturing the Whole Child (Holistic Growth)",
    text: "We commit to a full, well-planned program designed to ensure the child's overall development is met. This holistic focus cultivates essential life skills, critical thinking, and social skills.",
    color: "from-[#3B82F6] to-[#1E3A8A]", // Blue gradient
    lightColor: "from-blue-50 to-blue-100",
    icon: "🌱",
  },
  {
    number: "02",
    title: "Joyful Exploration & Discovery",
    text: "Our environment is a joyful and stimulating space where children have the liberty to explore the school and discover new learnings. We support the natural desire in every child to learn by doing and actively exploring the engaging materials.",
    color: "from-[#10B981] to-[#065F46]", // Green gradient
    lightColor: "from-emerald-50 to-green-100",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Independent Mastery",
    text: "Our goal is to ensure the child masters the skill through consistent practice and play. We prioritize self-reliance by building activities that help children spot and correct their own mistakes, allowing them to work independently without always relying on adults.",
    color: "from-[#F59E0B] to-[#B45309]", // Orange gradient
    lightColor: "from-amber-50 to-orange-100",
    icon: "🌟",
  },
  {
    number: "04",
    title: "Child-Centric Learning",
    text: 'We operate on the principle: "We focus on the child, not just the teacher". Teachers act as skilled guides who are well-trained to meet each child\'s specific learning needs. They observe children daily, take notes, and ensure every child receives enough care and attention.',
    color: "from-[#8B5CF6] to-[#5B21B6]", // Purple gradient
    lightColor: "from-purple-50 to-violet-100",
    icon: "👧",
  },
  {
    number: "05",
    title: "Confidence and Individuality",
    text: "We celebrate the unique individuality of every child, prioritizing the development of their unique talents and interests. This personalized approach empowers them to reach their full potential with both confidence and kindness.",
    color: "from-[#EC4899] to-[#9D174D]", // Pink gradient
    lightColor: "from-pink-50 to-rose-100",
    icon: "🦋",
  },
  {
    number: "06",
    title: "Academic Preparedness (Future Readiness)",
    text: "Our education is structured with clear goals to raise children who are academically equipped and socially adaptive for the future. We ensure learning is a means to prepare them for success throughout their lives.",
    color: "from-[#6366F1] to-[#3730A3]", // Indigo gradient
    lightColor: "from-indigo-50 to-blue-100",
    icon: "📚",
  },
];

export default function ValuesAndMotto() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col items-center overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading with Animated Underline */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-[#1E293B]/5 text-[#1E293B] text-sm font-semibold rounded-full mb-4"
          >
            Our Philosophy
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4"
          >
            Our Core Values
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full mx-auto"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#64748B] text-lg mt-6 max-w-2xl mx-auto"
          >
            Six guiding principles that shape every moment of your child's journey with us
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative flex flex-col items-start p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/80 cursor-pointer"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-10`}></div>
              </div>
              
              {/* Top Accent Line */}
              <motion.div 
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-gradient-to-r ${item.color} rounded-full`}
                whileHover={{ width: "80px" }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Number Badge with Icon */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white font-bold text-xl shadow-lg relative overflow-hidden`}
                >
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    initial={{ x: "-100%", skewX: "-20deg" }}
                    whileHover={{ x: "200%", skewX: "-20deg" }}
                    transition={{ duration: 0.8 }}
                  />
                  {item.number}
                </motion.div>
                
                {/* Floating Icon */}
                <motion.span 
                  className="text-3xl"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: idx * 0.2
                  }}
                >
                  {item.icon}
                </motion.span>
              </div>

              {/* Title with Hover Effect */}
              <motion.h3 
                className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1E293B] group-hover:to-[#4A5568] transition-all duration-300"
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <p className="text-[#475569] text-base leading-relaxed font-medium group-hover:text-[#1E293B] transition-colors duration-300">
                {item.text}
              </p>

              {/* Bottom Gradient Line on Hover */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Particles on Hover */}
              <motion.div
                className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-white/50 to-transparent blur-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ 
                  opacity: 0.6, 
                  scale: 1.5,
                  x: [0, -5, 0],
                  y: [0, -5, 0],
                }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full bg-gradient-to-br from-white/50 to-transparent blur-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ 
                  opacity: 0.6, 
                  scale: 1.5,
                  x: [0, 5, 0],
                  y: [0, 5, 0],
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />

              {/* Corner Accents */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#3B82F6] transition-colors duration-300"></div>
              <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#64748B] text-lg italic">
            "These values aren't just words on a wall — they're lived every day in our classrooms."
          </p>
        </motion.div>
      </div>
    </section>
  );
}