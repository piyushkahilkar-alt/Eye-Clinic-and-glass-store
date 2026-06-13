import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/assets/eye-test-1.jpg", alt: "Clinic Interior", className: "col-span-1 row-span-2 aspect-[3/4]" },
    { src: "/assets/eye-test-2.webp", alt: "Testing Equipment", className: "col-span-1 row-span-1 aspect-square" },
    { src: "/assets/eye-test-3.jpg", alt: "Optical Store", className: "col-span-2 row-span-1 aspect-[2/1]" },
    { src: "/assets/eye-test-2.webp", alt: "Patient Consultation", className: "col-span-1 row-span-1 aspect-square" },
    { src: "/assets/eye-test-3.jpg", alt: "Eyewear Collection", className: "col-span-1 row-span-1 aspect-[4/3]" },
    { src: "/assets/eye-test-1.jpg", alt: "Waiting Area", className: "col-span-1 row-span-1 aspect-[4/3]" },
  ];

  return (
    <section id="gallery" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
            Our Clinic
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Gallery</h2>
          <p className="text-lg text-gray-600">Take a virtual tour of our modern facilities and premium optical store.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.98 }}
              className={`rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow relative group ${img.className}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
