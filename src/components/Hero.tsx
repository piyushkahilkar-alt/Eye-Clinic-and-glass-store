import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

type FormData = {
  name: string;
  mobileNumber: string;
  serviceRequired: string;
  preferredDate: string;
  age: number;
};

export default function Hero() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'appointments'), {
        name: data.name,
        mobileNumber: data.mobileNumber,
        serviceRequired: data.serviceRequired,
        preferredDate: data.preferredDate,
        age: Number(data.age) || 0,
        status: 'Pending',
        createdAt: serverTimestamp()
      });

      try {
        fetch('https://script.google.com/macros/s/AKfycbzztbhtHhpb_XooAbe70KQEfcd_zB2MDdE7VwBJvzW9Lu7YeAUqFlKD2juaiOTfDuhX/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(data)
        }).catch(console.error);
      } catch (e) {
        console.error(e);
      }

      const text = `Hello Dr. Sunil Fudke Eye Clinic. I would like to book a quick appointment.%0A%0A*Name:* ${data.name}%0A*Mobile:* ${data.mobileNumber}%0A*Service:* ${data.serviceRequired}%0A*Date:* ${data.preferredDate}`;
      const whatsappLink = `https://wa.me/919822365747?text=${text}`;
      
      reset();
      window.open(whatsappLink, '_blank');
    } catch (error) {
      console.error(error);
      alert("Error booking appointment. Please call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover object-center pointer-events-none"
          poster="/assets/eye-test-1.jpg"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 flex flex-col items-start justify-center">
        <motion.div 
          className="w-full max-w-2xl flex flex-col items-start mt-8 md:mt-0 lg:pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-dark mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-white/90 text-xs md:text-sm font-light tracking-widest uppercase">Dr. Sunil Fudke</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2 md:mb-6 tracking-tight">
            Vision Care,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-light">Redefined.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hidden md:block text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
            Experience premium eye care and curated eyewear collections, tailored precisely for your unique vision.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4 md:mt-0">
            <a href="tel:9822365747" className="w-full sm:w-auto bg-primary hover:bg-primary-light shadow-xl shadow-primary/20 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-transform transform hover:-translate-y-1">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side: Quick Booking Form (Floating Bottom Right over Gemini Logo) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-0 right-0 z-50 w-full sm:w-[360px] bg-white dark:bg-gray-900 sm:rounded-tl-3xl p-4 sm:p-6 shadow-2xl border-t border-l border-white/50 dark:border-gray-800 transition-colors duration-300"
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">Quick Appointment</h3>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3 md:mb-4">Book your visit in 30 seconds</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 md:space-y-3">
          <input 
            {...register("name", { required: true })}
            placeholder="Full Name *" 
            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl text-xs md:text-sm border border-gray-100 dark:border-gray-700 focus:border-primary outline-none text-gray-900 dark:text-white"
          />
          <div className="flex gap-2 md:gap-3">
            <input 
              {...register("mobileNumber", { required: true })}
              placeholder="Mobile *" 
              type="tel"
              className="w-2/3 px-3 py-2 md:px-4 md:py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl text-xs md:text-sm border border-gray-100 dark:border-gray-700 focus:border-primary outline-none text-gray-900 dark:text-white"
            />
            <input 
              {...register("age", { valueAsNumber: true, required: true })}
              placeholder="Age" 
              type="number"
              className="w-1/3 px-3 py-2 md:px-4 md:py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl text-xs md:text-sm border border-gray-100 dark:border-gray-700 focus:border-primary outline-none text-gray-900 dark:text-white"
            />
          </div>
          <select 
            {...register("serviceRequired", { required: true })}
            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl text-xs md:text-sm border border-gray-100 dark:border-gray-700 focus:border-primary outline-none text-gray-900 dark:text-white"
          >
            <option value="">Select Service...</option>
            <option value="General Eye Checkup">General Eye Checkup</option>
            <option value="Cataract Consultation">Cataract Consultation</option>
            <option value="Spectacle Prescription">Spectacle Prescription</option>
            <option value="Sunglasses / Optical Store">Sunglasses / Optical Store</option>
          </select>
          <input 
            {...register("preferredDate", { required: true })}
            type="date"
            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl text-xs md:text-sm border border-gray-100 dark:border-gray-700 focus:border-primary outline-none text-gray-700 dark:text-gray-300"
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-light text-white font-medium py-2 md:py-3 rounded-xl transition-colors flex justify-center items-center gap-2 mt-1 md:mt-2 text-xs md:text-sm"
          >
            {isSubmitting ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              "Book Now"
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
