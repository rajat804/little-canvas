import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/programs", label: "Programs" },
    { to: "/curriculum", label: "Curriculum" },
    { to: "/contact", label: "Contact Us" },
    { to: "/about-us", label: "About Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/faq", label: "FAQ" },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "SK-001, Sector 112, Noida" },
    { icon: <FaPhone />, text: "+91 95604 07854" },
    { icon: <FaEnvelope />, text: "Goldensteppreschool@gmail.com" },
  ];

  const socialLinks = [
    { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/littlegoldenstep?igsh=MWIzdTIxY3dsOGhjdg==", label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: <FaFacebookF size={20} />, url: "https://www.facebook.com/littlegoldenstep/", label: "Facebook", color: "hover:text-[#1877F2]" },
    // { icon: <FaYoutube size={20} />, url: "https://www.youtube.com/@LittleCanvasSchool", label: "YouTube", color: "hover:text-[#FF0000]" },
    // { icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/company/littlecanvasschool/", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] pt-16 pb-8 overflow-hidden">
      
      {/* Professional Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo & About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={assets.GoldenStep}
                alt="Golden Step Logo"
                className="w-64 h-auto "
              />
            </motion.div>
            
            <p className="text-gray-300 text-sm text-center lg:text-left leading-relaxed">
              Nurturing young minds through innovative education, fostering creativity, and building a strong foundation for lifelong learning.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mt-2">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="flex items-center gap-2 text-gray-300 text-sm group"
                >
                  <span className="text-[#3B82F6] group-hover:text-[#8B5CF6] transition-colors">
                    {item.icon}
                  </span>
                  <span className="group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Quick Links
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </h3>
            
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-1 group"
                  >
                    <motion.span
                      whileHover={{ x: 3 }}
                      className="text-[#3B82F6] text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      →
                    </motion.span>
                    <span className="group-hover:translate-x-1 inline-block transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Our Programs
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#10B981] to-[#3B82F6]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </h3>
            
            <div className="space-y-2">
              {["Play Group (1.5-2 yrs)", "Toddler (2-3 yrs)", "Nursery (3-4 yrs)", "LKG/UKG (4-6 yrs)", "Daycare Facility"].map((program, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#10B981] to-[#3B82F6] rounded-full group-hover:scale-150 transition-transform"></span>
                  {program}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Stay Connected
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </h3>

            <p className="text-gray-300 text-sm mb-4 text-center lg:text-left">
              Subscribe to our newsletter for updates and parenting tips!
            </p>

            {/* Newsletter Input */}
            <motion.div 
              className="relative w-full mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1 top-1 px-4 py-1.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-sm rounded-lg font-medium"
              >
                Subscribe
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 ${social.color} hover:bg-white/20 transition-all duration-300 border border-white/10`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider with Animation */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent mb-6"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm text-center"
          >
            © {currentYear} Golden Step Preschool. All rights reserved.
          </motion.div>

          {/* Policy Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 text-sm"
          >
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm flex items-center gap-1"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-400 inline-block"
            >
              ❤️
            </motion.span>
            <span>for children</span>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
        >
          <motion.svg
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </motion.svg>
        </motion.button>
      </div>
    </footer>
  );
}