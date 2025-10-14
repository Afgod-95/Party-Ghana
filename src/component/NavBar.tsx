"use client"
import React, { useEffect, useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import Logo from '@/assets/Logo.png'
import Image from 'next/image'
import Link from 'next/link'

type NavBarProps = {
  setIsMenuOpen: (isOpen: boolean) => void,
  setActiveSection: (sectionId: string) => void,
  activeSection: string,
  isMenuOpen: boolean,
  setIsModalOpen: (isOpen: boolean) => void,
}

const NavBar: React.FC<NavBarProps> = ({
  setIsMenuOpen,
  setActiveSection,
  activeSection,
  isMenuOpen,
  setIsModalOpen,
}) => {

  // Navigation items - add isRoute flag for items that should navigate instead of scroll
  const navItems = useMemo(() => [
    { name: 'Home', href: 'home', isRoute: false },
    { name: 'Premium Gift Service', href: 'premium-gift-service', isRoute: false },
    { name: 'Services', href: 'services', isRoute: false },
    { name: 'About Us', href: 'about-us', isRoute: false },
    { name: 'Contact', href: 'contact', isRoute: false },
    { name: "Event Packages", href: "/event-packages", isRoute: true }
  ], []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Handle navigation - either scroll to section or navigate to route
  const handleNavigation = (item: typeof navItems[0]) => {
    if (!item.isRoute) {
      // Close menu first
      setIsMenuOpen(false);
      // Wait for menu animation to complete before scrolling
      setTimeout(() => {
        scrollToSection(item.href);
      }, 350);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.filter(item => !item.isRoute).map(item => item.href);
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
  }, [navItems, setActiveSection]);

  // Prevent body scroll when menu is open (fixed white space issue)
  useEffect(() => {
    if (isMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div 
              className="relative w-10 h-10 rounded-2xl border-1 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Image 
                src={Logo}
                alt='Logo'
                fill
                className='object-contain'
              />
            </div>
            <span className="text-xl font-bold text-black">
              Party Ghana
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link key={item.name} href={item.href}>
                  <motion.button
                    className="text-sm font-medium transition-all duration-200 hover:scale-105 relative text-slate-700 hover:text-blue-600"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`text-sm font-medium transition-all duration-200 hover:scale-105 relative ${
                    activeSection === item.href
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            ))}
          </div>

          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-slate-200">
                {navItems.map((item, index) => (
                  item.isRoute ? (
                    <Link key={item.name} href={item.href}>
                      <motion.button
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.2,
                          ease: "easeOut"
                        }}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm font-medium transition-colors py-2 w-full text-left text-slate-700 hover:text-blue-600"
                      >
                        {item.name}
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.button
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.2,
                        ease: "easeOut"
                      }}
                      onClick={() => handleNavigation(item)}
                      className={`block text-sm font-medium transition-colors py-2 w-full text-left ${
                        activeSection === item.href ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default NavBar