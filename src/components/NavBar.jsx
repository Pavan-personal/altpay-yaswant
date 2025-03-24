import React, { useState, useEffect } from 'react';
import { GlassPanel,GlassButton,GlassCard,GlassInput } from "./ui/GlassMorphic";
import { Menu, X } from 'lucide-react';
import { Sun, Moon } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [isDarkMode, setIsDarkMode] = useState(false);
    
    // Initialize dark mode from localStorage on component mount
    useEffect(() => {
      const darkModePreference = window.localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(darkModePreference);
      
      if (darkModePreference) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, []);
    
    // Scroll animation logic
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (sectionTop < windowHeight * 0.75) {
            section.classList.add('animate-fade-in');
          }
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      // Trigger once on load
      handleScroll();
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Toggle dark mode function
    const toggleDarkMode = () => {
      const newDarkMode = !isDarkMode;
      setIsDarkMode(newDarkMode);
      window.localStorage.setItem('darkMode', newDarkMode.toString());
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3' : 'py-5'
    }`}>
      <GlassPanel 
        opacity={isScrolled ? "15" : "10"} 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-altpay-500 to-altpay-700 flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-altpay-700 to-altpay-500">AltPay</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-altpay-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-altpay-600 transition-colors">How it Works</a>
          <a href="#sign-in" className="text-sm font-medium text-gray-700 hover:text-altpay-600 transition-colors">Sign In</a>
          <GlassButton className="bg-gradient-to-r from-altpay-500 to-altpay-700 text-white border-0">
            Get Started
          </GlassButton>
          <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-md hover:shadow-lg transition-all"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-700" size={20} />}
            </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 rounded-md text-gray-700 hover:text-altpay-600 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </GlassPanel>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 animate-slide-down">
          <GlassPanel className="p-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium text-gray-700 hover:text-altpay-600 transition-colors p-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-gray-700 hover:text-altpay-600 transition-colors p-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#sign-in" 
              className="text-sm font-medium text-gray-700 hover:text-altpay-600 transition-colors p-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </a>
            <GlassButton className="w-full bg-gradient-to-r from-altpay-500 to-altpay-700 text-white border-0">
              Get Started
            </GlassButton>
          </GlassPanel>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
