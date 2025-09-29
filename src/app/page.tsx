"use client"
import React, { useState, useEffect } from 'react';
import {
  Gift, Calendar, Share2, CheckCircle,
  Facebook, Twitter, Instagram, ArrowRight,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import ContactUs from '@/component/sections/ContactUs';
import Features from '@/component/sections/Features';
import Services from '@/component/sections/Services';
import BookUsModal from '@/component/BookUsModal';
import AboutUs from '@/component/sections/AboutUs';
import NavBar from '@/component/NavBar';
import ScrollTop from '@/component/ScrollToTop';
import LandingPage from '@/component/sections/LandingPage';


const PartyGhanaHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Navigation items
  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'How It Works', href: 'how-it-works' },
    { name: 'Services', href: 'services' },
    { name: 'About Us', href: 'about-us' },
    { name: 'Contact', href: 'contact' }
  ];


  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;

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
  }, []);

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
                Book Us Now in minutes with our simple, powerful gift management system
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                {
                  icon: Calendar,
                  title: 'Create Your Event',
                  description: 'Set up a beautiful event page with all details, gift preferences, and custom branding.',
                  color: 'blue'
                },
                {
                  icon: Share2,
                  title: 'Share with Guests',
                  description: 'Share your unique event link via WhatsApp, email, or social media for seamless access.',
                  color: 'purple'
                },
                {
                  icon: CheckCircle,
                  title: 'Track & Celebrate',
                  description: 'Monitor gifts in real-time, send thank-you notes, and celebrate your special moments.',
                  color: 'pink'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`relative mb-8`}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 flex items-center justify-center shadow-lg`}
                      >
                        <step.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center text-sm font-bold text-slate-700">
                        {index + 1}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connection line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform translate-x-6"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <Services />
        

        {/* About Us Section */}
        <AboutUs />

        {/* Features Section */}
        <Features />

        {/* Contact Section */}
        <ContactUs />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900 text-white py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">PartyGhana.Com</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Ghana&apos;s premier gift management platform. Making celebrations memorable and stress-free.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {[
              {
                title: 'Services',
                links: ['Gift Registry', 'Event Planning', 'Guest Management', 'RSVP Tracking', 'Photo Sharing']
              },
              {
                title: 'Company',
                links: ['About Us', 'Careers', 'Press', 'Blog', 'Contact']
              },
              {
                title: 'Support',
                links: ['Help Center', 'Safety', 'Community Guidelines', 'Privacy Policy', 'Terms of Service']
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
              >
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-slate-400 hover:text-white transition-all duration-200"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="border-t border-slate-800 pt-8 text-center"
          >
            <p className="text-slate-400">
              © {new Date ().getFullYear()} PartyGhana.Com. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>

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