import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Glasses, Sun, Monitor, CircleUserRound } from 'lucide-react';

export default function OpticalStore() {
  const categories = [
    { name: "Designer Frames", icon: CircleUserRound, desc: "Premium international brands tailored for you" },
    { name: "Reading Glasses", icon: Glasses, desc: "Comfortable daily wear for clear near vision" },
    { name: "Computer Glasses", icon: Monitor, desc: "Anti-glare & blue light blocking lenses" },
    { name: "Sunglasses", icon: Sun, desc: "UV protection combining aesthetics and safety" },
  ];

  return (
    <section id="optical" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-accent font-semibold text-sm mb-6 uppercase tracking-wider">
              Premium Eyewear
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Curated Optical Store
            </h2>
            <p className="text-lg text-gray-600">
              Discover our extensive collection of stylish, durable, and comfortable frames and lenses tailored exactly for your individual prescription and lifestyle.
            </p>
          </div>
          <button className="flex-shrink-0 inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
            View All Collection <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-bg-light border border-gray-100 p-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <cat.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
