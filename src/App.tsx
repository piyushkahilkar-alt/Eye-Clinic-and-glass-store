/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import OpticalStore from './components/OpticalStore';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookAppointment from './components/BookAppointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100 selection:bg-accent/30 selection:text-primary dark:selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <OpticalStore />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <BookAppointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
