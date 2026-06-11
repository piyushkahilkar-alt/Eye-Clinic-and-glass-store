import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a 
        href="tel:9822365747"
        className="w-12 h-12 bg-white text-primary rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all border border-gray-200"
        aria-label="Call Clinic"
      >
        <Phone className="w-5 h-5" />
      </a>
      
      <a 
        href="#book-appointment"
        className="w-12 h-12 bg-primary text-white rounded-full shadow-lg border border-primary-light flex items-center justify-center hover:bg-primary-light hover:scale-110 transition-all"
        aria-label="Book Appointment"
      >
        <Calendar className="w-5 h-5" />
      </a>

      <a 
        href="https://wa.me/919822365747?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20clinic%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all"
        aria-label="WhatsApp Us"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}
