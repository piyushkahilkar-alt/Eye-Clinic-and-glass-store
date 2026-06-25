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
        <div className="flex flex-col gap-16 lg:gap-24">
          
          {/* Top Section: Clinic Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 font-semibold text-sm mb-6 uppercase tracking-wider">
              About The Clinic
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              A Vision of Excellence in <span className="text-primary dark:text-primary-light text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-primary-light dark:to-accent">Eye Care</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Located in the heart of Nandanvan, Nagpur, Fudke Eye Clinic & Optical Store is dedicated to providing superior eye care services and premium eyewear collections. Led by distinguished experts, we combine clinical excellence with modern technology.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Our comprehensive approach ensures your vision is protected, corrected, and enhanced with the highest standards of medical precision.
            </p>

            <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 mb-10">
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

          {/* Bottom Section: Leadership */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Leadership</h3>
              <div className="w-20 h-1.5 bg-accent mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Doctor 1: Dr. Ghorpade */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col transition-all duration-300 group"
              >
                <div className="w-full aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
                  <img 
                    src="/director.jpeg" 
                    alt="Dr. P B Ghorpade" 
                    className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1 drop-shadow-md">Dr. P B Ghorpade</h4>
                    <p className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wider drop-shadow-md">Director</p>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col grow">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    A highly experienced and dedicated professional, Dr. P B Ghorpade brings decades of expertise in comprehensive eye care and surgical excellence to our clinic.
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Qualifications & Experience</h5>
                    <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary dark:text-primary-light mt-0.5">•</span>
                        <span><strong>MBBS, MS Ophth.</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary dark:text-primary-light mt-0.5">•</span>
                        <span>Reg. MMC 24896</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary dark:text-primary-light mt-0.5">•</span>
                        <span>Ex. District Eye Surgeon</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Key Associations</h5>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-accent mt-0.5">•</span>
                        <span>Associated with Nagarjuna Hospital, Rajendra Nagar, KDK College Nagar, Nagpur</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Doctor 2: Dr. Fudke */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col transition-all duration-300 group"
              >
                <div className="w-full aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
                  <img 
                    src="/assets/sunil-fudke.png" 
                    alt="Dr. Sunil Fudke" 
                    className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1 drop-shadow-md">Dr. Sunil Fudke</h4>
                    <p className="text-primary-light font-semibold text-sm sm:text-base uppercase tracking-wider drop-shadow-md">HOD (Head Ophthalmologist)</p>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col grow">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Dr. Sunil Fudke leads our clinic's commitment to exceptional patient care, focusing on advanced diagnostics and personalized treatments to protect and enhance your vision.
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Qualifications & Experience</h5>
                    <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary dark:text-primary-light mt-0.5">•</span>
                        <span>Years of dedicated service in Ophthalmology</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary dark:text-primary-light mt-0.5">•</span>
                        <span>Expertise in advanced diagnostics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary dark:text-primary-light mt-0.5">•</span>
                        <span>Specialized in comprehensive eye care solutions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Key Specialties</h5>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-accent mt-0.5">•</span>
                        <span>Personalized vision treatments & surgical care</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
