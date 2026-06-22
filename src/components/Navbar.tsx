import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Optical', href: '#optical' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Added id to the branding link for potential scroll logic or targeting */}
            <a href="#home" id="navbar-brand" className="group flex items-center gap-3 sm:gap-4 shrink-0 py-1 no-underline transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                <div className={`absolute w-[85%] h-[85%] transition-all duration-500 [border-radius:80%_0] rotate-45 overflow-hidden border-[2.5px] md:border-[3px] ${
                  isScrolled
                    ? theme === 'dark' ? 'border-primary-light/80 bg-black shadow-[0_0_15px_rgba(26,95,166,0.3)]' : 'border-primary bg-white shadow-md shadow-primary/20'
                    : 'border-white bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]'
                }`}>
                  <img 
                    src="/logo.png" 
                    alt="Fudke Eye Clinic Logo" 
                    className="absolute top-1/2 left-1/2 w-[150%] h-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-45 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Inner eye pupil reflection / modern gloss effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 mix-blend-overlay pointer-events-none"></div>
                </div>
              </div>
              <div className="flex flex-col relative">
                <span className={`text-[1.1rem] sm:text-lg md:text-xl font-bold tracking-tight transition-colors duration-500 leading-none pb-1 ${
                  isScrolled ? theme === 'dark' ? 'text-white' : 'text-gray-900' : 'text-white drop-shadow-md'
                }`}>
                  Fudke Eye Clinic
                </span>
                {/* Modern subtle underline */}
                <span className={`h-[2px] w-full rounded-full transition-all duration-500 ease-out group-hover:scale-x-105 origin-left ${
                  isScrolled ? theme === 'dark' ? 'bg-gradient-to-r from-primary-light via-accent to-transparent' : 'bg-gradient-to-r from-primary via-accent to-transparent' : 'bg-gradient-to-r from-white via-white/80 to-transparent'
                }`}></span>
                <span className={`text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase mt-1 transition-colors duration-500 leading-none ${
                  isScrolled ? theme === 'dark' ? 'text-gray-400' : 'text-primary' : 'text-white/80 drop-shadow-sm'
                }`}>
                  & Optical Store
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`font-medium text-sm transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary' : 'text-white/90 hover:text-white'}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`relative inline-flex h-[36px] w-[72px] shrink-0 cursor-pointer items-center justify-center rounded-full border-2 transition-colors duration-500 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ${
                  theme === 'dark' 
                    ? isScrolled ? 'border-gray-700 bg-gray-800 focus-visible:ring-offset-gray-900' : 'border-white/20 bg-black/40 backdrop-blur-md focus-visible:ring-offset-black'
                    : isScrolled ? 'border-gray-200 bg-gray-100 focus-visible:ring-offset-white' : 'border-white/40 bg-white/20 backdrop-blur-md focus-visible:ring-offset-primary'
                }`}
                aria-label="Toggle theme"
              >
                <span className="sr-only">Toggle theme</span>
                
                {/* Track icons */}
                <span className="pointer-events-none absolute left-2 text-yellow-500 transition-opacity duration-300">
                  <Moon className="h-3.5 w-3.5" />
                </span>
                <span className="pointer-events-none absolute right-2 text-amber-500 transition-opacity duration-300">
                  <Sun className="h-3.5 w-3.5" />
                </span>

                <motion.div
                  initial={false}
                  animate={{ x: theme === 'dark' ? 18 : -18 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`pointer-events-none absolute h-[28px] w-[28px] rounded-full shadow-lg ring-0 transition-colors duration-500 ease-in-out flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'bg-gray-900' 
                      : 'bg-white'
                  }`}
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {theme === 'dark' ? (
                      <Moon className="h-3.5 w-3.5 text-white fill-current" />
                    ) : (
                      <Sun className="h-3.5 w-3.5 text-primary fill-current" />
                    )}
                  </motion.div>
                </motion.div>
              </button>
              <a href="#book-appointment" className="bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Book Appt
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`relative inline-flex h-[32px] w-[60px] shrink-0 cursor-pointer items-center justify-center rounded-full border-2 transition-colors duration-500 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ${
                theme === 'dark' 
                  ? isScrolled ? 'border-gray-700 bg-gray-800' : 'border-white/20 bg-black/40 backdrop-blur-md'
                  : isScrolled ? 'border-gray-200 bg-gray-100' : 'border-white/40 bg-white/20 backdrop-blur-md'
              }`}
              aria-label="Toggle theme"
            >
              <span className="sr-only">Toggle theme</span>
              {/* Track icons */}
              <span className="pointer-events-none absolute left-1.5 text-yellow-500 transition-opacity duration-300">
                <Moon className="h-3 w-3" />
              </span>
              <span className="pointer-events-none absolute right-1.5 text-amber-500 transition-opacity duration-300">
                <Sun className="h-3 w-3" />
              </span>
              <motion.div
                initial={false}
                animate={{ x: theme === 'dark' ? 14 : -14 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`pointer-events-none absolute h-[24px] w-[24px] rounded-full shadow-lg ring-0 transition-colors duration-500 ease-in-out flex items-center justify-center ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {theme === 'dark' ? (
                    <Moon className="h-3 w-3 text-white fill-current" />
                  ) : (
                    <Sun className="h-3 w-3 text-primary fill-current" />
                  )}
                </motion.div>
              </motion.div>
            </button>
            <button onClick={() => setMobileMenuOpen(true)} className={`focus:outline-none p-2 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`} aria-label="Open menu" id="mobile-menu-btn">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               duration={0.2}
               className="fixed inset-0 bg-black/50 md:hidden z-40" 
               onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
               className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white dark:bg-gray-900 shadow-xl flex flex-col z-50 md:hidden"
            >
              <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <span className="font-bold text-lg text-primary dark:text-primary-light">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 rounded-full p-1" aria-label="Close menu" id="close-menu-btn">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                <ul className="flex flex-col px-4 space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="block px-4 py-3 text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-bg-light dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary-light rounded-xl transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-gray-100 dark:border-gray-800">
                <a 
                  href="#book-appointment" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-primary hover:bg-primary-light flex justify-center items-center gap-2 text-white px-4 py-3 rounded-xl font-medium transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </a>
                <a 
                  href="tel:9822365747" 
                  className="mt-3 w-full bg-bg-light dark:bg-gray-800 text-primary dark:text-primary-light flex justify-center items-center gap-2 px-4 py-3 rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call 9822365747
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
