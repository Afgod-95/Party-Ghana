import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Gift, ArrowRight, X, Menu } from 'lucide-react'
import Logo from '@/assets/Logo.png'
import Image from 'next/image'

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

    // Navigation items
      const navItems = [
        { name: 'Home', href: 'home' },
        { name: 'How It Works', href: 'how-it-works' },
        { name: 'Services', href: 'services' },
        { name: 'About Us', href: 'about-us' },
        { name: 'Contact', href: 'contact' }
      ];
    
      // Smooth scroll function
      const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        setIsMenuOpen(false);
      };
    
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
              <div className="relative rounded-2xl border-1">
                <div className="w-10 h-10  rounded-xl flex items-center justify-center">
                  <Image src = {Logo} 
                    fill
                    alt='Logo'
                    className='w-[100%] object-fit-cover'
                  />
                </div>
              </div>
              <span className="text-xl font-bold text-black">
                Party Ghana
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-200 hover:scale-105 relative ${activeSection === item.href
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
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <span>Book Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="md:hidden">
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
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden py-4 space-y-4 border-t border-slate-200 overflow-hidden"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block text-sm font-medium transition-colors py-2 w-full text-left ${activeSection === item.href ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold"
                >
                  Book Us Now
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
  )
}

export default NavBar