"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import ContactUs from '@/component/sections/ContactUs';
import Features from '@/component/sections/Features';
import Services from '@/component/sections/Services';
import BookUsModal from '@/component/BookUsModal';
import AboutUs from '@/component/sections/AboutUs';
import NavBar from '@/component/NavBar';
import ScrollTop from '@/component/ScrollToTop';
import LandingPage from '@/component/sections/LandingPage';
import Footer from '@/component/Footer';
import StepsSection from '@/component/sections/StepsSecction';


const PartyGhanaHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Navigation items
  const navItems = useCallback(() => [
    { name: 'Home', href: 'home' },
    { name: 'How It Works', href: 'how-it-works' },
    { name: 'Services', href: 'services' },
    { name: 'About Us', href: 'about-us' },
    { name: 'Contact', href: 'contact' }
  ], []);


  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = navItems().map(item => item.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <NavBar 
        setIsMenuOpen={setIsMenuOpen}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <main>
        {/* Hero Section */}
        <LandingPage />

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-white"
          id="how-it-works"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">How It Works</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Book us in minutes and let our super-simple, time-saving gift management system do the heavy lifting!
              </p>
            </motion.div>

            <StepsSection />
          </div>
        </motion.section>

        {/* Services Section */}
        <Services/>
        

        {/* About Us Section */}
        <AboutUs />

        {/* Features Section */}
        <Features />

        {/* Contact Section */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />

      {/* MODAL */}
      <BookUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {!isModalOpen && <ScrollTop /> }
      
    </div>
  );
};

export default PartyGhanaHomepage;