import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

type FormData = {
  name: string;
  mobileNumber: string;
  age: number;
  serviceRequired: string;
  preferredDate: string;
};

export default function BookAppointment() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // 1. Save to Firebase Firestore Collection
      const payload = {
        name: data.name,
        mobileNumber: data.mobileNumber,
        age: Number(data.age),
        serviceRequired: data.serviceRequired,
        preferredDate: data.preferredDate,
        createdAt: Date.now(), // Server-side time mismatch workaround if needed, but Date.now is fine for rules or we use serverTimestamp internally but rules check
      };
      
      // Wait, firestore rule expects number for createdAt equal to request.time.
      // request.time.toMillis() doesn't exist? Wait, rules use request.time, I changed rule to data.createdAt == request.time.
      // But serverTimestamp is an object in client SDK, and resolved to timestamp on server.
      // Let's use serverTimestamp()
      await addDoc(collection(db, 'appointments'), {
        ...data,
        age: Number(data.age),
        status: 'Pending',
        createdAt: serverTimestamp()
      });

      // Fetch for Google Apps Script Web App
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

      // 2. Prepare WhatsApp booking message
      const text = `Hello Dr. Sunil Fudke Eye Clinic. I would like to book an appointment.%0A%0A*Name:* ${data.name}%0A*Age:* ${data.age}%0A*Service:* ${data.serviceRequired}%0A*Date:* ${data.preferredDate}`;
      const whatsappLink = `https://wa.me/919822365747?text=${text}`;
      
      setIsSuccess(true);
      reset();

      // Automatically open WhatsApp after a short delay
      setTimeout(() => {
        window.open(whatsappLink, '_blank');
      }, 2000);

    } catch (error) {
      console.error("Error booking appointment", error);
      alert("There was an error submitting your request. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-appointment" className="py-24 bg-bg-light relative">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-primary"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
            <p className="text-gray-600">Schedule your consultation with Dr. Sunil Fudke.</p>
          </div>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Requested!</h3>
              <p className="text-gray-600 mb-6">Your details have been saved successfully. We are redirecting you to WhatsApp to confirm your slot.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-primary font-medium hover:underline"
              >
                Book another appointment
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input 
                    {...register("name", { required: "Name is required" })}
                    type="text" 
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                  <input 
                    {...register("mobileNumber", { 
                      required: "Mobile number is required",
                      pattern: { value: /^[0-9]{10}$/, message: "Valid 10 digit number required" }
                    })}
                    type="tel" 
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="9876543210"
                  />
                  {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input 
                    {...register("age", { 
                      valueAsNumber: true,
                      min: { value: 0, message: "Invalid age" },
                      max: { value: 120, message: "Invalid age" }
                    })}
                    type="number" 
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                  <select 
                    {...register("serviceRequired", { required: "Please select a service" })}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="General Eye Checkup">General Eye Checkup</option>
                    <option value="Cataract Consultation">Cataract Consultation</option>
                    <option value="Spectacle Prescription">Spectacle Prescription</option>
                    <option value="Contact Lens Fitting">Contact Lens Fitting</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.serviceRequired && <p className="text-red-500 text-xs mt-1">{errors.serviceRequired.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                  <input 
                    {...register("preferredDate", { required: "Date is required" })}
                    type="date" 
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate.message}</p>}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-light text-white font-semibold text-lg py-4 rounded-xl transition-colors flex justify-center items-center gap-2 mt-8 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Confirm Appointment
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
