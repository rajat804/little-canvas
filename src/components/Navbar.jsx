import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import assets from "../assets/assets";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  const toggleAbout = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsAboutOpen(!isAboutOpen);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (!isMobile) setIsAboutOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsAboutOpen(false);
      }, 200);
    }
  };

  const whatsappNumber = "+919311550069";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white shadow-xl py-2" 
        : "bg-gradient-to-r from-[#0A1929] via-[#0F2744] to-[#1A3A5F] py-4"
    }`}>
      
      {/* Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
      
      <div className="flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo - Clean and Prominent */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={assets.GoldenStep} 
              alt="Golden Step" 
              className={`w-44 sm:w-52 md:w-60 lg:w-72 h-auto transition-all duration-500 `}
            />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className={`md:hidden text-3xl focus:outline-none hover:scale-110 transition-all duration-300 ${
            scrolled ? "text-[#0A1929]" : "text-[#FFD700]"
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } md:max-h-full md:opacity-100 overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out flex flex-col md:flex-row md:items-center md:space-x-1 lg:space-x-8 absolute md:static left-0 top-full w-full md:w-auto ${
            scrolled ? "bg-white" : "bg-[#0A1929]"
          } md:bg-transparent shadow-2xl md:shadow-none z-40`}
        >
          <div className="flex flex-col md:flex-row md:items-center px-4 md:px-0 py-4 md:py-0 space-y-2 md:space-y-0 w-full">
            {/* HOME */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`group relative px-4 py-3 md:py-2 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base tracking-wide w-full md:w-auto overflow-hidden ${
                scrolled 
                  ? "text-gray-700 hover:text-[#0A1929]" 
                  : "text-gray-300 hover:text-[#FFD700]"
              }`}
            >
              <span className="relative z-10">HOME</span>
              <span className={`absolute inset-0 ${
                scrolled ? "bg-gray-100" : "bg-white/10"
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </Link>

            {/* ABOUT with Dropdown */}
            <div
              className="relative w-full md:w-auto group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                onClick={toggleAbout}
                className={`flex items-center justify-between md:justify-start px-4 py-3 md:py-2 rounded-lg transition-all duration-300 cursor-pointer w-full font-semibold text-sm lg:text-base tracking-wide relative overflow-hidden ${
                  scrolled 
                    ? "text-gray-700 hover:text-[#0A1929]" 
                    : "text-gray-300 hover:text-[#FFD700]"
                }`}
              >
                <span className="relative z-10">ABOUT</span>
                <FaChevronDown
                  className={`ml-2 text-xs transition-all duration-300 ${
                    isAboutOpen ? "rotate-180 text-[#FFD700]" : ""
                  }`}
                />
                <span className={`absolute inset-0 ${
                  scrolled ? "bg-gray-100" : "bg-white/10"
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
              </div>

              {/* Dropdown Menu */}
              <div
                className={`${
                  isMobile
                    ? isAboutOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                    : isAboutOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } md:absolute md:left-0 md:top-full md:mt-2 w-full md:w-64 ${
                  scrolled ? "bg-white" : "bg-[#0F2744]"
                } md:rounded-xl md:shadow-2xl overflow-hidden transition-all duration-300 ease-in-out z-50 border ${
                  scrolled ? "border-gray-200" : "border-[#FFD700]/20"
                }`}
              >
                {[
                  { to: "/about-us", label: "About Us" },
                  { to: "/learning-process", label: "Our Learning Process" },
                  { to: "/canvas-lab", label: "Canvas Lab" },
                  { to: "/why", label: "Why Choose Us" }
                ].map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 transition-all duration-300 border-b last:border-0 ${
                      scrolled
                        ? "text-gray-600 hover:text-[#0A1929] hover:bg-gray-50 border-gray-100"
                        : "text-gray-300 hover:text-[#FFD700] hover:bg-white/5 border-[#FFD700]/10"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className={`w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-3`}></span>
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CLASSES */}
            <Link
              to="/programs"
              onClick={closeMobileMenu}
              className={`group relative px-4 py-3 md:py-2 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base tracking-wide w-full md:w-auto overflow-hidden ${
                scrolled 
                  ? "text-gray-700 hover:text-[#0A1929]" 
                  : "text-gray-300 hover:text-[#FFD700]"
              }`}
            >
              <span className="relative z-10">CLASSES</span>
              <span className={`absolute inset-0 ${
                scrolled ? "bg-gray-100" : "bg-white/10"
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </Link>

            {/* GALLERY */}
            <Link
              to="/gallery"
              onClick={closeMobileMenu}
              className={`group relative px-4 py-3 md:py-2 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base tracking-wide w-full md:w-auto overflow-hidden ${
                scrolled 
                  ? "text-gray-700 hover:text-[#0A1929]" 
                  : "text-gray-300 hover:text-[#FFD700]"
              }`}
            >
              <span className="relative z-10">GALLERY</span>
              <span className={`absolute inset-0 ${
                scrolled ? "bg-gray-100" : "bg-white/10"
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </Link>

            {/* FAQ */}
            <Link
              to="/faq"
              onClick={closeMobileMenu}
              className={`group relative px-4 py-3 md:py-2 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base tracking-wide w-full md:w-auto overflow-hidden ${
                scrolled 
                  ? "text-gray-700 hover:text-[#0A1929]" 
                  : "text-gray-300 hover:text-[#FFD700]"
              }`}
            >
              <span className="relative z-10">FAQ</span>
              <span className={`absolute inset-0 ${
                scrolled ? "bg-gray-100" : "bg-white/10"
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`group relative px-4 py-3 md:py-2 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base tracking-wide w-full md:w-auto overflow-hidden ${
                scrolled 
                  ? "text-gray-700 hover:text-[#0A1929]" 
                  : "text-gray-300 hover:text-[#FFD700]"
              }`}
            >
              <span className="relative z-10">CONTACT</span>
              <span className={`absolute inset-0 ${
                scrolled ? "bg-gray-100" : "bg-white/10"
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Premium WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Gold Rings */}
          <span className="absolute inset-0 rounded-full bg-[#FFD700] animate-ping opacity-50"></span>
          <span className="absolute inset-2 rounded-full bg-[#FFD700] animate-pulse opacity-30"></span>
          
          {/* Main Button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 active:scale-95 cursor-pointer border-2 border-[#FFD700]">
            {/* Inner Gold Glow */}
            <div className="absolute inset-0 rounded-full bg-[#FFD700]/20 blur-sm"></div>
            
            <FaWhatsapp className="text-white text-3xl md:text-4xl relative z-10 animate-bounce group-hover:animate-none" />
          </div>
          
          {/* Premium Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-[#0A1929] text-[#FFD700] px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap shadow-2xl border border-[#FFD700]">
              <span className="flex items-center gap-2">
                <span>⚡</span>
                WhatsApp Now
                <span>⚡</span>
              </span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#0A1929]"></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Navbar;