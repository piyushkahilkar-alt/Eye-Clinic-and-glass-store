import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Activity, Eye, ScanSearch, Glasses, Store, MonitorSmartphone, ShieldPlus } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    { icon: ScanSearch, title: "Computerized Eye Testing", desc: "Precise digital vision assessment" },
    { icon: Activity, title: "Cataract Consultation", desc: "Expert evaluation and surgical guidance" },
    { icon: Eye, title: "Vision Screening", desc: "Comprehensive preventive eye checkups" },
    { icon: Microscope, title: "Contact Lens Consultation", desc: "Customized contact lens fitting" },
    { icon: Glasses, title: "Spectacle Prescription", desc: "Accurate power measurement" },
    { icon: Store, title: "Optical Store", desc: "In-house premium eyewear collection" },
    { icon: MonitorSmartphone, title: "Digital Eye Checkup", desc: "Testing for digital eye strain" },
    { icon: ShieldPlus, title: "General Eye Care", desc: "Treatment for common eye infections" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="facilities" className="py-24 bg-bg-light dark:bg-gray-800/20 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-accent/5 dark:bg-accent/10 rounded-bl-full pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 font-semibold text-sm mb-6 uppercase tracking-wider">
            Our Facilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Advanced Clinical Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Equipped with modern diagnostic tools to ensure accurate testing and effective treatment for all your vision needs.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilities.map((fac, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:bg-gray-700 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-bg-light dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary dark:text-primary-light transition-colors duration-300">
                <fac.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{fac.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{fac.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
