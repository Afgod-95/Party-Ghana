"use client"
import React, { useState, useEffect, useCallback } from 'react';
import ContactUs from '@/component/sections/ContactUs';
import Features from '@/component/sections/Features';
import Services from '@/component/sections/Services';
import BookUsModal from '@/component/BookUsModal';
import AboutUs from '@/component/sections/AboutUs';
import NavBar from '@/component/NavBar';
import ScrollTop from '@/component/ScrollToTop';
import LandingPage from '@/component/sections/LandingPage';
import Footer from '@/component/Footer';
import PremiumGiftService from '@/component/sections/PremiumGiftService';


const PartyGhanaHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Navigation items
  const navItems = useCallback(() => [
    { name: 'Home', href: 'home' },
    { name: 'How It Works', href: 'premium-gift-service' },
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

        {/* premium gift Section */}
        <PremiumGiftService />

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