import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Activity, Eye, ShieldCheck, Heart } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover object-center pointer-events-none"
          poster="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails/missing */}
        </video>
        {/* Dark Overlay (40-50% Opacity) */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col items-center justify-center text-center">
        <motion.div 
          className="w-full max-w-4xl flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium tracking-wide">Premium Eye Care in Nagpur</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Advanced Eye Care & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">Premium Eyewear</span> Solutions
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed mx-auto">
            Comprehensive Eye Checkups, Vision Care, Cataract Consultation and Modern Optical Solutions in Nandanvan, Nagpur.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#book-appointment" className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a href="tel:9822365747" className="w-full sm:w-auto glass-dark hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Glass Cards (Hidden on very small screens for cleaner look) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 z-20 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: ShieldCheck, title: "Experienced Specialist", desc: "Expert ophthalmologist" },
              { icon: Activity, title: "Advanced Testing", desc: "State-of-the-art equipment" },
              { icon: Eye, title: "Premium Optical", desc: "Designer & precision lenses" },
              { icon: Heart, title: "Trusted by Families", desc: "Care you can rely on" }
            ].map((feature, idx) => (
              <div key={idx} className="glass-dark p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default">
                <div className="bg-accent/20 p-3 rounded-xl border border-accent/30 text-accent">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{feature.title}</h3>
                  <p className="text-gray-300 text-xs mt-0.5">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
