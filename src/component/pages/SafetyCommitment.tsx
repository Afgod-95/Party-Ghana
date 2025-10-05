import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Gift, Package, Truck, Calendar, Shield, Lightbulb, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  faqs: FAQItem[];
}

const SafetyCommitment: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: number | null }>({});
 

  const sections: Section[] = [
    {
      id: 'getting-started',
      icon: Gift,
      title: '1. Getting Started',
      faqs: [
        {
          question: 'What is Party Ghana?',
          answer: "Party Ghana has been all about good vibes, great memories, and making every celebration a total vibe! We spice up everyday moments and remain your ultimate plug for unforgettable parties and awesome gifting.\n\nWe specialize in curating thoughtful, beautifully designed gifting experiences and seamless event solutions for individuals, families, associations, brands, and businesses. Whether you're planning a milestone celebration, a corporate retreat, or looking to elevate client appreciation through meaningful gifts and events, we're here to make it effortless and unforgettable."
        },
        {
          question: 'How do I place an order?',
          answer: "You can place an order by filling out our Book us Now Form or Contacting Us Directly through the website. We'll guide you through product selection, customization, events planning & management and guest management."
        },
        {
          question: 'Can I create an account?',
          answer: "Yes! Creating an account allows you to manage events, track orders, save preferences, and view past activity. Contact us now!"
        }
      ]
    },
    {
      id: 'orders',
      icon: Package,
      title: '2. Orders & Customization',
      faqs: [
        {
          question: 'Can I personalize gifts?',
          answer: "Absolutely. We offer custom branding, messages, and packaging options. Let us know your vision, and we'll make it happen."
        },
        {
          question: 'Do you offer bulk ordering?',
          answer: "Yes, we specialize in bulk and corporate gifting. Reach out for a custom quote or use our Book us now Form."
        },
        {
          question: 'Can I edit or cancel my order?',
          answer: "If your order hasn't entered production, we can usually make changes. Contact us within 24 hours of placing your order for edits or cancellations."
        }
      ]
    },
    {
      id: 'delivery',
      icon: Truck,
      title: '3. Delivery & Shipping',
      faqs: [
        {
          question: 'Where do you deliver?',
          answer: "We ship domestically and internationally (depending on the region). Delivery options and timelines are shown during checkout or on your invoice."
        },
        {
          question: 'How long does delivery take?',
          answer: "Delivery time varies depending on the location and complexity of your order— we'll provide estimated timelines when you order."
        },
        {
          question: 'How can I track my order?',
          answer: "Once your order ships, you'll receive a tracking link by email. You can also log into your account to check order status."
        }
      ]
    },
    {
      id: 'events',
      icon: Calendar,
      title: '4. Events & Guest Management',
      faqs: [
        {
          question: 'Can you handle deliveries to multiple guest addresses?',
          answer: "Yes! We specialize in multi-address fulfillment. You'll be asked to upload a guest list via our secure form or template."
        },
        {
          question: 'Do you offer event-specific packaging?',
          answer: "Yes, we offer packaging tailored to your theme, colors, or brand. Just share your preferences during consultation."
        }
      ]
    },
    {
      id: 'returns',
      icon: Shield,
      title: '5. Returns & Refunds',
      faqs: [
        {
          question: 'What is your return/refund policy?',
          answer: "Due to the customized nature of our products, most items are non-refundable once production begins. However, we'll gladly replace damaged or incorrect items. See our Returns Policy for full details."
        }
      ]
    },
    {
      id: 'account',
      icon: Shield,
      title: '6. Account & Security',
      faqs: [
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page and follow the instructions. You\'ll receive a reset link via email.'
        },
        {
          question: 'Is my information secure?',
          answer: "Yes. We use secure encryption and privacy-first systems to protect your personal and event data. Read more in our Privacy Policy."
        }
      ]
    },
    {
      id: 'inspiration',
      icon: Lightbulb,
      title: '7. Gifting Ideas & Inspiration',
      faqs: [
        {
          question: 'Do you offer gift suggestions?',
          answer: "Yes!"
        },
        {
          question: 'Can you help me design a custom gift box?',
          answer: "Absolutely. Our gift consultants work with you to design the perfect box — from contents to packaging."
        }
      ]
    }
  ];

  const toggleFAQ = (sectionId: string, index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === index ? null : index
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                PartyGhana.Com
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Ghana's First & Most Trusted Gift Management Service
              </p>
            </div>
            <Link href="/"  className="bg-gradient-to-r text-center justify-center from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
                Back to website
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Help Center
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 mb-6 max-w-3xl mx-auto"
          >
            Welcome to the Party Ghana Help Center. Here you'll find answers to common questions about our services, orders, deliveries, account management, and more.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 inline-block"
          >
            <p className="text-gray-800 font-medium mb-2">Need immediate help?</p>
            <a 
              href="mailto:hellopartyghana@gmail.com" 
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors"
            >
              <Mail className="w-5 h-5" />
              hellopartyghana@gmail.com
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Sections */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        {sections.map((section) => (
          <motion.section
            key={section.id}
            variants={itemVariants}
            className="mb-8"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <div className="flex items-center gap-3 text-white">
                  <section.icon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-bold">{section.title}</h3>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                {section.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleFAQ(section.id, index)}
                      className="w-full py-4 flex items-center justify-between text-left hover:text-purple-600 transition-colors group"
                    >
                      <span className="font-semibold text-gray-900 group-hover:text-purple-600 pr-4 text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openSections[section.id] === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openSections[section.id] === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 text-gray-700 whitespace-pre-line text-sm sm:text-base">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}

        {/* Contact Section */}
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Need More Help?</h3>
          <p className="text-purple-100 mb-6 text-sm sm:text-base">
            If you can't find the answer you need, contact our support team:
          </p>
          <a 
            href="mailto:hellopartyghana@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            hellopartyghana@gmail.com
          </a>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PartyGhana.Com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SafetyCommitment;