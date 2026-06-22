import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Clock, MapPin, Award, ThumbsUp } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { icon: Target, title: "Modern Equipment", desc: "We utilize advanced diagnostic technology for precise outcomes." },
    { icon: Award, title: "Personalized Care", desc: "Every patient receives dedicated, individual attention." },
    { icon: Shield, title: "Affordable Care", desc: "Premium eye care services accessible at reasonable prices." },
    { icon: MapPin, title: "Convenient Location", desc: "Centrally located in Nandanvan, Nagpur." },
    { icon: ThumbsUp, title: "Trusted Clinic", desc: "Highly rated and trusted by hundreds of local families." },
    { icon: Clock, title: "Timely Service", desc: "Respecting your time with efficient appointment handling." },
  ];

  return (
    <section className="py-24 bg-primary dark:bg-gray-800/50 text-white overflow-hidden relative transition-colors duration-300">
      <div className="absolute inset-0 bg-blue-900/20 dark:bg-transparent pointer-events-none mix-blend-multiply"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose Us?</h2>
          <p className="text-lg text-blue-100 dark:text-gray-300">
            Committed to preserving the gift of sight with ethics, precision, and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-dark dark:bg-gray-800/80 dark:border-gray-700 p-8 rounded-3xl hover:bg-white/10 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6 text-accent dark:text-primary-light">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
              <p className="text-blue-100 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
