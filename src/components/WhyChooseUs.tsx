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
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose Us?</h2>
          <p className="text-lg text-primary-light text-blue-100">
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
              className="glass-dark p-8 rounded-3xl hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-100 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
