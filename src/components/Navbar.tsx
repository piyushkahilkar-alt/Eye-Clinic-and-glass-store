import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Added id to the branding link for potential scroll logic or targeting */}
            <a href="#home" id="navbar-brand" className={`font-bold text-xl md:text-2xl flex items-center gap-3 ${isScrolled ? 'text-primary' : 'text-white'}`}>
               <Eye className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} strokeWidth={1.5} />
               <div className="flex flex-col leading-none">
                 <span className="text-lg tracking-tight">Fudke Eye Clinic</span>
                 <span className={`text-[10px] font-medium mt-1 tracking-[0.2em] uppercase ${isScrolled ? 'text-accent' : 'text-white/70'}`}>& Optical Store</span>
               </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`font-medium text-sm transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#book-appointment" className="bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Book Appt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(true)} className={`focus:outline-none p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`} aria-label="Open menu" id="mobile-menu-btn">
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
               className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-xl flex flex-col z-50 md:hidden"
            >
              <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                <span className="font-bold text-lg text-primary">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-900 border border-gray-200 rounded-full p-1" aria-label="Close menu" id="close-menu-btn">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                <ul className="flex flex-col px-4 space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-bg-light hover:text-primary rounded-xl"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-gray-100">
                <a 
                  href="#book-appointment" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-primary flex justify-center items-center gap-2 text-white px-4 py-3 rounded-xl font-medium"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </a>
                <a 
                  href="tel:9822365747" 
                  className="mt-3 w-full bg-bg-light text-primary flex justify-center items-center gap-2 px-4 py-3 rounded-xl font-medium"
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
