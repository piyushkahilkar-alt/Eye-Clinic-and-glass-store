import React from 'react';
import { Heart, Eye } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black transition-colors duration-300 text-gray-300 py-16 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
             <div className="font-bold text-2xl text-white flex items-center gap-3 mb-6">
               <Eye className="w-8 h-8 text-white" strokeWidth={1.5} />
               <div className="flex flex-col leading-none">
                 <span className="text-xl tracking-tight">Fudke Eye Clinic</span>
                 <span className="text-[10px] text-gray-400 font-medium mt-1 tracking-[0.2em] uppercase">& Optical Store</span>
               </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing comprehensive eye care solutions and premium optical products to the families of Nagpur.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Dr. Fudke</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Computerized Eye Testing</li>
              <li className="text-gray-400">Cataract Consultation</li>
              <li className="text-gray-400">Contact Lenses</li>
              <li className="text-gray-400">Premium Optical Store</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>Address: Nandanvan, Nagpur</li>
              <li>Phone: <a href="tel:9822365747" className="hover:text-white">+91 9822365747</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dr. Sunil Fudke Eye Clinic. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in Nagpur
          </p>
        </div>
      </div>
    </footer>
  );
}
