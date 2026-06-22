import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What should I bring for my first eye checkup?",
      answer: "Please bring any current prescription glasses or contact lenses you wear, along with a list of medications you are currently taking."
    },
    {
      question: "How often should I get my eyes tested?",
      answer: "We recommend a comprehensive eye examination once every year, especially for children and those above 40, to ensure early detection of any vision issues."
    },
    {
      question: "Do you provide advanced cataract consultation?",
      answer: "Yes, Dr. Sunil Fudke provides expert cataract consultation and guides you on the latest surgical techniques and premium intraocular lens (IOL) options."
    },
    {
      question: "Are designer frames available at your optical store?",
      answer: "Absolutely. Our in-house optical store features a wide range of premium and designer frames along with high-quality lenses tailored to your prescription."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment using the 'Book Appointment' form on our website, call us directly at 9822365747, or simply reach out via WhatsApp."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-light dark:bg-gray-800/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 font-semibold text-sm mb-6 uppercase tracking-wider">
            Patient Care Policies
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm dark:shadow-none"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary dark:text-primary-light flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 text-gray-600 dark:text-gray-300 border-t border-gray-50 dark:border-gray-700/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
