import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ramesh Sharma",
      review: "Excellent service. Dr. Fudke is very patient and explains the problem clearly. The optical store has a great collection of frames.",
      rating: 5
    },
    {
      id: 2,
      name: "Sneha Patil",
      review: "Got my cataract surgery done here. Professional staff, state-of-the-art equipment, and very hygienic clinic environment. Highly recommended in Nagpur.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Deshmukh",
      review: "The computerized eye testing was quick and accurate. Bought my progressive glasses from their store and they fit perfectly.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
            Patient Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">What Our Patients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-bg-light rounded-[2rem] p-8 md:p-12 text-center relative"
            >
              <Quote className="w-12 h-12 text-accent/20 mx-auto mb-6" />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].review}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500 mt-1">Verified Patient</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
