import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           <div>
             <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
               Get In Touch
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
               Visit Our Clinic
             </h2>
             
             <div className="space-y-8">
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg mb-1">Clinic Address</h4>
                   <p className="text-gray-600 leading-relaxed">
                     Dr. Sunil Fudke Eye Clinic & Optical Store<br/>
                     Nandanvan, Nagpur,<br/>
                     Maharashtra, India
                   </p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                   <Phone className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg mb-1">Phone Number</h4>
                   <a href="tel:9822365747" className="text-gray-600 hover:text-primary transition-colors">+91 9822365747</a>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                   <Clock className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg mb-1">Working Hours</h4>
                   <p className="text-gray-600">Mon - Sat: 10:00 AM - 9:00 PM<br/>Sun: Closed / By Appointment</p>
                 </div>
               </div>
             </div>
           </div>

           <div className="h-96 lg:h-auto min-h-[400px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-inner">
              {/* Replace with actual Google Maps embed iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709425405!2d79.00221319200388!3d21.161085854655938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNandanvan%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
           </div>

         </div>
       </div>
    </section>
  );
}
