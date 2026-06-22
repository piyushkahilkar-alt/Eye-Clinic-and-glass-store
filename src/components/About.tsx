import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    "Over 15 Years of Experience",
    "Comprehensive Eye Checkups",
    "Modern Diagnostic Equipment",
    "Patient-First Approach",
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl bg-gray-100 dark:bg-gray-800">
              <img 
                src="/assets/sunil-fudke.png" 
                alt="Dr. Sunil Fudke" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-bold text-2xl">Dr. Sunil Fudke</h3>
                <p className="text-accent font-medium">Head Ophthalmologist</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-bg-light dark:bg-gray-800/50 rounded-3xl -z-10 border border-gray-100 dark:border-gray-700"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 dark:bg-accent/20 rounded-full -z-10 blur-2xl"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 font-semibold text-sm mb-6 uppercase tracking-wider">
              About The Clinic
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              A Vision of Excellence in <span className="text-primary dark:text-primary-light text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-primary-light dark:to-accent">Eye Care</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Located in the heart of Nandanvan, Nagpur, Dr. Sunil Fudke Eye Clinic & Optical Store is dedicated to providing superior eye care services and premium eyewear collections. With a patient-first approach, we combine clinical expertise with modern technology.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              We understand that every pair of eyes is completely unique. Our comprehensive approach ensures your vision is protected, corrected, and enhanced with the highest standards of medical precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#facilities" 
              className="inline-flex items-center gap-2 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300"
            >
              Explore Our Facilities
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
